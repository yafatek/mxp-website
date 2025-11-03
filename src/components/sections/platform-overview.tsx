import { Container } from '@/components/ui/container'
import {
  ServerStackIcon,
  CpuChipIcon,
  ShieldCheckIcon,
  EyeIcon,
  CloudIcon,
  CommandLineIcon
} from '@heroicons/react/24/outline'

const stackComponents = [
  {
    title: 'MXP Protocol',
    path: 'mxp-protocol/',
    icon: CpuChipIcon,
    gradient: 'from-indigo-500 to-purple-500',
    description: 'Binary UDP transport with 32-byte headers, XXHash3 checksum, Noise-inspired handshake',
    features: [
      'Zero-copy message API',
      'Congestion & flow control',
      'Buffer pools for efficiency',
      'Sub-millisecond encode/decode',
      'Custom reliability layer',
      'Session resumption'
    ]
  },
  {
    title: 'Agent Runtime',
    path: 'agents-runtime-sdk/',
    icon: ServerStackIcon,
    gradient: 'from-blue-500 to-cyan-500',
    description: 'Crates for kernel, adapters, tools, memory, policy, telemetry, and macros',
    features: [
      'Explicit agent lifecycle',
      'MXP message handlers',
      'Governance hooks',
      'Distributed tracing',
      'Memory bus integration',
      'Tool registry & capabilities'
    ]
  },
  {
    title: 'Control Plane',
    path: 'relay/',
    icon: CloudIcon,
    gradient: 'from-cyan-500 to-teal-500',
    description: 'CLI + services for registry, policy, observability, and operator workflows',
    features: [
      'Agent registry & discovery',
      'Policy enforcement engine',
      'Metrics & trace collection',
      'Audit log management',
      'Configuration distribution',
      'Multi-tenant isolation'
    ]
  }
]

const reliabilityFeatures = [
  {
    title: 'Transport Resilience',
    icon: ShieldCheckIcon,
    description: 'Anti-amplification guard, packet ACK/loss recovery, congestion controller',
    details: [
      'Automatic retry with exponential backoff',
      'Packet loss detection and recovery',
      'Congestion window management',
      'Flow control with backpressure',
      'Connection migration support',
      'Path validation and probing'
    ]
  },
  {
    title: 'Agent Lifecycle',
    icon: ServerStackIcon,
    description: 'Explicit state transitions enforced by AgentKernel',
    details: [
      'Boot → Activate → Quiesce → Retire',
      'Graceful shutdown handling',
      'Heartbeat monitoring',
      'Automatic deregistration',
      'Health check endpoints',
      'State persistence'
    ]
  },
  {
    title: 'Observability',
    icon: EyeIcon,
    description: 'Built-in tracing and metrics without external instrumentation',
    details: [
      'Trace IDs in every message',
      'OpenTelemetry integration',
      'Prometheus metrics export',
      'Audit event streams',
      'Performance profiling',
      'Packet capture (debug mode)'
    ]
  }
]

const packagingTargets = [
  {
    target: 'Developer Loop',
    icon: CommandLineIcon,
    timeline: 'Available Now',
    description: 'Local development and testing',
    features: [
      'Cargo workspace setup',
      'CLI scaffolding tools',
      'Example agents',
      'Local mesh testing',
      'Hot reload support'
    ]
  },
  {
    target: 'Self-Managed Cluster',
    icon: ServerStackIcon,
    timeline: 'Q2 2026',
    description: 'Deploy on your own infrastructure',
    features: [
      'Docker Compose templates',
      'Helm charts for Kubernetes',
      'Terraform modules',
      'Observability stack included',
      'Air-gapped deployment option'
    ]
  },
  {
    target: 'Managed Relay Cloud',
    icon: CloudIcon,
    timeline: 'Q4 2026',
    description: 'Fully managed multi-tenant platform',
    features: [
      'Global edge deployment',
      'Auto-scaling',
      'Cross-region mesh peering',
      '99.99% SLA',
      'Billing & usage metering'
    ]
  }
]

