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

export default function CoursesPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900">Available Courses</h1>
          <p className="mt-2 text-lg text-gray-600">Start your learning journey today</p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {courses.map(course => (
            <Link 
              key={course.id}
              href={`/courses/${course.id}`}
              className="block bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200"
            >
              <div className="p-6">
                <h2 className="text-xl font-semibold text-gray-900">{course.title}</h2>
                <p className="mt-2 text-gray-600">{course.description}</p>
                
                <div className="mt-4 flex items-center justify-between">
                  <div className="flex items-center">
                    <span className="px-2 py-1 text-sm font-medium text-blue-800 bg-blue-100 rounded-full">
                      {course.level}
                    </span>
                  </div>
                  <span className="text-sm text-gray-500">{course.duration}</span>
                </div>

                <div className="mt-4">
                  <h3 className="text-sm font-medium text-gray-700">Topics covered:</h3>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {course.topics.map(topic => (
                      <span
                        key={topic}
                        className="px-2 py-1 text-xs font-medium text-gray-600 bg-gray-100 rounded-full"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
} 