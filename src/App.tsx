import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Header } from '@/components/sections/header'
import { Footer } from '@/components/sections/footer'
import { HomePage } from '@/pages/home'
import { DocsPage } from '@/pages/docs'
import { ChangelogPage } from '@/pages/changelog'

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/docs" element={<DocsPage />} />
            <Route path="/changelog" element={<ChangelogPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App


