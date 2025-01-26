import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Navbar() {
  const router = useRouter()
  
  const isActive = (path: string) => router.pathname === path

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex space-x-8">
            {/* Logo/Home */}
            <Link 
              href="/"
              className={`inline-flex items-center px-1 pt-1 text-sm font-medium ${
                isActive('/') 
                  ? 'text-indigo-600 border-b-2 border-indigo-600' 
                  : 'text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Home
            </Link>

            {/* Skill Paths */}
            <Link 
              href="/skill-paths"
              className={`inline-flex items-center px-1 pt-1 text-sm font-medium ${
                isActive('/skill-paths') 
                  ? 'text-indigo-600 border-b-2 border-indigo-600' 
                  : 'text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Skill Paths
            </Link>

            {/* Why Project-Based Learning */}
            <Link 
              href="/why-project-learning"
              className={`inline-flex items-center px-1 pt-1 text-sm font-medium ${
                isActive('/why-project-learning') 
                  ? 'text-indigo-600 border-b-2 border-indigo-600' 
                  : 'text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Why Project-Based Learning?
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
} 