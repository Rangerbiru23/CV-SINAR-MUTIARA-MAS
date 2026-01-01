'use client';

import { useState } from 'react';
import { Menu, X, Phone, MapPin, Building, Shield, Lock, Database, UserCheck, Eye, FileText } from 'lucide-react';
import Link from 'next/link';

export default function PrivacyPage() {
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
              <Link href="/privacy" className="text-blue-600 font-medium">Privacy</Link>
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
              <Link href="/privacy" className="block px-3 py-2 text-blue-600 font-medium">Privacy</Link>
              <Link href="/terms" className="block px-3 py-2 text-gray-900 hover:text-blue-600 font-medium">Terms & Conditions</Link>
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
            <Shield className="h-4 w-4 mr-2" />
            <span className="text-sm font-semibold">Kebijakan Privasi</span>
          </div>
          
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Kebijakan Privasi
            <span className="text-blue-600"> CV SINAR MUTIARA MAS</span>
          </h1>
          
          <p className="text-xl text-gray-600 leading-relaxed">
            Kami berkomitmen untuk melindungi privasi dan keamanan data pribadi Anda 
            sesuai dengan peraturan perundang-undangan yang berlaku di Indonesia.
          </p>
        </div>
      </section>

      {/* Privacy Content */}
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
                    Selamat datang di CV SINAR MUTIARA MAS. Kami menghargai kepercayaan Anda 
                    dalam menggunakan layanan konstruksi kami. Kebijakan Privasi ini menjelaskan 
                    bagaimana kami mengumpulkan, menggunakan, melindungi, dan membagikan informasi 
                    pribadi Anda saat Anda berinteraksi dengan perusahaan kami.
                  </p>
                </div>

                {/* Data Collection */}
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                    <Database className="h-6 w-6 text-blue-600 mr-3" />
                    Informasi yang Kami Kumpulkan
                  </h2>
                  
                  <div className="space-y-4">
                    <div className="border-l-4 border-blue-600 pl-4">
                      <h3 className="font-bold text-lg text-gray-900 mb-2">Informasi Identitas Pribadi</h3>
                      <ul className="text-gray-700 space-y-1">
                        <li>• Nama lengkap</li>
                        <li>• Alamat email</li>
                        <li>• Nomor telepon</li>
                        <li>• Alamat rumah/kantor</li>
                        <li>• Nomor identitas (KTP/SIM/Paspor)</li>
                      </ul>
                    </div>

                    <div className="border-l-4 border-cyan-600 pl-4">
                      <h3 className="font-bold text-lg text-gray-900 mb-2">Informasi Bisnis</h3>
                      <ul className="text-gray-700 space-y-1">
                        <li>• Nama perusahaan/instansi</li>
                        <li>• Jabatan</li>
                        <li>• Informasi proyek konstruksi</li>
                        <li>• Dokumen tender/penawaran</li>
                        <li>• Rencana anggaran proyek</li>
                      </ul>
                    </div>

                    <div className="border-l-4 border-blue-600 pl-4">
                      <h3 className="font-bold text-lg text-gray-900 mb-2">Informasi Teknis</h3>
                      <ul className="text-gray-700 space-y-1">
                        <li>• Spesifikasi teknis proyek</li>
                        <li>• Gambar dan desain konstruksi</li>
                        <li>• Dokumen perizinan</li>
                        <li>• Laporan progres proyek</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Data Usage */}
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                    <Eye className="h-6 w-6 text-blue-600 mr-3" />
                    Cara Kami Menggunakan Informasi Anda
                  </h2>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    {[
                      {
                        title: "Layanan Konstruksi",
                        description: "Untuk menyediakan layanan konstruksi bangunan sipil jalan yang Anda butuhkan",
                        icon: Building
                      },
                      {
                        title: "Komunikasi",
                        description: "Untuk menghubungi Anda terkait proyek, penawaran, dan informasi layanan",
                        icon: Phone
                      },
                      {
                        title: "Penagihan",
                        description: "Untuk proses penagihan dan pembayaran layanan konstruksi",
                        icon: FileText
                      },
                      {
                        title: "Penyempurnaan Layanan",
                        description: "Untuk meningkatkan kualitas layanan dan pengalaman pelanggan",
                        icon: UserCheck
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

                {/* Data Protection */}
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                    <Lock className="h-6 w-6 text-blue-600 mr-3" />
                    Perlindungan Data Anda
                  </h2>
                  
                  <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-6 rounded-2xl">
                    <p className="text-gray-700 mb-4">
                      CV SINAR MUTIARA MAS berkomitmen untuk melindungi informasi pribadi Anda dengan:
                    </p>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <Shield className="h-5 w-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">Enkripsi data yang kuat untuk penyimpanan dan transmisi</span>
                      </li>
                      <li className="flex items-start">
                        <Shield className="h-5 w-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">Akses terbatas hanya untuk authorized personnel</span>
                      </li>
                      <li className="flex items-start">
                        <Shield className="h-5 w-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">Backup data secara berkala dan aman</span>
                      </li>
                      <li className="flex items-start">
                        <Shield className="h-5 w-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">Audit keamanan berkala untuk mencegah breach</span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Data Sharing */}
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Pembagian Informasi</h2>
                  <p className="text-gray-700 mb-4">
                    Kami tidak akan menjual, menyewakan, atau membagikan informasi pribadi Anda 
                    kepada pihak ketiga tanpa persetujuan Anda, kecuali dalam kondisi berikut:
                  </p>
                  
                  <div className="space-y-3">
                    <div className="bg-yellow-50 border-l-4 border-yellow-600 p-4 rounded">
                      <h4 className="font-bold text-gray-900 mb-1">Kewajiban Hukum</h4>
                      <p className="text-gray-700 text-sm">Jika diwajibkan oleh hukum atau perintah pengadilan</p>
                    </div>
                    <div className="bg-yellow-50 border-l-4 border-yellow-600 p-4 rounded">
                      <h4 className="font-bold text-gray-900 mb-1">Partner Bisnis</h4>
                      <p className="text-gray-700 text-sm">Dengan mitra bisnis tepercaya untuk penyediaan layanan</p>
                    </div>
                    <div className="bg-yellow-50 border-l-4 border-yellow-600 p-4 rounded">
                      <h4 className="font-bold text-gray-900 mb-1">Keamanan</h4>
                      <p className="text-gray-700 text-sm">Untuk melindungi hak, properti, atau keselamatan kami atau pelanggan</p>
                    </div>
                  </div>
                </div>

                {/* User Rights */}
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                    <UserCheck className="h-6 w-6 text-blue-600 mr-3" />
                    Hak Anda sebagai Pengguna
                  </h2>
                  
                  <div className="grid gap-4">
                    {[
                      "Akses informasi pribadi yang kami simpan",
                      "Memperbaiki informasi yang tidak akurat",
                      "Menghapus informasi pribadi Anda",
                      "Menolak penggunaan informasi untuk tujuan pemasaran",
                      "Meminta salinan data pribadi Anda",
                      "Menarik persetujuan penggunaan data"
                    ].map((right, index) => (
                      <div key={index} className="flex items-center space-x-3 bg-gray-50 p-4 rounded-xl">
                        <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                        <span className="text-gray-700">{right}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Contact */}
                <div className="bg-gradient-to-r from-blue-600 to-cyan-600 p-8 rounded-2xl text-white">
                  <h2 className="text-2xl font-bold mb-4">Hubungi Kami</h2>
                  <p className="mb-6 text-blue-50">
                    Jika Anda memiliki pertanyaan tentang Kebijakan Privasi kami atau ingin 
                    menggunakan hak privasi Anda, silakan hubungi kami:
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

                {/* Update Policy */}
                <div className="bg-gray-100 p-6 rounded-2xl">
                  <h2 className="text-xl font-bold text-gray-900 mb-3">Pembaruan Kebijakan</h2>
                  <p className="text-gray-700">
                    CV SINAR MUTIARA MAS dapat memperbarui Kebijakan Privasi ini dari waktu ke waktu. 
                    Perubahan akan diberitahukan melalui website atau komunikasi langsung. 
                    Kebijakan ini terakhir diperbarui pada {new Date().toLocaleDateString('id-ID', { 
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
              <Link href="/privacy" className="text-white">Privacy Policy</Link>
              <Link href="/terms" className="hover:text-white transition-colors">Terms & Conditions</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function CheckCircle({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );
}