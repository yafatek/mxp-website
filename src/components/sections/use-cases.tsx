import { Container } from '@/components/ui/container'
import {
  CpuChipIcon,
  ChartBarIcon,
  CubeTransparentIcon,
  CloudIcon,
  BoltIcon,
  ShieldCheckIcon
} from '@heroicons/react/24/outline'

const useCases = [
  {
    icon: CpuChipIcon,
    title: 'AI Agent Meshes',
    description: 'Low-latency communication between AI agents with built-in service discovery and health monitoring.',
    gradient: 'from-indigo-500 to-purple-500',
    bgGradient: 'from-indigo-50 to-purple-50 dark:from-indigo-950/30 dark:to-purple-950/30',
    examples: [
      'Multi-agent research systems',
      'Coordinated planning agents',
      'Distributed reasoning networks',
      'Agent-to-agent delegation'
    ],
    metrics: {
      latency: '<1ms P99',
      throughput: '100K msg/sec',
      reliability: '99.99% uptime'
    }
  },
  {
    icon: BoltIcon,
    title: 'Real-Time Trading Systems',
    description: 'Financial trading platforms requiring sub-millisecond response times with guaranteed message delivery.',
    gradient: 'from-blue-500 to-cyan-500',
    bgGradient: 'from-blue-50 to-cyan-50 dark:from-blue-950/30 dark:to-cyan-950/30',
    examples: [
      'High-frequency trading bots',
      'Market data distribution',
      'Order execution systems',
      'Risk management agents'
    ],
    metrics: {
      latency: '<100µs send/recv',
      throughput: '1M+ orders/sec',
      reliability: 'Zero message loss'
    }
  },
  {
    icon: CubeTransparentIcon,
    title: 'Microservices Communication',
    description: 'High-throughput service-to-service communication with automatic observability and distributed tracing.',
    gradient: 'from-cyan-500 to-teal-500',
    bgGradient: 'from-cyan-50 to-teal-50 dark:from-cyan-950/30 dark:to-teal-950/30',
    examples: [
      'API gateway to backend services',
      'Event-driven architectures',
      'Service mesh replacement',
      'Cross-datacenter sync'
    ],
    metrics: {
      latency: '10-50x faster than HTTP',
      throughput: '100x higher than REST',
      overhead: '60% less than HTTP'
    }
  },
  {
    icon: CloudIcon,
    title: 'Streaming Applications',
    description: 'Native support for LLM token streams, data pipelines, and real-time analytics with backpressure control.',
    gradient: 'from-teal-500 to-emerald-500',
    bgGradient: 'from-teal-50 to-emerald-50 dark:from-teal-950/30 dark:to-emerald-950/30',
    examples: [
      'LLM token streaming',
      'Real-time data pipelines',
      'Live video/audio processing',
      'IoT sensor networks'
    ],
    metrics: {
      latency: 'Sub-millisecond chunks',
      throughput: 'Millions of events/sec',
      reliability: 'Flow control built-in'
    }
  },
  {
    icon: ChartBarIcon,
    title: 'IoT & Edge Computing',
    description: 'Efficient communication for resource-constrained devices with minimal overhead and battery impact.',
    gradient: 'from-purple-500 to-pink-500',
    bgGradient: 'from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/30',
    examples: [
      'Smart home device coordination',
      'Industrial IoT monitoring',
      'Edge AI inference',
      'Autonomous vehicle networks'
    ],
    metrics: {
      overhead: '40 bytes per message',
      efficiency: '60% less bandwidth',
      reliability: 'Offline-first support'
    }
  },
  {
    icon: ShieldCheckIcon,
    title: 'Enterprise Integration',
    description: 'Secure, governed communication between enterprise systems with audit trails and compliance controls.',
    gradient: 'from-pink-500 to-rose-500',
    bgGradient: 'from-pink-50 to-rose-50 dark:from-pink-950/30 dark:to-rose-950/30',
    examples: [
      'Salesforce ↔ internal agents',
      'Jira workflow automation',
      'SAP integration bridges',
      'ServiceNow orchestration'
    ],
    metrics: {
      security: 'Noise IK + AEAD',
      compliance: 'SOC2, GDPR ready',
      observability: '100% traced'
    }
  }
]

const realWorldScenarios = [
  {
    title: 'Multi-Agent Research System',
    description: 'A coordinator agent delegates research tasks to specialist agents, aggregates results, and streams insights back to users in real-time.',
    flow: [
      'User query arrives via HTTP/SSE',
      'Coordinator discovers research agents via MXP registry',
      'Parallel MXP calls to Research, Planning, Analysis agents',
      'Agents stream partial results as they work',
      'Coordinator aggregates and streams to user',
      'Full trace available in observability dashboard'
    ],
    performance: 'Total latency: <50ms for complex multi-agent workflow'
  },
  {
    title: 'Financial Trading Platform',
    description: 'Trading bots communicate market signals and execute orders with guaranteed sub-millisecond latency and zero message loss.',
    flow: [
      'Market data arrives via UDP multicast',
      'Signal processing agents analyze in <100µs',
      'MXP Call to risk management agent',
      'Risk approval in <50µs',
      'Order execution via MXP to exchange gateway',
      'Confirmation and audit trail logged'
    ],
    performance: 'End-to-end: <500µs from signal to order execution'
  },
  {
    title: 'Real-Time Analytics Pipeline',
    description: 'IoT sensors stream data through edge processors to cloud analytics agents with automatic backpressure and flow control.',
    flow: [
      'Sensors publish events via MXP datagrams',
      'Edge agents aggregate and filter locally',
      'MXP streams to cloud processing agents',
      'Real-time analytics with <10ms latency',
      'Results pushed to dashboards via SSE',
      'Automatic retry and backpressure handling'
    ],
    performance: 'Throughput: 1M+ events/sec with <10ms end-to-end latency'
  }
]

export function UseCases() {
  return (
    <section id="use-cases" className="relative py-12 md:py-20 lg:py-32 bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-950">
      <Container>
        <div className="mx-auto max-w-7xl px-4">
          {/* Section Header */}
          <div className="text-center mb-8 md:mb-12 lg:mb-20 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-3 py-2 rounded-full bg-teal-100 dark:bg-teal-950/50 mb-3 md:mb-6">
              <CubeTransparentIcon className="h-3 w-3 md:h-4 md:w-4 text-teal-600 dark:text-teal-400" />
              <span className="text-xs md:text-sm font-semibold text-teal-600 dark:text-teal-400 tracking-wide">USE CASES</span>
            </div>
            
            <h2 className="mb-3 md:mb-6 text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight">
              <span className="text-gradient block">
                Built for Real-World
              </span>
              <span className="text-slate-900 dark:text-white block">
                Production Workloads
              </span>
            </h2>
            
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed px-4">
              From AI agent meshes to financial trading systems, MXP delivers the performance and reliability your applications demand.
            </p>
          </div>

          {/* Use Cases Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8 mb-8 md:mb-12 lg:mb-20">
            {useCases.map((useCase, index) => {
              const Icon = useCase.icon
              return (
                <div
                  key={index}
                  className="group relative animate-fade-in"
                  style={{ animationDelay: `${0.05 * index}s` }}
                >
                  {/* Background Gradient on Hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${useCase.bgGradient} opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-xl md:rounded-2xl lg:rounded-3xl`} />
                  
                  {/* Card */}
                  <div className="relative h-full p-4 md:p-6 lg:p-8 rounded-xl md:rounded-2xl lg:rounded-3xl glass hover-lift border-2 border-slate-200/50 dark:border-slate-700/50 group-hover:border-teal-500/30 dark:group-hover:border-teal-500/30 transition-all duration-300">
                    {/* Icon */}
                    <div className={`inline-flex p-3 md:p-4 rounded-xl md:rounded-2xl bg-gradient-to-br ${useCase.gradient} mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="h-6 w-6 md:h-8 md:w-8 text-white" />
                    </div>
                    
                    {/* Title */}
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 dark:text-white mb-2 md:mb-3 break-words">
                      {useCase.title}
                    </h3>
                    
                    {/* Description */}
                    <p className="text-xs sm:text-sm md:text-base text-slate-600 dark:text-slate-400 leading-relaxed mb-4 md:mb-6 break-words">
                      {useCase.description}
                    </p>
                    
                    {/* Examples */}
                    <div className="mb-4 md:mb-6">
                      <h4 className="text-xs md:text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2 md:mb-3">
                        Examples:
                      </h4>
                      <ul className="space-y-1 md:space-y-2">
                        {useCase.examples.map((example, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-xs md:text-sm text-slate-600 dark:text-slate-400">
                            <span className="text-teal-500 mt-0.5 flex-shrink-0">•</span>
                            <span className="break-words min-w-0">{example}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    {/* Metrics */}
                    <div className="pt-4 md:pt-6 border-t border-slate-200 dark:border-slate-700">
                      <div className="space-y-1 md:space-y-2">
                        {Object.entries(useCase.metrics).map(([key, value]) => (
                          <div key={key} className="flex items-center justify-between text-[10px] md:text-xs gap-2">
                            <span className="text-slate-500 dark:text-slate-400 capitalize break-words min-w-0">{key}:</span>
                            <span className="font-mono font-semibold text-teal-600 dark:text-teal-400 whitespace-nowrap">{value}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Real-World Scenarios */}
          <div className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-6 md:mb-10 text-center px-4">
              Real-World Scenarios
            </h3>
            
            <div className="space-y-4 md:space-y-6 lg:space-y-8">
              {realWorldScenarios.map((scenario, index) => (
                <div 
                  key={index}
                  className="glass rounded-xl md:rounded-2xl lg:rounded-3xl p-4 md:p-6 lg:p-10 border-2 border-slate-200/50 dark:border-slate-700/50 hover:border-teal-500/30 transition-all duration-300"
                >
                  <h4 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 dark:text-white mb-2 md:mb-3 break-words">
                    {scenario.title}
                  </h4>
                  <p className="text-sm sm:text-base md:text-lg text-slate-600 dark:text-slate-400 mb-4 md:mb-6 break-words leading-relaxed">
                    {scenario.description}
                  </p>
                  
                  {/* Flow Steps */}
                  <div className="mb-4 md:mb-6">
                    <h5 className="text-xs md:text-sm font-semibold text-slate-700 dark:text-slate-300 mb-3 md:mb-4">
                      Message Flow:
                    </h5>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-3">
                      {scenario.flow.map((step, idx) => (
                        <div 
                          key={idx}
                          className="flex items-start gap-2 md:gap-3 p-2 md:p-3 rounded-lg md:rounded-xl bg-slate-50 dark:bg-slate-800/50"
                        >
                          <div className="flex-shrink-0 w-5 h-5 md:w-6 md:h-6 rounded-full bg-teal-500 text-white text-[10px] md:text-xs font-bold flex items-center justify-center">
                            {idx + 1}
                          </div>
                          <span className="text-xs md:text-sm text-slate-700 dark:text-slate-300 break-words leading-relaxed min-w-0">
                            {step}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Performance */}
                  <div className="inline-flex items-center gap-2 px-3 md:px-4 py-2 rounded-full bg-teal-100 dark:bg-teal-950/50 w-fit">
                    <BoltIcon className="h-3 w-3 md:h-4 md:w-4 text-teal-600 dark:text-teal-400 flex-shrink-0" />
                    <span className="text-xs md:text-sm font-semibold text-teal-700 dark:text-teal-400 break-words">
                      {scenario.performance}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

