"use client"

import { useState } from "react"
import Link from "next/link"
import { ChevronDown } from "lucide-react"

export default function AreaDoAluno() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)

  const scheduleData = [
    {
      day: "2ª feira",
      disciplines: [
        "SOCIOLOGIA²",
        "APROFUNDAMENTO INTEGRADO²",
        "FÍSICA²",
        "PROJETO DE VIDA",
        "INGLÊS",
        "REDAÇÃO PARA ENEM¹",
        "GEOGRAFIA 18h às 21:30",
      ],
    },
    {
      day: "3ª feira",
      disciplines: [
        "PORTUGUÊS",
        "GEOGRAFIA 18h às 21:30",
        "BIOLOGIA/ CIÊNCIAS",
        "SAÚDE E BEM ESTAR²",
        "MATEMÁTICA",
        "HISTÓRIA",
      ],
    },
    {
      day: "4ª feira",
      disciplines: ["FILOSOFIA²", "QUÍMICA²", "INGLÊS", "REDAÇÃO PARA ENEM²", "ARTE", "HISTÓRIA", "ENSINO RELIGIOSO¹"],
    },
    {
      day: "5ª feira",
      disciplines: ["MATEMÁTICA", "QUÍMICA²", "ARTE", "BIOLOGIA/ CIÊNCIAS", "FILOSOFIA²", "ENSINO RELIGIOSO¹"],
    },
    {
      day: "6ª feira",
      disciplines: [
        "PORTUGUÊS",
        "SOCIOLOGIA²",
        "APROFUNDAMENTO INTEGRADO²",
        "FÍSICA²",
        "PROJETO DE VIDA",
        "ENSINO RELIGIOSO¹",
      ],
    },
  ]

  const guidelines = [
    {
      title: "Carteirinha de Estudante",
      content:
        "Cada aluno deverá confeccionar na secretaria sua carteirinha de estudante. Ela é documento indispensável.",
    },
    {
      title: "Horário de Funcionamento",
      content:
        "TARDE: 13:00 às 16:27 | NOITE: 18:00 às 21:27. Todos os professores atenderão de 2ª a 6ª feira, alternando entre tarde e noite.",
    },
    {
      title: "App Conexão Escola",
      content:
        "O aluno deverá baixar o app Conexão Escola no Play Store e terá acesso ao Google Sala de Aula para acompanhar as aulas e materiais.",
    },
    {
      title: "Sistema SIMADE/CESEC",
      content:
        "No ato da matrícula o aluno será associado a todos os componentes curriculares no sistema SIMADE/SISTEMA CESEC.",
    },
    {
      title: "Cancelamento de Matrícula",
      content:
        "A desassociação de todos os componentes acarretará o cancelamento da matrícula. O estudante poderá requerer nova matrícula a qualquer tempo.",
    },
    {
      title: "Renovação de Matrícula",
      content:
        "A renovação de matrícula será realizada semestralmente na secretaria da unidade CESEC de forma presencial em um novo formulário de matrícula.",
    },
    {
      title: "Prazos e Documentação",
      content:
        "Se o Histórico Escolar não for apresentado na matrícula, o estudante tem 30 dias para entregá-lo. Caso não cumpra, a matrícula será cancelada. Menores de 18 anos devem apresentar documentos pessoais do responsável legal.",
    },
    {
      title: "Avaliações e Autoavaliação",
      content:
        "O estudante deverá obrigatoriamente comparecer ao CESEC para realizar as avaliações finais de cada componente curricular e a autoavaliação ao final de cada componente. Não comparecimento resultará no cancelamento da matrícula.",
    },
  ]

  const enrollmentDocuments = [
    "Cópia da Certidão de Nascimento ou Casamento",
    "Cópia da Carteira de Identidade e CPF",
    "Comprovante de residência",
    "Histórico Escolar original (será retido no CESEC até conclusão do curso)",
    "Documentos do responsável legal (se menor de 18 anos)",
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-primary text-white py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">Área do Aluno</h1>
          <p className="text-lg text-primary-foreground/90">Informações essenciais para estudantes do CESEC</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Horário Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-primary mb-8">Horário de Aulas - Noite (18:00 às 21:27)</h2>
          <div className="bg-white rounded-lg overflow-hidden shadow-lg border border-gray-200">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-primary text-white">
                    <th className="px-4 py-3 text-left font-semibold">2ª feira</th>
                    <th className="px-4 py-3 text-left font-semibold">3ª feira</th>
                    <th className="px-4 py-3 text-left font-semibold">4ª feira</th>
                    <th className="px-4 py-3 text-left font-semibold">5ª feira</th>
                    <th className="px-4 py-3 text-left font-semibold">6ª feira</th>
                  </tr>
                </thead>
                <tbody>
                  {[0, 1, 2, 3, 4, 5, 6].map((rowIndex) => (
                    <tr key={rowIndex} className="border-b border-gray-200 hover:bg-blue-50 transition-colors">
                      {scheduleData.map((dayData, dayIndex) => (
                        <td key={dayIndex} className="px-4 py-3 text-sm text-gray-700">
                          {dayData.disciplines[rowIndex] && (
                            <div
                              className={`py-1 px-2 rounded text-xs font-medium ${
                                dayData.disciplines[rowIndex].includes("²")
                                  ? "bg-yellow-100 text-yellow-900"
                                  : dayData.disciplines[rowIndex].includes("¹")
                                    ? "bg-red-100 text-red-900"
                                    : "bg-blue-100 text-blue-900"
                              }`}
                            >
                              {dayData.disciplines[rowIndex]}
                            </div>
                          )}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="mt-6 bg-gray-50 rounded-lg p-4">
            <p className="font-semibold text-gray-800 mb-3">Legenda:</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-sm">
              <div className="flex items-center gap-2">
                <span className="bg-blue-100 text-blue-900 px-3 py-1 rounded text-xs font-medium">Fundamental</span>
                <span className="text-gray-600">Disciplinas do Ensino Fundamental</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="bg-yellow-100 text-yellow-900 px-3 py-1 rounded text-xs font-medium">²</span>
                <span className="text-gray-600">Apenas Ensino Médio</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="bg-red-100 text-red-900 px-3 py-1 rounded text-xs font-medium">¹</span>
                <span className="text-gray-600">Apenas Fundamental e Médio</span>
              </div>
            </div>
            <p className="text-xs text-gray-600 mt-3">
              Disciplinas destacadas em amarelo: professores em atendimento online
            </p>
          </div>
        </section>

        {/* Guidelines Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-primary mb-8">Orientações para Alunos</h2>
          <div className="space-y-4">
            {guidelines.map((guideline, index) => (
              <div key={index} className="border-l-4 border-primary rounded-lg overflow-hidden shadow">
                <button
                  onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
                  className="w-full bg-primary/10 hover:bg-primary/20 transition-colors p-4 flex items-center justify-between"
                >
                  <h3 className="font-semibold text-primary text-left">{guideline.title}</h3>
                  <ChevronDown
                    size={20}
                    className={`text-primary transition-transform ${expandedIndex === index ? "rotate-180" : ""}`}
                  />
                </button>
                {expandedIndex === index && (
                  <div className="bg-white p-4 border-t border-primary/20">
                    <p className="text-gray-700 leading-relaxed">{guideline.content}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Enrollment Documents Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-primary mb-8">Documentos para Matrícula</h2>
          <div className="bg-blue-50 border-2 border-primary rounded-lg p-8">
            <ul className="space-y-3">
              {enrollmentDocuments.map((doc, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="text-primary font-bold text-lg mt-1">•</span>
                  <span className="text-gray-700">{doc}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Important Information */}
        <section className="mb-16">
          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-lg">
            <h3 className="font-bold text-lg text-gray-800 mb-4">Informações Importantes</h3>
            <ul className="space-y-2 text-gray-700 text-sm">
              <li>✓ Obrigatoriedade de comparecimento para avaliações finais</li>
              <li>✓ Realização de autoavaliação ao final de cada componente</li>
              <li>✓ Não comparecimento resultará no cancelamento da matrícula</li>
              <li>✓ Inatividade de 60 dias pode resultar em desassociação de componentes</li>
              <li>✓ Renovação de matrícula semestral obrigatória</li>
            </ul>
          </div>
        </section>

        {/* Back Button */}
        <div className="flex justify-center mt-12">
          <Link href="/" className="inline-block">
            <button className="bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors">
              Voltar ao Início
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}
