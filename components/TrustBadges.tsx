'use client';

import { motion } from 'framer-motion';
import { Shield, Lock, Award, CheckCircle, Building2, FileCheck } from 'lucide-react';

const badges = [
  {
    icon: Shield,
    title: 'SBA Approved Partner',
    description: 'Officially recognized by the Small Business Administration',
    color: 'from-blue-500 to-blue-600',
  },
  {
    icon: Lock,
    title: 'Bank-Level Security',
    description: '256-bit encryption and SOC 2 Type II certified',
    color: 'from-emerald-500 to-emerald-600',
  },
  {
    icon: Building2,
    title: 'Licensed Lenders Only',
    description: 'Every partner is vetted and federally licensed',
    color: 'from-orange-400 to-orange-500',
  },
  {
    icon: CheckCircle,
    title: 'No Hidden Fees',
    description: 'Transparent pricing with zero origination fees',
    color: 'from-blue-400 to-emerald-500',
  },
  {
    icon: Award,
    title: 'FDIC Insured Partners',
    description: 'Work with America\'s most trusted financial institutions',
    color: 'from-emerald-400 to-blue-500',
  },
  {
    icon: FileCheck,
    title: 'Compliance Guaranteed',
    description: 'All loans meet federal and state regulations',
    color: 'from-orange-500 to-orange-600',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

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
};

export default function TrustBadges() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background gradient orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-emerald-500/10 border border-white/5 mb-6">
            <Shield className="w-4 h-4 text-blue-400" />
            <span className="text-sm font-medium text-gray-400 uppercase tracking-wider">
              Trusted & Secure
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
            Your Security is Our{' '}
            <span className="bg-gradient-to-r from-blue-400 via-emerald-400 to-orange-400 text-transparent bg-clip-text">
              Priority
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            We maintain the highest standards of security, compliance, and transparency 
            in the lending marketplace industry
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {badges.map((badge, index) => {
            const Icon = badge.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.02, y: -4 }}
                className="group relative bg-[#111116] rounded-2xl border border-white/5 p-8 hover:border-white/10 transition-all duration-300"
              >
                {/* Gradient glow on hover */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/0 via-emerald-500/0 to-orange-500/0 opacity-0 group-hover:opacity-5 transition-opacity duration-300" />
                
                <div className="relative">
                  {/* Icon with gradient background */}
                  <div className="mb-6">
                    <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br ${badge.color} bg-opacity-10 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-semibold text-white mb-3 tracking-tight">
                    {badge.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {badge.description}
                  </p>
                </div>

                {/* Bottom accent line */}
                <div className={`absolute bottom-0 left-0 right-0 h-1 rounded-b-2xl bg-gradient-to-r ${badge.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom trust statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1], delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-3 px-6 py-4 rounded-full bg-white/5 backdrop-blur-xl border border-white/10">
            <div className="flex -space-x-2">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 border-2 border-[#0A0A0F]" />
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-emerald-500 to-emerald-600 border-2 border-[#0A0A0F]" />
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-orange-400 to-orange-500 border-2 border-[#0A0A0F]" />
            </div>
            <span className="text-sm font-medium text-gray-300">
              Trusted by <span className="text-white font-semibold">2,500+</span> businesses nationwide
            </span>
            <CheckCircle className="w-5 h-5 text-emerald-400" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}