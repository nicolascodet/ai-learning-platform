import Layout from '../components/Layout'

const benefits = [
  {
    title: 'Real-World Experience',
    description: 'Work on practical projects that mirror real industry challenges and build a portfolio of actual applications.'
  },
  {
    title: 'Deep Understanding',
    description: 'Gain comprehensive knowledge by applying concepts in practical scenarios rather than just theoretical learning.'
  },
  {
    title: 'Career Readiness',
    description: 'Develop the exact skills and experience that employers are looking for in AI and machine learning roles.'
  },
  {
    title: 'Learning by Doing',
    description: 'Engage in active learning through hands-on experience, which leads to better retention and understanding.'
  }
]

export default function WhyProjectLearning() {
  return (
    <Layout>
      <div className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Why Project-Based Learning?
            </h2>
            <p className="mt-4 text-lg text-gray-500 max-w-3xl mx-auto">
              Project-based learning is the most effective way to master AI development. 
              Here's why our approach will help you succeed in your AI journey.
            </p>
          </div>

          <div className="mt-16">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white overflow-hidden shadow rounded-lg">
                  <div className="px-6 py-5">
                    <h3 className="text-lg font-medium text-gray-900">
                      {benefit.title}
                    </h3>
                    <p className="mt-3 text-base text-gray-500">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-16 text-center">
              <p className="text-xl text-gray-500">
                Ready to start your journey with project-based learning?
              </p>
              <a
                href="/skill-paths"
                className="mt-8 inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
              >
                Explore Skill Paths
              </a>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
} 