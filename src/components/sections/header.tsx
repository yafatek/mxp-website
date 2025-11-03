import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Container } from '@/components/ui/container'
import { Button } from '@/components/ui/button'
import { BoltIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

export function Header() {
  const location = useLocation()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  
  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/'
    return location.pathname.startsWith(path)
  }
  
  const navLinks = [
    { href: '/#features', label: 'Features', hash: true },
    { href: '/#architecture', label: 'Architecture', hash: true },
    { href: '/#protocol', label: 'Protocol', hash: true },
    { href: '/#use-cases', label: 'Use Cases', hash: true },
    { href: '/#sdks', label: 'SDKs', hash: true },
    { href: '/#roadmap', label: 'Roadmap', hash: true },
    { href: '/docs', label: 'Docs', hash: false },
  ]
  
  return (
    <header className="sticky top-0 z-50 w-full glass shadow-sm">
      <Container>
        <div className="flex h-16 sm:h-20 items-center justify-between px-4 sm:px-0">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 sm:gap-3 group touch-manipulation">
            <div className="p-1.5 sm:p-2 rounded-lg sm:rounded-xl bg-gradient-to-br from-indigo-600 to-blue-600 group-hover:from-indigo-700 group-hover:to-blue-700 transition-all duration-300 shadow-md sm:shadow-lg shadow-indigo-500/50">
              <BoltIcon className="h-4 w-4 sm:h-6 sm:w-6 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="text-base sm:text-xl font-bold text-slate-900 dark:text-white">MXP</span>
              <span className="text-[10px] sm:text-xs text-slate-500 dark:text-slate-400 font-medium -mt-1">Protocol</span>
            </div>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              link.hash ? (
                <a 
                  key={link.href}
                  href={link.href} 
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    isActive(link.href)
                      ? 'text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/50'
                      : 'text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-slate-100 dark:hover:bg-slate-800'
                  }`}
                >
                  {link.label}
                </a>
              ) : (
                <Link 
                  key={link.href}
                  to={link.href} 
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    isActive(link.href)
                      ? 'text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/50'
                      : 'text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-slate-100 dark:hover:bg-slate-800'
                  }`}
                >
                  {link.label}
                </Link>
              )
            ))}
          </nav>
          
          {/* Desktop CTA Buttons */}
          <div className="hidden md:flex items-center gap-3 sm:gap-4">
            <Button 
              variant="ghost" 
              size="sm"
              className="hidden lg:inline-flex text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 text-xs sm:text-sm" 
              asChild
            >
              <a href="https://github.com/yafatek/mxp-protocol" target="_blank" rel="noopener noreferrer">
                <svg className="mr-1.5 h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
                GitHub
              </a>
            </Button>
            <Button 
              size="sm"
              className="bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-700 hover:to-blue-700 text-white shadow-md shadow-indigo-500/30 hover:shadow-lg hover:shadow-indigo-500/40 transition-all duration-300 text-xs sm:text-sm px-4 sm:px-6" 
              asChild
            >
              <Link to="/docs">Get Started</Link>
            </Button>
          </div>
          
          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors touch-manipulation"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <XMarkIcon className="h-6 w-6" />
            ) : (
              <Bars3Icon className="h-6 w-6" />
            )}
          </button>
        </div>
        
        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-slate-200 dark:border-slate-700 py-4 px-4 space-y-2 animate-fade-in">
            {navLinks.map((link) => (
              link.hash ? (
                <a
                  key={link.href}
                  href={link.href}
                  className={`block px-4 py-3 rounded-lg text-sm font-medium transition-colors touch-manipulation ${
                    isActive(link.href)
                      ? 'text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/50'
                      : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`block px-4 py-3 rounded-lg text-sm font-medium transition-colors touch-manipulation ${
                    isActive(link.href)
                      ? 'text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/50'
                      : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              )
            ))}
            <div className="pt-4 space-y-2">
              <Button 
                variant="outline" 
                className="w-full justify-center touch-manipulation" 
                asChild
              >
                <a href="https://github.com/yafatek/mxp-protocol" target="_blank" rel="noopener noreferrer">
                  <svg className="mr-2 h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                  GitHub
                </a>
              </Button>
              <Button 
                className="w-full justify-center bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-700 hover:to-blue-700 text-white touch-manipulation" 
                asChild
              >
                <Link to="/docs" onClick={() => setMobileMenuOpen(false)}>Get Started</Link>
              </Button>
            </div>
          </div>
        )}
      </Container>
    </header>
  )
}
