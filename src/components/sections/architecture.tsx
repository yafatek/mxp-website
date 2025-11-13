import { Container } from '@/components/ui/container'
import {
  CpuChipIcon,
  ServerStackIcon,
  GlobeAltIcon,
  ShieldCheckIcon,
  ArrowPathIcon
} from '@heroicons/react/24/outline'

const architectureLayers = [
  {
    title: 'Web Frontends & Operators',
    description: 'React dashboards, CLI tools, and automation scripts connect via MXP',
    icon: GlobeAltIcon,
    gradient: 'from-indigo-500 to-purple-500',
    details: ['WebRTC gateway for browsers', 'Direct UDP for trusted networks', 'WebSocket fallback for restricted environments']
  },
  {
    title: 'MXP Nexus Control Plane',
    description: 'Centralized governance, policy enforcement, and observability',
    icon: ServerStackIcon,
    gradient: 'from-blue-500 to-cyan-500',
    details: ['Policy & governance service', 'Agent registry & discovery', 'Metrics, traces, and audit logs', 'Configuration distribution']
  },
  {
    title: 'Agent Mesh',
    description: 'Coordinator and specialist agents communicating via pure MXP',
    icon: ArrowPathIcon,
    gradient: 'from-cyan-500 to-teal-500',
    details: ['Zero-copy UDP transport', 'Sub-millisecond latency', 'Peer-to-peer communication', 'Built-in distributed tracing']
  },
  {
    title: 'Specialist Agents',
    description: 'Domain-specific agents (Research, Planning, Analysis) with focused capabilities',
    icon: CpuChipIcon,
    gradient: 'from-teal-500 to-emerald-500',
    details: ['Rust runtime with agents-sdk', 'Simple request/response patterns', 'Capability-scoped tools', 'Automatic registration']
  }
]

const communicationPatterns = [
  {
    title: 'Web → Coordinator',
    pattern: 'HTTP/SSE',
    description: 'Browser clients stream LLM tokens in real-time via Server-Sent Events',
    icon: '🌐'
  },
  {
    title: 'Coordinator ↔ Specialists',
    pattern: 'MXP Protocol',
    description: 'Pure MXP with Call/Response messages over UDP transport',
    icon: '⚡'
  },
  {
    title: 'Control Plane ↔ Agents',
    pattern: 'MXP Streams',
    description: 'Policy distribution and telemetry collection via MXP event streams',
    icon: '📊'
  },
  {
    title: 'Agent ↔ Agent',
    pattern: 'MXP P2P',
    description: 'Direct peer-to-peer communication with zero intermediaries',
    icon: '🔗'
  }
]

export function Architecture() {
  return (
    <section id="architecture" className="relative py-16 md:py-32 bg-white dark:bg-slate-950">
      <Container>
        <div className="mx-auto max-w-7xl px-4">
          {/* Section Header */}
          <div className="text-center mb-12 md:mb-20 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-100 dark:bg-cyan-950/50 mb-4 md:mb-6">
              <ServerStackIcon className="h-4 w-4 text-cyan-600 dark:text-cyan-400" />
              <span className="text-xs md:text-sm font-semibold text-cyan-600 dark:text-cyan-400 tracking-wide">ARCHITECTURE</span>
            </div>
            
            <h2 className="mb-4 md:mb-6 text-3xl md:text-4xl lg:text-5xl">
              <span className="text-slate-900 dark:text-white">
                Built for
              </span>
              <br />
              <span className="text-gradient">
                Distributed Agent Systems
              </span>
            </h2>
            
            <p className="text-base md:text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed px-4">
              A complete stack from protocol to control plane, designed for production agent meshes with governance, observability, and enterprise-grade reliability.
            </p>
          </div>

          {/* Architecture Diagram */}
          <div className="mb-12 md:mb-20 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <div className="glass rounded-2xl md:rounded-3xl p-4 md:p-8 lg:p-12 border-2 border-slate-200 dark:border-slate-700">
              <h3 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white mb-6 md:mb-8 text-center">
                MXP Agent Mesh Architecture
              </h3>
              
              <div className="space-y-6">
                {architectureLayers.map((layer, index) => {
                  const Icon = layer.icon
                  return (
                    <div 
                      key={index}
                      className="relative"
                    >
                      {/* Connection Line */}
                      {index < architectureLayers.length - 1 && (
                        <div className="absolute left-8 top-full w-0.5 h-6 bg-gradient-to-b from-slate-300 to-transparent dark:from-slate-600 z-0" />
                      )}
                      
                      {/* Layer Card */}
                      <div className="relative glass rounded-xl md:rounded-2xl p-4 md:p-6 border-2 border-slate-200/50 dark:border-slate-700/50 hover:border-cyan-500/30 transition-all duration-300 hover-lift">
                        <div className="flex flex-col sm:flex-row items-start gap-3 md:gap-4">
                          {/* Icon */}
                          <div className={`flex-shrink-0 p-2 md:p-3 rounded-lg md:rounded-xl bg-gradient-to-br ${layer.gradient}`}>
                            <Icon className="h-5 w-5 md:h-6 md:w-6 text-white" />
                          </div>
                          
                          {/* Content */}
                          <div className="flex-1 w-full">
                            <h4 className="text-lg md:text-xl font-bold text-slate-900 dark:text-white mb-2">
                              {layer.title}
                            </h4>
                            <p className="text-sm md:text-base text-slate-600 dark:text-slate-400 mb-3 md:mb-4">
                              {layer.description}
                            </p>
                            
                            {/* Details */}
                            <div className="flex flex-wrap gap-2">
                              {layer.details.map((detail, idx) => (
                                <span 
                                  key={idx}
                                  className="text-xs px-2 md:px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300"
                                >
                                  {detail}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>

          {/* Communication Patterns */}
          <div className="mb-12 md:mb-20 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <h3 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-6 md:mb-8 text-center">
              Communication Patterns
            </h3>
            
            <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
              {communicationPatterns.map((pattern, index) => (
                <div 
                  key={index}
                  className="glass rounded-xl md:rounded-2xl p-4 md:p-6 border-2 border-slate-200/50 dark:border-slate-700/50 hover:border-cyan-500/30 transition-all duration-300 hover-lift"
                >
                  <div className="flex items-start gap-3 md:gap-4">
                    <div className="text-3xl md:text-4xl flex-shrink-0">{pattern.icon}</div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-base md:text-lg font-bold text-slate-900 dark:text-white mb-1 md:mb-2">
                        {pattern.title}
                      </h4>
                      <div className="inline-flex items-center gap-2 px-2 md:px-3 py-1 rounded-full bg-cyan-100 dark:bg-cyan-950/50 mb-2 md:mb-3">
                        <span className="text-xs font-mono font-semibold text-cyan-700 dark:text-cyan-400">
                          {pattern.pattern}
                        </span>
                      </div>
                      <p className="text-xs md:text-sm text-slate-600 dark:text-slate-400">
                        {pattern.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Key Benefits */}
          <div className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="glass rounded-2xl md:rounded-3xl p-6 md:p-8 lg:p-12 border-2 border-cyan-200 dark:border-cyan-800">
              <div className="flex items-center gap-3 mb-6 md:mb-8">
                <ShieldCheckIcon className="h-6 w-6 md:h-8 md:w-8 text-cyan-600 dark:text-cyan-400 flex-shrink-0" />
                <h3 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white">
                  Production-Ready Architecture
                </h3>
              </div>
              
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                <div>
                  <h4 className="text-base md:text-lg font-bold text-slate-900 dark:text-white mb-2">
                    Security First
                  </h4>
                  <p className="text-slate-600 dark:text-slate-400 text-sm">
                    Noise IK handshake, AEAD encryption, header protection, anti-replay, and session resumption built into the transport layer.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-base md:text-lg font-bold text-slate-900 dark:text-white mb-2">
                    Observable by Default
                  </h4>
                  <p className="text-slate-600 dark:text-slate-400 text-sm">
                    Every message includes trace IDs. Automatic metrics collection. OpenTelemetry integration. No external instrumentation needed.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-base md:text-lg font-bold text-slate-900 dark:text-white mb-2">
                    Enterprise Governance
                  </h4>
                  <p className="text-slate-600 dark:text-slate-400 text-sm">
                    Policy enforcement, capability scopes, audit trails, and compliance-ready controls integrated into the runtime.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

