import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function BancaExaminadora() {
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
            <h1 className="text-4xl md:text-5xl font-bold text-balance">Banca Examinadora</h1>
          </div>
        </section>

        {/* Content */}
        <section className="py-16 md:py-24 bg-background">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-8">
              {/* Overview */}
              <div className="bg-card rounded-lg p-8 border border-border">
                <h2 className="text-2xl font-bold mb-4 text-accent">O que é a Banca Examinadora?</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  A banca examinadora é responsável por coordenar e aplicar os exames especiais para avaliação de
                  competências em diferentes áreas do conhecimento. Ela estabelece os cronogramas, desenvolve as provas
                  e coordena todo o processo de avaliação.
                </p>
              </div>

              {/* Como Funciona */}
              <div className="bg-card rounded-lg p-8 border border-border">
                <h2 className="text-2xl font-bold mb-6 text-accent">Como Funciona o Processo de Exames</h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="font-bold text-lg mb-2">Agendamento</h3>
                    <p className="text-muted-foreground">
                      Segunda a quinta-feira, às 13h ou 18h. Você agenda suas provas conforme sua disponibilidade.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-bold text-lg mb-2">Cronograma</h3>
                    <p className="text-muted-foreground">
                      Quatro provas — uma por área — realizadas na mesma semana, de segunda a quinta-feira.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-bold text-lg mb-2">Duração</h3>
                    <p className="text-muted-foreground">Cada prova tem duração de 3 horas.</p>
                  </div>

                  <div>
                    <h3 className="font-bold text-lg mb-2">Aprovação</h3>
                    <p className="text-muted-foreground">A aprovação ocorre com 50% de acertos em cada área.</p>
                  </div>

                  <div>
                    <h3 className="font-bold text-lg mb-2">Resultados</h3>
                    <p className="text-muted-foreground">
                      Resultados divulgados na quinta-feira seguinte. Após aprovação em todas as áreas, você recebe o
                      certificado.
                    </p>
                  </div>
                </div>
              </div>

              {/* Áreas de Conhecimento */}
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-accent">Áreas de Conhecimento Avaliadas</h2>

                <div className="bg-card rounded-lg p-8 border border-border">
                  <h3 className="text-xl font-bold mb-6 text-accent">Ensino Fundamental</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">Linguagens (30 questões)</h4>
                      <p className="text-sm text-muted-foreground">
                        Língua Portuguesa, Inglês, Arte, Educação Física e Redação
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Ciências Humanas (30 questões)</h4>
                      <p className="text-sm text-muted-foreground">História e Geografia</p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Matemática (30 questões)</h4>
                      <p className="text-sm text-muted-foreground">Matemática</p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Ciências da Natureza (30 questões)</h4>
                      <p className="text-sm text-muted-foreground">Ciências</p>
                    </div>
                  </div>
                </div>

                <div className="bg-card rounded-lg p-8 border border-border">
                  <h3 className="text-xl font-bold mb-6 text-accent">Ensino Médio</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">Linguagens e Códigos (44 questões)</h4>
                      <p className="text-sm text-muted-foreground">
                        Português, Literatura, Língua Estrangeira, Artes, Educação Física e Redação
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Matemática e Tecnologias (44 questões)</h4>
                      <p className="text-sm text-muted-foreground">Matemática</p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Ciências Humanas (44 questões)</h4>
                      <p className="text-sm text-muted-foreground">História, Geografia, Filosofia, Sociologia</p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Ciências da Natureza (44 questões)</h4>
                      <p className="text-sm text-muted-foreground">Biologia, Física, Química</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Info Box */}
              <div className="bg-accent/10 rounded-lg p-8 border border-accent/30">
                <h3 className="font-bold text-lg mb-4 text-accent">Informações Importantes</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li>✓ Aprovação com 50% de acertos em cada área</li>
                  <li>✓ Certificação reconhecida após aprovação em todas as áreas</li>
                  <li>✓ Você pode fazer as provas do próprio ritmo</li>
                  <li>✓ Resultados rápidos e transparentes</li>
                </ul>
              </div>

              {/* Program of Study section with links */}
              <div className="bg-card rounded-lg p-8 border border-border">
                <h2 className="text-2xl font-bold mb-4 text-accent">Programa de Estudo</h2>
                <p className="text-muted-foreground mb-8">
                  Os programas das provas seguem orientações metodológicas contidas nos Conteúdos Básicos Comuns (CBC),
                  da Secretaria de Estado de Educação de MG e encontram-se disponíveis nos links abaixo.
                  Disponibilizamos também outros link de materiais de estudo que são encontrados nos sites da Secretaria
                  de Estado de Educação de MG.
                </p>

                <div className="mb-8">
                  <p className="text-center font-bold text-lg mb-6 text-accent">⬇ CLIQUE AQUI ⬇</p>
                  <div className="space-y-3 flex flex-col items-center">
                    <a
                      href="https://seliga.educacao.mg.gov.br/cesec/cesec-ensino-fundamental"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-teal-500 hover:text-teal-600 hover:underline font-semibold"
                    >
                      Plano de Estudo - Ensino Fundamental
                    </a>
                    <a
                      href="https://seliga.educacao.mg.gov.br/cesec/cesec-ensino-m%C3%A9dio"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-teal-500 hover:text-teal-600 hover:underline font-semibold"
                    >
                      Plano de estudos - Ensino Médio
                    </a>
                    <a
                      href="https://www.gov.br/inep/pt-br/areas-de-atuacao/avaliacao-e-exames-educacionais/encceja/outros-documentos"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-teal-500 hover:text-teal-600 hover:underline"
                    >
                      Matrizes de Referência - ENCCEJA
                    </a>
                  </div>
                </div>

                <div>
                  <p className="font-bold text-lg mb-4 text-muted-foreground">Outros links:</p>
                  <div className="space-y-3 flex flex-col">
                    <a
                      href="https://curriculoreferencia.educacao.mg.gov.br/index.php/plano-de-cursos-crmg"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-teal-500 hover:text-teal-600 hover:underline"
                    >
                      Planos de Curso do Currículo Referência de Minas Gerais
                    </a>
                    <a
                      href="https://acervodenoticias.educacao.mg.gov.br/images/documentos/Curr%C3%ADculo%20Refer%C3%AAncia%20do%20Ensino%20M%C3%A9dio.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-teal-500 hover:text-teal-600 hover:underline"
                    >
                      Currículo Referência de Minas Gerais Ens. MÉDIO
                    </a>
                    <a
                      href="https://drive.google.com/file/d/1MWIv4JKcei5_OMhpMFF10ENdhgpsH0FW/view"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-teal-500 hover:text-teal-600 hover:underline"
                    >
                      Currículo Referência de Minas Gerais Ens. FUNDAMENTAL (6º ao 9º ano)
                    </a>
                  </div>
                </div>
              </div>

              <div className="text-center pt-8">
                <Link
                  href="/banca-examinadora/faq"
                  className="inline-flex items-center justify-center gap-2 bg-accent text-accent-foreground px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
                >
                  Perguntas Frequentes
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
