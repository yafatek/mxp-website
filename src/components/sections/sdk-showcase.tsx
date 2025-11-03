import { Container } from '@/components/ui/container'
import {
  CodeBracketIcon,
  CheckCircleIcon,
  RocketLaunchIcon,
  GlobeAltIcon
} from '@heroicons/react/24/outline'

const sdks = [
  {
    name: 'Rust SDK',
    status: 'Production Ready',
    statusColor: 'bg-green-500',
    icon: '🦀',
    description: 'Reference implementation with zero-copy performance and memory safety',
    features: [
      'Zero-copy message encoding/decoding',
      'Type-safe message builders',
      'Async/await with Tokio runtime',
      'Built-in tracing and metrics',
      'Comprehensive test suite',
      'Full protocol implementation'
    ],
    codeExample: `use mxp::*;

// Create MXP client
let client = MxpClient::connect("mxp://localhost:9000").await?;

// Send a call and await response
let response = client.call(
    target_agent_id,
    CallPayload::new("process_data", data)
).await?;

// Open a stream for LLM tokens
let mut stream = client.open_stream(agent_id).await?;
while let Some(chunk) = stream.next().await {
    println!("Token: {}", chunk);
}`,
    links: [
      { label: 'GitHub', url: 'https://github.com/yafatek/mxp-protocol' },
      { label: 'Crates.io', url: 'https://crates.io/crates/mxp' },
      { label: 'Docs.rs', url: 'https://docs.rs/mxp' }
    ]
  },
  {
    name: 'JavaScript SDK',
    status: 'Beta (Q2 2026)',
    statusColor: 'bg-blue-500',
    icon: '⚡',
    description: 'Node.js and browser support with WebTransport and UDP',
    features: [
      'TypeScript-first with full type safety',
      'Zero-copy ArrayBuffer handling',
      'Node UDP + WebTransport support',
      'Browser-native (no HTTP fallback)',
      'API parity with Rust SDK',
      'React hooks for streaming'
    ],
    codeExample: `import { MxpClient } from '@relay/mxp';

// Create MXP client (Node or Browser)
const client = await MxpClient.connect('mxp://localhost:9000');

// Send a call and await response
const response = await client.call(
  targetAgentId,
  { method: 'process_data', data }
);

// Stream LLM tokens with async iteration
const stream = await client.openStream(agentId);
for await (const chunk of stream) {
  console.log('Token:', chunk);
}`,
    links: [
      { label: 'GitHub', url: 'https://github.com/yafatek/mxp-js' },
      { label: 'npm', url: 'https://npmjs.com/package/@relay/mxp' },
      { label: 'Docs', url: 'https://docs.relaymxp.xyz/js' }
    ]
  },
  {
    name: 'Python SDK',
    status: 'Planned (2027)',
    statusColor: 'bg-purple-500',
    icon: '🐍',
    description: 'Native Python bindings with asyncio support',
    features: [
      'Asyncio-native API',
      'Type hints with Pydantic',
      'Zero-copy with memoryview',
      'Integration with FastAPI/Django',
      'Jupyter notebook support',
      'PyPI distribution'
    ],
    codeExample: `from relay_mxp import MxpClient

# Create MXP client
async with MxpClient.connect("mxp://localhost:9000") as client:
    
    # Send a call and await response
    response = await client.call(
        target_agent_id,
        method="process_data",
        data=data
    )
    
    # Stream LLM tokens
    async for chunk in client.open_stream(agent_id):
        print(f"Token: {chunk}")`,
    links: [
      { label: 'Roadmap', url: 'https://github.com/yafatek/relay/blob/main/ROADMAP.md' }
    ]
  }
]

const integrationExamples = [
  {
    title: 'React + MXP',
    description: 'Stream LLM responses directly to React components',
    code: `import { useMxpStream } from '@relay/mxp-react';

function AgentChat({ agentId }) {
  const { tokens, isStreaming } = useMxpStream(agentId, query);
  
  return (
    <div>
      {tokens.map((token, i) => <span key={i}>{token}</span>)}
      {isStreaming && <Spinner />}
    </div>
  );
}`
  },
  {
    title: 'Node.js Backend',
    description: 'Build high-performance agent coordinators',
    code: `import { MxpServer } from '@relay/mxp';

const server = new MxpServer({ port: 9000 });

server.on('call', async (call) => {
  // Process agent call
  const result = await processData(call.payload);
  
  // Send response
  await call.respond(result);
});

await server.listen();`
  },
  {
    title: 'FastAPI Integration',
    description: 'Expose MXP agents via REST API',
    code: `from fastapi import FastAPI
from relay_mxp import MxpClient

app = FastAPI()
mxp = MxpClient.connect("mxp://localhost:9000")

@app.post("/query")
async def query(data: dict):
    response = await mxp.call(
        agent_id="research-agent",
        data=data
    )
    return response`
  }
]

