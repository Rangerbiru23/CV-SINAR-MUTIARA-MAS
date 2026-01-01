'use client';

import { useState } from 'react';
import { Menu, X, Phone, MapPin, Building, FileText, Shield, AlertCircle, CheckCircle, Users, Hammer, Clock, DollarSign } from 'lucide-react';
import Link from 'next/link';

export default function TermsPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-md shadow-sm z-50">
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
              <Link href="/terms" className="text-blue-600 font-medium">Terms & Conditions</Link>
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
              <Link href="/terms" className="block px-3 py-2 text-blue-600 font-medium">Terms & Conditions</Link>
              <button className="w-full text-left bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-3 py-2 rounded-full mt-2">
                Hubungi Kami
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center bg-blue-100 text-blue-800 px-4 py-2 rounded-full mb-6">
            <FileText className="h-4 w-4 mr-2" />
            <span className="text-sm font-semibold">Syarat & Ketentuan</span>
          </div>
          
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Syarat & Ketentuan
            <span className="text-blue-600"> CV SINAR MUTIARA MAS</span>
          </h1>
          
          <p className="text-xl text-gray-600 leading-relaxed">
            Syarat dan ketentuan ini mengatur penggunaan layanan konstruksi yang 
            disediakan oleh CV SINAR MUTIARA MAS untuk memastikan kerjasama yang transparan dan profesional.
          </p>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl shadow-xl p-8 lg:p-12">
            
            <div className="prose prose-lg max-w-none">
              <div className="space-y-8">
                
                {/* Introduction */}
                <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-6 rounded-2xl">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                    <FileText className="h-6 w-6 text-blue-600 mr-3" />
                    Pendahuluan
                  </h2>
                  <p className="text-gray-700 leading-relaxed">
                    Selamat datang di CV SINAR MUTIARA MAS. Dokumen Syarat dan Ketentuan ini 
                    ("Syarat & Ketentuan") mengatur penggunaan layanan konstruksi bangunan sipil jalan 
                    yang kami sediakan. Dengan menggunakan layanan kami, Anda setuju untuk mematuhi 
                    syarat dan ketentuan yang berlaku.
                  </p>
                </div>

                {/* Services */}
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                    <Hammer className="h-6 w-6 text-blue-600 mr-3" />
                    Layanan Konstruksi
                  </h2>
                  
                  <div className="space-y-4">
                    <div className="bg-gray-50 p-6 rounded-xl">
                      <h3 className="font-bold text-lg text-gray-900 mb-3">Lingkup Layanan</h3>
                      <ul className="text-gray-700 space-y-2">
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                          <span>Konstruksi jalan raya, jalan tol, dan jembatan</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                          <span>Pekerjaan tanah dan sistem drainase</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                          <span>Perkerasan jalan dan maintenance infrastruktur</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                          <span>Konsultasi teknik dan perencanaan proyek</span>
                        </li>
                      </ul>
                    </div>

                    <div className="bg-blue-50 p-6 rounded-xl">
                      <h3 className="font-bold text-lg text-gray-900 mb-3">Standar Kualitas</h3>
                      <p className="text-gray-700 mb-3">
                        Semua layanan konstruksi kami dilaksanakan sesuai dengan:
                      </p>
                      <ul className="text-gray-700 space-y-2">
                        <li>• Standar Nasional Indonesia (SNI)</li>
                        <li>• Spesifikasi teknis yang disepakati</li>
                        <li>• Prosedur keselamatan kerja (K3)</li>
                        <li>• Peraturan perundang-undangan yang berlaku</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Client Responsibilities */}
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                    <Users className="h-6 w-6 text-blue-600 mr-3" />
                    Kewajiban Klien
                  </h2>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    {[
                      {
                        title: "Informasi Akurat",
                        description: "Memberikan informasi proyek yang lengkap dan akurat",
                        icon: FileText
                      },
                      {
                        title: "Dokumen Lengkap",
                        description: "Menyediakan dokumen perizinan yang diperlukan",
                        icon: Shield
                      },
                      {
                        title: "Pembayaran Tepat Waktu",
                        description: "Melakukan pembayaran sesuai kesepakatan kontrak",
                        icon: DollarSign
                      },
                      {
                        title: "Kerjasama",
                        description: "Bekerjasama dalam proses pelaksanaan proyek",
                        icon: Users
                      }
                    ].map((item, index) => (
                      <div key={index} className="bg-gray-50 p-6 rounded-xl">
                        <div className="flex items-start space-x-3">
                          <div className="bg-blue-100 p-2 rounded-lg">
                            <item.icon className="h-5 w-5 text-blue-600" />
                          </div>
                          <div>
                            <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                            <p className="text-gray-600 text-sm">{item.description}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Payment Terms */}
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                    <DollarSign className="h-6 w-6 text-blue-600 mr-3" />
                    Syarat Pembayaran
                  </h2>
                  
                  <div className="space-y-4">
                    <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-xl">
                      <h3 className="font-bold text-lg text-gray-900 mb-3">Struktur Pembayaran</h3>
                      <ul className="text-gray-700 space-y-2">
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                          <span><strong>Uang Muka (DP):</strong> 30% dari total nilai kontrak</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                          <span><strong>Progress Pembayaran:</strong> Sesuai tahapan penyelesaian</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                          <span><strong>Pelunasan:</strong> 100% setelah serah terima proyek</span>
                        </li>
                      </ul>
                    </div>

                    <div className="bg-yellow-50 border-l-4 border-yellow-600 p-4 rounded">
                      <h4 className="font-bold text-gray-900 mb-1 flex items-center">
                        <AlertCircle className="h-5 w-5 text-yellow-600 mr-2" />
                        Keterlambatan Pembayaran
                      </h4>
                      <p className="text-gray-700 text-sm">
                        Keterlambatan pembayaran akan dikenakan bunga 2% per bulan dari total nilai 
                        yang terhutang sesuai dengan ketentuan yang berlaku.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Project Timeline */}
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                    <Clock className="h-6 w-6 text-blue-600 mr-3" />
                    Waktu Pelaksanaan Proyek
                  </h2>
                  
                  <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-6 rounded-2xl">
                    <div className="space-y-4">
                      <div>
                        <h3 className="font-bold text-gray-900 mb-2">Estimasi Waktu</h3>
                        <p className="text-gray-700">
                          Waktu pelaksanaan proyek akan ditentukan berdasarkan:
                        </p>
                        <ul className="mt-2 space-y-1 text-gray-700">
                          <li>• Skala dan kompleksitas proyek</li>
                          <li>• Ketersediaan material</li>
                          <li>• Kondisi cuaca dan lokasi</li>
                          <li>• Perizinan dan regulasi setempat</li>
                        </ul>
                      </div>

                      <div className="bg-white p-4 rounded-xl">
                        <h4 className="font-bold text-gray-900 mb-2">Force Majeure</h4>
                        <p className="text-gray-600 text-sm">
                          CV SINAR MUTIARA MAS tidak bertanggung jawab atas keterlambatan yang 
                          disebabkan oleh keadaan di luar kendali kami (force majeure) seperti 
                          bencana alam, perubahan regulasi, atau situasi politik yang tidak stabil.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Warranty */}
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Garansi & Jaminan</h2>
                  
                  <div className="grid gap-4">
                    <div className="bg-green-50 border-l-4 border-green-600 p-4 rounded">
                      <h4 className="font-bold text-gray-900 mb-2">Garansi Konstruksi</h4>
                      <ul className="text-gray-700 text-sm space-y-1">
                        <li>• Struktur utama: 12 bulan</li>
                        <li>• Perkerasan jalan: 6 bulan</li>
                        <li>• Sistem drainase: 6 bulan</li>
                        <li>• Pekerjaan finishing: 3 bulan</li>
                      </ul>
                    </div>

                    <div className="bg-blue-50 border-l-4 border-blue-600 p-4 rounded">
                      <h4 className="font-bold text-gray-900 mb-2">Layanan Purnajual</h4>
                      <p className="text-gray-700 text-sm">
                        Kami menyediakan layanan maintenance dan perbaikan selama periode garansi 
                        untuk memastikan kualitas dan fungsionalitas konstruksi tetap terjaga.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Intellectual Property */}
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Hak Kekayaan Intelektual</h2>
                  <div className="bg-gray-50 p-6 rounded-xl">
                    <p className="text-gray-700 mb-4">
                      Semua desain, gambar teknik, dokumen perencanaan, dan metodologi kerja 
                      yang dikembangkan oleh CV SINAR MUTIARA MAS merupakan hak kekayaan intelektual 
                      perusahaan dan dilindungi oleh hukum yang berlaku.
                    </p>
                    <p className="text-gray-700">
                      Klien tidak diperkenankan menggunakan, menyalin, atau mendistribusikan 
                      dokumen-dokumen tersebut tanpa izin tertulis dari CV SINAR MUTIARA MAS.
                    </p>
                  </div>
                </div>

                {/* Dispute Resolution */}
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Penyelesaian Sengketa</h2>
                  <div className="bg-gradient-to-r from-orange-50 to-red-50 p-6 rounded-2xl">
                    <p className="text-gray-700 mb-4">
                      Segala sengketa yang timbul dari penggunaan layanan kami akan diselesaikan 
                      melalui:
                    </p>
                    <ol className="space-y-3 text-gray-700">
                      <li className="flex items-start">
                        <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 flex-shrink-0">1</span>
                        <span>Musyawarah dan mufakat antara kedua belah pihak</span>
                      </li>
                      <li className="flex items-start">
                        <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 flex-shrink-0">2</span>
                        <span>Mediasi melalui pihak ketiga yang netral</span>
                      </li>
                      <li className="flex items-start">
                        <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 flex-shrink-0">3</span>
                        <span>Penyelesaian melalui pengadilan negeri Gresik</span>
                      </li>
                    </ol>
                  </div>
                </div>

                {/* Limitation of Liability */}
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Pembatasan Tanggung Jawab</h2>
                  <div className="bg-red-50 border-l-4 border-red-600 p-6 rounded">
                    <p className="text-gray-700 mb-3">
                      CV SINAR MUTIARA MAS tidak bertanggung jawab atas:
                    </p>
                    <ul className="text-gray-700 space-y-2">
                      <li>• Kerugian tidak langsung atau konsekuensial</li>
                      <li>• Kehilangan keuntungan atau peluang bisnis</li>
                      <li>• Kerusakan yang disebabkan oleh pihak ketiga</li>
                      <li>• Penggunaan layanan yang tidak sesuai dengan tujuan</li>
                    </ul>
                  </div>
                </div>

                {/* Contact */}
                <div className="bg-gradient-to-r from-blue-600 to-cyan-600 p-8 rounded-2xl text-white">
                  <h2 className="text-2xl font-bold mb-4">Hubungi Kami</h2>
                  <p className="mb-6 text-blue-50">
                    Jika Anda memiliki pertanyaan tentang Syarat & Ketentuan kami, 
                    silakan hubungi kami untuk informasi lebih lanjut:
                  </p>
                  
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <Phone className="h-5 w-5" />
                      <span>082382466172</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <MapPin className="h-5 w-5 mt-0.5" />
                      <span className="text-sm">
                        PERUM MANUNGGAL PROPERTI BLOK F 12-15, Desa/Kelurahan Slempit, 
                        Kec. Kedamean, Kab. Gresik, Provinsi Jawa Timur
                      </span>
                    </div>
                  </div>
                </div>

                {/* Update Terms */}
                <div className="bg-gray-100 p-6 rounded-2xl">
                  <h2 className="text-xl font-bold text-gray-900 mb-3">Pembaruan Syarat & Ketentuan</h2>
                  <p className="text-gray-700">
                    CV SINAR MUTIARA MAS berhak mengubah Syarat & Ketentuan ini sewaktu-waktu. 
                    Perubahan akan diberitahukan melalui website atau komunikasi langsung. 
                    Penggunaan layanan setelah perubahan berarti Anda menerima syarat dan ketentuan yang baru.
                  </p>
                  <p className="text-gray-700 mt-3">
                    Syarat & Ketentuan ini berlaku sejak {new Date().toLocaleDateString('id-ID', { 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}.
                  </p>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 mt-16">
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
              <Link href="/" className="hover:text-white transition-colors">Beranda</Link>
              <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="text-white">Terms & Conditions</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}