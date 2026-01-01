'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Phone, Mail, MapPin, ChevronRight, Shield, CheckCircle, Clock, Users, Award, Building, HardHat, Wrench, Truck } from 'lucide-react';
import Link from 'next/link';

export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 scroll-smooth">
      {/* Navigation */}
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className="fixed top-0 w-full bg-white/95 backdrop-blur-md shadow-sm z-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Building className="h-8 w-8 text-blue-600" />
              <div>
                <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                  CV SINAR MUTIARA MAS
                </h1>
                <p className="text-xs text-gray-600">Konstruksi Bangunan Sipil Jalan</p>
              </div>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-gray-900 hover:text-blue-600 transition-colors font-medium">Beranda</Link>
              <Link href="/privacy" className="text-gray-900 hover:text-blue-600 transition-colors font-medium">Privacy</Link>
              <Link href="/terms" className="text-gray-900 hover:text-blue-600 transition-colors font-medium">Terms & Conditions</Link>
              <button className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-6 py-2 rounded-full hover:shadow-lg transition-all duration-300 hover:scale-105">
                Hubungi Kami
              </button>
            </div>

            <button 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link href="/" className="block px-3 py-2 text-gray-900 hover:text-blue-600 font-medium">Beranda</Link>
              <Link href="/privacy" className="block px-3 py-2 text-gray-900 hover:text-blue-600 font-medium">Privacy</Link>
              <Link href="/terms" className="block px-3 py-2 text-gray-900 hover:text-blue-600 font-medium">Terms & Conditions</Link>
              <button className="w-full text-left bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-3 py-2 rounded-full mt-2">
                Hubungi Kami
              </button>
            </div>
          </div>
        )}
      </motion.nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-flex items-center bg-blue-100 text-blue-800 px-4 py-2 rounded-full mb-6"
              >
                <Award className="h-4 w-4 mr-2" />
                <span className="text-sm font-semibold">Profesional & Terpercaya</span>
              </motion.div>
              
              <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight"
              >
                <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                  CV SINAR MUTIARA MAS
                </span>
                <br />
                Spesialis Konstruksi
                <span className="text-blue-600"> Bangunan Sipil Jalan</span>
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="text-xl text-gray-600 mb-8 leading-relaxed"
              >
                Mitra terpercaya untuk proyek konstruksi infrastruktur jalan yang berkualitas, 
                aman, dan berkelanjutan. Menghadirkan solusi konstruksi modern dengan standar tertinggi.
              </motion.p>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-full hover:shadow-xl transition-all duration-300 font-semibold flex items-center justify-center"
                >
                  Konsultasi Proyek
                  <ChevronRight className="ml-2 h-5 w-5" />
                </motion.button>
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-full hover:bg-blue-50 transition-all duration-300 font-semibold"
                >
                  Lihat Portfolio
                </motion.button>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1 }}
                className="grid grid-cols-3 gap-6 mt-12"
              >
                <motion.div 
                  whileHover={{ scale: 1.1 }}
                  className="text-center"
                >
                  <div className="text-3xl font-bold text-blue-600">50+</div>
                  <div className="text-sm text-gray-600">Proyek Selesai</div>
                </motion.div>
                <motion.div 
                  whileHover={{ scale: 1.1 }}
                  className="text-center"
                >
                  <div className="text-3xl font-bold text-blue-600">10+</div>
                  <div className="text-sm text-gray-600">Tahun Pengalaman</div>
                </motion.div>
                <motion.div 
                  whileHover={{ scale: 1.1 }}
                  className="text-center"
                >
                  <div className="text-3xl font-bold text-blue-600">100%</div>
                  <div className="text-sm text-gray-600">Kepuasan Klien</div>
                </motion.div>
              </motion.div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="relative"
            >
              <motion.div 
                initial={{ rotate: 0 }}
                animate={{ rotate: 3 }}
                transition={{ duration: 2, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
                className="absolute inset-0 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-3xl opacity-20"
              />
              <motion.div 
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="relative bg-white rounded-3xl shadow-2xl p-8"
              >
                <div className="grid grid-cols-2 gap-6">
                  <motion.div 
                    whileHover={{ scale: 1.05 }}
                    className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-2xl"
                  >
                    <HardHat className="h-12 w-12 text-blue-600 mb-4" />
                    <h3 className="font-bold text-gray-900">Safety First</h3>
                    <p className="text-sm text-gray-600 mt-2">Standar keselamatan kerja tertinggi</p>
                  </motion.div>
                  <motion.div 
                    whileHover={{ scale: 1.05 }}
                    className="bg-gradient-to-br from-cyan-50 to-cyan-100 p-6 rounded-2xl"
                  >
                    <Wrench className="h-12 w-12 text-cyan-600 mb-4" />
                    <h3 className="font-bold text-gray-900">Quality Work</h3>
                    <p className="text-sm text-gray-600 mt-2">Kualitas terjamin dengan material terbaik</p>
                  </motion.div>
                  <motion.div 
                    whileHover={{ scale: 1.05 }}
                    className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-2xl"
                  >
                    <Truck className="h-12 w-12 text-blue-600 mb-4" />
                    <h3 className="font-bold text-gray-900">On Time</h3>
                    <p className="text-sm text-gray-600 mt-2">Pengerjaan tepat waktu</p>
                  </motion.div>
                  <motion.div 
                    whileHover={{ scale: 1.05 }}
                    className="bg-gradient-to-br from-cyan-50 to-cyan-100 p-6 rounded-2xl"
                  >
                    <Users className="h-12 w-12 text-cyan-600 mb-4" />
                    <h3 className="font-bold text-gray-900">Expert Team</h3>
                    <p className="text-sm text-gray-600 mt-2">Tim profesional berpengalaman</p>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4"
            >
              Layanan <span className="text-blue-600">Unggulan</span> Kami
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-xl text-gray-600 max-w-3xl mx-auto"
            >
              Solusi konstruksi komprehensif untuk berbagai kebutuhan infrastruktur jalan
            </motion.p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Building,
                title: "Konstruksi Jalan Raya",
                description: "Pembangunan jalan raya dengan standar nasional dan internasional",
                features: ["Jalan Nasional", "Jalan Provinsi", "Jalan Kabupaten"]
              },
              {
                icon: Truck,
                title: "Jalan Tol",
                description: "Konstruksi jalan tol dengan sistem yang modern dan efisien",
                features: ["Jalan Tol Urban", "Jalan Tol Rural", "Maintenance"]
              },
              {
                icon: Wrench,
                title: "Jembatan",
                description: "Struktur jembatan kokoh dan aman untuk berbagai kapasitas",
                features: ["Jembatan Beton", "Jembatan Baja", "Jembatan Gantung"]
              },
              {
                icon: HardHat,
                title: "Drainase",
                description: "Sistem drainase yang efektif untuk mencegah banjir",
                features: ["Drainase Kota", "Selokan", "Saluran Air"]
              },
              {
                icon: Shield,
                title: "Pekerjaan Tanah",
                description: "Persiapan lahan dan pekerjaan tanah yang presisi",
                features: ["Galian", "Urugan", "Pemadatan"]
              },
              {
                icon: Award,
                title: "Perkerasan Jalan",
                description: "Berbagai jenis perkerasan jalan dengan kualitas terbaik",
                features: ["Aspal Hotmix", "Beton", "Lapisan Tipis"]
              }
            ].map((service, index) => (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
                className="group bg-white border border-gray-200 rounded-2xl p-8 transition-all duration-300 hover:border-blue-200"
              >
                <motion.div 
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="bg-gradient-to-br from-blue-100 to-cyan-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-6"
                >
                  <service.icon className="h-8 w-8 text-blue-600" />
                </motion.div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <motion.li 
                      key={idx} 
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: (index * 0.1) + (idx * 0.1) }}
                      className="flex items-center text-sm text-gray-600"
                    >
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                      {feature}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-cyan-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <motion.h2 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6"
              >
                Mengapa Memilih <span className="text-blue-600">CV SINAR MUTIARA MAS</span>?
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-lg text-gray-600 mb-8"
              >
                Kami adalah mitra konstruksi terpercaya dengan komitmen terhadap kualitas, 
                keselamatan, dan kepuasan pelanggan.
              </motion.p>

              <div className="space-y-6">
                {[
                  {
                    icon: CheckCircle,
                    title: "Sertifikasi Terjamin",
                    description: "Memiliki semua sertifikasi dan lisensi yang diperlukan untuk proyek konstruksi"
                  },
                  {
                    icon: Clock,
                    title: "Tepat Waktu",
                    description: "Track record pengiriman proyek tepat waktu tanpa mengorbankan kualitas"
                  },
                  {
                    icon: Shield,
                    title: "Garansi Kualitas",
                    description: "Memberikan garansi untuk semua pekerjaan konstruksi yang kami lakukan"
                  },
                  {
                    icon: Users,
                    title: "Tim Profesional",
                    description: "Tenaga ahli berpengalaman dan bersertifikat di bidang konstruksi"
                  }
                ].map((item, index) => (
                  <motion.div 
                    key={index} 
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    className="flex items-start space-x-4"
                  >
                    <motion.div 
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                      className="bg-white p-3 rounded-xl shadow-sm"
                    >
                      <item.icon className="h-6 w-6 text-blue-600" />
                    </motion.div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <motion.div 
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                whileHover={{ scale: 1.02 }}
                className="bg-gradient-to-br from-blue-600 to-cyan-600 rounded-3xl p-8 text-white"
              >
                <h3 className="text-2xl font-bold mb-6">Siap Memulai Proyek Anda?</h3>
                <p className="mb-8 text-blue-50">
                  Konsultasikan kebutuhan konstruksi Anda dengan tim ahli kami. 
                  Dapatkan penawaran terbaik dan solusi yang tepat untuk proyek Anda.
                </p>
                <div className="space-y-4">
                  <motion.div 
                    whileHover={{ scale: 1.05 }}
                    className="bg-white/20 backdrop-blur-sm rounded-xl p-4"
                  >
                    <div className="flex items-center space-x-3">
                      <Phone className="h-5 w-5" />
                      <span>082382466172</span>
                    </div>
                  </motion.div>
                  <motion.div 
                    whileHover={{ scale: 1.05 }}
                    className="bg-white/20 backdrop-blur-sm rounded-xl p-4"
                  >
                    <div className="flex items-center space-x-3">
                      <MapPin className="h-5 w-5" />
                      <span className="text-sm">Perum Manunggal Properti Blok F 12-15, Slempit, Kedamean, Gresik, Jawa Timur</span>
                    </div>
                  </motion.div>
                </div>
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full bg-white text-blue-600 font-bold py-4 rounded-xl mt-6 hover:bg-blue-50 transition-colors"
                >
                  Hubungi Kami Sekarang
                </motion.button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <motion.section 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="py-16 bg-gradient-to-r from-blue-600 to-cyan-600"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-3xl lg:text-4xl font-bold text-white mb-6"
          >
            Wujudkan Infrastruktur Berkualitas Bersama Kami
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl text-blue-50 mb-8"
          >
            Percayakan proyek konstruksi Anda kepada ahlinya. 
            CV SINAR MUTIARA MAS - Mitra Terpercaya Konstruksi Indonesia.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-blue-600 px-8 py-4 rounded-full hover:shadow-xl transition-all duration-300 font-semibold"
            >
              Dapatkan Penawaran
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-white text-white px-8 py-4 rounded-full hover:bg-white/10 transition-all duration-300 font-semibold"
            >
              Lihat Portfolio
            </motion.button>
          </motion.div>
        </div>
      </motion.section>

      {/* Footer */}
      <motion.footer 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="bg-gray-900 text-white py-12"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Building className="h-8 w-8 text-blue-400" />
                <h3 className="text-xl font-bold">CV SINAR MUTIARA MAS</h3>
              </div>
              <p className="text-gray-400 mb-4">
                Spesialis konstruksi bangunan sipil jalan yang profesional dan terpercaya.
              </p>
              <div className="flex space-x-4">
                <div className="bg-blue-600 p-2 rounded-lg">
                  <Phone className="h-4 w-4" />
                </div>
                <div className="bg-blue-600 p-2 rounded-lg">
                  <MapPin className="h-4 w-4" />
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-bold mb-4">Layanan</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Konstruksi Jalan Raya</li>
                <li>Pembangunan Jalan Tol</li>
                <li>Konstruksi Jembatan</li>
                <li>Sistem Drainase</li>
                <li>Pekerjaan Tanah</li>
                <li>Perkerasan Jalan</li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Kontak</h4>
              <div className="space-y-3 text-gray-400">
                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">
                    PERUM MANUNGGAL PROPERTI BLOK F 12-15, Desa/Kelurahan Slempit, 
                    Kec. Kedamean, Kab. Gresik, Provinsi Jawa Timur
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 flex-shrink-0" />
                  <span>082382466172</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 CV SINAR MUTIARA MAS. All rights reserved.</p>
            <div className="mt-4 space-x-6">
              <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="hover:text-white transition-colors">Terms & Conditions</Link>
            </div>
          </div>
        </div>
      </motion.footer>
    </div>
  );
}