import Link from "next/link"
import { Phone, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="font-bold text-lg mb-4">CESEC</h3>
            <p className="text-sm text-primary-foreground/80">
              Centro Estadual de Educação Continuada - Educação para Jovens e Adultos
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4">Sobre</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/sobre" className="hover:text-accent transition-colors">
                  Sobre o CESEC
                </Link>
              </li>
              <li>
                <Link href="/modalidades" className="hover:text-accent transition-colors">
                  Modalidades
                </Link>
              </li>
              <li>
                <Link href="/inscricao" className="hover:text-accent transition-colors">
                  Como se Inscrever
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-bold mb-4">Recursos</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/area-do-aluno" className="hover:text-accent transition-colors">
                  Área do Aluno
                </Link>
              </li>
              <li>
                <Link href="/banca-examinadora" className="hover:text-accent transition-colors">
                  Banca Examinadora
                </Link>
              </li>
              <li>
                <Link href="/contato" className="hover:text-accent transition-colors">
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold mb-4">Contato</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <Phone size={16} />
                <span>(31) 97572-0133</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={16} className="mt-1" />
                <span>Av. João Valentim Pascoal, 865 — Centro, Ipatinga/MG (ao lado dos Correios)</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 text-center text-sm text-primary-foreground/70">
          <p>
            &copy; 2025 CESEC. Todos os direitos reservados. Vinculado à Secretaria de Estado de Educação de Minas
            Gerais.
          </p>
        </div>
      </div>
    </footer>
  )
}
