import { Container } from '@/components/ui/container'
import { QuestionMarkCircleIcon } from '@heroicons/react/24/outline'

export interface FAQItem {
  question: string
  answer: string
  bullets?: string[]
}

export const faqItems: FAQItem[] = [
  {
    question: 'What is MXP Nexus MXP and why is it different from HTTP-based APIs?',
    answer: 'MXP Nexus MXP (Mesh eXchange Protocol) is a binary, agent-to-agent transport that delivers sub-millisecond P99 latency with zero-copy streaming. Unlike HTTP/REST, MXP keeps long-lived secure sessions over UDP + Noise to move tokens, events, and control messages in the same session without head-of-line blocking or JSON serialization overhead.',
    bullets: [
      'Purpose-built for autonomous agents, LLM streaming, and realtime coordination',
      '32-byte cache-aligned header with XXHash3 checksums keeps payloads ultra-light',
      '100K+ messages per connection with deterministic backpressure and telemetry'
    ]
  },
  {
    question: 'How quickly can engineering teams integrate MXP into existing stacks?',
    answer: 'Start with the Rust SDK in minutes and layer in JavaScript or Python as they reach beta. MXP Nexus ships language-specific quick starts, message builders, and fully typed APIs so teams can attach MXP to existing microservices, data pipelines, or agent workflows without rewriting business logic.',
    bullets: [
      'Drop-in Rust SDK with async/await patterns and tracing included',
      'JavaScript SDK (beta) adds WebRTC DataChannel + Node UDP for hybrid deployments',
      'Python bindings planned for FastAPI, Django, and notebook orchestration'
    ]
  },
  {
    question: 'How does MXP secure agent communication and comply with enterprise controls?',
    answer: 'MXP Nexus MXP combines Noise IK handshakes, TLS 1.3-grade encryption, and policy-driven governance. Every message carries trace IDs, audit metadata, and the ability to enforce allow/deny policies so regulated teams can prove who called which agent and when.',
    bullets: [
      'Noise IK + X25519 key exchange with ChaCha20-Poly1305 or AES-GCM',
      'Header protection, replay defense, and multi-factor session resumption',
      'Control plane hooks for approval workflows, quota enforcement, and SOC compliance'
    ]
  },
  {
    question: 'What use cases see the biggest lift from MXP Nexus MXP?',
    answer: 'MXP unlocks coordination-heavy workloads where HTTP melts down: multi-agent research assistants, realtime inference marketplaces, on-prem orchestration, and cross-cloud data sync. Teams report up to 100x throughput gains and single-digit millisecond round trips after migrating from REST + websockets.',
    bullets: [
      'Autonomous agent workforces that fan out high-volume tool calls',
      'Realtime analytics streams and LLM token mxpnexuss that cannot tolerate head-of-line blocking',
      'Low-latency control systems for robotics, industrial IoT, and financial services'
    ]
  },
  {
    question: 'Is MXP Nexus MXP open source and what is the pricing model?',
    answer: 'The core protocol and Rust implementation are open source on GitHub under the MIT/Apache-2.0 dual license. MXP Nexus offers enterprise support, managed control planes, and governance tooling so large teams can operate MXP in mission-critical environments without managing infrastructure alone.',
    bullets: [
      'Open-source crates and specs available on GitHub and crates.io',
      'Commercial SLAs, deployment automation, and observability add-ons available on request',
      'Flexible pricing aligned to per-agent hour or secure tunnel throughput'
    ]
  },
  {
    question: 'How can I evaluate MXP performance and roadmap before adopting it?',
    answer: 'Start with the public benchmarks, SPEC documentation, and roadmap to understand the transport guarantees. Our adoption playbook outlines proof-of-value milestones, and teams can book a deep-dive to review latency traces, integration examples, and upcoming SDK releases.',
    bullets: [
      'Benchmarks and flamegraphs available in the public repo',
      'Adoption stages cover discovery, pilot, scaled rollout, and governance',
      'Roadmap highlights QUIC transport, observability, and SDK timelines'
    ]
  }
]

export function FAQSection() {
  return (
    <section id="faq" className="relative py-12 md:py-20 lg:py-24 bg-gradient-to-b from-white via-slate-50 to-white dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
      <Container>
        <div className="mx-auto max-w-5xl px-4">
          <div className="text-center mb-12 md:mb-16 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-100/80 dark:bg-indigo-950/50 mb-4">
              <QuestionMarkCircleIcon className="h-4 w-4 text-indigo-600 dark:text-indigo-400" />
              <span className="text-xs md:text-sm font-semibold tracking-wide text-indigo-600 dark:text-indigo-400 uppercase">
                FAQ
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              Enterprise Search-Optimized Answers
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
              The most common discovery, security, and adoption questions buyers ask when evaluating MXP Nexus MXP. Optimized for product marketing pages, analyst reviews, and social sharing snippets.
            </p>
          </div>

          <div className="space-y-4 animate-fade-in" style={{ animationDelay: '0.15s' }}>
            {faqItems.map((item, index) => (
              <details
                key={item.question}
                className="group rounded-2xl md:rounded-3xl border border-slate-200/60 dark:border-slate-700/60 bg-white/90 dark:bg-slate-900/80 shadow-lg overflow-hidden"
                style={{ animationDelay: `${0.05 * index}s` }}
              >
                <summary className="flex items-center justify-between gap-4 cursor-pointer select-none list-none px-4 sm:px-6 md:px-8 py-4 sm:py-5 md:py-6">
                  <h3 className="text-base sm:text-lg md:text-xl font-semibold text-slate-900 dark:text-white">
                    {item.question}
                  </h3>
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-indigo-500/10 text-indigo-600 dark:text-indigo-300 group-open:rotate-180 transition-transform">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="h-4 w-4"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
                    </svg>
                  </span>
                </summary>
                <div className="px-4 sm:px-6 md:px-8 pb-4 sm:pb-5 md:pb-6 space-y-3">
                  <p className="text-sm md:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                    {item.answer}
                  </p>
                  {item.bullets && (
                    <ul className="space-y-1.5 md:space-y-2 text-sm md:text-base text-slate-600 dark:text-slate-300 list-disc list-inside">
                      {item.bullets.map((bullet) => (
                        <li key={bullet}>{bullet}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </details>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}


