"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { motion } from "framer-motion"
import { useToast } from "@/hooks/use-toast"

const contactSchema = z.object({
  name: z.string().min(2, "El nombre debe tener al menos 2 caracteres"),
  email: z.string().email("Email inválido"),
  message: z.string().min(10, "El mensaje debe tener al menos 10 caracteres"),
  _hp: z.string().optional(),
})

type ContactFormData = z.infer<typeof contactSchema>

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  })

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true)

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })

      const result = await response.json()

      if (response.ok) {
        toast({
          title: "Mensaje enviado",
          description: "Gracias por contactarme. Te responderé pronto.",
        })
        reset()
      } else {
        toast({
          title: "Error",
          description: result.error || "Hubo un problema al enviar el mensaje.",
          variant: "destructive",
        })
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "No se pudo enviar el mensaje. Intenta de nuevo.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <motion.form
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-6"
    >
      <input type="text" {...register("_hp")} className="hidden" tabIndex={-1} />

      <div>
        <label htmlFor="name" className="block text-sm font-medium text-[#e0e6f0] mb-2">
          Nombre
        </label>
        <input
          id="name"
          type="text"
          {...register("name")}
          className="w-full px-4 py-3 bg-[#1a1d29] border border-white/10 rounded-lg text-[#e0e6f0] focus:outline-none focus:ring-2 focus:ring-[#00c3ff] focus:border-transparent"
        />
        {errors.name && <p className="mt-1 text-sm text-red-400">{errors.name.message}</p>}
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-[#e0e6f0] mb-2">
          Email
        </label>
        <input
          id="email"
          type="email"
          {...register("email")}
          className="w-full px-4 py-3 bg-[#1a1d29] border border-white/10 rounded-lg text-[#e0e6f0] focus:outline-none focus:ring-2 focus:ring-[#00c3ff] focus:border-transparent"
        />
        {errors.email && <p className="mt-1 text-sm text-red-400">{errors.email.message}</p>}
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-[#e0e6f0] mb-2">
          Mensaje
        </label>
        <textarea
          id="message"
          rows={5}
          {...register("message")}
          className="w-full px-4 py-3 bg-[#1a1d29] border border-white/10 rounded-lg text-[#e0e6f0] focus:outline-none focus:ring-2 focus:ring-[#00c3ff] focus:border-transparent resize-none"
        />
        {errors.message && <p className="mt-1 text-sm text-red-400">{errors.message.message}</p>}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full px-6 py-3 bg-gradient-to-r from-[#00c3ff] to-[#7b61ff] text-white font-medium rounded-lg hover:scale-105 transition-transform focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00c3ff] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
      >
        {isSubmitting ? "Enviando..." : "Enviar Mensaje"}
      </button>
    </motion.form>
  )
}
