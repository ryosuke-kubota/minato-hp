"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Phone, Mail, Building2, Hotel, ArrowRight, Menu, X, ExternalLink, Users, Calendar, Award } from "lucide-react"
import { FadeIn, StaggeredFadeIn, CountUpAnimation, ScaleIn, ScrollProgressBar } from '@/components/ScrollAnimations'
import { useState } from 'react'
import nextConfig from "../../next.config.js";

const BASE_PATH = nextConfig.basePath || "";

export default function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }
  return (
    <div className="min-h-screen bg-white">
      {/* Scroll Progress Bar */}
      <ScrollProgressBar />

      {/* Fixed Header Navigation */}
      <header className="fixed top-1 left-0 right-0 z-50 bg-white/95 backdrop-blur-custom border-b border-gray-100 shadow-soft">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-2">
              <div className="text-xl font-bold text-gray-900">MINATO</div>
              <div className="text-sm text-gray-500 hidden sm:block">株式会社ミナト</div>
            </div>
            <nav className="hidden lg:flex items-center space-x-8">
              <a href="#about" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">ミナトについて</a>
              <a href="#services" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">事業内容</a>
              <a href={`${BASE_PATH}/company`} className="text-sm text-gray-600 hover:text-gray-900 transition-colors">会社概要</a>
              <a href="#contact" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">お問い合わせ</a>
            </nav>
            <div className="lg:hidden flex items-center space-x-4">
              {/* <Button variant="outline" size="sm" className="hidden sm:flex text-xs">
                資料請求
              </Button> */}
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
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-custom border-b border-gray-100 shadow-soft">
            <nav className="container mx-auto px-4 py-4">
              <div className="flex flex-col space-y-4">
                <a
                  href="#about"
                  className="text-sm text-gray-600 hover:text-gray-900 transition-colors py-2"
                  onClick={closeMobileMenu}
                >
                  ミナトについて
                </a>
                <a
                  href="#services"
                  className="text-sm text-gray-600 hover:text-gray-900 transition-colors py-2"
                  onClick={closeMobileMenu}
                >
                  事業内容
                </a>
                <a
                  href={`${BASE_PATH}/company`}
                  className="text-sm text-gray-600 hover:text-gray-900 transition-colors py-2"
                  onClick={closeMobileMenu}
                >
                  会社概要
                </a>
                <a
                  href="#contact"
                  className="text-sm text-gray-600 hover:text-gray-900 transition-colors py-2"
                  onClick={closeMobileMenu}
                >
                  お問い合わせ
                </a>
              </div>
            </nav>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('${BASE_PATH}/images/hero.jpg')`
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/50 to-black/30" />

        <div className="relative z-10 container mx-auto px-4 lg:px-8 text-center text-white">
          <div className="max-w-4xl mx-auto">
            <FadeIn direction="down" delay={200}>
              <div className="inline-block bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-12">
                <span className="text-sm font-medium">沖縄・那覇の不動産売買・管理</span>
              </div>
            </FadeIn>
            <FadeIn direction="up" delay={400}>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-12 leading-tight">
                株式会社<span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">ミナト</span>
              </h1>
            </FadeIn>
            <FadeIn direction="up" delay={600}>
              <p className="text-xl md:text-2xl lg:text-3xl mb-12 font-light tracking-wide">
                - 地域の文化と発展を -
              </p>
            </FadeIn>

          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2" />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 lg:px-8">
          <FadeIn>
            <div className="text-center mb-16">
              <div className="inline-block bg-blue-100 text-blue-600 rounded-full px-4 py-2 text-sm font-medium mb-4">
                OUR SERVICES
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                事業内容
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                沖縄の地域特性を深く理解し、お客様の資産価値向上をトータルサポートいたします。
              </p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                id: "real-estate",
                gradient: "from-blue-500 to-blue-600",
                bgColor: "bg-blue-50",
                textColor: "text-blue-600",
                image: `${BASE_PATH}/images/estate.jpg`,
                title: "不動産",
                subtitle: "売買・管理",
                description: "沖縄の独特な地域特性と市場動向を熟知したプロフェッショナルが、不動産売買から管理まで一貫してサポート。お客様の大切な資産の価値を最大化いたします。"
              },
              {
                id: "hotel",
                gradient: "from-cyan-500 to-cyan-600",
                bgColor: "bg-cyan-50",
                textColor: "text-cyan-600",
                image: `${BASE_PATH}/images/hotel.jpg`,
                title: "ホテル",
                subtitle: "売買・管理",
                description: "観光立県沖縄の特性を活かし、ホテル・宿泊施設の売買から運営管理まで幅広くサポート。観光業界の動向を見据えた戦略的なアドバイスを提供いたします。"
              }
            ].map((service, index) => (
              <FadeIn key={service.id} direction="up" delay={index * 200}>
                <Card className="group hover:shadow-2xl transition-all duration-500 border-0 bg-white hover-lift shadow-card">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <div className={`bg-gradient-to-br ${service.gradient} flex items-center justify-center`}>
                      <img src={service.image} className="block w-full aspect-video object-cover" />
                    </div>
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
                  </div>
                  <CardHeader className="p-8">
                    <div className="flex items-center justify-between mb-4">
                      <CardTitle className="text-2xl font-bold text-gray-900">{service.title}</CardTitle>
                      <div className={`text-sm font-medium ${service.textColor} ${service.bgColor} px-3 py-1 rounded-full`}>
                        {service.subtitle}
                      </div>
                    </div>
                    <CardDescription className="text-base text-gray-600 leading-relaxed">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center max-w-7xl mx-auto">
            <FadeIn direction="left">
              <div>
                <div className="inline-block bg-gray-100 text-gray-600 rounded-full px-4 py-2 text-sm font-medium mb-6">
                  ABOUT US
                </div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-8 leading-tight">
                  株式会社<br />ミナトについて
                </h2>
                <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                  <p>
                    私たちの名前「ミナト」は、「MY」（私たちの）と「NATE」（生まれる・ラテン語）を組み合わせた造語です。この名前には、地域と共に新しい価値を生み出していくという強い想いが込められています。
                  </p>
                  <p>
                    「地域の文化と発展を」をコンセプトに、沖縄の豊かな自然と文化を大切にしながら、地域社会の持続可能な発展に貢献する企業として歩み続けています。
                  </p>
                  <p>
                    不動産、ホテルの各分野において、地域に根ざした専門知識と豊富な経験を活かし、お客様の大切な資産を守り、育てるパートナーとしてお役に立てるよう努めております。
                  </p>
                </div>
              </div>
            </FadeIn>

            <FadeIn direction="right" delay={200}>
              <div className="relative mt-8 lg:mt-0">
                <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                  <img
                    src={`${BASE_PATH}/images/about.jpg`}
                    alt="沖縄の美しい海"
                    className="w-full h-64 sm:h-80 lg:h-96 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>
                <ScaleIn delay={600}>
                  <div className="mt-6 lg:absolute lg:-bottom-6 lg:left-4 lg:right-4 xl:-left-6 xl:right-auto bg-white rounded-2xl shadow-xl p-4 sm:p-6 max-w-sm mx-auto lg:mx-0">
                    <div className="flex items-center space-x-3 mb-3">
                      <MapPin className="w-5 h-5 text-blue-600" />
                      <span className="font-semibold text-gray-900">本社所在地</span>
                    </div>
                    <p className="text-sm text-gray-600">
                      〒900-0014<br />
                      沖縄県那覇市松尾2-10-23 一階
                    </p>
                  </div>
                </ScaleIn>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-gradient-to-b from-gray-50 to-gray-100">
        <div className="container mx-auto px-4 lg:px-8">
          <FadeIn>
            <div className="text-center mb-16">
              <div className="inline-block bg-blue-100 text-blue-600 rounded-full px-4 py-2 text-sm font-medium mb-4">
                CONTACT
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                お問い合わせ
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                不動産・ホテルに関するご相談は、お気軽にお問い合わせください。<br />
                専門スタッフが丁寧にサポートいたします。
              </p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6 max-w-6xl mx-auto mb-12">
            {[
              { id: "phone", icon: Phone, title: "お電話", description: "お急ぎの方", status: "準備中" },
              { id: "email", icon: Mail, title: "メール", description: "詳細な相談", status: "準備中" },
            ].map((contact, index) => (
              <FadeIn key={contact.id} direction="up" delay={index * 100}>
                <Card className="text-center p-8 border-0 bg-white hover:shadow-lg transition-shadow hover-lift shadow-soft">
                  <contact.icon className="w-12 h-12 mx-auto mb-4 text-blue-600" />
                  <h3 className="font-semibold text-gray-900 mb-2">{contact.title}</h3>
                  <p className="text-sm text-gray-600">{contact.description}</p>
                  <p className="text-xs text-gray-500 mt-2">{contact.status}</p>
                </Card>
              </FadeIn>
            ))}
          </div>

          {/* <FadeIn delay={800}>
            <div className="text-center mt-12">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-12 py-4 text-lg btn-modern shadow-card">
                お問い合わせフォーム
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </FadeIn> */}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white">
        <div className="container mx-auto px-4 lg:px-8 py-16">
          <FadeIn>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              <div className="lg:col-span-2">
                <div className="mb-6">
                  <div className="text-2xl font-bold mb-2">株式会社ミナト</div>
                </div>
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                  <div className="text-gray-300">
                    <div className="font-medium mb-1">本社所在地</div>
                    <div className="text-sm">
                      〒900-0014<br />
                      沖縄県那覇市松尾2-10-23 一階
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-lg font-semibold mb-6">事業内容</h4>
                <ul className="space-y-3 text-gray-300">
                  <li className="hover:text-white transition-colors cursor-pointer">不動産 売買・管理</li>
                  <li className="hover:text-white transition-colors cursor-pointer">ホテル 売買・管理</li>
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-semibold mb-6">企業情報</h4>
                <ul className="space-y-3 text-gray-300">
                  <li className="hover:text-white transition-colors cursor-pointer">
                    <a href={`${BASE_PATH}/company`}>会社概要</a>
                  </li>
                </ul>
              </div>
            </div>
          </FadeIn>

          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-center items-center">
              <p className="text-gray-400 text-sm">
                &copy; 2025 株式会社ミナト. All rights reserved.
              </p>
              {/* <div className="flex space-x-4 mt-4 md:mt-0">
                <button className="text-gray-400 hover:text-white transition-colors">
                  プライバシーポリシー
                </button>
                <button className="text-gray-400 hover:text-white transition-colors">
                  利用規約
                </button>
              </div> */}
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
