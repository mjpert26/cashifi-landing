'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Shield, Zap, Users, TrendingUp, CheckCircle2, Clock, Award, Lock, FileCheck, DollarSign, Building2, CreditCard, Sparkles, BarChart3, Target, ChevronRight } from 'lucide-react'
import Image from 'next/image'

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: [0.25, 0.4, 0.25, 1] }
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
}

export default function Home() {
  return (
    <div className="bg-[#0A0A0F] text-white min-h-screen">
      {/* Navbar */}
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 backdrop-blur-xl bg-black/50"
      >
        <div className="max-w-[1280px] mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#3B82F6] via-[#10B981] to-[#FB923C] flex items-center justify-center">
                <DollarSign className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold tracking-tight">Cashifi</span>
            </div>
            
            <div className="hidden md:flex items-center gap-8">
              <a href="#products" className="text-sm text-gray-400 hover:text-white transition-colors">Products</a>
              <a href="#how-it-works" className="text-sm text-gray-400 hover:text-white transition-colors">How It Works</a>
              <a href="#lenders" className="text-sm text-gray-400 hover:text-white transition-colors">Our Lenders</a>
              <a href="#resources" className="text-sm text-gray-400 hover:text-white transition-colors">Resources</a>
            </div>

            <div className="flex items-center gap-4">
              <button className="hidden md:block text-sm text-white hover:text-gray-300 transition-colors">
                Sign In
              </button>
              <button className="bg-gradient-to-r from-[#3B82F6] to-[#10B981] text-white rounded-full px-6 py-2.5 text-sm font-medium hover:scale-105 transition-transform shadow-lg shadow-blue-500/25">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24">
        {/* Gradient Orbs */}
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-[#3B82F6] rounded-full blur-3xl opacity-20"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-[#10B981] rounded-full blur-3xl opacity-15"></div>
        <div className="absolute top-1/2 right-1/3 w-[400px] h-[400px] bg-[#FB923C] rounded-full blur-3xl opacity-10"></div>

        <div className="max-w-[1280px] mx-auto px-6 py-32 relative z-10">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            className="text-center max-w-5xl mx-auto"
          >
            <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-2 mb-8 backdrop-blur-xl">
              <Sparkles className="w-4 h-4 text-[#10B981]" />
              <span className="text-sm text-gray-300">Trusted by 5,000+ businesses nationwide</span>
            </motion.div>

            <motion.h1 
              variants={fadeInUp}
              className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 leading-[1.1]"
              style={{ letterSpacing: '-0.02em' }}
            >
              Your Gateway to{' '}
              <span className="bg-gradient-to-r from-[#3B82F6] via-[#10B981] to-[#FB923C] bg-clip-text text-transparent">
                SBA Lending
              </span>
              {' '}Excellence
            </motion.h1>

            <motion.p 
              variants={fadeInUp}
              className="text-lg md:text-xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed"
            >
              Connect with America's top SBA lenders in minutes. Access every loan product, compare competitive rates, and secure funding faster than ever before.
            </motion.p>

            <motion.div 
              variants={fadeInUp}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <button className="bg-gradient-to-r from-[#3B82F6] to-[#10B981] text-white rounded-full px-8 py-4 font-medium hover:scale-105 transition-transform shadow-lg shadow-blue-500/25 flex items-center gap-2 text-lg">
                Get Your Free Quote
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="bg-white/5 border border-white/10 text-white rounded-full px-8 py-4 hover:bg-white/10 transition-all flex items-center gap-2 text-lg">
                Compare Loan Options
                <ChevronRight className="w-5 h-5" />
              </button>
            </motion.div>

            <motion.div 
              variants={fadeInUp}
              className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8"
            >
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#3B82F6] to-[#10B981] bg-clip-text text-transparent mb-2">
                  250+
                </div>
                <div className="text-sm text-gray-400 uppercase tracking-wider">Lending Partners</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#10B981] to-[#FB923C] bg-clip-text text-transparent mb-2">
                  $2.8B+
                </div>
                <div className="text-sm text-gray-400 uppercase tracking-wider">Funded to Date</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#FB923C] to-[#3B82F6] bg-clip-text text-transparent mb-2">
                  48hrs
                </div>
                <div className="text-sm text-gray-400 uppercase tracking-wider">Avg. Approval Time</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#3B82F6] via-[#10B981] to-[#FB923C] bg-clip-text text-transparent mb-2">
                  $5M
                </div>
                <div className="text-sm text-gray-400 uppercase tracking-wider">Max Loan Amount</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Performance Chart Section */}
      <section className="py-32 relative">
        <div className="max-w-[1280px] mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="inline-block text-xs uppercase tracking-widest text-[#10B981] font-medium mb-4">
              Market Performance
            </div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6" style={{ letterSpacing: '-0.01em' }}>
              Why Businesses Choose Cashifi
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Our marketplace delivers faster approvals, better rates, and more lending options than traditional channels.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8 }}
              className="bg-[#111116] rounded-2xl border border-white/5 p-8 hover:border-white/10 transition-all"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#3B82F6]/20 to-transparent border border-[#3B82F6]/20 flex items-center justify-center">
                  <Clock className="w-6 h-6 text-[#3B82F6]" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Approval Speed</h3>
                  <p className="text-sm text-gray-400">Traditional vs. Cashifi</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-400">Traditional Banks</span>
                    <span className="text-sm font-medium text-red-400">45-90 days</span>
                  </div>
                  <div className="h-3 bg-white/5 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-red-500/50 to-red-500/20" style={{ width: '85%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-400">Cashifi Marketplace</span>
                    <span className="text-sm font-medium text-[#10B981]">2-7 days</span>
                  </div>
                  <div className="h-3 bg-white/5 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-[#10B981] to-[#10B981]/40" style={{ width: '15%' }}></div>
                  </div>
                </div>
              </div>

              <div className="mt-6 p-4 bg-[#10B981]/10 border border-[#10B981]/20 rounded-xl">
                <div className="flex items-center gap-2 text-[#10B981]">
                  <TrendingUp className="w-5 h-5" />
                  <span className="text-sm font-medium">94% faster than traditional lending</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8 }}
              className="bg-[#111116] rounded-2xl border border-white/5 p-8 hover:border-white/10 transition-all"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#FB923C]/20 to-transparent border border-[#FB923C]/20 flex items-center justify-center">
                  <BarChart3 className="w-6 h-6 text-[#FB923C]" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Success Rate</h3>
                  <p className="text-sm text-gray-400">Approval comparison</p>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex items-end justify-between gap-4">
                  <div className="flex-1">
                    <div className="h-32 bg-white/5 rounded-lg mb-2 relative overflow-hidden">
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-red-500/50 to-red-500/20 rounded-lg" style={{ height: '45%' }}></div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-red-400">45%</div>
                      <div className="text-xs text-gray-400">Single Lender</div>
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="h-32 bg-white/5 rounded-lg mb-2 relative overflow-hidden">
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#FB923C] to-[#FB923C]/40 rounded-lg" style={{ height: '87%' }}></div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-[#FB923C]">87%</div>
                      <div className="text-xs text-gray-400">Cashifi</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 p-4 bg-[#FB923C]/10 border border-[#FB923C]/20 rounded-xl">
                <div className="flex items-center gap-2 text-[#FB923C]">
                  <Target className="w-5 h-5" />
                  <span className="text-sm font-medium">2x higher approval rate with multiple lenders</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-32 relative">
        <div className="max-w-[1280px] mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="inline-block text-xs uppercase tracking-widest text-[#3B82F6] font-medium mb-4">
              Loan Products
            </div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6" style={{ letterSpacing: '-0.01em' }}>
              Every SBA Product, One Platform
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Access the complete range of SBA-backed financing solutions, all in one place.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: 0 }}
              className="bg-[#111116] rounded-2xl border border-white/5 p-8 hover:border-[#3B82F6]/30 transition-all group"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#3B82F6]/20 to-transparent border border-[#3B82F6]/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Building2 className="w-7 h-7 text-[#3B82F6]" />
              </div>
              <h3 className="text-2xl font-semibold mb-3">SBA 7(a) Loans</h3>
              <p className="text-gray-400 mb-6 leading-relaxed">
                The most versatile SBA loan program. Perfect for working capital, equipment purchases, real estate, refinancing, and business acquisitions.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-2 text-sm text-gray-300">
                  <CheckCircle2 className="w-5 h-5 text-[#3B82F6] flex-shrink-0 mt-0.5" />
                  Up to $5 million in funding
                </li>
                <li className="flex items-start gap-2 text-sm text-gray-300">
                  <CheckCircle2 className="w-5 h-5 text-[#3B82F6] flex-shrink-0 mt-0.5" />
                  Terms up to 25 years
                </li>
                <li className="flex items-start gap-2 text-sm text-gray-300">
                  <CheckCircle2 className="w-5 h-5 text-[#3B82F6] flex-shrink-0 mt-0.5" />
                  Competitive rates starting at prime + 2.75%
                </li>
              </ul>
              <button className="text-[#3B82F6] font-medium flex items-center gap-2 group-hover:gap-3 transition-all">
                Learn More
                <ArrowRight className="w-4 h-4" />
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="bg-[#111116] rounded-2xl border border-white/5 p-8 hover:border-[#10B981]/30 transition-all group"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#10B981]/20 to-transparent border border-[#10B981]/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <DollarSign className="w-7 h-7 text-[#10B981]" />
              </div>
              <h3 className="text-2xl font-semibold mb-3">CDC/504 Loans</h3>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Long-term, fixed-rate financing for major fixed assets like commercial real estate and heavy equipment purchases.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-2 text-sm text-gray-300">
                  <CheckCircle2 className="w-5 h-5 text-[#10B981] flex-shrink-0 mt-0.5" />
                  Up to $5.5 million per project
                </li>
                <li className="flex items-start gap-2 text-sm text-gray-300">
                  <CheckCircle2 className="w-5 h-5 text-[#10B981] flex-shrink-0 mt-0.5" />
                  Fixed rates for 10, 20, or 25 years
                </li>
                <li className="flex items-start gap-2 text-sm text-gray-300">
                  <CheckCircle2 className="w-5 h-5 text-[#10B981] flex-shrink-0 mt-0.5" />
                  As low as 10% down payment
                </li>
              </ul>
              <button className="text-[#10B981] font-medium flex items-center gap-2 group-hover:gap-3 transition-all">
                Learn More
                <ArrowRight className="w-4 h-4" />
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="bg-[#111116] rounded-2xl border border-white/5 p-8 hover:border-[#FB923C]/30 transition-all group"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#FB923C]/20 to-transparent border border-[#FB923C]/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <CreditCard className="w-7 h-7 text-[#FB923C]" />
              </div>
              <h3 className="text-2xl font-semibold mb-3">SBA CAPLines</h3>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Revolving lines of credit to help businesses meet short-term and cyclical working capital needs.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-2 text-sm text-gray-300">
                  <CheckCircle2 className="w-5 h-5 text-[#FB923C] flex-shrink-0 mt-0.5" />
                  Up to $5 million credit line
                </li>
                <li className="flex items-start gap-2 text-sm text-gray-300">
                  <CheckCircle2 className="w-5 h-5 text-[#FB923C] flex-shrink-0 mt-0.5" />
                  Flexible draw and repayment
                </li>
                <li className="flex items-start gap-2 text-sm text-gray-300">
                  <CheckCircle2 className="w-5 h-5 text-[#FB923C] flex-shrink-0 mt-0.5" />
                  Interest only on funds used
                </li>
              </ul>
              <button className="text-[#FB923C] font-medium flex items-center gap-2 group-hover:gap-3 transition-all">
                Learn More
                <ArrowRight className="w-4 h-4" />
              </button>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-8 bg-gradient-to-r from-white/5 to-white/[0.02] rounded-2xl border border-white/10 p-8"
          >
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500/20 to-transparent border border-purple-500/20 flex items-center justify-center flex-shrink-0">
                  <Zap className="w-6 h-6 text-purple-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Alternative Financing</h3>
                  <p className="text-gray-400">
                    Don't qualify for SBA? We partner with specialty lenders offering alternative solutions including merchant cash advances, invoice factoring, and equipment financing.
                  </p>
                </div>
              </div>
              <button className="bg-white/5 border border-white/10 text-white rounded-full px-6 py-3 hover:bg-white/10 transition-all whitespace-nowrap">
                Explore Options
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-32 relative bg-[#09090B]">
        <div className="max-w-[1280px] mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="inline-block text-xs uppercase tracking-widest text-[#10B981] font-medium mb-4">
              Simple Process
            </div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6" style={{ letterSpacing: '-0.01em' }}>
              Get Funded in 4 Easy Steps
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Our streamlined marketplace connects you with the right lenders in minutes, not months.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                number: '01',
                title: 'Submit Your Request',
                description: 'Complete our simple 5-minute application. Tell us about your business and funding needs.',
                icon: FileCheck,
                color: '#3B82F6'
              },
              {
                number: '02',
                title: 'Get Matched',
                description: 'Our AI instantly connects you with pre-qualified lenders from our network of 250+ partners.',
                icon: Zap,
                color: '#10B981'
              },
              {
                number: '03',
                title: 'Compare Offers',
                description: 'Review personalized loan offers side-by-side. Choose the best rates and terms for your business.',
                icon: BarChart3,
                color: '#FB923C'
              },
              {
                number: '04',
                title: 'Secure Funding',
                description: 'Finalize with your chosen lender. Funds typically deposited within 2-7 business days.',
                icon: CheckCircle2,
                color: '#3B82F6'
              }
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7, delay: index * 0.1 }}
                className="relative"
              >
                <div className="bg-[#111116] rounded-2xl border border-white/5 p-8 hover:border-white/10 transition-all h-full">
                  <div className="text-6xl font-bold mb-4 opacity-10" style={{ color: step.color }}>
                    {step.number}
                  </div>
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br from-[${step.color}]/20 to-transparent border border-[${step.color}]/20 flex items-center justify-center mb-6`}>
                    <step.icon className="w-6 h-6" style={{ color: step.color }} />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                  <p className="text-gray-400 leading-relaxed text-sm">{step.description}</p>
                </div>
                {index < 3 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                    <ChevronRight className="w-8 h-8 text-white/10" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust & Security Section */}
      <section className="py-32 relative">
        <div className="max-w-[1280px] mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="inline-block text-xs uppercase tracking-widest text-[#3B82F6] font-medium mb-4">
              Trust & Security
            </div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6"