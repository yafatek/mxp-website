import { Container } from '@/components/ui/container'
import {
  RocketLaunchIcon,
  CheckCircleIcon,
  ClockIcon,
  SparklesIcon
} from '@heroicons/react/24/outline'

const milestones = [
  {
    version: 'MXP v0.2',
    title: 'Foundation Hardening',
    status: 'in-progress',
    timeline: 'Q4 2025',
    deliverables: [
      'Transport conformance suite',
      'Benchmarks vs HTTP/gRPC baselines',
      'Property-based tests for protocol',
      'Updated security model documentation'
    ],
    metrics: 'Encode/decode < 1µs, 80% test coverage'
  },
  {
    version: 'Runtime v0.3',
    title: 'Deterministic Agents',
    status: 'planned',
    timeline: 'Q1 2026',
    deliverables: [
      'Governance hooks (policy observers, audit)',
      'Memory bus integrations',
      'End-to-end error handling examples',
      'Lifecycle diagrams and tool registry docs'
    ],
    metrics: 'Deterministic replay, <5% latency regression'
  },
  {
    version: 'Platform Alpha',
    title: 'Control Plane + CLI',
    status: 'planned',
    timeline: 'Q2 2026',
    deliverables: [
      'CLI for register/deploy/observe agents',
      'Control plane (policy API, registry, audit)',
      'OpenTelemetry traces & Prometheus metrics',
      'Platform architecture documentation'
    ],
    metrics: 'CLI-driven deployment, live dashboards'
  },
  {
    version: 'JS SDK Beta',
    title: 'Browser & Node Support',
    status: 'planned',
    timeline: 'Q2 2026',
    deliverables: [
      'TypeScript codec with zero-copy buffers',
      'Node UDP + WebTransport support',
      'API parity with Rust runtime',
      'Browser-to-agent example apps'
    ],
    metrics: 'JS latency within 20% of Rust'
  },
  {
    version: 'Platform Beta',
    title: 'Enterprise Readiness',
    status: 'planned',
    timeline: 'Q3 2026',
    deliverables: [
      'AuthN/Z with mTLS and capability scopes',
      'Helm chart & Terraform modules',
      'Integration adapters (Salesforce, Jira)',
      'Audit dashboards and alerting'
    ],
    metrics: 'Two design partners in production'
  },
  {
    version: 'v1.0 GA',
    title: 'Production Ready',
    status: 'future',
    timeline: 'Q4 2026',
    deliverables: [
      'MXP 1.0 spec freeze',
      'Feature-complete control plane',
      'SLA commitments with runbooks',
      'Published case studies and benchmarks'
    ],
    metrics: 'P99 < 1ms, ≥3 enterprise customers'
  }
]

const visionPillars = [
  {
    title: 'Protocol First',
    description: 'MXP remains open, vendor-neutral, and formally specified with enforced performance targets.',
    icon: '📋'
  },
  {
    title: 'Deterministic Runtime',
    description: 'Explicit lifecycles, capability-scoped tooling, and reproducible memory semantics.',
    icon: '⚙️'
  },
  {
    title: 'Enterprise Control Plane',
    description: 'Policy, observability, and lifecycle automation with multi-tenant isolation.',
    icon: '🏢'
  },
  {
    title: 'Ecosystem Reach',
    description: 'SDKs for Rust, JavaScript, and Python accessible to browser, server, and edge.',
    icon: '🌍'
  }
]

