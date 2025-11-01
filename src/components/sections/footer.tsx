import { Link } from 'react-router-dom'
import { Container } from '@/components/ui/container'
import { Separator } from '@/components/ui/separator'
import { Github, Package } from 'lucide-react'

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <Container>
        <div className="py-12">
          <div className="grid gap-8 md:grid-cols-4">
            <div className="md:col-span-2">
              <h3 className="text-2xl font-bold mb-2">MXP Protocol</h3>
              <p className="text-muted-foreground mb-4">
                High-performance binary protocol for agent-to-agent communication.
                Built for the future of distributed systems.
              </p>
              <div className="flex gap-4 mt-4">
                <a 
                  href="https://github.com/yafatek/mxp-protocol" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Github className="h-5 w-5" />
                  <span>GitHub</span>
                </a>
                <a 
                  href="https://crates.io/crates/mxp" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Package className="h-5 w-5" />
                  <span>Crates.io</span>
                </a>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <Link to="/docs" className="hover:text-foreground">
                    Documentation
                  </Link>
                </li>
                <li>
                  <a href="https://github.com/yafatek/mxp-protocol/blob/main/SPEC.md" target="_blank" rel="noopener noreferrer" className="hover:text-foreground">
                    Specification
                  </a>
                </li>
                <li>
                  <a href="https://github.com/yafatek/mxp-protocol/tree/main/examples" target="_blank" rel="noopener noreferrer" className="hover:text-foreground">
                    Examples
                  </a>
                </li>
                <li>
                  <Link to="/changelog" className="hover:text-foreground">
                    Changelog
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <a href="https://github.com/yafatek/mxp-protocol" target="_blank" rel="noopener noreferrer" className="hover:text-foreground">
                    GitHub Repository
                  </a>
                </li>
                <li>
                  <a href="https://crates.io/crates/mxp" target="_blank" rel="noopener noreferrer" className="hover:text-foreground">
                    Rust Crate
                  </a>
                </li>
                <li>
                  <a href="https://github.com/yafatek/mxp-protocol/blob/main/CONTRIBUTING.md" target="_blank" rel="noopener noreferrer" className="hover:text-foreground">
                    Contributing
                  </a>
                </li>
                <li>
                  <a href="https://github.com/yafatek/mxp-protocol/blob/main/CODE_OF_CONDUCT.md" target="_blank" rel="noopener noreferrer" className="hover:text-foreground">
                    Code of Conduct
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <Separator className="my-8" />
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © 2025 By Yafa Cloud Services LLC, made in Dubai
            </p>
            <div className="flex gap-4 text-sm text-muted-foreground">
              <a href="https://github.com/yafatek/mxp-protocol/blob/main/LICENSE-MIT" target="_blank" rel="noopener noreferrer" className="hover:text-foreground">License</a>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  )
}

