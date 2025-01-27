'use client'

import React, { useState } from 'react'

interface Lesson {
  id: number
  title: string
  description: string
  topics: string[]
  duration: string
  projectPrompt: string
  hints: string[]
}

interface ProjectState {
  code: string
  output: string
  isLoading: boolean
  feedback: string
}

const lessons: Lesson[] = [
  {
    id: 1,
    title: "Introduction to Python",
    description: "Learn the basics of Python programming including variables, data types, and basic operations.",
    topics: ["Variables", "Data Types", "Basic Operations", "Print Statements"],
    duration: "30 minutes",
    projectPrompt: "Create a simple calculator that can add, subtract, multiply and divide two numbers.",
    hints: [
      "Use input() to get numbers from the user",
      "Convert string inputs to float using float()",
      "Use if/elif to handle different operations"
    ]
  },
  {
    id: 2, 
    title: "Control Flow",
    description: "Master Python's control flow statements including if/else, loops, and functions.",
    topics: ["If/Else", "For Loops", "While Loops", "Functions"],
    duration: "45 minutes",
    projectPrompt: "Create a number guessing game where the user has to guess a random number.",
    hints: [
      "Use random.randint() to generate a random number",
      "Use a while loop to keep asking for guesses",
      "Give hints if the guess is too high or too low"
    ]
  },
  {
    id: 3,
    title: "Data Structures",
    description: "Explore Python's built-in data structures like lists, dictionaries, and sets.",
    topics: ["Lists", "Dictionaries", "Sets", "List Comprehension"],
    duration: "45 minutes", 
    projectPrompt: "Create a simple todo list manager using a list to store tasks.",
    hints: [
      "Use a list to store the tasks",
      "Implement add, remove, and list operations",
      "Use a while loop for the menu system"
    ]
  }
]

export default function PythonBasicsModule() {
  const [selectedLesson, setSelectedLesson] = useState<Lesson>(lessons[0])
  const [projectState, setProjectState] = useState<ProjectState>({
    code: '',
    output: '',
    isLoading: false,
    feedback: ''
  })

  async function runProject() {
    setProjectState(prev => ({ ...prev, isLoading: true }))
    
    try {
      const response = await fetch('/api/python', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          code: projectState.code,
          prompt: selectedLesson.projectPrompt
        })
      })

      const data = await response.json()
      
      setProjectState(prev => ({
        ...prev,
        output: data.output,
        isLoading: false
      }))
    } catch (error) {
      setProjectState(prev => ({
        ...prev,
        output: 'Error running code. Please try again.',
        isLoading: false
      }))
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900">Python Basics</h1>
          <p className="mt-2 text-lg text-gray-600">Interactive Python learning with AI assistance</p>
        </div>

        <div className="mt-12 grid grid-cols-12 gap-8">
          {/* Lessons Panel */}
          <div className="col-span-4 bg-white rounded-lg shadow">
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-4">Lessons</h2>
              <div className="space-y-4">
                {lessons.map(lesson => (
                  <button
                    key={lesson.id}
                    onClick={() => setSelectedLesson(lesson)}
                    className={`w-full text-left p-4 rounded-lg transition-colors ${
                      selectedLesson.id === lesson.id
                        ? 'bg-blue-50 border-2 border-blue-500'
                        : 'hover:bg-gray-50 border-2 border-transparent'
                    }`}
                  >
                    <h3 className="font-medium">{lesson.title}</h3>
                    <p className="text-sm text-gray-500 mt-1">{lesson.duration}</p>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Project Area */}
          <div className="col-span-8 space-y-8">
            {/* Selected Lesson Details */}
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-xl font-semibold">{selectedLesson.title}</h2>
              <p className="mt-2 text-gray-600">{selectedLesson.description}</p>
              <div className="mt-4">
                <h3 className="font-medium">Topics covered:</h3>
                <div className="mt-2 flex flex-wrap gap-2">
                  {selectedLesson.topics.map(topic => (
                    <span
                      key={topic}
                      className="px-2 py-1 rounded-full text-sm bg-blue-100 text-blue-800"
                    >
                      {topic}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Project */}
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-xl font-semibold mb-4">Project</h2>
              <p className="text-gray-600 mb-4">{selectedLesson.projectPrompt}</p>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Your Code
                  </label>
                  <textarea
                    value={projectState.code}
                    onChange={e => setProjectState(prev => ({ ...prev, code: e.target.value }))}
                    className="w-full h-64 p-4 font-mono text-sm border rounded-lg focus:ring-2 focus:ring-blue-500"
                    placeholder="Write your Python code here..."
                  />
                </div>

                <button
                  onClick={runProject}
                  disabled={projectState.isLoading}
                  className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50"
                >
                  {projectState.isLoading ? 'Running...' : 'Run Project'}
                </button>

                {projectState.output && (
                  <div className="mt-4">
                    <h3 className="text-sm font-medium text-gray-700 mb-2">Output & Feedback</h3>
                    <pre className="w-full p-4 bg-gray-50 rounded-lg overflow-auto text-sm">
                      {projectState.output}
                    </pre>
                  </div>
                )}

                <div className="mt-4">
                  <h3 className="text-sm font-medium text-gray-700 mb-2">Hints</h3>
                  <ul className="list-disc pl-5 space-y-1">
                    {selectedLesson.hints.map((hint, index) => (
                      <li key={index} className="text-sm text-gray-600">{hint}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 