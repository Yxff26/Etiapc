import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <section className="bg-muted py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid gap-12 md:grid-cols-2 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight text-primary">
              Supercharges every
              <br />
              part of your business.
            </h1>
            <p className="text-lg text-primary/80">
              Meet Overcall, the easiest way to add real-time audio & video to your platform, product or service.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" variant="secondary">
                Get free trial
              </Button>
              <Button size="lg" variant="outline">
                Learn more
              </Button>
            </div>
            <div className="flex gap-6 pt-8">
              {["Capchase", "teamwork", "dropable"].map((partner) => (
                <div key={partner} className="grayscale opacity-70">
                  <Image src="/placeholder.svg" alt={partner} width={100} height={30} className="h-6 w-auto" />
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="bg-gradient-to-r from-secondary/10 to-primary/10 rounded-2xl p-6">
              <Image
                src=""
                alt="Product Features"
                width={600}
                height={400}
                className="rounded-lg w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

