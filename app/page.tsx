"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  GraduationCap,
  Globe,
  Users,
  Award,
  BookOpen,
  Target,
  Star,
  MapPin,
  Phone,
  Mail,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  ChevronRight,
  Shield,
  Briefcase,
  Computer,
  Plane,
  Menu,
  X,
  ArrowUp,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function ISMTWebsite() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
      setShowScrollTop(window.scrollY > 300)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const courses = [
    {
      title: "BSc (Hons) Computer Systems Engineering (IT)",
      description: "Comprehensive program combining hardware and software engineering with practical IT applications.",
      icon: Computer,
      duration: "4 Years",
      level: "Undergraduate",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      title: "BA (Hons) Business and Management (BBA)",
      description: "Strategic business education preparing leaders for the global marketplace.",
      icon: Briefcase,
      duration: "4 Years",
      level: "Undergraduate",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      title: "BSc (Hons) International Tourism and Hospitality Management (BHM)",
      description: "Industry-focused program for the growing tourism and hospitality sector.",
      icon: Plane,
      duration: "4 Years",
      level: "Undergraduate",
      gradient: "from-green-500 to-teal-500",
    },
    {
      title: "BSc (Hons) Computer Science",
      description: "Cutting-edge computer science curriculum with modern programming and AI focus.",
      icon: BookOpen,
      duration: "4 Years",
      level: "Subject to Approval",
      gradient: "from-orange-500 to-red-500",
    },
    {
      title: "BSc (Hons) Cyber Security and Digital Forensics",
      description: "Specialized program addressing critical cybersecurity challenges in the digital age.",
      icon: Shield,
      duration: "4 Years",
      level: "Undergraduate",
      gradient: "from-indigo-500 to-purple-500",
    },
  ]

  const features = [
    {
      icon: Globe,
      title: "UK Qualifications in Nepal",
      description:
        "Earn prestigious University of Sunderland and Pearson Edexcel qualifications without leaving Nepal.",
      color: "text-blue-600",
      bgColor: "bg-blue-100",
    },
    {
      icon: Award,
      title: "Industry-Relevant Curriculum",
      description: "Programs designed with industry input to ensure graduates meet current market demands.",
      color: "text-purple-600",
      bgColor: "bg-purple-100",
    },
    {
      icon: Users,
      title: "Holistic Learning Environment",
      description: "Interactive discussions, project-based work, and diverse assessment methodologies.",
      color: "text-green-600",
      bgColor: "bg-green-100",
    },
    {
      icon: Target,
      title: "Cost-Effective Excellence",
      description: "International standard education at affordable costs with local values integration.",
      color: "text-orange-600",
      bgColor: "bg-orange-100",
    },
  ]

  const stats = [
    { number: 13, label: "Years Excellence", suffix: "+" },
    { number: 5, label: "Degree Programs", suffix: "" },
    { number: 1000, label: "Graduates", suffix: "+" },
    { number: 95, label: "Success Rate", suffix: "%" },
  ]

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute top-40 left-40 w-80 h-80 bg-yellow-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      {/* Header */}
      <header
        className={`fixed top-0 z-50 w-full transition-all duration-300 ${
          isScrolled ? "bg-white/95 backdrop-blur-md shadow-lg" : "bg-transparent"
        }`}
      >
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <div className="flex items-center space-x-2 animate-fade-in">
            <div className="relative">
              <GraduationCap className="h-8 w-8 text-blue-600 animate-pulse" />
              <div className="absolute inset-0 h-8 w-8 text-blue-600 animate-ping opacity-20">
                <GraduationCap className="h-8 w-8" />
              </div>
            </div>
            <span className="text-2xl font-bold text-gray-900 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              ISMT
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {["Home", "About", "Courses", "Admissions", "Contact"].map((item, index) => (
              <Link
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-all duration-300 hover:scale-105 relative group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </nav>

          <div className="flex items-center space-x-4">
            <Button className="hidden md:flex bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
              Apply Now
            </Button>

            {/* Mobile Menu Button */}
            <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden transition-all duration-300 ${
            isMenuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
          } overflow-hidden bg-white/95 backdrop-blur-md border-t`}
        >
          <nav className="container px-4 py-4 space-y-4">
            {["Home", "About", "Courses", "Admissions", "Contact"].map((item) => (
              <Link
                key={item}
                href={`#${item.toLowerCase()}`}
                className="block text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </Link>
            ))}
            <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600">Apply Now</Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section
        id="home"
        className="relative min-h-screen flex items-center bg-gradient-to-br from-blue-50 via-white to-indigo-50"
      >
        <div className="container px-4 md:px-6 relative z-10">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <div className="space-y-8 animate-fade-in-up">
              <div className="space-y-4">
                <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100 animate-bounce">
                  Established 2011 • UK Partnership
                </Badge>
                <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl animate-fade-in-up animation-delay-200">
                  Bridging Academia & Industry in
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent animate-gradient">
                    {" "}
                    Nepal
                  </span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed animate-fade-in-up animation-delay-400">
                  Earn internationally recognized UK qualifications from University of Sunderland and Pearson Edexcel
                  without leaving Nepal. Join ISMT's mission to redefine higher education.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up animation-delay-600">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-lg px-8 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Explore Courses
                  <ChevronRight className="ml-2 h-5 w-5 animate-pulse" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="text-lg px-8 bg-transparent hover:bg-gray-50 transform hover:scale-105 transition-all duration-300"
                >
                  Download Brochure
                </Button>
              </div>

              {/* Animated Stats */}
              <div className="flex items-center justify-center sm:justify-start space-x-8 pt-4">
                {stats.map((stat, index) => (
                  <div
                    key={index}
                    className="text-center animate-fade-in-up"
                    style={{ animationDelay: `${800 + index * 200}ms` }}
                  >
                    <div className="text-2xl font-bold text-gray-900 animate-counter">
                      <AnimatedCounter end={stat.number} suffix={stat.suffix} />
                    </div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative animate-fade-in-right">
              <div className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-all duration-500">
                <Image
                  src="/images/ismt-campus.jpg"
                  alt="ISMT Campus - Modern Educational Facility"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>

              {/* Floating Elements */}
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg border animate-float">
                <div className="flex items-center space-x-3">
                  <div className="bg-green-100 p-2 rounded-full animate-pulse">
                    <Star className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">UK Standards</div>
                    <div className="text-sm text-gray-600">International Recognition</div>
                  </div>
                </div>
              </div>

              <div className="absolute -top-6 -right-6 bg-white p-4 rounded-xl shadow-lg border animate-float animation-delay-1000">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">95%</div>
                  <div className="text-xs text-gray-600">Success Rate</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white relative">
        <div className="container px-4 md:px-6">
          <div className="text-center space-y-4 mb-16 animate-fade-in-up">
            <Badge className="bg-blue-100 text-blue-800">About ISMT</Badge>
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Redefining Higher Education in Nepal</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Since 2011, ISMT has been committed to providing internationally recognized, industry-relevant
              qualifications that bridge the gap between academia and industry.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2 items-center mb-16">
            <div className="space-y-6 animate-fade-in-left">
              <h3 className="text-2xl font-bold text-gray-900">Our Mission & Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                In academic partnership with the University of Sunderland, UK, and Pearson Edexcel, UK, ISMT is
                redefining higher education with a bold vision—bridging the gap between academia and industry. Our
                commitment to academic excellence is reflected in our inclusive and cost-effective educational approach,
                delivering international standards while adopting core local values.
              </p>
              <p className="text-gray-600 leading-relaxed">
                The institution fosters a holistic learning environment that encourages active student engagement
                through project-based work, interactive discussions, presentations, and diverse assessment
                methodologies.
              </p>
            </div>
            <div className="relative h-80 rounded-xl overflow-hidden shadow-lg animate-fade-in-right">
              <Image
                src="/images/students-classroom.jpg"
                alt="Students engaged in interactive learning at ISMT"
                fill
                className="object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="text-center border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-fade-in-up group"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <CardHeader>
                  <div
                    className={`mx-auto ${feature.bgColor} p-3 rounded-full w-fit group-hover:scale-110 transition-transform duration-300`}
                  >
                    <feature.icon className={`h-6 w-6 ${feature.color}`} />
                  </div>
                  <CardTitle className="text-lg group-hover:text-blue-600 transition-colors">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section id="courses" className="py-20 bg-gray-50 relative">
        <div className="container px-4 md:px-6">
          <div className="text-center space-y-4 mb-16 animate-fade-in-up">
            <Badge className="bg-blue-100 text-blue-800">Our Programs</Badge>
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">World-Class Degree Programs</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose from our range of internationally recognized degree programs designed to meet industry demands and
              global standards.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {courses.map((course, index) => (
              <Card
                key={index}
                className="hover:shadow-xl transition-all duration-500 border-0 shadow-lg transform hover:-translate-y-2 animate-fade-in-up group overflow-hidden"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className={`h-2 bg-gradient-to-r ${course.gradient}`}></div>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div
                      className={`bg-gradient-to-r ${course.gradient} p-2 rounded-lg group-hover:scale-110 transition-transform duration-300`}
                    >
                      <course.icon className="h-6 w-6 text-white" />
                    </div>
                    <Badge variant={course.level === "Subject to Approval" ? "secondary" : "default"}>
                      {course.level}
                    </Badge>
                  </div>
                  <CardTitle className="text-lg leading-tight group-hover:text-blue-600 transition-colors">
                    {course.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600">{course.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">Duration: {course.duration}</span>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-blue-600 hover:text-blue-700 group-hover:translate-x-1 transition-transform"
                    >
                      Learn More
                      <ChevronRight className="ml-1 h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container px-4 md:px-6 relative z-10">
          <div className="text-center space-y-8 animate-fade-in-up">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">Ready to Start Your Journey?</h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Join thousands of students who have chosen ISMT for their higher education. Take the first step towards a
              globally competitive career.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Apply Now
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-600 text-lg px-8 bg-transparent transform hover:scale-105 transition-all duration-300"
              >
                Schedule Campus Visit
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16 relative">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="space-y-4 animate-fade-in-up">
              <div className="flex items-center space-x-2">
                <GraduationCap className="h-8 w-8 text-blue-400 animate-pulse" />
                <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  ISMT
                </span>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Bridging the gap between academia and industry since 2011. Providing internationally recognized
                qualifications in Nepal.
              </p>
              <div className="flex space-x-4">
                {[Facebook, Twitter, Instagram, Linkedin].map((Icon, index) => (
                  <Icon
                    key={index}
                    className="h-5 w-5 text-gray-400 hover:text-blue-400 cursor-pointer transform hover:scale-125 transition-all duration-300"
                  />
                ))}
              </div>
            </div>

            <div className="space-y-4 animate-fade-in-up animation-delay-200">
              <h3 className="text-lg font-semibold">Quick Links</h3>
              <ul className="space-y-2 text-gray-400">
                {["About Us", "Courses", "Admissions", "Student Life", "Career Services"].map((link) => (
                  <li key={link}>
                    <Link href="#" className="hover:text-white transition-colors hover:translate-x-1 inline-block">
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-4 animate-fade-in-up animation-delay-400">
              <h3 className="text-lg font-semibold">Programs</h3>
              <ul className="space-y-2 text-gray-400">
                {[
                  "Computer Systems Engineering",
                  "Business & Management",
                  "Tourism & Hospitality",
                  "Computer Science",
                  "Cyber Security",
                ].map((program) => (
                  <li key={program}>
                    <Link href="#" className="hover:text-white transition-colors hover:translate-x-1 inline-block">
                      {program}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-4 animate-fade-in-up animation-delay-600">
              <h3 className="text-lg font-semibold">Contact Info</h3>
              <div className="space-y-3 text-gray-400">
                <div className="flex items-center space-x-2 hover:text-white transition-colors">
                  <MapPin className="h-4 w-4" />
                  <span className="text-sm">Kathmandu, Nepal</span>
                </div>
                <div className="flex items-center space-x-2 hover:text-white transition-colors">
                  <Phone className="h-4 w-4" />
                  <span className="text-sm">+977-1-XXXXXXX</span>
                </div>
                <div className="flex items-center space-x-2 hover:text-white transition-colors">
                  <Mail className="h-4 w-4" />
                  <span className="text-sm">info@ismt.edu.np</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>
              &copy; {new Date().getFullYear()} ISMT College. All rights reserved. | Privacy Policy | Terms of Service
            </p>
            <p className="text-sm mt-2 animate-fade-in">Developed by Mr. Jeevan</p>
          </div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <Button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 rounded-full w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 animate-bounce"
          size="icon"
        >
          <ArrowUp className="h-5 w-5" />
        </Button>
      )}
    </div>
  )
}

// Animated Counter Component
function AnimatedCounter({ end, suffix = "" }: { end: number; suffix?: string }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const duration = 2000
    const steps = 60
    const stepValue = end / steps
    const stepTime = duration / steps
    let current = 0

    const timer = setInterval(() => {
      current += stepValue
      if (current >= end) {
        setCount(end)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, stepTime)

    return () => clearInterval(timer)
  }, [end])

  return (
    <span>
      {count}
      {suffix}
    </span>
  )
}
