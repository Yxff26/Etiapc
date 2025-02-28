import Link from "next/link"
import { Button } from "@/components/ui/button"

const footerLinks = [
  {
    title: "Products",
    links: ["Overview", "Features", "Solutions", "Tutorials"],
  },
  {
    title: "Platform",
    links: ["Developer API", "Partners", "Atom", "Electron"],
  },
  {
    title: "Support",
    links: ["Docs", "Community Forum", "Professional Services", "Skills"],
  },
]

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          <div className="col-span-2">
            <Link href="/" className="text-2xl font-bold mb-6 block">
              ETIAPC
            </Link>
            <p className="text-primary-foreground/80 mb-6">
            Estrategia Tecnologica de Innovacion y Acompañamiento Pedagogico Continuo
            - 2025
            </p>
            <div className="flex gap-4">
              <Button variant="secondary" size="sm">
                Ingresar
              </Button>
            </div>
          </div>
          {footerLinks.map((column) => (
            <div key={column.title}>
              <h3 className="font-semibold mb-4">{column.title}</h3>
              <ul className="space-y-3 text-primary-foreground/80">
                {column.links.map((link) => (
                  <li key={link}>
                    <Link href="#" className="hover:text-secondary transition-colors">
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </footer>
  )
}

