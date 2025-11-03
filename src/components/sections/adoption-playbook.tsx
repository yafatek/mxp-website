import { Container } from '@/components/ui/container'
import {
  RocketLaunchIcon,
  BeakerIcon,
  CloudArrowUpIcon,
  ShieldCheckIcon,
  CheckCircleIcon,
  EyeIcon
} from '@heroicons/react/24/outline'

const adoptionStages = [
  {
    stage: '1. Explore & Prototype',
    icon: BeakerIcon,
    gradient: 'from-indigo-500 to-purple-500',
    timeline: '2-4 weeks',
    activities: [
      'Review protocol specification and architecture docs',
      'Run demo agents locally (coordinator + specialists)',
      'Assess alignment with latency and security requirements',
      'Evaluate runtime crates for governance hooks',
      'Test integration with existing systems'
    ],
    deliverables: [
      'Technical feasibility report',
      'Performance baseline measurements',
      'Security review findings',
      'Integration complexity assessment'
    ]
  },
  {
    stage: '2. Pilot Deployment',
    icon: CloudArrowUpIcon,
    gradient: 'from-blue-500 to-cyan-500',
    timeline: '6-8 weeks',
    activities: [
      'Deploy MXP nodes on isolated VLAN or K8s cluster',
      'Configure transport encryption (Noise IK handshake)',
      'Define initial policies (capabilities, rate limits)',
      'Enable OpenTelemetry exporters and Prometheus metrics',
      'Run chaos tests (packet loss, node failure)'
    ],
    deliverables: [
      'Pilot environment running production workload',
      'Latency improvement metrics vs HTTP baseline',
      'Security controls validated',
      'Operational runbooks drafted'
    ]
  },
  {
    stage: '3. Production Rollout',
    icon: RocketLaunchIcon,
    gradient: 'from-cyan-500 to-teal-500',
    timeline: '8-12 weeks',
    activities: [
      'Deploy control plane (registry, policy, observability)',
      'Integrate with IAM/SSO for operator access',
      'Configure multi-region or multi-AZ topology',
      'Establish agent promotion workflow (dev → staging → prod)',
      'Implement monitoring and alerting'
    ],
    deliverables: [
      'Production-grade deployment',
      'SLA commitments and incident response plan',
      'Compliance documentation (SOC2, GDPR)',
      'Team training and knowledge transfer'
    ]
  }
]

const checklists = [
  {
    title: 'Security Checklist',
    icon: ShieldCheckIcon,
    gradient: 'from-red-500 to-orange-500',
    items: [
      'Noise IK handshake validated with security team',
      'Agent identities rotated on schedule',
      'Secrets stored in approved vault (HashiCorp, AWS Secrets Manager)',
      'Capability manifests reviewed and signed',
      'Transport + payload encryption documented',
      'Compliance requirements mapped (GDPR, SOC2, ISO 27001)',
      'Monitoring for anomalous traffic patterns',
      'Policy violation alerting configured'
    ]
  },
  {
    title: 'Observability Checklist',
    icon: EyeIcon,
    gradient: 'from-blue-500 to-cyan-500',
    items: [
      'OpenTelemetry collector receiving MXP trace IDs',
      'Metrics dashboards for latency, throughput, errors',
      'Audit log pipeline integrated with SIEM/SOC',
      'Alerting thresholds defined (policy denials, heartbeat failures)',
      'Performance benchmarks automated in CI',
      'Distributed tracing end-to-end validated',
      'Log retention policies documented',
      'Incident response playbooks created'
    ]
  },
  {
    title: 'Operations Checklist',
    icon: CloudArrowUpIcon,
    gradient: 'from-teal-500 to-emerald-500',
    items: [
      'Runbooks for agent crash, transport congestion, failover',
      'Backup/restore procedures for policy store and registry',
      'Performance benchmarks before/after upgrades',
      'Capacity planning model for agent count and payload sizes',
      'Deployment automation (Helm, Terraform)',
      'Rollback procedures documented',
      'On-call rotation and escalation paths',
      'Disaster recovery plan tested'
    ]
  }
]

const integrationOpportunities = [
  {
    category: 'Enterprise Systems',
    examples: ['Salesforce', 'Jira', 'ServiceNow', 'SAP', 'Workday'],
    description: 'Replace REST/GraphQL connectors with MXP bridges for 10-50x faster integration'
  },
  {
    category: 'Data Pipelines',
    examples: ['Kafka', 'Snowflake', 'Databricks', 'S3', 'BigQuery'],
    description: 'Stream MXP events into data lake/warehouse for real-time analytics'
  },
  {
    category: 'Security Stack',
    examples: ['Splunk', 'Datadog', 'PagerDuty', 'Slack', 'SOAR platforms'],
    description: 'Integrate with SIEM and SOAR workflows for automated incident response'
  },
  {
    category: 'Developer Tooling',
    examples: ['GitHub Actions', 'Jenkins', 'VS Code', 'LaunchDarkly'],
    description: 'Incorporate into CI/CD pipelines, IDE extensions, and feature flags'
  }
]

