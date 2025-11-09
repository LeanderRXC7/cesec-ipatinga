import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { ArrowRight, BookOpen, Users, Clock, MapPin } from "lucide-react"

export default function Home() {
  return (
    <>
      <Navigation />

      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary to-secondary text-primary-foreground py-20 md:py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <div className="inline-block bg-primary-foreground/20 text-primary-foreground px-4 py-2 rounded-full text-sm font-semibold mb-6">
                Educação Continuada para Jovens e Adultos
              </div>

              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
                Transforme sua vida através da educação
              </h1>

              <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 text-balance">
                O CESEC oferece educação continuada com modalidades presenciais e a distância. Conclua o Ensino
                Fundamental ou Médio com flexibilidade e qualidade.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link
                  href="/inscricao"
                  className="inline-flex items-center justify-center gap-2 bg-accent text-accent-foreground px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
                >
                  Comece Agora
                  <ArrowRight size={20} />
                </Link>
                <Link
                  href="/sobre"
                  className="inline-flex items-center justify-center gap-2 bg-primary-foreground text-primary px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
                >
                  Saiba Mais Sobre Nós
                </Link>
              </div>

              <div className="flex flex-wrap gap-3">
                <div className="bg-primary-foreground/20 text-primary-foreground px-4 py-2 rounded-full text-sm font-medium">
                  ✓ Presencial e a distância
                </div>
                <div className="bg-primary-foreground/20 text-primary-foreground px-4 py-2 rounded-full text-sm font-medium">
                  ✓ Certificação oficial
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Info */}
        <section className="py-12 md:py-16 bg-muted">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-card rounded-lg p-6 border border-border">
                <div className="flex items-start gap-3 mb-3">
                  <Clock className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-sm mb-1">Horário de Atendimento</h3>
                    <p className="text-sm text-muted-foreground">Segunda a Sexta — 13h às 21h</p>
                  </div>
                </div>
              </div>

              <div className="bg-card rounded-lg p-6 border border-border">
                <div className="flex items-start gap-3 mb-3">
                  <MapPin className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-sm mb-1">Localização</h3>
                    <p className="text-sm text-muted-foreground">
                      Av. João Valentim Pascoal, 865 — Centro, Ipatinga/MG (ao lado dos Correios)
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-card rounded-lg p-6 border border-border">
                <div className="flex items-start gap-3 mb-3">
                  <Users className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-sm mb-1">Contato</h3>
                    <p className="text-sm text-muted-foreground">(31) 97572-0133</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-16 md:py-24 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-balance">Sobre o CESEC</h2>

            <div className="bg-card rounded-lg p-8 border border-border mb-12">
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                O Centro Estadual de Educação Continuada (CESEC) é uma instituição pública vinculada à Secretaria de
                Estado de Educação de Minas Gerais, criada para oferecer educação a jovens e adultos que não concluíram
                o Ensino Fundamental ou o Ensino Médio.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Seu principal objetivo é promover a inclusão educacional por meio de cursos presenciais e a distância,
                possibilitando que o aluno estude de forma flexível e obtenha certificação oficial.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-accent/10 rounded-lg p-6 border border-accent/30">
                <h3 className="text-xl font-bold mb-4 text-accent">Nossa Missão</h3>
                <p className="text-muted-foreground">
                  Promover a inclusão educacional de jovens e adultos, oferecendo oportunidades de aprendizado flexível
                  que permita a conclusão da Educação Básica com qualidade e certificação oficial.
                </p>
              </div>

              <div className="bg-accent/10 rounded-lg p-6 border border-accent/30">
                <h3 className="text-xl font-bold mb-4 text-accent">Nossos Valores</h3>
                <p className="text-muted-foreground">
                  Autonomia, flexibilidade e valorização da trajetória de cada estudante. Acreditamos na educação como
                  ferramenta de transformação social e oportunidade.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Modalities Section */}
        <section className="py-16 md:py-24 bg-muted">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-balance">Modalidades de Ensino</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="bg-card rounded-lg p-8 border border-border">
                <h3 className="text-2xl font-bold mb-6 text-accent">Ensino Fundamental</h3>
                <p className="text-muted-foreground mb-4">
                  Voltado a jovens e adultos com 15 anos ou mais que ainda não concluíram essa etapa. O curso prepara o
                  aluno para obter o certificado correspondente.
                </p>
                <div className="bg-accent/10 rounded-lg p-4 border border-accent/30">
                  <p className="text-sm font-semibold text-accent">Idade mínima: 15 anos</p>
                </div>
              </div>

              <div className="bg-card rounded-lg p-8 border border-border">
                <h3 className="text-2xl font-bold mb-6 text-accent">Ensino Médio</h3>
                <p className="text-muted-foreground mb-4">
                  Destinado a pessoas com 18 anos ou mais, possibilitando a conclusão do ensino médio por meio de
                  avaliações e acompanhamento pedagógico.
                </p>
                <div className="bg-accent/10 rounded-lg p-4 border border-accent/30">
                  <p className="text-sm font-semibold text-accent">Idade mínima: 18 anos</p>
                </div>
              </div>
            </div>

            <div className="bg-background rounded-lg p-8 border border-border">
              <h3 className="text-xl font-bold mb-6">Formas de Estudo</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-bold text-lg mb-3 text-accent">Presencial</h4>
                  <p className="text-muted-foreground">
                    Aulas e orientações ministradas na própria unidade, com acompanhamento direto de professores. Você
                    estuda na instituição com apoio completo.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-3 text-accent">A Distância (EAD)</h4>
                  <p className="text-muted-foreground">
                    Estude com material online ou impresso e compareça apenas para realizar as provas presenciais
                    obrigatórias. Flexibilidade total!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Links */}
        <section className="py-16 md:py-24 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-balance">Próximos Passos</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Link
                href="/inscricao"
                className="bg-card rounded-lg p-6 border border-border hover:shadow-lg hover:border-accent transition-all group"
              >
                <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-accent/30 transition-colors">
                  <BookOpen className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-bold text-lg mb-2">Como se Inscrever</h3>
                <p className="text-sm text-muted-foreground">
                  Conheça o processo simples de inscrição e documentos necessários.
                </p>
              </Link>

              <Link
                href="/modalidades"
                className="bg-card rounded-lg p-6 border border-border hover:shadow-lg hover:border-accent transition-all group"
              >
                <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-accent/30 transition-colors">
                  <Users className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-bold text-lg mb-2">Modalidades</h3>
                <p className="text-sm text-muted-foreground">
                  Explore as opções de ensino e estude da forma que melhor se adapte a você.
                </p>
              </Link>

              <Link
                href="/banca-examinadora"
                className="bg-card rounded-lg p-6 border border-border hover:shadow-lg hover:border-accent transition-all group"
              >
                <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-accent/30 transition-colors">
                  <Clock className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-bold text-lg mb-2">Banca Examinadora</h3>
                <p className="text-sm text-muted-foreground">
                  Informações sobre horários, cronogramas e como os exames funcionam.
                </p>
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-primary text-primary-foreground">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">Pronto para dar o próximo passo?</h2>
            <p className="text-lg text-primary-foreground/90 mb-8 text-balance">
              Entre em contato conosco e comece sua jornada educacional hoje mesmo.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/inscricao"
                className="inline-flex items-center justify-center gap-2 bg-accent text-accent-foreground px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
              >
                Fazer Inscrição
              </Link>
              <Link
                href="/contato"
                className="inline-flex items-center justify-center gap-2 bg-primary-foreground text-primary px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
              >
                Fale Conosco
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
