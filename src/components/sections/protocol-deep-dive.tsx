import { Container } from '@/components/ui/container'
import {
  CodeBracketIcon,
  CubeIcon,
  ShieldCheckIcon,
  BoltIcon,
  CheckCircleIcon
} from '@heroicons/react/24/outline'

const wireFormatDetails = {
  header: {
    size: '32 bytes (cache-aligned)',
    fields: [
      { name: 'Magic Number', size: '4 bytes', value: '0x4D585031 ("MXP1")' },
      { name: 'Message Type', size: '1 byte', value: 'See message types below' },
      { name: 'Flags', size: '1 byte', value: 'COMPRESSED, ENCRYPTED, REQUIRES_ACK, FINAL' },
      { name: 'Reserved', size: '2 bytes', value: 'For future use (must be 0)' },
      { name: 'Message ID', size: '8 bytes', value: 'Unique identifier' },
      { name: 'Trace ID', size: '8 bytes', value: 'Distributed tracing' },
      { name: 'Payload Length', size: '8 bytes', value: 'Payload size in bytes' }
    ]
  },
  checksum: {
    algorithm: 'XXHash3 (64-bit)',
    size: '8 bytes',
    coverage: 'Header + Payload',
    performance: '<100ns validation'
  }
}

const messageTypes = [
  {
    category: 'Agent Lifecycle',
    types: [
      { code: '0x01', name: 'AgentRegister', description: 'Register agent with mesh' },
      { code: '0x02', name: 'AgentDiscover', description: 'Discover agents by capability' },
      { code: '0x03', name: 'AgentHeartbeat', description: 'Keep-alive / health check' }
    ]
  },
  {
    category: 'RPC & Events',
    types: [
      { code: '0x10', name: 'Call', description: 'Synchronous RPC call' },
      { code: '0x11', name: 'Response', description: 'Response to Call' },
      { code: '0x12', name: 'Event', description: 'Async event (fire-and-forget)' }
    ]
  },
  {
    category: 'Streaming',
    types: [
      { code: '0x20', name: 'StreamOpen', description: 'Open new stream' },
      { code: '0x21', name: 'StreamChunk', description: 'Stream data chunk' },
      { code: '0x22', name: 'StreamClose', description: 'Close stream' }
    ]
  },
  {
    category: 'Control',
    types: [
      { code: '0xF0', name: 'Ack', description: 'Acknowledgment' },
      { code: '0xF1', name: 'Error', description: 'Error response' }
    ]
  }
]

const transportFeatures = [
  {
    title: 'Custom UDP Transport',
    icon: BoltIcon,
    description: 'Pure Rust implementation with no QUIC library overhead',
    features: [
      'Zero external dependencies',
      'Agent-optimized packet scheduling',
      'Minimal handshake with session resumption',
      'Built-in observability without instrumentation',
      'Predictable performance with full control',
      'Mix reliable streams with unreliable datagrams'
    ]
  },
  {
    title: 'Security Layer',
    icon: ShieldCheckIcon,
    description: 'Noise IK-inspired handshake with mandatory encryption',
    features: [
      'X25519 key exchange (Curve25519 DH)',
      'ChaCha20-Poly1305 or AES-GCM (AEAD)',
      'Header protection with ChaCha20 masking',
      'Perfect forward secrecy',
      'Anti-replay protection',
      'Session tickets for fast reconnection'
    ]
  },
  {
    title: 'Performance Targets',
    icon: CubeIcon,
    description: 'Designed for sub-millisecond latency and high throughput',
    features: [
      'Message encode: <1µs',
      'Message decode: <1µs',
      'Transport send: <100µs',
      'Transport receive: <100µs',
      'P99 latency: <1ms (same datacenter)',
      'Throughput: 100K msg/sec per connection'
    ]
  }
]

const performanceComparison = [
  {
    metric: 'Message Overhead',
    mxp: '40 bytes',
    http: '100+ bytes',
    improvement: '60% less'
  },
  {
    metric: 'Connection Setup',
    mxp: '0-RTT (instant)',
    http: '200-300ms',
    improvement: '100x faster'
  },
  {
    metric: 'Encode/Decode',
    mxp: '<1µs',
    http: '10-100µs',
    improvement: '10-100x faster'
  },
  {
    metric: 'Throughput',
    mxp: '100K msg/sec',
    http: '~1K req/sec',
    improvement: '100x higher'
  }
]

