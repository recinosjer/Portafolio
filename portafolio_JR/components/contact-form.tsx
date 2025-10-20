"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"
import { copy } from "@/data/copy"
import { Loader2, Send } from "lucide-react"

const formSchema = z.object({
  nombre: z.string().min(2, "El nombre debe tener al menos 2 caracteres"),
  email: z.string().email("Email inválido"),
  mensaje: z.string().min(10, "El mensaje debe tener al menos 10 caracteres"),
  _hp: z.string().optional(),
})

type FormData = z.infer<typeof formSchema>

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      _hp: "",
    },
  })

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true)

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })

      if (response.ok) {
        toast({
          title: "¡Éxito!",
          description: copy.contact.form.successMessage,
        })
        reset()
      } else {
        throw new Error("Error al enviar")
      }
    } catch (error) {
      toast({
        title: "Error",
        description: copy.contact.form.errorMessage,
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <input type="text" {...register("_hp")} className="hidden" tabIndex={-1} autoComplete="off" />

      <div>
        <Input
          {...register("nombre")}
          placeholder={copy.contact.form.namePlaceholder}
          className="bg-[#1a1d29] border-[#2a2d3a] text-[#e0e6f0] placeholder:text-[#9ca3af] focus:border-[#00c3ff] h-12"
        />
        {errors.nombre && <p className="text-sm text-red-400 mt-1">{errors.nombre.message}</p>}
      </div>

      <div>
        <Input
          {...register("email")}
          type="email"
          placeholder={copy.contact.form.emailPlaceholder}
          className="bg-[#1a1d29] border-[#2a2d3a] text-[#e0e6f0] placeholder:text-[#9ca3af] focus:border-[#00c3ff] h-12"
        />
        {errors.email && <p className="text-sm text-red-400 mt-1">{errors.email.message}</p>}
      </div>

      <div>
        <Textarea
          {...register("mensaje")}
          placeholder={copy.contact.form.messagePlaceholder}
          rows={6}
          className="bg-[#1a1d29] border-[#2a2d3a] text-[#e0e6f0] placeholder:text-[#9ca3af] focus:border-[#00c3ff] resize-none"
        />
        {errors.mensaje && <p className="text-sm text-red-400 mt-1">{errors.mensaje.message}</p>}
      </div>

      <Button
        type="submit"
        size="lg"
        disabled={isSubmitting}
        className="w-full bg-gradient-to-r from-[#00c3ff] to-[#7b61ff] hover:opacity-90 text-white font-semibold h-12 rounded-lg transition-all hover:scale-105"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="w-5 h-5 mr-2 animate-spin" />
            Enviando...
          </>
        ) : (
          <>
            <Send className="w-5 h-5 mr-2" />
            {copy.contact.form.submitButton}
          </>
        )}
      </Button>
    </form>
  )
}
