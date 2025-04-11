"use client"
import { useEffect, useRef } from "react"
import { CreditCard, Home, Wallet, Landmark, PiggyBank, Shield, ArrowRight } from "lucide-react"
import FeatureCard from "./FeatureCard"

const services = [
  {
    icon: <CreditCard className="w-6 h-6" />,
    title: "Credit Cards",
    description: "Low rates and no annual fees on our credit cards designed for your lifestyle.",
    delay: "delay-100",
    color: "blue",
  },
  {
    icon: <Home className="w-6 h-6" />,
    title: "Mortgages",
    description: "Competitive rates and flexible terms to help you achieve your dream of homeownership.",
    delay: "delay-200",
    color: "purple",
  },
  {
    icon: <Wallet className="w-6 h-6" />,
    title: "Personal Loans",
    description: "Quick approval and competitive rates for your personal financing needs.",
    delay: "delay-300",
    color: "green",
  },
  {
    icon: <Landmark className="w-6 h-6" />,
    title: "Business Banking",
    description: "Tailored financial solutions to help your business grow and succeed.",
    delay: "delay-100",
    color: "orange",
  },
  {
    icon: <PiggyBank className="w-6 h-6" />,
    title: "Savings Accounts",
    description: "High-yield savings accounts to help you achieve your financial goals.",
    delay: "delay-200",
    color: "teal",
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Insurance",
    description: "Protect what matters most with our comprehensive insurance solutions.",
    delay: "delay-300",
    color: "red",
  },
]

const Services = () => {
  const sectionRef = useRef<HTMLDivElement>(null)
  const cardsRef = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100")
            entry.target.classList.remove("opacity-0", "translate-y-10")
          }
        })
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card)
    })

    return () => {
      observer.disconnect()
    }
  }, [])

  return (
    <section id="services" ref={sectionRef} className="section-padding relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 dot-pattern opacity-50"></div>

      <div className="container relative">
        <div
          className="text-center mb-16 opacity-0 translate-y-10 transition-all duration-700"
          ref={(el) => (cardsRef.current[0] = el)}
        >
          <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Our Services
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Financial Solutions for Every Need</h2>
          <p className="max-w-2xl mx-auto text-gray-600">
            We offer a comprehensive range of financial products and services designed to help you achieve your goals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="opacity-0 translate-y-10 transition-all duration-700"
              ref={(el) => (cardsRef.current[index + 1] = el)}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <FeatureCard
                icon={service.icon}
                title={service.title}
                description={service.description}
                animationDelay={service.delay}
                color={service.color}
              />
            </div>
          ))}
        </div>

        <div
          className="mt-16 text-center opacity-0 translate-y-10 transition-all duration-700"
          ref={(el) => (cardsRef.current[services.length + 1] = el)}
          style={{ transitionDelay: `${services.length * 100 + 100}ms` }}
        >
          <a href="#" className="btn btn-primary btn-lg inline-flex items-center gap-2 shadow-button">
            View All Services
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  )
}

export default Services
