import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

const testimonials = [
  {
    name: "Mark Brown",
    role: "Digital Marketing at Zendesk",
    content:
      '"We have been using SnapCall for a little while and it works wonders. We use SnapCall with Zendesk and the integration is seamless."',
  },
  {
    name: "Sarah Johnson",
    role: "Product Manager at TechCorp",
    content:
      '"A really useful extension to connect with your customers from your website. We add it and we\'re enjoying it every day, talking with our leads."',
  },
]

export default function Testimonials() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-16 text-primary">
          Don't take our words
          <br />
          for it listen to our customers.
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-6 bg-muted">
              <CardContent className="space-y-4">
                <p className="text-lg text-primary">{testimonial.content}</p>
                <div className="flex items-center gap-4">
                  <Image
                    src="/placeholder.svg"
                    alt={testimonial.name}
                    width={48}
                    height={48}
                    className="rounded-full"
                  />
                  <div>
                    <div className="font-semibold text-primary">{testimonial.name}</div>
                    <div className="text-sm text-primary/80">{testimonial.role}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

