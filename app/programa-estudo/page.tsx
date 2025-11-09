import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { BookOpen, ExternalLink } from "lucide-react"

export default function ProgramaEstudo() {
  return (
    <>
      <Navigation />

      <main>
        {/* Header */}
        <section className="bg-primary text-primary-foreground py-12 md:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Programa de Estudo</h1>
            <p className="text-lg text-primary-foreground/90">
              Acesse os materiais de estudo e conheça as áreas de conhecimento avaliadas
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="py-16 md:py-24 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <BookOpen className="w-6 h-6 text-accent" />
                Materiais Disponíveis
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <a
                  href="#"
                  className="bg-card rounded-lg border border-border p-6 hover:shadow-lg transition-shadow group"
                >
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="font-semibold text-foreground group-hover:text-accent transition-colors">
                      Plano de Estudo – Ensino Fundamental
                    </h3>
                    <ExternalLink className="w-5 h-5 text-accent flex-shrink-0" />
                  </div>
                  <p className="text-sm text-muted-foreground">Conteúdos e orientações do 6º ao 9º ano</p>
                </a>

                <a
                  href="#"
                  className="bg-card rounded-lg border border-border p-6 hover:shadow-lg transition-shadow group"
                >
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="font-semibold text-foreground group-hover:text-accent transition-colors">
                      Plano de Estudo – Ensino Médio
                    </h3>
                    <ExternalLink className="w-5 h-5 text-accent flex-shrink-0" />
                  </div>
                  <p className="text-sm text-muted-foreground">Conteúdos e orientações do Ensino Médio</p>
                </a>

                <a
                  href="#"
                  className="bg-card rounded-lg border border-border p-6 hover:shadow-lg transition-shadow group"
                >
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="font-semibold text-foreground group-hover:text-accent transition-colors">
                      Matrizes de Referência – ENCCEJA
                    </h3>
                    <ExternalLink className="w-5 h-5 text-accent flex-shrink-0" />
                  </div>
                  <p className="text-sm text-muted-foreground">Referência oficial para as avaliações</p>
                </a>

                <a
                  href="#"
                  className="bg-card rounded-lg border border-border p-6 hover:shadow-lg transition-shadow group"
                >
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="font-semibold text-foreground group-hover:text-accent transition-colors">
                      Currículo Referência de Minas Gerais – Fundamental
                    </h3>
                    <ExternalLink className="w-5 h-5 text-accent flex-shrink-0" />
                  </div>
                  <p className="text-sm text-muted-foreground">Currículo oficial do estado</p>
                </a>

                <a
                  href="#"
                  className="bg-card rounded-lg border border-border p-6 hover:shadow-lg transition-shadow group"
                >
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="font-semibold text-foreground group-hover:text-accent transition-colors">
                      Currículo Referência de Minas Gerais – Médio
                    </h3>
                    <ExternalLink className="w-5 h-5 text-accent flex-shrink-0" />
                  </div>
                  <p className="text-sm text-muted-foreground">Currículo oficial do estado</p>
                </a>

                <a
                  href="#"
                  className="bg-card rounded-lg border border-border p-6 hover:shadow-lg transition-shadow group"
                >
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="font-semibold text-foreground group-hover:text-accent transition-colors">
                      Se Liga Educação – Pré-ENEM
                    </h3>
                    <ExternalLink className="w-5 h-5 text-accent flex-shrink-0" />
                  </div>
                  <p className="text-sm text-muted-foreground">Preparação para o ENEM</p>
                </a>
              </div>
              <p className="text-sm text-muted-foreground mt-6 italic">
                Todos os links direcionam para materiais oficiais da SEE/MG e parceiros educacionais.
              </p>
            </div>

            {/* Knowledge Areas */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Áreas de Conhecimento</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="bg-card rounded-lg p-8 border border-border">
                  <h3 className="text-xl font-bold mb-6 text-accent">Ensino Fundamental</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">Linguagens</h4>
                      <p className="text-sm text-muted-foreground">
                        Língua Portuguesa, Inglês, Arte, Educação Física e Redação — 30 questões
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Ciências Humanas</h4>
                      <p className="text-sm text-muted-foreground">História e Geografia — 30 questões</p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Matemática</h4>
                      <p className="text-sm text-muted-foreground">Matemática — 30 questões</p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Ciências da Natureza</h4>
                      <p className="text-sm text-muted-foreground">Ciências — 30 questões</p>
                    </div>
                  </div>
                </div>

                <div className="bg-card rounded-lg p-8 border border-border">
                  <h3 className="text-xl font-bold mb-6 text-accent">Ensino Médio</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">Linguagens e Códigos</h4>
                      <p className="text-sm text-muted-foreground">
                        Português, Literatura, Língua Estrangeira, Artes, Educação Física e Redação — 44 questões
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Matemática e Tecnologias</h4>
                      <p className="text-sm text-muted-foreground">Matemática — 44 questões</p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Ciências Humanas</h4>
                      <p className="text-sm text-muted-foreground">
                        História, Geografia, Filosofia, Sociologia — 44 questões
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Ciências da Natureza</h4>
                      <p className="text-sm text-muted-foreground">Biologia, Física, Química — 44 questões</p>
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
