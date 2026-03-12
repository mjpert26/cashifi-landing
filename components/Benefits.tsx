import { motion } from 'framer-motion';
import { Clock, Users, Award, TrendingUp, Shield, Zap } from 'lucide-react';

const benefits = [
  {
    icon: Clock,
    title: 'Fast Approval Process',
    description: 'Get pre-qualified in minutes and receive funding decisions in as little as 48 hours. Our streamlined process eliminates the typical SBA loan delays.',
    gradient: 'from-blue-500 to-blue-600',
    iconBg: 'bg-blue-500/10',
    iconColor: 'text-blue-400'
  },
  {
    icon: Users,
    title: 'Access to Multiple Lenders',
    description: 'Compare offers from our network of 150+ vetted SBA lenders in one place. Find the best rates and terms without shopping around yourself.',
    gradient: 'from-emerald-500 to-emerald-600',
    iconBg: 'bg-emerald-500/10',
    iconColor: 'text-emerald-400'
  },
  {
    icon: Award,
    title: 'Expert Guidance',
    description: 'Our SBA specialists guide you through every step of the loan process, ensuring you choose the right product and submit a winning application.',
    gradient: 'from-orange-400 to-orange-500',
    iconBg: 'bg-orange-400/10',
    iconColor: 'text-orange-400'
  },
  {
    icon: TrendingUp,
    title: 'Competitive Rates',
    description: 'Leverage our marketplace to secure the most competitive rates available. Our lenders compete for your business, ensuring you get the best terms.',
    gradient: 'from-blue-500 to-emerald-500',
    iconBg: 'bg-blue-500/10',
    iconColor: 'text-blue-400'
  },
  {
    icon: Shield,
    title: 'Verified Lenders Only',
    description: 'Every lender in our network is fully licensed and SBA-approved. We thoroughly vet each partner to ensure they meet our strict quality standards.',
    gradient: 'from-emerald-500 to-orange-400',
    iconBg: 'bg-emerald-500/10',
    iconColor: 'text-emerald-400'
  },
  {
    icon: Zap,
    title: 'Simple Application',
    description: 'Fill out one application to be matched with multiple lenders. No need to repeat paperwork or chase down different banks for quotes.',
    gradient: 'from-orange-400 to-blue-500',
    iconBg: 'bg-orange-400/10',
    iconColor: 'text-orange-400'
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.25, 0.4, 0.25, 1]
    }
  }
};

export default function Benefits() {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6">
            <div className="w-2 h-2 rounded-full bg-emerald-400" />
            <span className="text-sm font-medium tracking-wide uppercase text-gray-400">Why Choose Cashifi</span>
          </div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight">
            <span className="bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">
              Built for Business
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-emerald-400 to-orange-400 bg-clip-text text-transparent">
              Owners Like You
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            We've reimagined the SBA lending experience from the ground up. No more endless paperwork, 
            confusing terms, or months of waiting. Just fast, transparent access to capital.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.02, translateY: -4 }}
                className="group relative bg-[#111116] rounded-2xl border border-white/5 p-8 hover:border-white/10 transition-all duration-300"
              >
                {/* Gradient overlay on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${benefit.gradient} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`} />
                
                <div className="relative">
                  {/* Icon */}
                  <div className={`${benefit.iconBg} w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className={`w-7 h-7 ${benefit.iconColor}`} strokeWidth={2} />
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-semibold mb-4 text-white group-hover:text-white/90 transition-colors">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {benefit.description}
                  </p>

                  {/* Decorative gradient line */}
                  <div className={`mt-6 h-1 w-0 group-hover:w-16 bg-gradient-to-r ${benefit.gradient} rounded-full transition-all duration-500`} />
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1], delay: 0.4 }}
          className="mt-20 text-center"
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-blue-500 to-emerald-500 text-white rounded-full px-10 py-4 font-semibold text-lg shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all duration-300"
            >
              Get Your Free Quote
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white/5 border border-white/10 text-white rounded-full px-10 py-4 font-semibold text-lg hover:bg-white/10 transition-all duration-300"
            >
              Compare Loan Options
            </motion.button>
          </div>
          <p className="text-sm text-gray-500 mt-6">
            No credit impact to get pre-qualified • See rates in minutes
          </p>
        </motion.div>
      </div>
    </section>
  );
}