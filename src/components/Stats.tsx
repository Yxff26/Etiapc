import { Badge } from "@/components/ui/badge"

export default function Stats() {
  return (
    <section className="py-24 bg-muted">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <Badge className="mb-6 bg-secondary text-secondary-foreground">OUR MISSION</Badge>
          <h2 className="text-3xl font-bold mb-6 text-primary">
            We've successfully delivered hundreds of niche-targeted custom solutions to clients across multiple
            industries.
          </h2>
          <p className="text-primary/80 mb-12">
            Overcall works with the most popular communication platforms like Discord, LiveChat, Mercury, and
            Kubernetes. See how our partner solution will up your game.
          </p>
          <div className="grid grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2 text-secondary">2M+</div>
              <div className="text-sm text-primary/80">Active Users</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2 text-secondary">2,200+</div>
              <div className="text-sm text-primary/80">Delivered Solutions</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2 text-secondary">100+</div>
              <div className="text-sm text-primary/80">Our Members</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

