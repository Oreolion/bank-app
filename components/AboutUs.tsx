"use client"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useRef } from "react"
import { CheckCircle, Users, Award, MapPin } from "lucide-react"

const AboutUs = () => {
  const sectionRef = useRef<HTMLDivElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const statsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100")
            entry.target.classList.remove("opacity-0")

            if (entry.target === imageRef.current) {
              entry.target.classList.remove("translate-x-[-50px]")
            }

            if (entry.target === contentRef.current) {
              entry.target.classList.remove("translate-x-[50px]")
            }

            if (entry.target === statsRef.current) {
              entry.target.classList.remove("translate-y-[30px]")
            }
          }
        })
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) observer.observe(sectionRef.current)
    if (imageRef.current) observer.observe(imageRef.current)
    if (contentRef.current) observer.observe(contentRef.current)
    if (statsRef.current) observer.observe(statsRef.current)

    return () => {
      observer.disconnect()
    }
  }, [])

  return (
    <section id="about" ref={sectionRef} className="section-padding relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="container relative">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div ref={imageRef} className="opacity-0 translate-x-[-50px] transition-all duration-1000 ease-out">
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary opacity-10 rounded-lg"></div>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  width={600}
                  height={600}
                  src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                  alt="About AFFFCO"
                  className="object-cover h-[500px] w-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                <div className="absolute bottom-0 left-0 w-full p-6">
                  <div className="glass-effect rounded-xl p-4 backdrop-blur-md inline-block">
                    <p className="text-white font-medium">Serving our community since 1979</p>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-green-500 opacity-10 rounded-lg"></div>
            </div>
          </div>

          <div ref={contentRef} className="opacity-0 translate-x-[50px] transition-all duration-1000 ease-out">
            <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              About Us
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">A Credit Union That Cares</h2>

            <p className="text-gray-600 mb-6">
              Founded in 1979, AFFFCU has been serving our community with dedication and integrity for over four
              decades. As a member-owned financial cooperative, we put people before profits and are committed to your
              financial well-being.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-primary mr-3 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-medium text-gray-900">Member-Owned Cooperative</h4>
                  <p className="text-gray-600">
                    Our members are our owners, which means we're accountable to you, not shareholders.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-primary mr-3 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-medium text-gray-900">Community Focused</h4>
                  <p className="text-gray-600">
                    We reinvest in our local communities through financial education and support programs.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-primary mr-3 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-medium text-gray-900">Financial Education</h4>
                  <p className="text-gray-600">
                    We provide resources and guidance to help you make informed financial decisions.
                  </p>
                </div>
              </div>
            </div>

            <div
              ref={statsRef}
              className="grid grid-cols-2 gap-6 mb-8 opacity-0 translate-y-[30px] transition-all duration-1000 ease-out"
            >
              <div className="bg-white rounded-xl p-4 shadow-soft">
                <div className="flex items-center mb-2">
                  <Users className="h-5 w-5 text-primary mr-2" />
                  <h4 className="text-xl font-bold text-primary">45+</h4>
                </div>
                <p className="text-gray-600">Years of Service</p>
              </div>
              <div className="bg-white rounded-xl p-4 shadow-soft">
                <div className="flex items-center mb-2">
                  <Users className="h-5 w-5 text-primary mr-2" />
                  <h4 className="text-xl font-bold text-primary">25,000+</h4>
                </div>
                <p className="text-gray-600">Satisfied Members</p>
              </div>
              <div className="bg-white rounded-xl p-4 shadow-soft">
                <div className="flex items-center mb-2">
                  <Award className="h-5 w-5 text-primary mr-2" />
                  <h4 className="text-xl font-bold text-primary">$250M+</h4>
                </div>
                <p className="text-gray-600">Assets Managed</p>
              </div>
              <div className="bg-white rounded-xl p-4 shadow-soft">
                <div className="flex items-center mb-2">
                  <MapPin className="h-5 w-5 text-primary mr-2" />
                  <h4 className="text-xl font-bold text-primary">5</h4>
                </div>
                <p className="text-gray-600">Branch Locations</p>
              </div>
            </div>

            <Link href="#contact" className="btn btn-primary btn-lg shadow-button">
              Join Our Community
            </Link>
          </div>
        </div>

        {/* Testimonials */}
        <div
          className="mt-24 opacity-0 translate-y-10 transition-all duration-1000 ease-out"
          ref={(el) => {
            const observer = new IntersectionObserver(
              (entries) => {
                entries.forEach((entry) => {
                  if (entry.isIntersecting) {
                    entry.target.classList.add("opacity-100")
                    entry.target.classList.remove("opacity-0")
                    entry.target.classList.remove("translate-y-10")
                  }
                })
              },
              { threshold: 0.1 },
            )
            if (el) observer.observe(el)
          }}
        >
          <div className="text-center mb-12">
            <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Testimonials
            </span>
            <h2 className="text-3xl font-bold mb-4">What Our Members Say</h2>
            <p className="max-w-2xl mx-auto text-gray-600">
              Don't just take our word for it. Hear from our members about their experience with AFFFCU.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="glass-card rounded-2xl p-6 relative">
              <div className="absolute -top-5 left-6 text-5xl text-primary opacity-20">"</div>
              <p className="text-gray-600 mb-6 relative z-10">
                "AFFFCU helped me secure my first mortgage with incredible rates and personalized service. They made the
                process so much easier than I expected."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-gray-200 mr-4"></div>
                <div>
                  <h4 className="font-medium">Sarah Johnson</h4>
                  <p className="text-sm text-gray-500">Member since 2018</p>
                </div>
              </div>
            </div>

            <div className="glass-card rounded-2xl p-6 relative">
              <div className="absolute -top-5 left-6 text-5xl text-primary opacity-20">"</div>
              <p className="text-gray-600 mb-6 relative z-10">
                "The financial education workshops offered by AFFFCU completely changed how I manage my money. I'm now
                debt-free and building savings for the future."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-gray-200 mr-4"></div>
                <div>
                  <h4 className="font-medium">Michael Rodriguez</h4>
                  <p className="text-sm text-gray-500">Member since 2015</p>
                </div>
              </div>
            </div>

            <div className="glass-card rounded-2xl p-6 relative">
              <div className="absolute -top-5 left-6 text-5xl text-primary opacity-20">"</div>
              <p className="text-gray-600 mb-6 relative z-10">
                "As a small business owner, I appreciate how AFFFCU understands my unique needs. Their business banking
                solutions have helped my company grow steadily."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-gray-200 mr-4"></div>
                <div>
                  <h4 className="font-medium">Jennifer Taylor</h4>
                  <p className="text-sm text-gray-500">Member since 2010</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutUs
