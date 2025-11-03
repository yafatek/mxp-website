import { Container } from '@/components/ui/container'
import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'
import {
  ChartBarIcon,
  CubeTransparentIcon,
  SparklesIcon,
  ArrowRightIcon,
  CheckCircleIcon
} from '@heroicons/react/24/outline'

const comparisons = [
  {
    category: 'Connection Setup',
    mxp: '0-RTT (Instant)',
    http: '200-300ms',
    advantage: '100x faster'
  },
  {
    category: 'Message Latency',
    mxp: '<1ms P99',
    http: '10-50ms',
    advantage: '10-50x faster'
  },
  {
    category: 'Throughput',
    mxp: '100K msg/sec',
    http: '~1K req/sec',
    advantage: '100x higher'
  },
  {
    category: 'Overhead',
    mxp: '40 bytes',
    http: '100+ bytes',
    advantage: '60% less'
  }
]

const benefits = [
  'Zero-copy message encoding/decoding',
  'Built-in distributed tracing',
  'Native streaming support',
  'MXP-native multiplexing & flow control',
  'Automatic agent discovery & lifecycle hooks',
  'Sub-millisecond latency targets',
  'Noise IK handshake with AEAD encryption',
  'Open specification, extensible SDKs'
]

export function WhyMXP() {
  return (
    <section id="why" className="relative py-32 bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-950">
      <div className="absolute inset-0 bg-grid-premium opacity-50" />
      
      <Container className="relative z-10">
        <div className="mx-auto max-w-7xl">
          {/* Section Header */}
          <div className="text-center mb-20 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-100 dark:bg-indigo-950/50 mb-6">
              <SparklesIcon className="h-4 w-4 text-indigo-600 dark:text-indigo-400" />
              <span className="text-sm font-semibold text-indigo-600 dark:text-indigo-400 tracking-wide">WHY MXP</span>
            </div>
            
            <h2 className="mb-6">
              <span className="text-slate-900 dark:text-white">
                Built for the
              </span>
              <br />
              <span className="text-gradient">
                Future of AI Agents
              </span>
            </h2>
            
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Traditional HTTP wasn't designed for agent-to-agent communication.
              MXP is purpose-built for the performance and observability demands of distributed AI systems.
            </p>
          </div>
          
          {/* Comparison Table */}
          <div className="mb-12 md:mb-20 animate-fade-in px-4" style={{ animationDelay: '0.1s' }}>
            <div className="glass rounded-2xl md:rounded-3xl overflow-hidden border-2 border-slate-200 dark:border-slate-700 shadow-2xl">
              <div className="overflow-x-auto -webkit-overflow-scrolling-touch">
                <table className="w-full min-w-[600px]">
                  <thead>
                    <tr className="bg-gradient-to-r from-indigo-600 to-blue-600">
                      <th className="px-3 sm:px-4 md:px-6 lg:px-8 py-3 sm:py-4 md:py-6 text-left text-xs sm:text-sm font-bold text-white uppercase tracking-wider">Metric</th>
                      <th className="px-3 sm:px-4 md:px-6 lg:px-8 py-3 sm:py-4 md:py-6 text-left text-xs sm:text-sm font-bold text-white uppercase tracking-wider">MXP</th>
                      <th className="px-3 sm:px-4 md:px-6 lg:px-8 py-3 sm:py-4 md:py-6 text-left text-xs sm:text-sm font-bold text-white uppercase tracking-wider">HTTP/REST</th>
                      <th className="px-3 sm:px-4 md:px-6 lg:px-8 py-3 sm:py-4 md:py-6 text-left text-xs sm:text-sm font-bold text-white uppercase tracking-wider">Advantage</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 dark:divide-slate-700">
                    {comparisons.map((item, index) => (
                      <tr 
                        key={index}
                        className="hover:bg-indigo-50/50 dark:hover:bg-indigo-950/20 transition-colors"
                      >
                        <td className="px-3 sm:px-4 md:px-6 lg:px-8 py-3 sm:py-4 md:py-6 text-xs sm:text-sm font-semibold text-slate-900 dark:text-white whitespace-nowrap">
                          {item.category}
                        </td>
                        <td className="px-3 sm:px-4 md:px-6 lg:px-8 py-3 sm:py-4 md:py-6 text-xs sm:text-sm">
                          <span className="inline-flex items-center gap-1 sm:gap-2 px-2 sm:px-3 py-0.5 sm:py-1 rounded-full bg-green-100 dark:bg-green-950/50 text-green-700 dark:text-green-400 font-semibold whitespace-nowrap">
                            {item.mxp}
                          </span>
                        </td>
                        <td className="px-3 sm:px-4 md:px-6 lg:px-8 py-3 sm:py-4 md:py-6 text-xs sm:text-sm">
                          <span className="inline-flex items-center gap-1 sm:gap-2 px-2 sm:px-3 py-0.5 sm:py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 font-mono whitespace-nowrap">
                            {item.http}
                          </span>
                        </td>
                        <td className="px-3 sm:px-4 md:px-6 lg:px-8 py-3 sm:py-4 md:py-6 text-xs sm:text-sm">
                          <span className="text-indigo-600 dark:text-indigo-400 font-bold whitespace-nowrap">
                            {item.advantage}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          
          {/* Benefits Grid */}
          <div className="grid md:grid-cols-2 gap-6 md:gap-8 lg:gap-12 mb-12 md:mb-20 px-4">
            {/* Key Benefits */}
            <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="flex items-center gap-2 sm:gap-3 mb-6 md:mb-8">
                <div className="p-2 sm:p-3 rounded-lg md:rounded-xl bg-gradient-to-br from-indigo-500 to-blue-500">
                  <CubeTransparentIcon className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                  Key Benefits
                </h3>
              </div>
              
              <div className="space-y-3 md:space-y-4">
                {benefits.map((benefit, index) => (
                  <div 
                    key={index}
                    className="flex items-start gap-2 sm:gap-3 p-3 sm:p-4 rounded-lg md:rounded-xl glass hover:border-indigo-500/30 border-2 border-slate-200/50 dark:border-slate-700/50 transition-all duration-300 hover-lift"
                  >
                    <CheckCircleIcon className="h-5 w-5 sm:h-6 sm:w-6 text-indigo-600 dark:text-indigo-400 flex-shrink-0 mt-0.5" />
                    <span className="text-sm sm:text-base text-slate-700 dark:text-slate-300 font-medium break-words min-w-0">
                      {benefit}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Use Cases */}
            <div className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <div className="flex items-center gap-2 sm:gap-3 mb-6 md:mb-8">
                <div className="p-2 sm:p-3 rounded-lg md:rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500">
                  <ChartBarIcon className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                  Perfect For
                </h3>
              </div>
              
              <div className="space-y-4 md:space-y-6">
                {[
                  {
                    title: 'AI Agent Meshes',
                    description: 'Low-latency communication between AI agents with built-in service discovery and health monitoring.'
                  },
                  {
                    title: 'Real-Time Systems',
                    description: 'Financial trading, IoT networks, and other systems requiring sub-millisecond response times.'
                  },
                  {
                    title: 'Microservices',
                    description: 'High-throughput service-to-service communication with automatic observability and tracing.'
                  },
                  {
                    title: 'Streaming Applications',
                    description: 'Native support for LLM token streams, data pipelines, and real-time analytics.'
                  }
                ].map((useCase, index) => (
                  <div 
                    key={index}
                    className="p-4 sm:p-5 md:p-6 rounded-lg md:rounded-xl glass border-2 border-slate-200/50 dark:border-slate-700/50 hover:border-blue-500/30 transition-all duration-300 hover-lift"
                  >
                    <h4 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-2 break-words">
                      {useCase.title}
                    </h4>
                    <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed break-words">
                      {useCase.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* CTA Section */}
          <div className="text-center animate-fade-in px-4" style={{ animationDelay: '0.4s' }}>
            <div className="inline-block w-full max-w-4xl p-6 sm:p-8 rounded-2xl md:rounded-3xl glass border-2 border-indigo-200 dark:border-indigo-800 shadow-2xl">
              <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-3 md:mb-4">
                Ready to build the future?
              </h3>
              <p className="text-sm sm:text-base md:text-lg text-slate-600 dark:text-slate-300 mb-6 md:mb-8 max-w-2xl mx-auto">
                Start building with MXP today. Open source, production-ready, and backed by a growing community.
              </p>
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4">
                <Button 
                  size="lg" 
                  className="text-base sm:text-lg px-6 sm:px-8 md:px-10 py-5 sm:py-6 md:py-7 bg-gradient-to-r from-indigo-600 via-blue-600 to-cyan-600 hover:from-indigo-700 hover:via-blue-700 hover:to-cyan-700 btn-glow text-white font-semibold touch-manipulation" 
                  asChild
                >
                  <Link to="/docs">
                    Get Started
                    <ArrowRightIcon className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                  </Link>
                </Button>
                
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="text-base sm:text-lg px-6 sm:px-8 md:px-10 py-5 sm:py-6 md:py-7 border-2 border-slate-300 dark:border-slate-700 hover:border-indigo-600 dark:hover:border-indigo-500 font-semibold touch-manipulation" 
                  asChild
                >
                  <a href="https://github.com/yafatek/mxp-protocol" target="_blank" rel="noopener noreferrer">
                    View on GitHub
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
