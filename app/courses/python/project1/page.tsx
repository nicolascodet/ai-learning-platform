'use client';
import React, { useState } from 'react';

export default function Project1() {
  const [code, setCode] = useState('');
  const [output, setOutput] = useState('');
  const [feedback, setFeedback] = useState('');

  const handleSubmit = () => {
    // Here we'll add code evaluation logic later
    setOutput('Code submitted! Evaluation coming soon...');
  };

  const handleHelp = () => {
    setFeedback('Try using the input() function to get the user\'s name and store it in a variable.');
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-900 via-blue-900 to-purple-900">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Side - Instructions */}
          <div className="bg-gray-800 rounded-lg p-6 shadow-lg border border-cyan-500/30">
            <h1 className="text-2xl font-bold text-white mb-4">Project 1: Hello, World Plus</h1>
            
            <div className="prose prose-invert">
              <h2 className="text-xl text-cyan-400">Instructions</h2>
              <p className="text-gray-300">
                Welcome to your first Python project! We're going to create a program that interacts with users.
                Your program should:
              </p>
              <ul className="text-gray-300 list-disc list-inside">
                <li>Print a welcome message</li>
                <li>Ask for the user's name</li>
                <li>Respond with a personalized greeting</li>
              </ul>

              <div className="mt-4 bg-gray-900 p-4 rounded-lg">
                <h3 className="text-cyan-400">Example:</h3>
                <pre className="text-gray-300 whitespace-pre-wrap break-words font-mono text-sm overflow-x-auto">
print("Welcome to Python!")
name = input("What is your name? ")
print("Hello, " + name + "! Ready to start coding?")</pre>
              </div>

              {feedback && (
                <div className="mt-4 p-4 bg-blue-900/50 rounded-lg border border-blue-500/30">
                  <h3 className="text-cyan-400">AI Feedback:</h3>
                  <p className="text-gray-300">{feedback}</p>
                </div>
              )}
            </div>
          </div>

          {/* Right Side - Code Editor */}
          <div className="bg-gray-800 rounded-lg p-6 shadow-lg border border-cyan-500/30">
            <h2 className="text-xl font-bold text-white mb-4">Your Code</h2>
            <textarea
              value={code}
              onChange={(e) => setCode(e.target.value)}
              className="w-full h-64 bg-gray-900 text-gray-300 p-4 rounded-lg font-mono
                         border border-gray-700 focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50
                         transition-colors duration-200"
              placeholder="Type your Python code here..."
            />

            <div className="mt-4 flex space-x-4">
              <button
                onClick={handleSubmit}
                className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg 
                          shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 
                          hover:bg-blue-500 transition-all duration-200 
                          border border-blue-400/50 hover:border-blue-400"
              >
                Submit
              </button>
              <button
                onClick={handleHelp}
                className="px-6 py-2 bg-cyan-600 text-white font-semibold rounded-lg 
                          shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50 
                          hover:bg-cyan-500 transition-all duration-200 
                          border border-cyan-400/50 hover:border-cyan-400"
              >
                Get Help
              </button>
            </div>

            {output && (
              <div className="mt-4 p-4 bg-gray-900 rounded-lg">
                <h3 className="text-cyan-400 mb-2">Output:</h3>
                <pre className="text-gray-300">{output}</pre>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
} 