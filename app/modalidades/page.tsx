import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function Modalidades() {
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
            <h1 className="text-4xl md:text-5xl font-bold text-balance">Modalidades de Ensino</h1>
          </div>
        </section>

        {/* Content */}
        <section className="py-16 md:py-24 bg-background">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-8">
              {/* Ensino Fundamental */}
              <div className="bg-card rounded-lg p-8 border border-border">
                <h2 className="text-3xl font-bold mb-4 text-accent">Ensino Fundamental</h2>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  Voltado a jovens e adultos com 15 anos ou mais que ainda não concluíram essa etapa. O curso prepara o
                  aluno para realizar as provas presenciais e obter o certificado correspondente.
                </p>
                <div className="bg-accent/10 rounded-lg p-4 border border-accent/30">
                  <p className="font-semibold text-accent">Idade mínima: 15 anos</p>
                </div>
              </div>

              {/* Ensino Médio */}
              <div className="bg-card rounded-lg p-8 border border-border">
                <h2 className="text-3xl font-bold mb-4 text-accent">Ensino Médio</h2>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  Destinado a pessoas com 18 anos ou mais, possibilitando a conclusão do ensino médio por meio de
                  avaliações independentes e acompanhamento pedagógico.
                </p>
                <div className="bg-accent/10 rounded-lg p-4 border border-accent/30">
                  <p className="font-semibold text-accent">Idade mínima: 18 anos</p>
                </div>
              </div>

              {/* Formas de Estudo */}
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-accent">Formas de Estudo</h2>

                <div className="bg-card rounded-lg p-8 border border-border">
                  <h3 className="text-2xl font-bold mb-4 text-accent">Presencial</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Aulas e orientações ministradas na própria unidade, com acompanhamento direto de professores. Você
                    estuda na instituição com apoio completo e pode interagir diretamente com a equipe pedagógica.
                  </p>
                </div>

                <div className="bg-card rounded-lg p-8 border border-border">
                  <h3 className="text-2xl font-bold mb-4 text-accent">A Distância (EAD)</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    O aluno estuda com material online ou impresso e comparece apenas para realizar as provas
                    presenciais obrigatórias. Essa flexibilidade é o principal diferencial do CESEC, permitindo que cada
                    estudante avance no próprio ritmo, conciliando trabalho, família e estudos.
                  </p>
                </div>
              </div>

              {/* Público-Alvo */}
              <div className="bg-accent/10 rounded-lg p-8 border border-accent/30">
                <h2 className="text-2xl font-bold mb-4 text-accent">Público-Alvo</h2>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  O CESEC é destinado a jovens e adultos que desejam retomar os estudos e obter certificação escolar,
                  seja para:
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li>✓ Inserção no mercado de trabalho</li>
                  <li>✓ Ingresso em cursos técnicos</li>
                  <li>✓ Continuidade na educação superior</li>
                  <li>✓ Desenvolvimento pessoal e profissional</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
