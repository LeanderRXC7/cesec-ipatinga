import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { FileText, CheckCircle, ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function Documentos() {
  return (
    <>
      <Navigation />

      <main>
        {/* Header */}
        <section className="bg-primary text-primary-foreground py-12 md:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Documentos Necessários</h1>
            <p className="text-lg text-primary-foreground/90">
              Para realizar sua inscrição nos exames especiais, compareça pessoalmente com os seguintes documentos:
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="py-16 md:py-24 bg-background">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <CheckCircle className="w-6 h-6 text-accent" />
                Documentos Obrigatórios
              </h2>
              <div className="bg-card rounded-lg border border-border p-8 space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-accent text-accent-foreground flex items-center justify-center text-sm font-bold flex-shrink-0 mt-1">
                    1
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Documento de identidade com foto</h3>
                    <p className="text-muted-foreground text-sm">RG, CNH, Carteira de Trabalho, etc.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-accent text-accent-foreground flex items-center justify-center text-sm font-bold flex-shrink-0 mt-1">
                    2
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">CPF</h3>
                    <p className="text-muted-foreground text-sm">Documento original</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-accent text-accent-foreground flex items-center justify-center text-sm font-bold flex-shrink-0 mt-1">
                    3
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Comprovante de residência</h3>
                    <p className="text-muted-foreground text-sm">Conta de água, luz, telefone ou similar</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-accent text-accent-foreground flex items-center justify-center text-sm font-bold flex-shrink-0 mt-1">
                    4
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Certidão de nascimento ou casamento</h3>
                    <p className="text-muted-foreground text-sm">Documento original</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-accent text-accent-foreground flex items-center justify-center text-sm font-bold flex-shrink-0 mt-1">
                    5
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Histórico escolar</h3>
                    <p className="text-muted-foreground text-sm">Opcional, mas auxilia no aproveitamento de estudos</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <FileText className="w-6 h-6 text-accent" />
                Aproveitamento de Estudos (Exemplos Aceitos)
              </h2>
              <div className="bg-muted rounded-lg border border-border p-8">
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                    <span>ENEM (até 2016)</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                    <span>ENCCEJA</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                    <span>Supletivo</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                    <span>Telecurso</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                    <span>Reprovação no 9º ano ou 3º ano em disciplinas específicas</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                    <span>Conclusão parcial de disciplinas no próprio CESEC</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-6">Observações Importantes</h2>
              <div className="bg-accent/10 border border-accent/30 rounded-lg p-8 space-y-3">
                <p className="flex items-start gap-3">
                  <span className="text-accent font-bold mt-1">•</span>
                  <span>A inscrição deve ser feita pessoalmente</span>
                </p>
                <p className="flex items-start gap-3">
                  <span className="text-accent font-bold mt-1">•</span>
                  <span>Não é possível inscrever-se por telefone ou internet</span>
                </p>
                <p className="flex items-start gap-3">
                  <span className="text-accent font-bold mt-1">•</span>
                  <span>Trazer sempre os documentos originais</span>
                </p>
                <p className="flex items-start gap-3">
                  <span className="text-accent font-bold mt-1">•</span>
                  <span>Horário de atendimento: Segunda a Sexta — 13h às 21h</span>
                </p>
              </div>
            </div>

            <div className="flex justify-center">
              <Link
                href="/"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
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
