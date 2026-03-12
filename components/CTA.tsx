'use client';

import { motion } from 'framer-motion';
import { ArrowRight, TrendingUp } from 'lucide-react';

export default function CTA() {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background gradient orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute top-1/3 right-1/4 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/2 w-[400px] h-[400px] bg-orange-500/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
          className="relative"
        >
          {/* Main card */}
          <div className="relative bg-gradient-to-br from-blue-500/20 via-emerald-500/10 to-orange-500/20 rounded-3xl p-[1px] overflow-hidden">
            {/* Inner content */}
            <div className="relative bg-[#0A0A0F] rounded-3xl p-12 md:p-16 lg:p-20">
              {/* Decorative grid pattern */}
              <div className="absolute inset-0 opacity-[0.03]">
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px),
                                    linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
                    backgroundSize: '40px 40px',
                  }}
                />
              </div>

              <div className="relative max-w-4xl mx-auto text-center">
                {/* Overline */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1, ease: [0.25, 0.4, 0.25, 1] }}
                  className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full"
                >
                  <TrendingUp className="w-4 h-4 text-emerald-400" />
                  <span className="text-sm font-medium uppercase tracking-wider text-gray-300">
                    Start Your Application Today
                  </span>
                </motion.div>

                {/* Heading */}
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.2, ease: [0.25, 0.4, 0.25, 1] }}
                  className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight"
                >
                  <span className="bg-gradient-to-r from-white via-white to-gray-300 bg-clip-text text-transparent">
                    Ready to Secure Your{' '}
                  </span>
                  <span className="bg-gradient-to-r from-blue-400 via-emerald-400 to-orange-400 bg-clip-text text-transparent">
                    Business Funding?
                  </span>
                </motion.h2>

                {/* Description */}
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.3, ease: [0.25, 0.4, 0.25, 1] }}
                  className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed"
                >
                  Join thousands of businesses that have streamlined their SBA lending journey
                  with Cashifi. Get pre-qualified in minutes and compare offers from our network
                  of trusted lenders.
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.4, ease: [0.25, 0.4, 0.25, 1] }}
                  className="flex flex-col sm:flex-row items-center justify-center gap-4"
                >
                  {/* Primary CTA */}
                  <button className="group relative px-8 py-4 bg-gradient-to-r from-blue-500 via-emerald-500 to-orange-500 rounded-full font-medium text-white shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/30 hover:scale-105 transition-all duration-300 flex items-center gap-2">
                    <span>Get Your Free Quote</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </button>

                  {/* Secondary CTA */}
                  <button className="group px-8 py-4 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full font-medium text-white hover:bg-white/10 hover:border-white/20 hover:scale-105 transition-all duration-300 flex items-center gap-2">
                    <span>Compare Loan Options</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                </motion.div>

                {/* Trust indicators */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.5, ease: [0.25, 0.4, 0.25, 1] }}
                  className="mt-12 flex flex-wrap items-center justify-center gap-6 text-sm text-gray-500"
                >
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full" />
                    <span>No Hidden Fees</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-400 rounded-full" />
                    <span>Free Pre-Qualification</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-orange-400 rounded-full" />
                    <span>Expert Guidance</span>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>

          {/* Bottom accent bar */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
            className="mt-8 h-1 bg-gradient-to-r from-transparent via-blue-500/50 to-transparent rounded-full"
          />
        </motion.div>
      </div>
    </section>
  );
}