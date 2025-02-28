import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"

const solutions = [
  { title: "Retail", desc: "Bring the offline experience online" },
  { title: "Automotive", desc: "Meet the modern consumers need" },
  { title: "Healthcare", desc: "Make patient care a priority" },
  { title: "Recruitment", desc: "Build your candidate experience" },
  { title: "Real Estate", desc: "Make decision-making easier" },
  { title: "Talk to sales", desc: "Request a custom business" },
]

export default function Solutions() {
  return (
    <section className="bg-primary text-primary-foreground py-24" id="Objetivos">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">
            Overcall is a solution for your
            <br />
            business and goal.
          </h2>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto">
            We have built our core tech stack, but that's only 20%. We do not depend on any third-party solutions, we
            build everything ourselves.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {solutions.map((solution) => (
            <Card
              key={solution.title}
              className="bg-primary-foreground text-primary hover:bg-secondary hover:text-secondary-foreground transition-colors"
            >
              <CardHeader>
                <CardTitle>{solution.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p>{solution.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

