import React from 'react'

const enrolledCourses = [
  {
    id: 1,
    title: 'Introduction to AI',
    progress: 75,
    lastAccessed: '2024-01-28',
    nextLesson: 'Neural Networks Basics',
    completed: 6,
    total: 8,
    nextLessonDate: '2024-01-30 14:00',
    recentGrade: 92,
    streak: 5,
    modules: [
      { name: 'AI Fundamentals', complete: true },
      { name: 'Machine Learning Basics', complete: true },
      { name: 'Neural Networks Intro', complete: true },
      { name: 'Supervised Learning', complete: true },
      { name: 'Unsupervised Learning', complete: true },
      { name: 'Deep Learning Basics', complete: true },
      { name: 'Neural Networks Advanced', complete: false },
      { name: 'Final Project', complete: false }
    ]
  },
  {
    id: 2,
    title: 'Neural Networks Deep Dive',
    progress: 30,
    lastAccessed: '2024-01-27',
    nextLesson: 'Backpropagation',
    completed: 3,
    total: 10,
    nextLessonDate: '2024-01-29 10:00',
    recentGrade: 88,
    streak: 3,
    modules: [
      { name: 'Neural Network Architecture', complete: true },
      { name: 'Forward Propagation', complete: true },
      { name: 'Activation Functions', complete: true },
      { name: 'Backpropagation', complete: false },
      { name: 'Optimization', complete: false },
      { name: 'CNN Architecture', complete: false },
      { name: 'RNN and LSTM', complete: false },
      { name: 'Transfer Learning', complete: false },
      { name: 'Model Deployment', complete: false },
      { name: 'Capstone Project', complete: false }
    ]
  }
]

const achievements = [
  {
    id: 1,
    title: 'Fast Learner',
    description: 'Completed 5 lessons in one day',
    date: '2024-01-25',
    icon: '🚀',
    type: 'speed'
  },
  {
    id: 2,
    title: 'Perfect Score',
    description: 'Achieved 100% on a quiz',
    date: '2024-01-26',
    icon: '🎯',
    type: 'achievement'
  },
  {
    id: 3,
    title: 'Study Streak',
    description: 'Maintained a 5-day study streak',
    date: '2024-01-28',
    icon: '🔥',
    type: 'consistency'
  },
  {
    id: 4,
    title: 'Helper',
    description: 'Answered 10 community questions',
    date: '2024-01-27',
    icon: '🤝',
    type: 'community'
  }
]

const stats = {
  totalHours: 45,
  coursesCompleted: 2,
  averageGrade: 90,
  currentStreak: 5,
  longestStreak: 7,
  totalAchievements: 12
}

export default function ProgressPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">My Learning Progress</h1>
      
      {/* Overview Stats */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
        {[
          { label: 'Study Hours', value: stats.totalHours, icon: '⏱️' },
          { label: 'Courses Done', value: stats.coursesCompleted, icon: '📚' },
          { label: 'Avg. Grade', value: `${stats.averageGrade}%`, icon: '📊' },
          { label: 'Current Streak', value: `${stats.currentStreak} days`, icon: '🔥' },
          { label: 'Longest Streak', value: `${stats.longestStreak} days`, icon: '⭐' },
          { label: 'Achievements', value: stats.totalAchievements, icon: '🏆' }
        ].map((stat, index) => (
          <div key={index} className="bg-white rounded-lg shadow p-4">
            <div className="text-2xl mb-2">{stat.icon}</div>
            <div className="text-sm text-gray-600">{stat.label}</div>
            <div className="text-lg font-bold">{stat.value}</div>
          </div>
        ))}
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Course Progress */}
        <div className="lg:col-span-2">
          <h2 className="text-xl font-semibold mb-4">Active Courses</h2>
          
          <div className="space-y-6">
            {enrolledCourses.map(course => (
              <div key={course.id} className="bg-white rounded-lg shadow">
                {/* Course Header */}
                <div className="p-6 border-b">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-lg font-medium">{course.title}</h3>
                    <div className="text-sm">
                      <span className="text-blue-600 font-medium">{course.recentGrade}%</span>
                      <span className="text-gray-500 ml-1">Recent Grade</span>
                    </div>
                  </div>
                  
                  {/* Progress Bar */}
                  <div className="mb-4">
                    <div className="flex justify-between text-sm text-gray-600 mb-1">
                      <span>Overall Progress</span>
                      <span>{course.progress}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-blue-600 rounded-full h-2 transition-all duration-300"
                        style={{ width: `${course.progress}%` }}
                      />
                    </div>
                  </div>
                  
                  {/* Module Progress */}
                  <div className="grid grid-cols-4 gap-2 mb-4">
                    {course.modules.map((module, index) => (
                      <div 
                        key={index}
                        className={`h-1 rounded ${
                          module.complete ? 'bg-green-500' : 'bg-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                </div>
                
                {/* Course Details */}
                <div className="p-6 bg-gray-50">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <div className="text-gray-600 mb-1">Next Lesson</div>
                      <div className="font-medium">{course.nextLesson}</div>
                      <div className="text-xs text-gray-500 mt-1">
                        Scheduled: {course.nextLessonDate}
                      </div>
                    </div>
                    <div>
                      <div className="text-gray-600 mb-1">Current Streak</div>
                      <div className="font-medium flex items-center">
                        {course.streak} days
                        <span className="ml-2 text-lg">🔥</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Achievements Section */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Recent Achievements</h2>
          
          <div className="bg-white rounded-lg shadow">
            <div className="p-6 border-b">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm text-gray-600">12 Total Achievements</span>
                <button className="text-blue-600 text-sm hover:underline">
                  View All
                </button>
              </div>
              
              <div className="space-y-4">
                {achievements.map(achievement => (
                  <div 
                    key={achievement.id} 
                    className={`flex items-start space-x-4 p-3 rounded-lg ${
                      achievement.type === 'speed' ? 'bg-blue-50' :
                      achievement.type === 'achievement' ? 'bg-green-50' :
                      achievement.type === 'consistency' ? 'bg-yellow-50' :
                      'bg-purple-50'
                    }`}
                  >
                    <div className="text-2xl">{achievement.icon}</div>
                    <div>
                      <h3 className="font-medium">{achievement.title}</h3>
                      <p className="text-sm text-gray-600">{achievement.description}</p>
                      <span className="text-xs text-gray-500">{achievement.date}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Achievement Stats */}
            <div className="p-6">
              <h3 className="text-sm font-medium text-gray-600 mb-4">Achievement Progress</h3>
              <div className="space-y-3">
                {[
                  { category: 'Speed Learning', progress: 60 },
                  { category: 'Perfect Scores', progress: 40 },
                  { category: 'Consistency', progress: 80 },
                  { category: 'Community', progress: 30 }
                ].map((stat, index) => (
                  <div key={index}>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-600">{stat.category}</span>
                      <span className="text-gray-900">{stat.progress}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-1">
                      <div
                        className="bg-blue-600 rounded-full h-1"
                        style={{ width: `${stat.progress}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 