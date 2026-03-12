import Link from 'next/link';
import { motion } from 'framer-motion';
import { Building2, Mail, Phone, MapPin, Shield, Lock, Award, FileCheck } from 'lucide-react';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    products: [
      { name: 'SBA 7(a) Loans', href: '#' },
      { name: 'CDC/504 Loans', href: '#' },
      { name: 'SBA CAPLines', href: '#' },
      { name: 'Alternative Financing', href: '#' },
      { name: 'Compare Options', href: '#' }
    ],
    company: [
      { name: 'About Us', href: '#' },
      { name: 'How It Works', href: '#' },
      { name: 'Lender Partners', href: '#' },
      { name: 'Success Stories', href: '#' },
      { name: 'Blog & Resources', href: '#' }
    ],
    support: [
      { name: 'Help Center', href: '#' },
      { name: 'Contact Support', href: '#' },
      { name: 'Application Status', href: '#' },
      { name: 'FAQ', href: '#' },
      { name: 'SBA Resources', href: '#' }
    ],
    legal: [
      { name: 'Privacy Policy', href: '#' },
      { name: 'Terms of Service', href: '#' },
      { name: 'Licensing', href: '#' },
      { name: 'Compliance', href: '#' },
      { name: 'Disclosures', href: '#' }
    ]
  };

  const trustBadges = [
    { icon: Shield, text: 'SBA Approved Partner' },
    { icon: Lock, text: 'Bank-Level Security' },
    { icon: Award, text: 'Licensed Lenders Only' },
    { icon: FileCheck, text: 'No Hidden Fees' }
  ];

  return (
    <footer className="relative bg-[#09090B] border-t border-white/5">
      {/* Gradient Orb */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-[#3B82F6]/10 via-[#10B981]/10 to-[#FB923C]/10 rounded-full blur-3xl pointer-events-none" />
      
      <div className="relative max-w-[1280px] mx-auto px-6">
        {/* Trust Badges */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 py-12 border-b border-white/5"
        >
          {trustBadges.map((badge, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="flex flex-col items-center gap-3 p-6 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl"
            >
              <div className="p-3 bg-gradient-to-br from-[#3B82F6]/20 to-[#10B981]/20 rounded-xl">
                <badge.icon className="w-5 h-5 text-[#3B82F6]" />
              </div>
              <span className="text-xs text-center text-gray-400 font-medium">
                {badge.text}
              </span>
            </motion.div>
          ))}
        </motion.div>

        {/* Main Footer Content */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 py-16"
        >
          {/* Brand Column */}
          <motion.div variants={fadeInUp} className="lg:col-span-2">
            <Link href="/" className="inline-flex items-center gap-3 mb-6 group">
              <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-br from-[#3B82F6] to-[#10B981] rounded-xl group-hover:scale-105 transition-transform">
                <Building2 className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                Cashifi
              </span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-6 max-w-sm">
              The #1 SBA Lending Marketplace connecting businesses with top-tier lenders nationwide. Access every SBA loan product in one place.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm text-gray-400 hover:text-white transition-colors">
                <Mail className="w-4 h-4 text-[#3B82F6]" />
                <a href="mailto:support@cashifi.com">support@cashifi.com</a>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-400 hover:text-white transition-colors">
                <Phone className="w-4 h-4 text-[#10B981]" />
                <a href="tel:+18885551234">(888) 555-1234</a>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-400">
                <MapPin className="w-4 h-4 text-[#FB923C]" />
                <span>San Francisco, CA</span>
              </div>
            </div>
          </motion.div>

          {/* Products */}
          <motion.div variants={fadeInUp}>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-6">
              Products
            </h3>
            <ul className="space-y-3">
              {footerLinks.products.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-white transition-colors inline-block relative group"
                  >
                    {link.name}
                    <span className="absolute bottom-0 left-0 w-0 h-px bg-gradient-to-r from-[#3B82F6] to-[#10B981] group-hover:w-full transition-all duration-300" />
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Company */}
          <motion.div variants={fadeInUp}>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-6">
              Company
            </h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-white transition-colors inline-block relative group"
                  >
                    {link.name}
                    <span className="absolute bottom-0 left-0 w-0 h-px bg-gradient-to-r from-[#3B82F6] to-[#10B981] group-hover:w-full transition-all duration-300" />
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Support */}
          <motion.div variants={fadeInUp}>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-6">
              Support
            </h3>
            <ul className="space-y-3">
              {footerLinks.support.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-white transition-colors inline-block relative group"
                  >
                    {link.name}
                    <span className="absolute bottom-0 left-0 w-0 h-px bg-gradient-to-r from-[#3B82F6] to-[#10B981] group-hover:w-full transition-all duration-300" />
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Legal */}
          <motion.div variants={fadeInUp}>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-6">
              Legal
            </h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-white transition-colors inline-block relative group"
                  >
                    {link.name}
                    <span className="absolute bottom-0 left-0 w-0 h-px bg-gradient-to-r from-[#3B82F6] to-[#10B981] group-hover:w-full transition-all duration-300" />
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
          className="py-8 border-t border-white/5"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-500 text-center md:text-left">
              © {currentYear} Cashifi Technologies, Inc. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link
                href="#"
                className="text-sm text-gray-500 hover:text-white transition-colors"
                aria-label="Twitter"
              >
                Twitter
              </Link>
              <Link
                href="#"
                className="text-sm text-gray-500 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                LinkedIn
              </Link>
              <Link
                href="#"
                className="text-sm text-gray-500 hover:text-white transition-colors"
                aria-label="Facebook"
              >
                Facebook
              </Link>
            </div>
          </div>
          
          {/* Compliance Language */}
          <div className="mt-8 p-6 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl">
            <p className="text-xs text-gray-500 leading-relaxed">
              <strong className="text-gray-400">Important Disclosures:</strong> Cashifi is not a lender and does not make credit decisions. We are a marketplace platform that connects businesses with SBA-approved lenders and financing partners. All loan applications are subject to lender approval and qualification criteria. Loan terms, rates, and availability vary by lender and are subject to change without notice. SBA loans are subject to SBA eligibility requirements. Not all businesses will qualify for all loan products. Cashifi does not guarantee loan approval or specific terms. Licensed in all states where required. NMLS #123456789. Equal Housing Lender.
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}