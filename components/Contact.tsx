"use client";
import { useEffect, useRef } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  ArrowRight,
  CheckCircle,
} from "lucide-react";
import Link from "next/link";

const Contact = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const infoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100");
            entry.target.classList.remove("opacity-0", "translate-y-10");
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    if (formRef.current) observer.observe(formRef.current);
    if (infoRef.current) observer.observe(infoRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="section-padding relative overflow-hidden"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 bg-gradient-subtle noise"></div>

      <div className="container relative">
        <div className="text-center mb-16">
          <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Contact Us
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get in Touch</h2>
          <p className="max-w-2xl mx-auto text-gray-600">
            Have questions or need assistance? Our team is here to help you with
            all your financial needs.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          <div
            ref={formRef}
            className="lg:col-span-3 bg-white rounded-2xl shadow-card p-8 opacity-0 translate-y-10 transition-all duration-700"
          >
            <h3 className="text-2xl font-bold mb-6">Send Us a Message</h3>
            <form>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="firstName" className="form-label">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    className="form-input"
                    placeholder="Your first name"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="form-label">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    className="form-input"
                    placeholder="Your last name"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="email" className="form-label">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="form-input"
                  placeholder="Your email address"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="phone" className="form-label">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="form-input"
                  placeholder="Your phone number"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="subject" className="form-label">
                  Subject
                </label>
                <select id="subject" className="form-input">
                  <option value="">Select a subject</option>
                  <option value="general">General Inquiry</option>
                  <option value="account">Account Information</option>
                  <option value="loan">Loan Application</option>
                  <option value="feedback">Feedback</option>
                </select>
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="form-label">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="form-input"
                  placeholder="How can we help you?"
                ></textarea>
              </div>

              <button
                type="submit"
                className="btn btn-primary btn-lg w-full shadow-button group"
              >
                Send Message
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </button>
            </form>
          </div>

          <div
            ref={infoRef}
            className="lg:col-span-2 opacity-0 translate-y-10 transition-all duration-700 delay-300"
            style={{ transitionDelay: "300ms" }}
          >
            <div className="bg-white rounded-2xl shadow-card p-8 mb-8">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-primary/10 p-3 rounded-full mr-4">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Phone</h4>
                    <p className="text-gray-600 mt-1">(210) 555-1234</p>
                    <p className="text-gray-600">Toll-free: 1-800-555-AFCU</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-primary/10 p-3 rounded-full mr-4">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Email</h4>
                    <p className="text-gray-600 mt-1">info@afffcu.org</p>
                    <p className="text-gray-600">support@afffcu.org</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-primary/10 p-3 rounded-full mr-4">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Main Office</h4>
                    <p className="text-gray-600 mt-1">123 Financial Way</p>
                    <p className="text-gray-600">San Antonio, TX 78250</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-primary/10 p-3 rounded-full mr-4">
                    <Clock className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">
                      Business Hours
                    </h4>
                    <p className="text-gray-600 mt-1">
                      Monday - Friday: 9:00 AM - 5:00 PM
                    </p>
                    <p className="text-gray-600">Saturday: 9:00 AM - 1:00 PM</p>
                    <p className="text-gray-600">Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-primary text-white rounded-2xl shadow-lg p-8">
              <h3 className="text-xl font-bold mb-4">Become a Member Today</h3>
              <p className="mb-6">
                Join our credit union and enjoy the benefits of banking with a
                financial institution that puts your needs first.
              </p>

              <div className="space-y-3 mb-6">
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 mr-2 flex-shrink-0" />
                  <span>No monthly maintenance fees</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 mr-2 flex-shrink-0" />
                  <span>Higher savings rates</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 mr-2 flex-shrink-0" />
                  <span>Lower loan rates</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 mr-2 flex-shrink-0" />
                  <span>Personalized financial guidance</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="#"
                  className="btn btn-lg bg-green-800 rounded-xl p-4 text-primary hover:bg-gray-100 text-center"
                >
                  Apply Online
                </Link>
                <Link
                  href="#"
                  className="btn btn-lg bg-transparent border border-white text-white hover:bg-white/10 text-center p-4 rounded-xl"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Map */}
        <div
          className="mt-16 opacity-0 translate-y-10 transition-all duration-700"
          ref={(el) => {
            if (el) {
              const observer = new IntersectionObserver(
                (entries) => {
                  entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                      entry.target.classList.add("opacity-100");
                      entry.target.classList.remove(
                        "opacity-0",
                        "translate-y-10"
                      );
                    }
                  });
                },
                { threshold: 0.1 }
              );
              observer.observe(el);
            }
          }}
        >
          <div className="bg-white rounded-2xl shadow-card overflow-hidden">
            <div className="aspect-[16/5] bg-gray-200 w-full">
              {/* Replace with actual map component */}
              <div className="w-full h-full flex items-center justify-center bg-gray-100">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d444516.2017614933!2d-99.28436572656248!3d29.493533199999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x865c43864215212d%3A0xdf6c6ef82a720f6c!2sOneMain%20Financial!5e0!3m2!1sen!2ske!4v1744369562845!5m2!1sen!2ske"
                  width="1080"
                  height="450"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>{" "}
              </div>
            </div>
          </div>
        </div>
        <div className="mt-16 opacity-0 translate-y-10 transition-all duration-700">
          <div className="bg-white rounded-2xl shadow-card overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="relative p-8 md:p-12">
                <div className="absolute -top-5 left-6 text-5xl text-primary opacity-20">
                `&quot;`
                </div>
                <p className="text-gray-600 mb-6 relative z-10">
                `&quot;`As a small business owner, I appreciate how AFFFCU
                  understands my unique needs. Their business banking solutions
                  have helped my company grow steadily."
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
      </div>
    </section>
  );
};

export default Contact;
