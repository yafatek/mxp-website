import { Link } from 'react-router-dom'
import { Container } from '@/components/ui/container'
import { Button } from '@/components/ui/button'
import { 
  BoltIcon, 
  CircleStackIcon,
  ShieldCheckIcon,
  RocketLaunchIcon,
  CpuChipIcon,
  ClockIcon
} from '@heroicons/react/24/outline'

export function Hero() {
  return (
    <section className="relative min-h-[90vh] md:min-h-screen flex items-center overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
      {/* Premium Background Effects */}
      <div className="absolute inset-0 bg-grid-premium" />
      
      {/* Animated Gradient Orbs - Hidden on mobile for performance */}
      <div className="hidden md:block absolute top-1/4 -left-48 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl animate-pulse" />
      <div className="hidden md:block absolute bottom-1/4 -right-48 w-[600px] h-[600px] bg-blue-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      <div className="hidden lg:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyan-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      
      <Container className="relative z-10 py-12 md:py-20 px-4 sm:px-6">
        <div className="mx-auto max-w-7xl">
          {/* Main Hero Content */}
          <div className="text-center mb-12 md:mb-20 animate-fade-in">
            {/* Badge */}
            <div className="mb-6 md:mb-8 inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2 sm:py-3 rounded-full glass shadow-lg">
              <div className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1 bg-gradient-to-r from-indigo-600 to-blue-600 rounded-full">
                <BoltIcon className="h-3 w-3 sm:h-4 sm:w-4 text-white" />
                <span className="text-[10px] sm:text-xs font-bold text-white tracking-wide">NEXT-GEN</span>
              </div>
              <span className="text-xs sm:text-sm font-medium text-slate-600 dark:text-slate-300">
                100x Faster
              </span>
            </div>
            
            {/* Main Headline - Mobile Optimized */}
            <h1 className="mb-6 md:mb-8 leading-tight px-4">
              <span className="block text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-slate-900 dark:text-white mb-2">
                Enterprise-Grade
              </span>
              <span className="block text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-gradient">
                Agent Communication
              </span>
              <span className="block text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-slate-900 dark:text-white mt-2">
                Protocol
              </span>
            </h1>
            
            {/* Subheadline - Mobile Optimized */}
            <p className="mx-auto max-w-3xl text-base sm:text-lg md:text-xl lg:text-2xl text-slate-600 dark:text-slate-300 leading-relaxed mb-8 md:mb-12 font-light px-4">
              MXP targets <span className="font-semibold text-indigo-600 dark:text-indigo-400">sub-millisecond latency</span> with a
              <span className="font-semibold text-blue-600 dark:text-blue-400"> zero-copy UDP transport</span> purpose-built for autonomous agents.
              <span className="block mt-2">MXP Nexus adds the runtime, control plane, and SDKs teams need to operate governed agent workforces.</span>
            </p>
            
            {/* CTA Buttons - Mobile Optimized */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-6 mb-12 md:mb-20 px-4">
              <Button 
                size="lg" 
                className="w-full sm:w-auto text-base sm:text-lg px-8 sm:px-10 py-6 sm:py-7 bg-gradient-to-r from-indigo-600 via-blue-600 to-cyan-600 hover:from-indigo-700 hover:via-blue-700 hover:to-cyan-700 btn-glow text-white font-semibold" 
                asChild
              >
                <Link to="/docs">
                  Get Started
                  <svg className="ml-2 h-4 w-4 sm:h-5 sm:w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
              </Button>
              
              <Button 
                size="lg" 
                variant="outline" 
                className="w-full sm:w-auto text-base sm:text-lg px-8 sm:px-10 py-6 sm:py-7 border-2 border-slate-300 dark:border-slate-700 hover:border-indigo-600 dark:hover:border-indigo-500 hover-lift font-semibold" 
                asChild
              >
                <a href="https://github.com/yafatek/mxp-protocol" target="_blank" rel="noopener noreferrer">
                  <svg className="mr-2 h-4 w-4 sm:h-5 sm:w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                  <span className="hidden xs:inline">View on </span>GitHub
                </a>
              </Button>
            </div>
            
            {/* Trust Indicators - Mobile Optimized */}
            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 md:gap-8 text-xs sm:text-sm text-slate-500 dark:text-slate-400 px-4">
              <div className="flex items-center gap-1.5 sm:gap-2">
                <ShieldCheckIcon className="h-4 w-4 sm:h-5 sm:w-5 text-indigo-600 dark:text-indigo-400" />
                <span className="whitespace-nowrap">Open Source</span>
              </div>
              <div className="hidden xs:block w-1 h-1 rounded-full bg-slate-300 dark:bg-slate-600" />
              <div className="flex items-center gap-1.5">
                <span className="font-mono font-semibold text-[10px] sm:text-xs">UDP + Noise</span>
              </div>
              <div className="hidden xs:block w-1 h-1 rounded-full bg-slate-300 dark:bg-slate-600" />
              <div className="flex items-center gap-1.5">
                <span className="font-mono font-semibold text-[10px] sm:text-xs">TLS 1.3</span>
              </div>
              <div className="hidden sm:block w-1 h-1 rounded-full bg-slate-300 dark:bg-slate-600" />
              <div className="hidden sm:flex items-center gap-1.5">
                <span className="font-mono font-semibold text-xs">Rust</span>
              </div>
            </div>
          </div>
          
          {/* Premium Stats Grid - Mobile Optimized */}
          <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 animate-fade-in px-4" style={{ animationDelay: '0.2s' }}>
            {[
              {
                icon: ClockIcon,
                value: '<1ms',
                label: 'P99 Latency',
                gradient: 'from-indigo-500 to-purple-500',
                bgGradient: 'from-indigo-50 to-purple-50 dark:from-indigo-950/50 dark:to-purple-950/50'
              },
              {
                icon: CircleStackIcon,
                value: '100K',
                label: 'Messages/sec',
                gradient: 'from-blue-500 to-cyan-500',
                bgGradient: 'from-blue-50 to-cyan-50 dark:from-blue-950/50 dark:to-cyan-950/50'
              },
              {
                icon: RocketLaunchIcon,
                value: '0-RTT',
                label: 'Connection',
                gradient: 'from-cyan-500 to-teal-500',
                bgGradient: 'from-cyan-50 to-teal-50 dark:from-cyan-950/50 dark:to-teal-950/50'
              },
              {
                icon: CpuChipIcon,
                value: 'Zero',
                label: 'Copy Arch',
                gradient: 'from-purple-500 to-pink-500',
                bgGradient: 'from-purple-50 to-pink-50 dark:from-purple-950/50 dark:to-pink-950/50'
              }
            ].map((stat, index) => {
              const Icon = stat.icon
              return (
                <div 
                  key={index} 
                  className="group relative overflow-hidden touch-manipulation"
                  style={{ animationDelay: `${0.1 * index}s` }}
                >
                  {/* Glow Effect */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${stat.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl md:rounded-2xl`} />
                  
                  {/* Card Content */}
                  <div className="relative p-4 sm:p-6 md:p-8 rounded-xl md:rounded-2xl glass hover-lift border-2 border-slate-200/50 dark:border-slate-700/50 group-hover:border-indigo-500/50 dark:group-hover:border-indigo-500/50 transition-all duration-300">
                    {/* Icon */}
                    <div className={`inline-flex p-2 sm:p-3 rounded-lg md:rounded-xl bg-gradient-to-br ${stat.gradient} mb-3 sm:mb-4`}>
                      <Icon className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 text-white" />
                    </div>
                    
                    {/* Value */}
                    <div className={`text-2xl sm:text-3xl md:text-4xl font-bold mb-1 sm:mb-2 bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent`}>
                      {stat.value}
                    </div>
                    
                    {/* Label */}
                    <div className="text-[10px] sm:text-xs md:text-sm font-medium text-slate-600 dark:text-slate-400">
                      {stat.label}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </Container>
    </section>
  )
}
