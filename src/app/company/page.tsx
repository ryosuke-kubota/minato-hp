"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Menu, X } from "lucide-react"
import { FadeIn } from '@/components/ScrollAnimations'
import Link from 'next/link'
import { useState } from 'react'
import nextConfig from "../../../next.config.js";

const BASE_PATH = nextConfig.basePath || "";

export default function Company() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white border-b border-gray-100 sticky top-0 z-50 backdrop-blur-sm bg-white/95">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href={`/${BASE_PATH}/`} className="flex items-center space-x-2">
              <div className="text-xl font-bold text-gray-900">MINATO</div>
              <div className="text-sm text-gray-500 hidden sm:block">株式会社ミナト</div>
            </Link>
            <nav className="hidden lg:flex items-center space-x-8">
              <Link href={`${BASE_PATH}/#about`} className="text-sm text-gray-600 hover:text-gray-900 transition-colors">ミナトについて</Link>
              <Link href={`${BASE_PATH}/#services`} className="text-sm text-gray-600 hover:text-gray-900 transition-colors">事業内容</Link>
              <Link href={`${BASE_PATH}/company`} className="text-sm text-gray-600 hover:text-gray-900 transition-colors">会社概要</Link>
              <Link href={`${BASE_PATH}/#contact`} className="text-sm text-gray-600 hover:text-gray-900 transition-colors">お問い合わせ</Link>
            </nav>
            <div className="lg:hidden flex items-center space-x-4">
              <Button
                className="lg:hidden"
                variant="ghost"
                size="sm"
                onClick={toggleMobileMenu}
                aria-label="メニューを開く"
              >
                {isMobileMenuOpen ? (
                  <X className="h-4 w-4" />
                ) : (
                  <Menu className="h-4 w-4" />
                )}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-lg">
            <nav className="container mx-auto px-4 py-4">
              <div className="flex flex-col space-y-4">
                <Link
                  href={`${BASE_PATH}/#about`}
                  className="text-sm text-gray-600 hover:text-gray-900 transition-colors py-2"
                  onClick={closeMobileMenu}
                >
                  ミナトについて
                </Link>
                <Link
                  href={`${BASE_PATH}/#services`}
                  className="text-sm text-gray-600 hover:text-gray-900 transition-colors py-2"
                  onClick={closeMobileMenu}
                >
                  事業内容
                </Link>
                <Link
                  href={`${BASE_PATH}/company`}
                  className="text-sm text-gray-600 hover:text-gray-900 transition-colors py-2"
                  onClick={closeMobileMenu}
                >
                  会社概要
                </Link>
                <Link
                  href={`${BASE_PATH}/#contact`}
                  className="text-sm text-gray-600 hover:text-gray-900 transition-colors py-2"
                  onClick={closeMobileMenu}
                >
                  お問い合わせ
                </Link>
              </div>
            </nav>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="py-12 pb-6 md:pb-12 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-4 lg:px-8">
          <FadeIn>
            <div className="text-center">
              <div className="inline-block bg-blue-100 text-blue-600 rounded-full px-4 py-2 text-xs md:text-sm font-medium mb-4">
                COMPANY PROFILE
              </div>
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                会社概要
              </h2>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Company Information Table */}
      <section className="py-12 pt-0 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <FadeIn>
              <Card className="border-0 shadow-xl bg-white">
                <CardHeader className="pb-8">
                  <CardTitle className="text-base md:text-2xl font-bold text-gray-900 mb-0 md:mb-4">基本情報</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <tbody className="divide-y divide-gray-100 text-xs md:text-lg">
                        <tr className="hover:bg-gray-50 transition-colors">
                          <td className="py-4 px-4 font-semibold text-gray-900 bg-gray-50 w-1/3">会社名</td>
                          <td className="py-4 px-4 text-gray-600">株式会社ミナト</td>
                        </tr>
                        <tr className="hover:bg-gray-50 transition-colors">
                          <td className="py-4 px-4 font-semibold text-gray-900 bg-gray-50">代表者</td>
                          <td className="py-4 px-4 text-gray-600">代表取締役 佐渡章悟</td>
                        </tr>
                        <tr className="hover:bg-gray-50 transition-colors">
                          <td className="py-4 px-4 font-semibold text-gray-900 bg-gray-50">本社所在地</td>
                          <td className="py-4 px-4 text-gray-600">
                            〒900-0014<br />
                            沖縄県那覇市松尾2-10-23 1F
                          </td>
                        </tr>
                        <tr className="hover:bg-gray-50 transition-colors">
                          <td className="py-4 px-4 font-semibold text-gray-900 bg-gray-50">事業内容</td>
                          <td className="py-4 px-4 text-gray-600">
                            不動産売買・管理業<br />
                            ホテル売買・管理業
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Access Information */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                アクセス
              </h2>
            </div>
          </FadeIn>

          <div className="max-w-4xl mx-auto">
            <FadeIn delay={200}>
              <Card className="border-0 shadow-xl bg-white">
                <CardContent className="p-8">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-base md:text-xl font-bold text-gray-900 mb-6 flex items-center">
                        <MapPin className="w-6 h-6 mr-2 text-blue-600" />
                        本社所在地
                      </h3>
                      <div className="space-y-4 text-gray-600 text-xs md:text-lg">
                        <div>
                          <p className="font-semibold">住所</p>
                          <p>〒900-0014<br />沖縄県那覇市松尾2-10-23 一階</p>
                        </div>
                        <div>
                          <p className="font-semibold">最寄り駅</p>
                          <p>ゆいレール 県庁前駅より徒歩約5分</p>
                        </div>
                        <div>
                          <p className="font-semibold">営業時間</p>
                          <p>平日 9:00〜18:00</p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray-100 rounded-lg overflow-hidden h-64">
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3578.8234567890123!2d127.6789012345678!3d26.2123456789012!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjbCsDEyJzQ0LjQiTiAxMjfCsDQwJzQ0LjAiRQ!5e0!3m2!1sja!2sjp!4v1640995200000!5m2!1sja!2sjp&q=沖縄県那覇市松尾2-10-23"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="株式会社ミナト 本社所在地"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-24 bg-blue-600">
        <div className="container mx-auto px-4 lg:px-8">
          <FadeIn>
            <div className="text-center text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                お問い合わせ
              </h2>
              <p className="text-xl mb-8 opacity-90">
                ご質問やご相談がございましたら、お気軽にお問い合わせください
              </p>
              <Link href={`${process.env.BASE_PATH ?? ''}/#contact`}>
                <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg">
                  お問い合わせはこちら
                </Button>
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center">
            <div className="text-xl font-bold mb-4">株式会社ミナト</div>
            <p className="text-gray-400 text-sm">
              &copy; 2025 株式会社ミナト. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}