export function SDKShowcase() {
  return (
    <section id="sdks" className="relative py-16 md:py-32 bg-gradient-to-b from-white to-slate-50 dark:from-slate-950 dark:to-slate-900">
      <Container>
        <div className="mx-auto max-w-7xl px-4">
          {/* Section Header */}
          <div className="text-center mb-12 md:mb-20 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-100 dark:bg-indigo-950/50 mb-4 md:mb-6">
              <CodeBracketIcon className="h-4 w-4 text-indigo-600 dark:text-indigo-400" />
              <span className="text-xs md:text-sm font-semibold text-indigo-600 dark:text-indigo-400 tracking-wide">SDKs</span>
            </div>
            
            <h2 className="mb-4 md:mb-6 text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight">
              <span className="text-gradient block">
                Build in Your
              </span>
              <span className="text-slate-900 dark:text-white block">
                Favorite Language
              </span>
            </h2>
            
            <p className="text-base md:text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed px-4">
              Production-ready SDKs for Rust, JavaScript, and Python with API parity and zero-copy performance.
            </p>
          </div>

          {/* SDK Cards */}
          <div className="space-y-8 md:space-y-12 mb-12 md:mb-20">
            {sdks.map((sdk, index) => (
              <div 
                key={index}
                className="glass rounded-2xl md:rounded-3xl p-4 md:p-8 lg:p-10 border-2 border-slate-200/50 dark:border-slate-700/50 hover:border-indigo-500/30 transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${0.1 * index}s` }}
              >
                <div className="flex flex-col gap-6 md:gap-8">
                  {/* Top: Info */}
                  <div>
                    <div className="flex items-start gap-3 md:gap-4 mb-4 md:mb-6">
                      <div className="text-3xl md:text-4xl lg:text-5xl flex-shrink-0">{sdk.icon}</div>
                      <div className="flex-1 min-w-0">
                        <div className="flex flex-col gap-2 mb-2">
                          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 dark:text-white break-words">
                            {sdk.name}
                          </h3>
                          <span className={`px-3 py-1 rounded-full ${sdk.statusColor} text-white text-xs font-semibold whitespace-nowrap w-fit`}>
                            {sdk.status}
                          </span>
                        </div>
                        <p className="text-sm md:text-base lg:text-lg text-slate-600 dark:text-slate-400 break-words leading-relaxed">
                          {sdk.description}
                        </p>
                      </div>
                    </div>
                    
                    {/* Features */}
                    <div className="mb-4 md:mb-6">
                      <h4 className="text-sm md:text-base lg:text-lg font-bold text-slate-900 dark:text-white mb-3 md:mb-4">
                        Features
                      </h4>
                      <ul className="grid gap-2 md:gap-3">
                        {sdk.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-xs md:text-sm text-slate-700 dark:text-slate-300">
                            <CheckCircleIcon className="h-4 w-4 md:h-5 md:w-5 text-indigo-500 flex-shrink-0 mt-0.5" />
                            <span className="break-words leading-relaxed">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    {/* Links */}
                    <div className="flex flex-wrap gap-2 md:gap-3">
                      {sdk.links.map((link, idx) => (
                        <a
                          key={idx}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-3 md:px-4 py-2 rounded-lg md:rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-indigo-100 dark:hover:bg-indigo-950 text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors font-medium text-xs md:text-sm"
                        >
                          {link.label}
                          <GlobeAltIcon className="h-3 w-3 md:h-4 md:w-4" />
                        </a>
                      ))}
                    </div>
                  </div>
                  
                  {/* Bottom: Code Example */}
                  <div className="w-full">
                    <h4 className="text-sm md:text-base lg:text-lg font-bold text-slate-900 dark:text-white mb-3 md:mb-4">
                      Quick Start
                    </h4>
                    <div className="rounded-xl md:rounded-2xl bg-slate-900 dark:bg-slate-950 p-3 md:p-4 lg:p-6 overflow-x-auto border-2 border-slate-700 w-full">
                      <pre className="text-[10px] sm:text-xs md:text-sm text-slate-100 font-mono leading-relaxed whitespace-pre">
                        <code>{sdk.codeExample}</code>
                      </pre>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Integration Examples */}
          <div className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <h3 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-6 md:mb-10 text-center">
              Integration Examples
            </h3>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {integrationExamples.map((example, index) => (
                <div 
                  key={index}
                  className="glass rounded-xl md:rounded-2xl p-4 md:p-6 border-2 border-slate-200/50 dark:border-slate-700/50 hover:border-indigo-500/30 transition-all duration-300 hover-lift"
                >
                  <h4 className="text-lg md:text-xl font-bold text-slate-900 dark:text-white mb-2">
                    {example.title}
                  </h4>
                  <p className="text-xs md:text-sm text-slate-600 dark:text-slate-400 mb-4">
                    {example.description}
                  </p>
                  
                  <div className="rounded-lg md:rounded-xl bg-slate-900 dark:bg-slate-950 p-3 md:p-4 overflow-x-auto">
                    <pre className="text-[10px] md:text-xs text-slate-100 font-mono leading-relaxed">
                      <code>{example.code}</code>
                    </pre>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="mt-12 md:mt-20 text-center animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <div className="inline-block w-full max-w-4xl p-6 md:p-8 rounded-2xl md:rounded-3xl glass border-2 border-indigo-200 dark:border-indigo-800">
              <h3 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white mb-3 md:mb-4">
                Start Building Today
              </h3>
              <p className="text-sm md:text-lg text-slate-600 dark:text-slate-300 mb-6 max-w-2xl mx-auto px-4">
                Get started with the Rust SDK now, or join the waitlist for JavaScript and Python SDKs.
              </p>
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 md:gap-4 px-4">
                <a 
                  href="https://github.com/yafatek/mxp-protocol"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 md:px-8 py-3 md:py-4 rounded-xl bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-700 hover:to-blue-700 text-white font-semibold transition-all duration-300 hover-lift text-sm md:text-base"
                >
                  <RocketLaunchIcon className="h-4 w-4 md:h-5 md:w-5" />
                  Get Started with Rust
                </a>
                
                <a 
                  href="mailto:sdk@relaymxp.xyz?subject=SDK Waitlist"
                  className="inline-flex items-center justify-center gap-2 px-6 md:px-8 py-3 md:py-4 rounded-xl border-2 border-slate-300 dark:border-slate-700 hover:border-indigo-600 dark:hover:border-indigo-500 text-slate-900 dark:text-white font-semibold transition-all duration-300 hover-lift text-sm md:text-base"
                >
                  Join SDK Waitlist
                </a>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

