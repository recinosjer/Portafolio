import { NextResponse } from "next/server";
import { z } from "zod";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const schema = z.object({
  nombre: z.string().min(2, "El nombre debe tener al menos 2 caracteres"),
  email: z.string().email("Email inválido"),
  mensaje: z.string().min(10, "El mensaje debe tener al menos 10 caracteres"),
  _hp: z.string().optional(),
});

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const dataToValidate = {
      nombre: body.nombre ?? body.name ?? "",
      email: body.email ?? "",
      mensaje: body.mensaje ?? body.message ?? "",
      _hp: body._hp ?? "",
    };

    // honeypot
    if (dataToValidate._hp) {
      return NextResponse.json({ error: "Invalid submission" }, { status: 400 });
    }

    const data = schema.parse(dataToValidate);

    // LOGS ÚTILES
    console.log("RESEND_API_KEY?", !!process.env.RESEND_API_KEY);
    console.log("FROM:", process.env.CONTACT_FROM);
    console.log("TO:", process.env.CONTACT_TO);

    // Enviar con Resend (manejar {data, error})
    const result = await resend.emails.send({
  from: `Portafolio José <${process.env.CONTACT_FROM!}>`, // sigue siendo onboarding@resend.dev
  to: [process.env.CONTACT_TO!],
  subject: `Nuevo mensaje de ${data.nombre}`,
  reply_to: data.email,
  text: `Nombre: ${data.nombre}\nEmail: ${data.email}\n\nMensaje:\n${data.mensaje}`,
  html: `
    <div style="font-family:system-ui,Segoe UI,Arial,sans-serif;line-height:1.6">
      <h2>Nuevo mensaje</h2>
      <p><strong>Nombre:</strong> ${data.nombre}<br/>
         <strong>Email:</strong> ${data.email}</p>
      <p>${data.mensaje.replace(/\n/g, "<br/>")}</p>
    </div>
  `,
});

    console.log("Resend send result:", result);

    if (result.error) {
      // Log detallado y status 502 (bad gateway hacia proveedor email)
      console.error("Resend error:", result.error);
      return NextResponse.json(
        { error: "No se pudo enviar el correo", details: result.error },
        { status: 502 }
      );
    }

    return NextResponse.json(
      { message: "Mensaje enviado correctamente 🎉", id: result.data?.id },
      { status: 200 }
    );
  } catch (err) {
    if (err instanceof z.ZodError) {
      return NextResponse.json({ error: "Validation error", issues: err.issues }, { status: 400 });
    }
    console.error("❌ Error al enviar mensaje (catch):", err);
    return NextResponse.json({ error: "Error al enviar mensaje" }, { status: 500 });
  }
}
