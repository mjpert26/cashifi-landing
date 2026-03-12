'use client'

import { motion } from 'framer-motion'
import { ArrowRight, TrendingUp, Shield, Zap, CheckCircle2 } from 'lucide-react'
import Link from 'next/link'

export default function Hero() {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }
  }

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0A0A0F] pt-20">
      {/* Gradient Orbs */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-gradient-to-br from-blue-500/20 to-transparent rounded-full blur-3xl opacity-20" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-gradient-to-br from-emerald-500/15 to-transparent rounded-full blur-3xl opacity-20" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-br from-orange-500/10 to-transparent rounded-full blur-3xl opacity-20" />

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />

      <div className="relative max-w-7xl mx-auto px-6 py-32 text-center">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="space-y-8"
        >
          {/* Overline */}
          <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full px-5 py-2">
            <Shield className="w-4 h-4 text-emerald-400" />
            <span className="text-sm font-medium text-gray-300 tracking-wide">SBA APPROVED LENDING MARKETPLACE</span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1 
            variants={fadeInUp}
            className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight leading-[1.1] max-w-5xl mx-auto"
          >
            <span className="bg-gradient-to-r from-white via-white to-gray-400 bg-clip-text text-transparent">
              The Fastest Way to
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-emerald-400 to-orange-400 bg-clip-text text-transparent">
              Secure SBA Financing
            </span>
          </motion.h1>

          {/* Subheading */}
          <motion.p 
            variants={fadeInUp}
            className="text-lg md:text-xl lg:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed font-light"
          >
            Connect with 200+ top-tier SBA lenders in one platform. Get pre-qualified in minutes, compare offers side-by-side, and close your loan up to 60% faster.
          </motion.p>

          {/* Trust Badges */}
          <motion.div 
            variants={fadeInUp}
            className="flex flex-wrap items-center justify-center gap-6 pt-4"
          >
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <CheckCircle2 className="w-5 h-5 text-emerald-400" />
              <span>No Hidden Fees</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <CheckCircle2 className="w-5 h-5 text-emerald-400" />
              <span>Licensed Lenders Only</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <CheckCircle2 className="w-5 h-5 text-emerald-400" />
              <span>Bank-Level Security</span>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div 
            variants={fadeInUp}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8"
          >
            <Link 
              href="#quote"
              className="group bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-full px-10 py-4 font-semibold text-lg shadow-lg shadow-blue-500/25 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/30 transition-all duration-300 flex items-center gap-2"
            >
              Get Your Free Quote
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link 
              href="#products"
              className="bg-white/5 backdrop-blur-xl border border-white/10 text-white rounded-full px-10 py-4 font-semibold text-lg hover:bg-white/10 hover:border-white/20 transition-all duration-300"
            >
              Compare Loan Options
            </Link>
          </motion.div>

          {/* Stats Bar */}
          <motion.div 
            variants={fadeInUp}
            className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 pt-16 max-w-5xl mx-auto"
          >
            <div className="bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:border-white/20 transition-all duration-300">
              <div className="flex items-center justify-center gap-2 mb-2">
                <TrendingUp className="w-5 h-5 text-blue-400" />
                <div className="text-3xl lg:text-4xl font-bold text-white">200+</div>
              </div>
              <div className="text-sm text-gray-400 font-medium">Lending Partners</div>
            </div>

            <div className="bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:border-white/20 transition-all duration-300">
              <div className="flex items-center justify-center gap-2 mb-2">
                <TrendingUp className="w-5 h-5 text-emerald-400" />
                <div className="text-3xl lg:text-4xl font-bold text-white">12K+</div>
              </div>
              <div className="text-sm text-gray-400 font-medium">Businesses Funded</div>
            </div>

            <div className="bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:border-white/20 transition-all duration-300">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Zap className="w-5 h-5 text-orange-400" />
                <div className="text-3xl lg:text-4xl font-bold text-white">48hr</div>
              </div>
              <div className="text-sm text-gray-400 font-medium">Avg. Approval Time</div>
            </div>

            <div className="bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:border-white/20 transition-all duration-300">
              <div className="flex items-center justify-center gap-2 mb-2">
                <TrendingUp className="w-5 h-5 text-blue-400" />
                <div className="text-3xl lg:text-4xl font-bold text-white">$5M</div>
              </div>
              <div className="text-sm text-gray-400 font-medium">Max Loan Amount</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}