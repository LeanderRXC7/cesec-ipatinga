"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { useState } from "react"
import { ChevronDown } from "lucide-react"
import Link from "next/link"

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs = [
    {
      question: "Qual é a finalidade da Banca Permanente de Avaliação?",
      answer:
        "A Banca Permanente de Avaliação oferece exames especiais para jovens e adultos que desejam concluir o Ensino Fundamental ou Médio. É uma oportunidade de certificação reconhecida para quem não completou essas etapas da Educação Básica.",
    },
    {
      question: "Quem pode fazer os exames?",
      answer:
        "Podem participar jovens e adultos que desejam concluir o Ensino Fundamental (idade mínima: 15 anos) ou Médio (idade mínima: 18 anos). Consulte o edital para requisitos específicos de documentação.",
    },
    {
      question: "Qual é o período de inscrições?",
      answer:
        "As inscrições estão abertas o ano todo. Você pode se inscrever a qualquer momento, conforme sua disponibilidade. Recomendamos comparecer pessoalmente durante o horário de atendimento: Segunda a Sexta — 13h às 21h.",
    },
    {
      question: "Posso me inscrever por telefone ou internet?",
      answer:
        "Não. A inscrição deve ser feita pessoalmente no local de funcionamento do CESEC. Você deve comparecer com RG, CPF e comprovante de endereço.",
    },
    {
      question: "Onde funciona o CESEC?",
      answer:
        "O CESEC funciona na Av. João Valentim Pascoal, 865 — Centro, Ipatinga/MG (ao lado dos Correios). Horário de atendimento: Segunda a Sexta — 13h às 21h.",
    },
    {
      question: "Quantas provas preciso fazer?",
      answer:
        "São quatro provas — uma por área de conhecimento. Para o Ensino Fundamental: Linguagens, Ciências Humanas, Matemática e Ciências da Natureza. Para o Ensino Médio: Linguagens e Códigos, Matemática e Tecnologias, Ciências Humanas e Ciências da Natureza.",
    },
    {
      question: "Quais materiais de estudo estão disponíveis?",
      answer:
        "Disponibilizamos Planos de Estudo, Matrizes de Referência ENCCEJA, Currículos de Referência de Minas Gerais e acesso a plataformas como Se Liga Educação. Todos os materiais estão na seção 'Programa de Estudo'.",
    },
    {
      question: "Quais são os dias e horários das provas?",
      answer:
        "As provas são realizadas de segunda a quinta-feira, nos horários de 13h ou 18h. As quatro provas são realizadas na mesma semana. Você escolhe o horário que melhor se adequa à sua disponibilidade.",
    },
    {
      question: "Quanto tempo dura cada prova?",
      answer:
        "Cada prova tem duração de 3 horas. Você terá esse tempo para responder todas as questões da área avaliada.",
    },
    {
      question: "Qual é o formato das provas e quantas questões tem?",
      answer:
        "As provas são em formato de múltipla escolha. Para o Ensino Fundamental: 30 questões por área. Para o Ensino Médio: 44 questões por área.",
    },
    {
      question: "Qual é a nota mínima para aprovação?",
      answer:
        "A aprovação ocorre com 50% de acertos em cada área. Você precisa atingir essa porcentagem em todas as quatro áreas para obter a certificação.",
    },
    {
      question: "Quando são divulgados os resultados?",
      answer:
        "Os resultados são divulgados na quinta-feira seguinte à realização das provas. Após aprovação em todas as áreas, você receberá o certificado de conclusão.",
    },
    {
      question: "Posso aproveitar notas do ENEM ou ENCCEJA?",
      answer:
        "Sim. É aceito aproveitamento parcial de ENEM (até 2016), ENCCEJA, Supletivo, Telecurso e outras avaliações. Consulte-nos para verificar se suas notas podem ser aproveitadas.",
    },
    {
      question: "Quais são os procedimentos gerais para participar?",
      answer:
        "1. Compareça pessoalmente com RG, CPF e comprovante de endereço para se inscrever. 2. Agende suas provas (segunda a quinta, 13h ou 18h). 3. Realize os exames (3 horas cada). 4. Receba seu certificado após aprovação em todas as áreas.",
    },
  ]

  return (
    <>
      <Navigation />

      <main>
        {/* Header */}
        <section className="bg-primary text-primary-foreground py-12 md:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Perguntas Frequentes</h1>
            <p className="text-lg text-primary-foreground/90">Tire suas dúvidas sobre o processo de certificação.</p>
          </div>
        </section>

        {/* FAQ Content */}
        <section className="py-16 md:py-24 bg-background">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-card rounded-lg border border-border overflow-hidden">
                  <button
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                    className="w-full px-6 py-4 flex items-center justify-between hover:bg-muted transition-colors text-left"
                  >
                    <h3 className="font-semibold text-foreground">{faq.question}</h3>
                    <ChevronDown
                      size={20}
                      className={`text-accent flex-shrink-0 transition-transform ${
                        openIndex === index ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {openIndex === index && (
                    <div className="px-6 py-4 bg-muted border-t border-border">
                      <p className="text-foreground text-sm leading-relaxed">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Contact CTA */}
            <div className="mt-12 bg-accent/10 rounded-lg p-8 text-center border border-accent/20">
              <h3 className="text-xl font-bold mb-2">Não encontrou sua resposta?</h3>
              <p className="text-muted-foreground mb-4">Entre em contato conosco para dúvidas específicas</p>
              <Link
                href="/contato"
                className="inline-flex items-center justify-center gap-2 bg-accent text-accent-foreground px-6 py-2 rounded-lg font-semibold hover:opacity-90 transition-opacity"
              >
                Entre em Contato
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