export function VisionRoadmap() {
  return (
    <section id="roadmap" className="relative py-32 bg-gradient-to-b from-white to-slate-50 dark:from-slate-950 dark:to-slate-900">
      <Container>
        <div className="mx-auto max-w-7xl">
          {/* Section Header */}
          <div className="text-center mb-20 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-100 dark:bg-purple-950/50 mb-6">
              <RocketLaunchIcon className="h-4 w-4 text-purple-600 dark:text-purple-400" />
              <span className="text-sm font-semibold text-purple-600 dark:text-purple-400 tracking-wide">VISION & ROADMAP</span>
            </div>
            
            <h2 className="mb-6">
              <span className="text-gradient">
                Building the Future
              </span>
              <br />
              <span className="text-slate-900 dark:text-white">
                of Agent Communication
              </span>
            </h2>
            
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
              MXP Nexus is the low-latency agent operations platform for enterprises that need deterministic, secure, and observable agent-to-agent workflows.
            </p>
          </div>

          {/* Vision Pillars */}
          <div className="mb-20 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-10 text-center">
              Core Pillars
            </h3>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {visionPillars.map((pillar, index) => (
                <div 
                  key={index}
                  className="glass rounded-2xl p-6 border-2 border-slate-200/50 dark:border-slate-700/50 hover:border-purple-500/30 transition-all duration-300 hover-lift"
                >
                  <div className="text-4xl mb-4">{pillar.icon}</div>
                  <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                    {pillar.title}
                  </h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    {pillar.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Roadmap Timeline */}
          <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-10 text-center">
              Development Roadmap
            </h3>
            
            <div className="relative">
              {/* Timeline Line */}
              <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 via-blue-500 to-cyan-500" />
              
              <div className="space-y-12">
                {milestones.map((milestone, index) => {
                  const isLeft = index % 2 === 0
                  const statusColors = {
                    'in-progress': 'bg-blue-500',
                    'planned': 'bg-purple-500',
                    'future': 'bg-slate-400'
                  }
                  
                  return (
                    <div 
                      key={index}
                      className={`relative flex items-center ${isLeft ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8`}
                    >
                      {/* Content Card */}
                      <div className={`flex-1 ${isLeft ? 'lg:text-right' : 'lg:text-left'}`}>
                        <div className="glass rounded-2xl p-6 border-2 border-slate-200/50 dark:border-slate-700/50 hover:border-purple-500/30 transition-all duration-300 hover-lift">
                          {/* Header */}
                          <div className={`flex items-center gap-3 mb-4 ${isLeft ? 'lg:flex-row-reverse' : 'lg:flex-row'}`}>
                            <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full ${statusColors[milestone.status as keyof typeof statusColors]} text-white text-xs font-semibold`}>
                              {milestone.status === 'in-progress' && <ClockIcon className="h-3 w-3" />}
                              {milestone.status === 'planned' && <SparklesIcon className="h-3 w-3" />}
                              {milestone.status === 'future' && <RocketLaunchIcon className="h-3 w-3" />}
                              {milestone.status === 'in-progress' ? 'In Progress' : milestone.status === 'planned' ? 'Planned' : 'Future'}
                            </div>
                            <span className="text-sm text-slate-500 dark:text-slate-400 font-medium">
                              {milestone.timeline}
                            </span>
                          </div>
                          
                          {/* Title */}
                          <h4 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                            {milestone.version}
                          </h4>
                          <p className="text-lg text-purple-600 dark:text-purple-400 font-semibold mb-4">
                            {milestone.title}
                          </p>
                          
                          {/* Deliverables */}
                          <div className="mb-4">
                            <h5 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                              Key Deliverables:
                            </h5>
                            <ul className="space-y-1">
                              {milestone.deliverables.map((item, idx) => (
                                <li key={idx} className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-400">
                                  <CheckCircleIcon className="h-4 w-4 text-purple-500 flex-shrink-0 mt-0.5" />
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                          
                          {/* Metrics */}
                          <div className="pt-4 border-t border-slate-200 dark:border-slate-700">
                            <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                              Success Metrics:
                            </span>
                            <p className="text-sm text-slate-700 dark:text-slate-300 mt-1">
                              {milestone.metrics}
                            </p>
                          </div>
                        </div>
                      </div>
                      
                      {/* Timeline Dot */}
                      <div className="hidden lg:block absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-white dark:bg-slate-900 border-4 border-purple-500 z-10" />
                      
                      {/* Spacer for alternating layout */}
                      <div className="hidden lg:block flex-1" />
                    </div>
                  )
                })}
              </div>
            </div>
          </div>

          {/* Long-Range Direction */}
          <div className="mt-20 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="glass rounded-3xl p-8 md:p-12 border-2 border-purple-200 dark:border-purple-800">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 text-center">
                Long-Range Direction (2027+)
              </h3>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-4xl mb-3">🎯</div>
                  <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                    Protocol Maturity
                  </h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    MXP 1.0 with formal spec, compatibility tests, and third-party implementations
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="text-4xl mb-3">🔧</div>
                  <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                    Runtime Ecosystem
                  </h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    Expand SDK suite (Rust, JS, Python) with reference agents for enterprise workflows
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="text-4xl mb-3">☁️</div>
                  <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                    MXP Nexus Platform
                  </h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    Self-managed + managed cloud with dashboards, policy studio, unified observability
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="text-4xl mb-3">🛒</div>
                  <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                    Governed Marketplace
                  </h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    Secure sharing of agents, tools, and memories with signed manifests
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="text-4xl mb-3">🌐</div>
                  <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                    Global Mesh
                  </h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    Federation and peering for secure cross-region deployments
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="text-4xl mb-3">🤝</div>
                  <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                    Community Partnership
                  </h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    Public RFCs, early adopter influence, and shared ownership
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