export function PlatformOverview() {
  return (
    <section id="platform" className="relative py-32 bg-white dark:bg-slate-950">
      <Container>
        <div className="mx-auto max-w-7xl">
          {/* Section Header */}
          <div className="text-center mb-20 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-950/50 mb-6">
              <ServerStackIcon className="h-4 w-4 text-blue-600 dark:text-blue-400" />
              <span className="text-sm font-semibold text-blue-600 dark:text-blue-400 tracking-wide">PLATFORM</span>
            </div>
            
            <h2 className="mb-6">
              <span className="text-gradient">
                Complete Stack
              </span>
              <br />
              <span className="text-slate-900 dark:text-white">
                Protocol to Control Plane
              </span>
            </h2>
            
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Everything you need to build, deploy, govern, and monitor production agent meshes with enterprise-grade reliability.
            </p>
          </div>

          {/* Stack Components */}
          <div className="mb-20 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-10 text-center">
              Stack Components
            </h3>
            
            <div className="space-y-6">
              {stackComponents.map((component, index) => {
                const Icon = component.icon
                return (
                  <div 
                    key={index}
                    className="glass rounded-3xl p-8 md:p-10 border-2 border-slate-200/50 dark:border-slate-700/50 hover:border-blue-500/30 transition-all duration-300"
                  >
                    <div className="flex items-start gap-6 mb-6">
                      <div className={`flex-shrink-0 p-4 rounded-2xl bg-gradient-to-br ${component.gradient}`}>
                        <Icon className="h-8 w-8 text-white" />
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h4 className="text-2xl font-bold text-slate-900 dark:text-white">
                            {component.title}
                          </h4>
                          <code className="px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-sm font-mono">
                            {component.path}
                          </code>
                        </div>
                        <p className="text-slate-600 dark:text-slate-400 mb-6">
                          {component.description}
                        </p>
                        
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
                          {component.features.map((feature, idx) => (
                            <div 
                              key={idx}
                              className="flex items-center gap-2 p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50"
                            >
                              <div className="w-2 h-2 rounded-full bg-blue-500" />
                              <span className="text-sm text-slate-700 dark:text-slate-300">
                                {feature}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Reliability & Operations */}
          <div className="mb-20 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-10 text-center">
              Reliability & Operations
            </h3>
            
            <div className="grid lg:grid-cols-3 gap-6">
              {reliabilityFeatures.map((feature, index) => {
                const Icon = feature.icon
                return (
                  <div 
                    key={index}
                    className="glass rounded-2xl p-6 border-2 border-slate-200/50 dark:border-slate-700/50 hover:border-blue-500/30 transition-all duration-300 hover-lift"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-3 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500">
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                      <h4 className="text-lg font-bold text-slate-900 dark:text-white">
                        {feature.title}
                      </h4>
                    </div>
                    
                    <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
                      {feature.description}
                    </p>
                    
                    <ul className="space-y-2">
                      {feature.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-slate-700 dark:text-slate-300">
                          <span className="text-blue-500 mt-0.5">•</span>
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Security & Governance */}
          <div className="mb-20 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="glass rounded-3xl p-8 md:p-12 border-2 border-blue-200 dark:border-blue-800">
              <div className="flex items-center gap-3 mb-8">
                <ShieldCheckIcon className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                  Security & Governance
                </h3>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8">
                <div>
                  <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-3">
                    Transport Security
                  </h4>
                  <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                    <li>• Noise IK-like handshake</li>
                    <li>• X25519 key exchange</li>
                    <li>• ChaCha20-Poly1305 / AES-GCM</li>
                    <li>• Header protection</li>
                    <li>• Anti-replay store</li>
                    <li>• Session tickets</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-3">
                    Runtime Controls
                  </h4>
                  <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                    <li>• Policy observers</li>
                    <li>• Audit emitters</li>
                    <li>• Capability manifests</li>
                    <li>• Tool access control</li>
                    <li>• Rate limiting</li>
                    <li>• Resource quotas</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-3">
                    Enterprise Features
                  </h4>
                  <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                    <li>• Secret distribution</li>
                    <li>• Policy authoring UI</li>
                    <li>• Audit log retention</li>
                    <li>• SIEM/SOC integration</li>
                    <li>• Compliance mapping</li>
                    <li>• Agent attestation</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Packaging Targets */}
          <div className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-10 text-center">
              Deployment Options
            </h3>
            
            <div className="grid md:grid-cols-3 gap-6">
              {packagingTargets.map((target, index) => {
                const Icon = target.icon
                return (
                  <div 
                    key={index}
                    className="glass rounded-2xl p-6 border-2 border-slate-200/50 dark:border-slate-700/50 hover:border-blue-500/30 transition-all duration-300 hover-lift"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-3 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500">
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-slate-900 dark:text-white">
                          {target.target}
                        </h4>
                        <span className="text-xs text-blue-600 dark:text-blue-400 font-semibold">
                          {target.timeline}
                        </span>
                      </div>
                    </div>
                    
                    <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
                      {target.description}
                    </p>
                    
                    <ul className="space-y-2">
                      {target.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-slate-700 dark:text-slate-300">
                          <span className="text-blue-500 mt-0.5">✓</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

