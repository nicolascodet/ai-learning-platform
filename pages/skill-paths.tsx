import Layout from '../components/Layout'

const skillPaths = [
  {
    title: 'AI Development Fundamentals',
    description: 'Learn the basics of AI development including machine learning concepts, Python programming, and data manipulation.',
    duration: '8 weeks',
    level: 'Beginner'
  },
  {
    title: 'Machine Learning Engineering',
    description: 'Master machine learning algorithms, model deployment, and MLOps practices through hands-on projects.',
    duration: '12 weeks',
    level: 'Intermediate'
  },
  {
    title: 'Deep Learning Specialist',
    description: 'Dive deep into neural networks, computer vision, and natural language processing with practical applications.',
    duration: '16 weeks',
    level: 'Advanced'
  }
]

export default function SkillPaths() {
  return (
    <Layout>
      <div className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Choose Your Learning Path
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              Select a specialized path that matches your goals and experience level
            </p>
          </div>

          <div className="mt-10">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {skillPaths.map((path, index) => (
                <div
                  key={index}
                  className="bg-white overflow-hidden shadow rounded-lg divide-y divide-gray-200"
                >
                  <div className="px-6 py-5">
                    <h3 className="text-lg font-medium text-gray-900">{path.title}</h3>
                    <p className="mt-3 text-base text-gray-500">{path.description}</p>
                  </div>
                  <div className="px-6 py-4 bg-gray-50">
                    <div className="text-sm">
                      <span className="text-gray-500">Duration: </span>
                      <span className="font-medium text-gray-900">{path.duration}</span>
                    </div>
                    <div className="mt-1 text-sm">
                      <span className="text-gray-500">Level: </span>
                      <span className="font-medium text-gray-900">{path.level}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
} 