export function AdoptionPlaybook() {
  return (
    <section id="adoption" className="relative py-32 bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-950">
      <Container>
        <div className="mx-auto max-w-7xl">
          {/* Section Header */}
          <div className="text-center mb-20 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-100 dark:bg-emerald-950/50 mb-6">
              <RocketLaunchIcon className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
              <span className="text-sm font-semibold text-emerald-600 dark:text-emerald-400 tracking-wide">ADOPTION PLAYBOOK</span>
            </div>
            
            <h2 className="mb-6">
              <span className="text-slate-900 dark:text-white">
                Your Path to
              </span>
              <br />
              <span className="text-gradient">
                Production Success
              </span>
            </h2>
            
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
              A proven framework for platform teams, SREs, and security stakeholders evaluating MXP + Relay for enterprise agent workloads.
            </p>
          </div>

          {/* Adoption Stages */}
          <div className="mb-20 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-10 text-center">
              Adoption Stages
            </h3>
            
            <div className="space-y-8">
              {adoptionStages.map((stage, index) => {
                const Icon = stage.icon
                return (
                  <div 
                    key={index}
                    className="glass rounded-3xl p-8 md:p-10 border-2 border-slate-200/50 dark:border-slate-700/50 hover:border-emerald-500/30 transition-all duration-300"
                  >
                    <div className="flex items-start gap-6 mb-6">
                      <div className={`flex-shrink-0 p-4 rounded-2xl bg-gradient-to-br ${stage.gradient}`}>
                        <Icon className="h-8 w-8 text-white" />
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex items-center gap-4 mb-2">
                          <h4 className="text-2xl font-bold text-slate-900 dark:text-white">
                            {stage.stage}
                          </h4>
                          <span className="px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950/50 text-emerald-700 dark:text-emerald-400 text-sm font-semibold">
                            {stage.timeline}
                          </span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-8">
                      {/* Activities */}
                      <div>
                        <h5 className="text-lg font-bold text-slate-900 dark:text-white mb-4">
                          Key Activities
                        </h5>
                        <ul className="space-y-2">
                          {stage.activities.map((activity, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-sm text-slate-700 dark:text-slate-300">
                              <CheckCircleIcon className="h-5 w-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                              <span>{activity}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      {/* Deliverables */}
                      <div>
                        <h5 className="text-lg font-bold text-slate-900 dark:text-white mb-4">
                          Deliverables
                        </h5>
                        <div className="space-y-2">
                          {stage.deliverables.map((deliverable, idx) => (
                            <div 
                              key={idx}
                              className="p-3 rounded-xl bg-emerald-50 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-800"
                            >
                              <span className="text-sm font-medium text-emerald-900 dark:text-emerald-100">
                                {deliverable}
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

          {/* Checklists */}
          <div className="mb-20 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-10 text-center">
              Production Readiness Checklists
            </h3>
            
            <div className="grid lg:grid-cols-3 gap-6">
              {checklists.map((checklist, index) => {
                const Icon = checklist.icon
                return (
                  <div 
                    key={index}
                    className="glass rounded-2xl p-6 border-2 border-slate-200/50 dark:border-slate-700/50 hover:border-emerald-500/30 transition-all duration-300 hover-lift"
                  >
                    <div className="flex items-center gap-3 mb-6">
                      <div className={`p-3 rounded-xl bg-gradient-to-br ${checklist.gradient}`}>
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                      <h4 className="text-xl font-bold text-slate-900 dark:text-white">
                        {checklist.title}
                      </h4>
                    </div>
                    
                    <ul className="space-y-3">
                      {checklist.items.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <input 
                            type="checkbox" 
                            className="mt-1 h-4 w-4 rounded border-slate-300 text-emerald-600 focus:ring-emerald-500"
                          />
                          <span className="text-sm text-slate-700 dark:text-slate-300">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Integration Opportunities */}
          <div className="mb-20 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-10 text-center">
              Integration Opportunities
            </h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              {integrationOpportunities.map((opportunity, index) => (
                <div 
                  key={index}
                  className="glass rounded-2xl p-6 border-2 border-slate-200/50 dark:border-slate-700/50 hover:border-emerald-500/30 transition-all duration-300"
                >
                  <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                    {opportunity.category}
                  </h4>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {opportunity.examples.map((example, idx) => (
                      <span 
                        key={idx}
                        className="px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-sm font-medium"
                      >
                        {example}
                      </span>
                    ))}
                  </div>
                  
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    {opportunity.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Engagement Model */}
          <div className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <div className="glass rounded-3xl p-8 md:p-12 border-2 border-emerald-200 dark:border-emerald-800">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 text-center">
                Design Partnership Program
              </h3>
              
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-4xl mb-3">🤝</div>
                  <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                    Collaborative Development
                  </h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    Fortnightly deep dives, shared success metrics, and roadmap prioritization
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="text-4xl mb-3">💬</div>
                  <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                    Feedback Loops
                  </h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    RFC comments, GitHub issues, office hours, and direct Slack channel
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="text-4xl mb-3">📢</div>
                  <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                    Co-Marketing
                  </h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    Case studies, conference talks, and joint webinars once pilots succeed
                  </p>
                </div>
              </div>
              
              <div className="mt-8 text-center">
                <a 
                  href="mailto:business@relaymxp.xyz?subject=Design Partnership Inquiry"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-semibold transition-all duration-300 hover-lift"
                >
                  Apply for Design Partnership
                  <RocketLaunchIcon className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

