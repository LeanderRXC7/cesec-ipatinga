import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { ArrowLeft, CheckCircle } from "lucide-react"

export default function Inscricao() {
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
            <h1 className="text-4xl md:text-5xl font-bold text-balance">Processo de Inscrição</h1>
          </div>
        </section>

        {/* Content */}
        <section className="py-16 md:py-24 bg-background">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-8">
              {/* Overview */}
              <div className="bg-card rounded-lg p-8 border border-border">
                <h2 className="text-2xl font-bold mb-4 text-accent">Como Funciona</h2>
                <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
                  As inscrições são gratuitas e feitas presencialmente na secretaria do CESEC. O processo é simples e
                  ocorre durante o horário de atendimento (segunda a sexta, das 8h às 17h).
                </p>
              </div>

              {/* Documentos Necessários */}
              <div className="bg-card rounded-lg p-8 border border-border">
                <h2 className="text-2xl font-bold mb-6 text-accent">Documentos Necessários</h2>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  Para se inscrever, o candidato deve apresentar os seguintes documentos:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                    <span className="text-muted-foreground">
                      Documento de identidade oficial com foto (RG ou equivalente)
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                    <span className="text-muted-foreground">CPF</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                    <span className="text-muted-foreground">Comprovante de endereço atualizado</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                    <span className="text-muted-foreground">Histórico escolar (se possuir)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                    <span className="text-muted-foreground">Certidão de nascimento ou casamento</span>
                  </li>
                </ul>
              </div>

              {/* Etapas */}
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-accent">Etapas da Inscrição</h2>

                {[
                  {
                    step: "1",
                    title: "Preenchimento da Ficha",
                    description: "Preencha a ficha de inscrição com seus dados pessoais e educacionais.",
                  },
                  {
                    step: "2",
                    title: "Apresentação de Documentos",
                    description: "Apresente os documentos originais listados acima para validação.",
                  },
                  {
                    step: "3",
                    title: "Agendamento",
                    description: "Agende suas avaliações conforme o ritmo que você desejar.",
                  },
                ].map((item) => (
                  <div key={item.step} className="bg-card rounded-lg p-6 border border-border flex gap-4">
                    <div className="w-10 h-10 bg-accent text-accent-foreground rounded-full flex items-center justify-center font-bold flex-shrink-0">
                      {item.step}
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                      <p className="text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Info Box */}
              <div className="bg-accent/10 rounded-lg p-8 border border-accent/30">
                <h3 className="font-bold text-lg mb-4 text-accent">Informações Importantes</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li>✓ As inscrições são gratuitas</li>
                  <li>✓ Você pode se inscrever o ano todo</li>
                  <li>✓ O processo é rápido e simples</li>
                  <li>✓ Você escolhe quando fazer suas avaliações</li>
                </ul>
              </div>

              {/* CTA */}
              <div className="bg-primary text-primary-foreground rounded-lg p-8 text-center">
                <h3 className="text-xl font-bold mb-4">Pronto para se inscrever?</h3>
                <p className="mb-6">Visite-nos pessoalmente ou entre em contato:</p>
                <Link
                  href="/contato"
                  className="inline-flex items-center justify-center gap-2 bg-accent text-accent-foreground px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
                >
                  Fale Conosco
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
