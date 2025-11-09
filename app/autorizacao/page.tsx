"use client"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ExternalLink, ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function Autorizacao() {
  return (
    <>
      <Navigation />

      <main>
        {/* Header */}
        <section className="bg-primary text-primary-foreground py-12 md:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Autorização de Funcionamento</h1>
            <p className="text-lg text-primary-foreground/90">
              Resolução que credencia o CESEC para funcionamento da Banca Permanente de Avaliação.
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="py-16 md:py-24 bg-background">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-accent/10 border border-accent/30 rounded-lg p-8 mb-12 text-center">
              <h2 className="text-2xl font-bold text-accent mb-2">RESOLUÇÃO SEE Nº 1.774</h2>
              <p className="text-foreground font-semibold">DE 22 DE DEZEMBRO DE 2010</p>
              <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="#"
                  className="inline-flex items-center justify-center gap-2 bg-accent text-accent-foreground px-6 py-2 rounded-lg font-semibold hover:opacity-90 transition-opacity"
                >
                  Ver Documento <ExternalLink size={18} />
                </a>
              </div>
            </div>

            <div className="mt-8 flex justify-center">
              <Link
                href="/"
                className="inline-flex items-center gap-2 text-accent hover:text-accent/80 font-semibold transition-colors"
              >
                <ArrowLeft size={20} />
                Voltar para Início
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
