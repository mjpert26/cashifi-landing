'use client'

import { motion } from 'framer-motion'
import { DollarSign, TrendingUp, Building2, CreditCard, Shield, Award, FileCheck, Lock } from 'lucide-react'

const products = [
  {
    icon: DollarSign,
    title: 'SBA 7(a) Loans',
    description: 'Flexible financing for working capital, equipment purchases, real estate, and business acquisitions. Up to $5M with competitive rates and terms up to 25 years.',
    features: [
      'Up to $5,000,000',
      'Terms up to 25 years',
      'Competitive fixed & variable rates',
      'Versatile use cases'
    ],
    accent: '#3B82F6',
    gradient: 'from-blue-500 to-blue-600'
  },
  {
    icon: Building2,
    title: 'CDC/504 Fixed Asset Loans',
    description: 'Long-term, fixed-rate financing for major fixed assets like real estate and heavy equipment. Ideal for growing businesses making substantial investments.',
    features: [
      'Up to $5.5M per project',
      '10, 20, or 25-year terms',
      'Fixed rates as low as 3.5%',
      'Low down payments (10%)'
    ],
    accent: '#10B981',
    gradient: 'from-emerald-500 to-emerald-600'
  },
  {
    icon: CreditCard,
    title: 'SBA CAPLines',
    description: 'Revolving lines of credit designed for short-term and cyclical working capital needs. Draw funds as needed and pay interest only on what you use.',
    features: [
      'Revolving credit up to $5M',
      'Flexible draw schedules',
      'Seasonal & contract support',
      'Lower rates than conventional'
    ],
    accent: '#FB923C',
    gradient: 'from-orange-400 to-orange-500'
  }
]

const benefits = [
  {
    icon: TrendingUp,
    title: 'Fast Approval Process',
    description: 'Get pre-qualified in minutes. Our streamlined platform reduces approval times by 60% compared to traditional SBA applications.'
  },
  {
    icon: Shield,
    title: 'Access to Multiple Lenders',
    description: 'Compare offers from 50+ SBA-approved lenders in one place. Find the best rates and terms for your specific business needs.'
  },
  {
    icon: Award,
    title: 'Expert Guidance',
    description: 'Dedicated SBA specialists guide you through every step. From application to funding, we ensure you get the capital you deserve.'
  },
  {
    icon: Lock,
    title: 'Best Rates Guaranteed',
    description: 'Our marketplace competition ensures you receive the most competitive rates available. No hidden fees, ever.'
  }
]

const trustBadges = [
  {
    icon: Shield,
    title: 'SBA Approved Partner',
    description: 'Official SBA lending marketplace'
  },
  {
    icon: Lock,
    title: 'Bank-Level Security',
    description: '256-bit SSL encryption'
  },
  {
    icon: FileCheck,
    title: 'Licensed Lenders Only',
    description: 'Vetted financial institutions'
  },
  {
    icon: Award,
    title: 'No Hidden Fees',
    description: 'Transparent pricing always'
  }
]

export default function Products() {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }
  }

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background gradient orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl opacity-20" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl opacity-20" />
      
      <div className="relative max-w-7xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
          className="text-center mb-20"
        >
          <motion.div variants={fadeInUp} className="inline-block mb-4">
            <span className="text-sm font-medium uppercase tracking-[0.1em] text-blue-400">
              Loan Products
            </span>
          </motion.div>
          <motion.h2
            variants={fadeInUp}
            className="text-5xl md:text-6xl font-bold mb-6 tracking-tight"
          >
            Complete SBA Financing
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-emerald-400 to-orange-400 bg-clip-text text-transparent">
              All in One Place
            </span>
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed"
          >
            Access every SBA loan product available through our marketplace of 50+ approved lenders.
            Compare rates, terms, and get funded faster than ever before.
          </motion.p>
        </motion.div>

        {/* Product cards */}
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-32"
        >
          {products.map((product, index) => {
            const Icon = product.icon
            return (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ scale: 1.02, translateY: -4 }}
                className="group relative bg-[#111116] rounded-2xl border border-white/5 p-8 hover:border-white/10 transition-all duration-300"
                style={{
                  boxShadow: `0 0 0 0 ${product.accent}00`
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = `0 20px 40px -12px ${product.accent}15`
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = `0 0 0 0 ${product.accent}00`
                }}
              >
                {/* Icon */}
                <div
                  className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br ${product.gradient} mb-6`}
                >
                  <Icon className="w-7 h-7 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-semibold mb-3">{product.title}</h3>
                <p className="text-gray-400 leading-relaxed mb-6">
                  {product.description}
                </p>

                {/* Features */}
                <ul className="space-y-3">
                  {product.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start text-sm">
                      <div
                        className="w-1.5 h-1.5 rounded-full mt-1.5 mr-3 flex-shrink-0"
                        style={{ backgroundColor: product.accent }}
                      />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Hover accent line */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-1 rounded-b-2xl bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    backgroundImage: `linear-gradient(to right, ${product.accent}, ${product.accent}cc)`
                  }}
                />
              </motion.div>
            )
          })}
        </motion.div>

        {/* Alternative financing CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
          className="relative bg-gradient-to-br from-white/[0.03] to-white/[0.01] backdrop-blur-xl rounded-2xl border border-white/10 p-10 text-center mb-32"
        >
          <h3 className="text-2xl md:text-3xl font-semibold mb-4">
            Don't Qualify for SBA Financing?
          </h3>
          <p className="text-gray-400 text-lg mb-6 max-w-2xl mx-auto">
            We partner with alternative lenders to help businesses that don't meet traditional SBA requirements.
            Get access to term loans, merchant cash advances, and revenue-based financing options.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center bg-white/5 border border-white/10 text-white rounded-full px-8 py-3 font-medium hover:bg-white/10 transition-all duration-300"
          >
            Explore Alternative Financing
          </motion.button>
        </motion.div>

        {/* Benefits section */}
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
          className="mb-32"
        >
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
              Why Choose Cashifi
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              The fastest, simplest way to secure SBA financing for your business
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon
              return (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="bg-[#111116] rounded-2xl border border-white/5 p-8 hover:border-white/10 transition-all duration-300"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/20 to-emerald-500/20 mb-5">
                    <Icon className="w-6 h-6 text-blue-400" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                  <p className="text-gray-400 leading-relaxed text-sm">
                    {benefit.description}
                  </p>
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        {/* Trust badges */}
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp} className="text-center mb-12">
            <span className="text-sm font-medium uppercase tracking-[0.1em] text-emerald-400">
              Security & Trust
            </span>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {trustBadges.map((badge, index) => {
              const Icon = badge.icon
              return (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 p-8 text-center"
                >
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-emerald-500/20 to-blue-500/20 mb-4 mx-auto">
                    <Icon className="w-7 h-7 text-emerald-400" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{badge.title}</h3>
                  <p className="text-sm text-gray-400">{badge.description}</p>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}