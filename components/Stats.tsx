'use client'

import { motion } from 'framer-motion'
import { TrendingUp, Users, Clock, DollarSign } from 'lucide-react'

const stats = [
  {
    icon: Users,
    value: '250+',
    label: 'Lending Partners',
    description: 'Top-tier SBA lenders nationwide',
    color: 'from-blue-500 to-blue-600',
    iconColor: 'text-blue-400',
  },
  {
    icon: TrendingUp,
    value: '$2.8B+',
    label: 'Businesses Funded',
    description: 'Total capital deployed to SMBs',
    color: 'from-emerald-500 to-emerald-600',
    iconColor: 'text-emerald-400',
  },
  {
    icon: Clock,
    value: '48 Hours',
    label: 'Average Approval Time',
    description: 'From application to decision',
    color: 'from-orange-400 to-orange-500',
    iconColor: 'text-orange-400',
  },
  {
    icon: DollarSign,
    value: '$50K–$5M',
    label: 'Loan Amounts Available',
    description: 'Flexible financing options',
    color: 'from-blue-500 to-emerald-500',
    iconColor: 'text-blue-400',
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.25, 0.4, 0.25, 1],
    },
  },
}

export default function Stats() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background gradient orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.p
            variants={itemVariants}
            className="text-sm font-medium tracking-wider uppercase text-blue-400 mb-4"
          >
            Trusted by Thousands
          </motion.p>
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6"
          >
            The Numbers Speak for
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-emerald-400 to-orange-400 bg-clip-text text-transparent">
              Themselves
            </span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-lg text-gray-400 max-w-2xl mx-auto"
          >
            Cashifi has revolutionized SBA lending by connecting businesses with the right lenders faster than ever before
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.02, y: -4 }}
                className="group relative bg-[#111116] rounded-2xl border border-white/5 p-8 hover:border-white/10 transition-all duration-300"
              >
                {/* Gradient background on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`} />
                
                <div className="relative">
                  {/* Icon */}
                  <div className="mb-6">
                    <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-white/5 border border-white/10">
                      <Icon className={`w-7 h-7 ${stat.iconColor}`} />
                    </div>
                  </div>

                  {/* Value */}
                  <div className="mb-2">
                    <div className="text-4xl lg:text-5xl font-bold tracking-tight bg-gradient-to-br from-white to-white/80 bg-clip-text text-transparent">
                      {stat.value}
                    </div>
                  </div>

                  {/* Label */}
                  <div className="mb-2">
                    <div className="text-base font-semibold text-white/90">
                      {stat.label}
                    </div>
                  </div>

                  {/* Description */}
                  <div className="text-sm text-gray-500 leading-relaxed">
                    {stat.description}
                  </div>

                  {/* Accent line */}
                  <div className={`mt-6 h-1 w-12 rounded-full bg-gradient-to-r ${stat.color} opacity-60`} />
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
          className="mt-16 text-center"
        >
          <p className="text-gray-400 mb-6">
            Join thousands of businesses that have secured their funding through Cashifi
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-full px-8 py-4 font-semibold shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/30 transition-all duration-300"
          >
            Get Your Free Quote
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}