export function ProtocolDeepDive() {
  return (
    <section id="protocol" className="relative py-12 md:py-20 lg:py-32 bg-white dark:bg-slate-950">
      <Container>
        <div className="mx-auto max-w-7xl px-4">
          {/* Section Header */}
          <div className="text-center mb-12 md:mb-20 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-950/50 mb-6">
              <CodeBracketIcon className="h-4 w-4 text-blue-600 dark:text-blue-400" />
              <span className="text-sm font-semibold text-blue-600 dark:text-blue-400 tracking-wide">PROTOCOL</span>
            </div>
            
            <h2 className="mb-6">
              <span className="text-gradient">
                Wire Format
              </span>
              <br />
              <span className="text-slate-900 dark:text-white">
                Deep Dive
              </span>
            </h2>
            
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
              A binary protocol designed for zero-copy performance, built-in observability, and enterprise-grade security.
            </p>
          </div>

          {/* Wire Format Structure */}
          <div className="mb-12 md:mb-20 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-6 md:mb-10 text-center">
              Message Structure
            </h3>
            
            <div className="glass rounded-2xl md:rounded-3xl p-4 sm:p-6 md:p-8 lg:p-12 border-2 border-slate-200 dark:border-slate-700">
              {/* Visual Diagram */}
              <div className="mb-6 md:mb-10">
                <div className="flex flex-col gap-2">
                  <div className="p-4 sm:p-5 md:p-6 rounded-lg md:rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 text-white">
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
                      <span className="font-bold text-base sm:text-lg">HEADER</span>
                      <span className="font-mono text-xs sm:text-sm">32 bytes (cache-aligned)</span>
                    </div>
                  </div>
                  
                  <div className="p-4 sm:p-5 md:p-6 rounded-lg md:rounded-xl bg-gradient-to-r from-cyan-500 to-teal-500 text-white">
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
                      <span className="font-bold text-base sm:text-lg">PAYLOAD</span>
                      <span className="font-mono text-xs sm:text-sm">Variable length (0 - 16MB)</span>
                    </div>
                  </div>
                  
                  <div className="p-4 sm:p-5 md:p-6 rounded-lg md:rounded-xl bg-gradient-to-r from-teal-500 to-emerald-500 text-white">
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
                      <span className="font-bold text-base sm:text-lg">CHECKSUM</span>
                      <span className="font-mono text-xs sm:text-sm">8 bytes (XXHash3)</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Header Fields */}
              <div className="mb-6 md:mb-8">
                <h4 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-4 md:mb-6">
                  Header Fields (32 bytes)
                </h4>
                
                <div className="space-y-2 md:space-y-3">
                  {wireFormatDetails.header.fields.map((field, index) => (
                    <div 
                      key={index}
                      className="flex flex-col sm:flex-row sm:items-center justify-between p-3 sm:p-4 rounded-lg md:rounded-xl bg-slate-50 dark:bg-slate-800/50 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors gap-2"
                    >
                      <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
                        <span className="font-mono text-[10px] sm:text-xs px-2 py-1 rounded bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-400 whitespace-nowrap">
                          {field.size}
                        </span>
                        <span className="font-semibold text-sm sm:text-base text-slate-900 dark:text-white break-words min-w-0">
                          {field.name}
                        </span>
                      </div>
                      <span className="font-mono text-xs sm:text-sm text-slate-600 dark:text-slate-400 break-words">
                        {field.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Checksum Details */}
              <div className="pt-6 md:pt-8 border-t border-slate-200 dark:border-slate-700">
                <h4 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-3 md:mb-4">
                  Checksum (8 bytes)
                </h4>
                
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
                  <div>
                    <span className="text-[10px] sm:text-xs text-slate-500 dark:text-slate-400">Algorithm</span>
                    <p className="font-mono text-xs sm:text-sm font-semibold text-slate-900 dark:text-white break-words">
                      {wireFormatDetails.checksum.algorithm}
                    </p>
                  </div>
                  <div>
                    <span className="text-[10px] sm:text-xs text-slate-500 dark:text-slate-400">Size</span>
                    <p className="font-mono text-xs sm:text-sm font-semibold text-slate-900 dark:text-white">
                      {wireFormatDetails.checksum.size}
                    </p>
                  </div>
                  <div>
                    <span className="text-[10px] sm:text-xs text-slate-500 dark:text-slate-400">Coverage</span>
                    <p className="font-mono text-xs sm:text-sm font-semibold text-slate-900 dark:text-white">
                      {wireFormatDetails.checksum.coverage}
                    </p>
                  </div>
                  <div>
                    <span className="text-[10px] sm:text-xs text-slate-500 dark:text-slate-400">Performance</span>
                    <p className="font-mono text-xs sm:text-sm font-semibold text-slate-900 dark:text-white">
                      {wireFormatDetails.checksum.performance}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Message Types */}
          <div className="mb-12 md:mb-20 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-6 md:mb-10 text-center">
              Message Types
            </h3>
            
            <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
              {messageTypes.map((category, index) => (
                <div 
                  key={index}
                  className="glass rounded-xl md:rounded-2xl p-4 sm:p-5 md:p-6 border-2 border-slate-200/50 dark:border-slate-700/50"
                >
                  <h4 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-3 md:mb-4">
                    {category.category}
                  </h4>
                  
                  <div className="space-y-2 md:space-y-3">
                    {category.types.map((type, idx) => (
                      <div 
                        key={idx}
                        className="flex items-start gap-2 sm:gap-3 p-2 sm:p-3 rounded-lg md:rounded-xl bg-slate-50 dark:bg-slate-800/50"
                      >
                        <code className="flex-shrink-0 px-1.5 sm:px-2 py-0.5 sm:py-1 rounded bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-400 text-[10px] sm:text-xs font-mono font-bold whitespace-nowrap">
                          {type.code}
                        </code>
                        <div className="min-w-0">
                          <div className="font-semibold text-slate-900 dark:text-white text-xs sm:text-sm break-words">
                            {type.name}
                          </div>
                          <div className="text-[10px] sm:text-xs text-slate-600 dark:text-slate-400 break-words">
                            {type.description}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Transport Features */}
          <div className="mb-12 md:mb-20 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-6 md:mb-10 text-center">
              Transport Layer
            </h3>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {transportFeatures.map((feature, index) => {
                const Icon = feature.icon
                return (
                  <div 
                    key={index}
                    className="glass rounded-xl md:rounded-2xl p-4 sm:p-5 md:p-6 border-2 border-slate-200/50 dark:border-slate-700/50 hover:border-blue-500/30 transition-all duration-300 hover-lift"
                  >
                    <div className="flex items-center gap-2 sm:gap-3 mb-3 md:mb-4">
                      <div className="p-2 sm:p-3 rounded-lg md:rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500">
                        <Icon className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                      </div>
                      <h4 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white break-words min-w-0">
                        {feature.title}
                      </h4>
                    </div>
                    
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mb-3 md:mb-4 break-words">
                      {feature.description}
                    </p>
                    
                    <ul className="space-y-1.5 md:space-y-2">
                      {feature.features.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-1.5 sm:gap-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                          <CheckCircleIcon className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-blue-500 flex-shrink-0 mt-0.5" />
                          <span className="break-words min-w-0">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Performance Comparison */}
          <div className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-6 md:mb-10 text-center">
              Performance Comparison
            </h3>
            
            <div className="glass rounded-2xl md:rounded-3xl overflow-hidden border-2 border-slate-200 dark:border-slate-700">
              <div className="overflow-x-auto -webkit-overflow-scrolling-touch">
                <table className="w-full min-w-[600px]">
                  <thead>
                    <tr className="bg-gradient-to-r from-blue-600 to-cyan-600">
                      <th className="px-3 sm:px-4 md:px-6 py-3 sm:py-4 text-left text-xs sm:text-sm font-bold text-white uppercase tracking-wider">Metric</th>
                      <th className="px-3 sm:px-4 md:px-6 py-3 sm:py-4 text-left text-xs sm:text-sm font-bold text-white uppercase tracking-wider">MXP</th>
                      <th className="px-3 sm:px-4 md:px-6 py-3 sm:py-4 text-left text-xs sm:text-sm font-bold text-white uppercase tracking-wider">HTTP/REST</th>
                      <th className="px-3 sm:px-4 md:px-6 py-3 sm:py-4 text-left text-xs sm:text-sm font-bold text-white uppercase tracking-wider">Improvement</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 dark:divide-slate-700">
                    {performanceComparison.map((item, index) => (
                      <tr 
                        key={index}
                        className="hover:bg-blue-50/50 dark:hover:bg-blue-950/20 transition-colors"
                      >
                        <td className="px-3 sm:px-4 md:px-6 py-3 sm:py-4 text-xs sm:text-sm font-semibold text-slate-900 dark:text-white whitespace-nowrap">
                          {item.metric}
                        </td>
                        <td className="px-3 sm:px-4 md:px-6 py-3 sm:py-4 text-xs sm:text-sm">
                          <span className="inline-flex items-center gap-1 sm:gap-2 px-2 sm:px-3 py-0.5 sm:py-1 rounded-full bg-green-100 dark:bg-green-950/50 text-green-700 dark:text-green-400 font-mono font-semibold whitespace-nowrap">
                            {item.mxp}
                          </span>
                        </td>
                        <td className="px-3 sm:px-4 md:px-6 py-3 sm:py-4 text-xs sm:text-sm">
                          <span className="inline-flex items-center gap-1 sm:gap-2 px-2 sm:px-3 py-0.5 sm:py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 font-mono whitespace-nowrap">
                            {item.http}
                          </span>
                        </td>
                        <td className="px-3 sm:px-4 md:px-6 py-3 sm:py-4 text-xs sm:text-sm">
                          <span className="text-blue-600 dark:text-blue-400 font-bold whitespace-nowrap">
                            {item.improvement}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

