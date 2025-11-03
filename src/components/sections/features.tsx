import { Container } from '@/components/ui/container'
import { 
  BoltIcon,
  EyeIcon,
  ShieldCheckIcon,
  SignalIcon,
  CpuChipIcon,
  CloudArrowUpIcon,
  ClockIcon,
  CubeTransparentIcon
} from '@heroicons/react/24/outline'

const features = [
  {
    icon: BoltIcon,
    title: 'Sub-Millisecond Targets',
    description: 'Design for <1ms P99 latency with zero-copy encoding, buffer pools, and a bespoke UDP transport tuned for agent workloads.',
    gradient: 'from-indigo-500 to-purple-500',
    bgGradient: 'from-indigo-50 to-purple-50 dark:from-indigo-950/30 dark:to-purple-950/30'
  },
  {
    icon: EyeIcon,
    title: 'Built-in Observability',
    description: 'Every message includes distributed tracing context. Monitor, debug, and optimize your agent mesh without external instrumentation.',
    gradient: 'from-blue-500 to-cyan-500',
    bgGradient: 'from-blue-50 to-cyan-50 dark:from-blue-950/30 dark:to-cyan-950/30'
  },
  {
    icon: ShieldCheckIcon,
    title: 'Enterprise Security',
    description: 'Noise IK handshake, AEAD encryption, anti-replay protection, and capability-scoped policies baked into the runtime.',
    gradient: 'from-cyan-500 to-teal-500',
    bgGradient: 'from-cyan-50 to-teal-50 dark:from-cyan-950/30 dark:to-teal-950/30'
  },
  {
    icon: SignalIcon,
    title: 'Native Streaming',
    description: 'First-class support for streaming data. Perfect for LLM token streams and real-time agent communications.',
    gradient: 'from-teal-500 to-emerald-500',
    bgGradient: 'from-teal-50 to-emerald-50 dark:from-teal-950/30 dark:to-emerald-950/30'
  },
  {
    icon: CpuChipIcon,
    title: 'Zero-Copy Performance',
    description: 'Minimal allocations in hot paths. Message encode/decode in <1μs. Built for maximum throughput and minimal latency.',
    gradient: 'from-purple-500 to-pink-500',
    bgGradient: 'from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/30'
  },
  {
    icon: CloudArrowUpIcon,
    title: 'Custom UDP Transport',
    description: 'MXP implements its own reliability, congestion, and flow control logic—no HTTP or QUIC layers in the hot path.',
    gradient: 'from-pink-500 to-rose-500',
    bgGradient: 'from-pink-50 to-rose-50 dark:from-pink-950/30 dark:to-rose-950/30'
  },
  {
    icon: ClockIcon,
    title: 'Production Ready',
    description: 'Comprehensive test suite, benchmarks, and documentation. Reference implementation in Rust with proven performance.',
    gradient: 'from-orange-500 to-amber-500',
    bgGradient: 'from-orange-50 to-amber-50 dark:from-orange-950/30 dark:to-amber-950/30'
  },
  {
    icon: CubeTransparentIcon,
    title: 'Open & Extensible',
    description: 'Open specification, MIT/Apache-2.0 licensed. Build your own implementation in any language with our compliance tests.',
    gradient: 'from-indigo-500 to-blue-500',
    bgGradient: 'from-indigo-50 to-blue-50 dark:from-indigo-950/30 dark:to-blue-950/30'
  }
]

export function Features() {
  return (
    <section id="features" className="relative py-12 md:py-20 lg:py-32 bg-white dark:bg-slate-950">
      <Container>
        <div className="mx-auto max-w-7xl px-4">
          {/* Section Header */}
          <div className="text-center mb-8 md:mb-12 lg:mb-20 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-3 md:px-4 py-2 rounded-full bg-indigo-100 dark:bg-indigo-950/50 mb-3 md:mb-6">
              <span className="text-xs md:text-sm font-semibold text-indigo-600 dark:text-indigo-400 tracking-wide">FEATURES</span>
            </div>
            
            <h2 className="mb-3 md:mb-6 text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight">
              <span className="text-gradient block">
                Enterprise-Grade
              </span>
              <span className="text-slate-900 dark:text-white block">
                by Design
              </span>
            </h2>
            
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed px-4">
              Built from the ground up for the demands of modern distributed AI agent systems.
              Every feature optimized for performance, security, and reliability.
            </p>
          </div>
          
          {/* Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <div
                  key={index}
                  className="group relative animate-fade-in"
                  style={{ animationDelay: `${0.05 * index}s` }}
                >
                  {/* Background Gradient on Hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${feature.bgGradient} opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-xl md:rounded-2xl`} />
                  
                  {/* Card */}
                  <div className="relative h-full p-4 md:p-6 lg:p-8 rounded-xl md:rounded-2xl glass hover-lift border-2 border-slate-200/50 dark:border-slate-700/50 group-hover:border-indigo-500/30 dark:group-hover:border-indigo-500/30 transition-all duration-300">
                    {/* Icon */}
                    <div className={`inline-flex p-2 md:p-3 rounded-lg md:rounded-xl bg-gradient-to-br ${feature.gradient} mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="h-5 w-5 md:h-6 md:w-6 text-white" />
                    </div>
                    
                    {/* Title */}
                    <h3 className="text-base md:text-lg lg:text-xl font-bold text-slate-900 dark:text-white mb-2 md:mb-3 break-words">
                      {feature.title}
                    </h3>
                    
                    {/* Description */}
                    <p className="text-xs md:text-sm lg:text-base text-slate-600 dark:text-slate-400 leading-relaxed break-words">
                      {feature.description}
                    </p>
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
