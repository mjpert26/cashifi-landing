'use client'

import { motion } from 'framer-motion'
import { Quote } from 'lucide-react'
import Image from 'next/image'

const testimonials = [
  {
    quote: "Cashifi transformed our business financing experience. What used to take months with traditional banks was done in under 3 weeks. Their marketplace connected us with multiple lenders, and we got the best rate possible for our SBA 7(a) loan.",
    author: "Michael Chen",
    title: "Founder & CEO",
    company: "Harbor Manufacturing",
    image: "/testimonials/michael.jpg",
    loanType: "SBA 7(a) - $750K",
    color: "blue"
  },
  {
    quote: "As a first-time business owner, the SBA loan process seemed overwhelming. Cashifi's team guided us every step of the way and helped us secure funding for our restaurant expansion. Their expertise and network of lenders made all the difference.",
    author: "Sarah Martinez",
    title: "Owner",
    company: "Verde Kitchen & Bar",
    image: "/testimonials/sarah.jpg",
    loanType: "CDC/504 - $1.2M",
    color: "green"
  },
  {
    quote: "We needed working capital fast to fulfill a major contract. Cashifi's platform gave us access to SBA CAPLines lenders we didn't even know existed. Approved in 10 days with terms that actually work for our cash flow.",
    author: "David Thompson",
    title: "Managing Partner",
    company: "Summit Logistics Group",
    image: "/testimonials/david.jpg",
    loanType: "SBA CAPLines - $500K",
    color: "peach"
  },
  {
    quote: "After being turned down by three banks, we thought our expansion plans were dead. Cashifi found us alternative financing that fit our unique situation perfectly. They truly understand small business needs.",
    author: "Jennifer Park",
    title: "Co-Founder",
    company: "TechBridge Solutions",
    image: "/testimonials/jennifer.jpg",
    loanType: "Alternative Financing - $350K",
    color: "blue"
  },
  {
    quote: "The transparency was refreshing. No hidden fees, no surprises. Cashifi showed us exactly what we qualified for across multiple lenders and let us choose the best fit. Closed our $2M equipment loan in record time.",
    author: "Robert Williams",
    title: "President",
    company: "Precision Engineering Corp",
    image: "/testimonials/robert.jpg",
    loanType: "CDC/504 - $2M",
    color: "green"
  },
  {
    quote: "Cashifi's technology platform saved us countless hours. Instead of filling out applications at 10 different banks, we submitted once and got matched with pre-qualified lenders. Game changer for busy entrepreneurs.",
    author: "Amanda Foster",
    title: "Founder",
    company: "Peak Performance Fitness",
    image: "/testimonials/amanda.jpg",
    loanType: "SBA 7(a) - $450K",
    color: "peach"
  }
]

const colorMap = {
  blue: {
    gradient: 'from-blue-500 to-blue-600',
    border: 'border-blue-500/20',
    text: 'text-blue-400',
    bg: 'bg-blue-500/10'
  },
  green: {
    gradient: 'from-emerald-500 to-emerald-600',
    border: 'border-emerald-500/20',
    text: 'text-emerald-400',
    bg: 'bg-emerald-500/10'
  },
  peach: {
    gradient: 'from-orange-400 to-orange-500',
    border: 'border-orange-400/20',
    text: 'text-orange-400',
    bg: 'bg-orange-400/10'
  }
}

export default function Testimonials() {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0F] via-[#0A0A0F] to-[#111116]" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl" />

      <div className="relative max-w-[1280px] mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6">
            <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-emerald-500" />
            <span className="text-sm font-medium text-gray-400 uppercase tracking-wider">
              Client Success Stories
            </span>
          </div>
          
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-white to-gray-400 bg-clip-text text-transparent">
            Trusted by Business<br />Owners Nationwide
          </h2>
          
          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Join thousands of entrepreneurs who've secured funding faster and easier through Cashifi's marketplace
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.7,
                delay: index * 0.1,
                ease: [0.25, 0.4, 0.25, 1]
              }}
              className="group"
            >
              <div className={`relative h-full bg-[#111116] rounded-2xl border ${colorMap[testimonial.color as keyof typeof colorMap].border} p-8 hover:border-white/10 transition-all duration-300 hover:scale-[1.02]`}>
                {/* Quote Icon */}
                <div className={`inline-flex p-3 rounded-xl ${colorMap[testimonial.color as keyof typeof colorMap].bg} mb-6`}>
                  <Quote className={`w-6 h-6 ${colorMap[testimonial.color as keyof typeof colorMap].text}`} />
                </div>

                {/* Quote Text */}
                <p className="text-gray-300 leading-relaxed mb-8 text-[15px]">
                  "{testimonial.quote}"
                </p>

                {/* Author Info */}
                <div className="flex items-center gap-4 mb-6">
                  <div className={`relative w-14 h-14 rounded-full overflow-hidden bg-gradient-to-br ${colorMap[testimonial.color as keyof typeof colorMap].gradient}`}>
                    <div className="absolute inset-0 flex items-center justify-center text-white font-semibold text-lg">
                      {testimonial.author.split(' ').map(n => n[0]).join('')}
                    </div>
                  </div>
                  
                  <div>
                    <div className="font-semibold text-white mb-1">
                      {testimonial.author}
                    </div>
                    <div className="text-sm text-gray-400">
                      {testimonial.title}
                    </div>
                    <div className="text-sm text-gray-500">
                      {testimonial.company}
                    </div>
                  </div>
                </div>

                {/* Loan Type Badge */}
                <div className={`inline-flex px-4 py-2 rounded-full border ${colorMap[testimonial.color as keyof typeof colorMap].border} ${colorMap[testimonial.color as keyof typeof colorMap].bg}`}>
                  <span className={`text-sm font-medium ${colorMap[testimonial.color as keyof typeof colorMap].text}`}>
                    {testimonial.loanType}
                  </span>
                </div>

                {/* Decorative gradient on hover */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${colorMap[testimonial.color as keyof typeof colorMap].gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none`} />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
          className="mt-20 grid grid-cols-1 md:grid-cols-4 gap-6"
        >
          {[
            { value: '4.9/5', label: 'Average Rating', color: 'blue' },
            { value: '98%', label: 'Satisfaction Rate', color: 'green' },
            { value: '2,400+', label: 'Businesses Funded', color: 'peach' },
            { value: '18 Days', label: 'Avg. Approval Time', color: 'blue' }
          ].map((stat, index) => (
            <div
              key={index}
              className={`bg-[#111116] rounded-2xl border ${colorMap[stat.color as keyof typeof colorMap].border} p-6 text-center hover:border-white/10 transition-all duration-300`}
            >
              <div className={`text-4xl font-bold mb-2 bg-gradient-to-r ${colorMap[stat.color as keyof typeof colorMap].gradient} bg-clip-text text-transparent`}>
                {stat.value}
              </div>
              <div className="text-sm text-gray-400 uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}