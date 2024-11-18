"use client"
import React, { useState, useEffect, useRef } from 'react'
import { ArrowRight, CheckCircle, Mic, Video, Brain, Star } from 'lucide-react'
import Link from 'next/link'

export default function LandingPage() {
  const [email, setEmail] = useState('')

  const handleSubmit = (e ) => {
    e.preventDefault()
    console.log('Email submitted:', email)
    setEmail('')
  }

  useEffect(() => {
    const smoothScroll = (e ) => {
      e.preventDefault()
      const targetId = (e.currentTarget  ).getAttribute('href')
      if (targetId && targetId.startsWith('#')) {
        const targetElement = document.querySelector(targetId)
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth' })
        }
      }
    }

    const links = document.querySelectorAll('a[href^="#"]')
    links.forEach(link => link.addEventListener('click', smoothScroll))

    return () => {
      links.forEach(link => link.removeEventListener('click', smoothScroll))
    }
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <header className="container mx-auto px-4 py-6 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Brain className="h-8 w-8 text-blue-600" />
          <span className="text-2xl font-bold text-blue-900">InterviewAI</span>
        </div>
        <nav>
          <ul className="flex space-x-6">
            <li><a href="#features" className="text-blue-900 hover:text-blue-600 transition-colors">Features</a></li>
            <li><a href="#testimonials" className="text-blue-900 hover:text-blue-600 transition-colors">Testimonials</a></li>
            <li><a href="#pricing" className="text-blue-900 hover:text-blue-600 transition-colors">Pricing</a></li>
          </ul>
        </nav>
      </header>

      <main>
        <section className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-5xl font-bold text-blue-900 mb-6">Master Your Interviews with AI</h1>
          <p className="text-xl text-blue-700 mb-8 max-w-2xl mx-auto">
            Practice interviews with our advanced AI and get personalized feedback to land your dream job.
          </p>
          <Link href="/dashboard" passHref>
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-full transition-colors">
              Start Practicing Now
              <ArrowRight className="ml-2 h-5 w-5 inline" />
            </button>
          </Link>
        </section>

        <section id="features" className="bg-white py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-blue-900 mb-12 text-center">Why Choose InterviewAI?</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <FeatureCard
                icon={<Mic className="h-12 w-12 text-blue-600" />}
                title="Real-time Voice Analysis"
                description="Our AI analyzes your speech patterns and provides instant feedback on your communication skills."
              />
              <FeatureCard
                icon={<Video className="h-12 w-12 text-blue-600" />}
                title="Video Interview Simulation"
                description="Practice with lifelike video interviews that mimic real-world scenarios."
              />
              <FeatureCard
                icon={<Brain className="h-12 w-12 text-blue-600" />}
                title="Personalized Learning"
                description="Get tailored interview questions and advice based on your industry and experience level."
              />
            </div>
          </div>
        </section>

        <section id="testimonials" className="bg-blue-50 py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-blue-900 mb-12 text-center">What Our Users Say</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <TestimonialCard
                quote="InterviewAI helped me land my dream job at a top tech company. The personalized feedback was invaluable!"
                author="Sarah K., Software Engineer"
              />
              <TestimonialCard
                quote="I felt so much more confident going into my interviews after practicing with InterviewAI. Highly recommended!"
                author="Michael L., Marketing Manager"
              />
            </div>
          </div>
        </section>

        <section id="pricing" className="bg-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-blue-900 mb-12">Start Your Journey Today</h2>
            <div className="bg-blue-100 p-8 rounded-lg shadow-lg max-w-md mx-auto">
              <h3 className="text-2xl font-bold text-blue-900 mb-4">Free Trial</h3>
              <p className="text-blue-700 mb-6">Experience the power of AI-driven interview preparation</p>
              <ul className="text-left mb-8">
                <li className="flex items-center mb-2">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  <span>3 AI-powered mock interviews</span>
                </li>
                <li className="flex items-center mb-2">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  <span>Basic performance analysis</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  <span>Interview question database access</span>
                </li>
              </ul>
              <form onSubmit={handleSubmit} className="flex flex-col items-center">
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="mb-4 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
                <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-full transition-colors w-full">
                  Start Free Trial
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-blue-900 text-white py-8">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <Brain className="h-8 w-8" />
            <span className="text-2xl font-bold">InterviewAI</span>
          </div>
          <nav>
            <ul className="flex space-x-6">
              <li><a href="#" className="hover:text-blue-300 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-blue-300 transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-blue-300 transition-colors">Contact Us</a></li>
            </ul>
          </nav>
        </div>
      </footer>
    </div>
  )
}

function FeatureCard({ icon, title, description }) {
  const cardRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1'
          entry.target.style.transform = 'translateY(0)'
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1,
      }
    )

    if (cardRef.current) {
      observer.observe(cardRef.current)
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current)
      }
    }
  }, [])

  return (
    <div
      ref={cardRef}
      className="bg-blue-50 p-6 rounded-lg shadow-md transition-all duration-500 ease-out hover:scale-105"
      style={{
        opacity: 0,
        transform: 'translateY(20px)',
        animation: 'border-glow 2s infinite',
      }}
    >
      <div className="flex justify-center mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-blue-900 mb-2">{title}</h3>
      <p className="text-blue-700">{description}</p>
      <style jsx>{`
        @keyframes border-glow {
          0% {
            box-shadow: 0 0 0 0 rgba(59, 130, 246, 0.5);
          }
          50% {
            box-shadow: 0 0 0 4px rgba(59, 130, 246, 0.5);
          }
          100% {
            box-shadow: 0 0 0 0 rgba(59, 130, 246, 0.5);
          }
        }
      `}</style>
    </div>
  )
}

function TestimonialCard({ quote, author }) {
  const cardRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1'
          entry.target.style.transform = 'translateY(0)'
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1,
      }
    )

    if (cardRef.current) {
      observer.observe(cardRef.current)
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current)
      }
    }
  }, [])

  return (
    <div
      ref={cardRef}
      className="bg-white p-6 rounded-lg shadow-md transition-all duration-500 ease-out"
      style={{
        opacity: 0,
        transform: 'translateY(20px)',
        animation: 'border-glow 2s infinite',
      }}
    >
      <div className="flex justify-center mb-4">
        <Star className="h-8 w-8 text-yellow-400" />
      </div>
      <p className="text-blue-900 mb-4 italic">"{quote}"</p>
      <p className="text-blue-700 font-semibold">{author}</p>
      <style jsx>{`
        @keyframes border-glow {
          0% {
            box-shadow: 0 0 0 0 rgba(59, 130, 246, 0.5);
          }
          50% {
            box-shadow: 0 0 0 4px rgba(59, 130, 246, 0.5);
          }
          100% {
            box-shadow: 0 0 0 0 rgba(59, 130, 246, 0.5);
          }
        }
      `}</style>
    </div>
  )
}