'use client'

import React from 'react'
import Link from 'next/link'

const courses = [
  {
    id: 'python-basics',
    title: 'Python Basics',
    description: 'Learn Python from scratch with interactive lessons and AI-powered feedback.',
    duration: '2 hours',
    level: 'Beginner',
    instructor: 'AI Tutor',
    topics: ['Variables', 'Control Flow', 'Data Structures'],
    image: '/python-logo.png'
  },
  {
    id: 'machine-learning',
    title: 'Machine Learning Fundamentals',
    description: 'Introduction to machine learning concepts and algorithms.',
    duration: '4 hours',
    level: 'Intermediate',
    instructor: 'AI Tutor',
    topics: ['Supervised Learning', 'Neural Networks', 'Model Evaluation'],
    image: '/ml-logo.png'
  },
  {
    id: 1,
    title: 'Introduction to AI',
    description: 'Learn the fundamentals of Artificial Intelligence and Machine Learning',
    duration: '8 weeks',
    level: 'Beginner',
    image: '/course-ai.jpg',
    instructor: 'Dr. Sarah Chen',
    rating: 4.8,
    students: 1234,
    topics: ['AI Basics', 'Machine Learning', 'Neural Networks', 'Deep Learning'],
    prerequisites: ['Basic Python', 'Mathematics'],
    price: 49.99
  },
  {
    id: 2,
    title: 'Neural Networks Deep Dive',
    description: 'Master the architecture and implementation of neural networks',
    duration: '10 weeks',
    level: 'Intermediate',
    image: '/course-neural.jpg',
    instructor: 'Prof. James Wilson',
    rating: 4.9,
    students: 856,
    topics: ['Deep Neural Networks', 'CNN', 'RNN', 'Transformers'],
    prerequisites: ['Python', 'Linear Algebra', 'Basic AI concepts'],
    price: 79.99
  },
  {
    id: 3,
    title: 'Natural Language Processing',
    description: 'Explore text analysis and language understanding with AI',
    duration: '12 weeks',
    level: 'Advanced',
    image: '/course-nlp.jpg',
    instructor: 'Dr. Emily Rodriguez',
    rating: 4.7,
    students: 645,
    topics: ['Text Processing', 'Sentiment Analysis', 'Language Models', 'BERT'],
    prerequisites: ['Python', 'Machine Learning', 'Statistics'],
    price: 99.99
  }
]

export default function Courses() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
        Available Courses
      </h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Link 
          href="/courses/python/project1"
          className="bg-gray-800 rounded-lg overflow-hidden shadow-lg border border-cyan-500/30
                   transform transition-all duration-300 hover:scale-105 hover:shadow-cyan-500/20"
        >
          <div className="p-6">
            <h3 className="text-xl font-semibold text-white mb-2">Learn Python 3</h3>
            <p className="text-gray-300 mb-4">
              Master Python fundamentals through hands-on projects. Perfect for beginners starting their coding journey.
            </p>
            <div className="flex gap-2">
              <span className="px-3 py-1 bg-blue-600/20 text-blue-400 rounded-full text-sm">
                Python
              </span>
              <span className="px-3 py-1 bg-blue-600/20 text-blue-400 rounded-full text-sm">
                Beginner
              </span>
            </div>
          </div>
        </Link>
      </div>
    </div>
  )
} 