"use client"

import type React from "react"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { useState } from "react"
import { Phone, MapPin, Clock, ExternalLink } from "lucide-react"

export default function Contato() {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    assunto: "",
    mensagem: "",
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      setFormData({ nome: "", email: "", assunto: "", mensagem: "" })
      setSubmitted(false)
    }, 3000)
  }

  return (
    <>
      <Navigation />

      <main>
        {/* Header */}
        <section className="bg-primary text-primary-foreground py-12 md:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Entre em Contato</h1>
            <p className="text-lg text-primary-foreground/90">
              Estamos prontos para ajudar você a dar o próximo passo na sua educação.
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="py-16 md:py-24 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Contact Info */}
              <div className="lg:col-span-3">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {/* Localização */}
                  <div className="bg-card rounded-lg p-6 border border-border">
                    <div className="flex items-start gap-4">
                      <MapPin className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-bold mb-2">Localização</h3>
                        <p className="text-muted-foreground text-sm">
                          Av. João Valentim Pascoal, 865 — Centro, Ipatinga/MG (ao lado dos Correios)
                        </p>
                        <a
                          href="https://maps.app.goo.gl/Wt4PSoXnj8hxYK1Z8"
                          className="text-accent hover:text-accent/80 font-semibold text-sm flex items-center gap-1"
                        >
                          Ver no mapa <ExternalLink size={14} />
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Telefone/WhatsApp */}
                  <div className="bg-card rounded-lg p-6 border border-border">
                    <div className="flex items-start gap-4">
                      <Phone className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-bold mb-2">Telefone/WhatsApp</h3>
                        <p className="text-muted-foreground text-sm mb-3">(31) 97572-0133</p>
                        <a
                          href="https://wa.me/5531975720133"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-4 py-2 rounded-lg font-semibold text-sm hover:opacity-90 transition-opacity"
                        >
                          Enviar mensagem
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Horário de Atendimento */}
                  <div className="bg-card rounded-lg p-6 border border-border">
                    <div className="flex items-start gap-4">
                      <Clock className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-bold mb-1">Horário de Atendimento</h3>
                        <p className="text-muted-foreground text-sm">Segunda a Sexta — 13h às 21h</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
