import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function Sobre() {
  return (
    <>
      <Navigation />

      <main>
        {/* Header */}
        <section className="bg-gradient-to-br from-primary to-secondary text-primary-foreground py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground mb-6 transition-colors"
            >
              <ArrowLeft size={18} />
              Voltar
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold text-balance">Sobre o CESEC</h1>
          </div>
        </section>

        {/* Content */}
        <section className="py-16 md:py-24 bg-background">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-8">
              <div className="bg-card rounded-lg p-8 border border-border">
                <h2 className="text-3xl font-bold mb-4 text-accent">O que é o CESEC?</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  O Centro Estadual de Educação Continuada (CESEC) é uma instituição pública vinculada à Secretaria de
                  Estado de Educação de Minas Gerais, criada para oferecer educação a jovens e adultos que não
                  concluíram o Ensino Fundamental ou o Ensino Médio.
                </p>
              </div>

              <div className="bg-card rounded-lg p-8 border border-border">
                <h2 className="text-3xl font-bold mb-4 text-accent">Nossa Missão</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Promover a inclusão educacional por meio de cursos presenciais e a distância, possibilitando que o
                  aluno estude de forma flexível e obtenha certificação oficial. Cada estudante avança no próprio ritmo,
                  conciliando trabalho, família e estudos.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-accent/10 rounded-lg p-6 border border-accent/30">
                  <h3 className="text-xl font-bold mb-3 text-accent">Autonomia</h3>
                  <p className="text-muted-foreground">
                    Valorizamos a capacidade de cada aluno de progredir conforme seu próprio ritmo e necessidades.
                  </p>
                </div>

                <div className="bg-accent/10 rounded-lg p-6 border border-accent/30">
                  <h3 className="text-xl font-bold mb-3 text-accent">Flexibilidade</h3>
                  <p className="text-muted-foreground">
                    Oferecemos modalidades presenciais e a distância para que você escolha o que funciona melhor.
                  </p>
                </div>

                <div className="bg-accent/10 rounded-lg p-6 border border-accent/30">
                  <h3 className="text-xl font-bold mb-3 text-accent">Inclusão</h3>
                  <p className="text-muted-foreground">
                    Educação de qualidade acessível a todos os jovens e adultos que desejam retomar seus estudos.
                  </p>
                </div>

                <div className="bg-accent/10 rounded-lg p-6 border border-accent/30">
                  <h3 className="text-xl font-bold mb-3 text-accent">Qualidade</h3>
                  <p className="text-muted-foreground">
                    Certificação oficial reconhecida e acompanhamento pedagógico de qualidade em todas as etapas.
                  </p>
                </div>
              </div>

              <div className="bg-card rounded-lg p-8 border border-border">
                <h2 className="text-3xl font-bold mb-4 text-accent">Localização e Contato</h2>
                <div className="space-y-3">
                  <p className="text-lg text-muted-foreground">
                    <span className="font-semibold">Endereço:</span> Av. João Valentim Pascoal, 865 — Centro, Ipatinga/MG (ao lado dos Correios)
                  </p>
                  <p className="text-lg text-muted-foreground">
                    <span className="font-semibold">Telefone:</span> (31) 97572-0133
                  </p>
                  <p className="text-lg text-muted-foreground">
                    <span className="font-semibold">Atendimento:</span> Segunda a Sexta — 13h às 21h
                  </p>
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
