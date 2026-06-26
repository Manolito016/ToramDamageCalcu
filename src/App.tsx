import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { CalculatorProvider } from './context/CalculatorContext'
import { MainLayout } from './components/layout/MainLayout'
import { FillStatSimulator } from './pages/FillStatSimulator'
import { TraitReferencePage } from './pages/TraitReferencePage'
import { useKeyboardShortcuts } from './hooks/useKeyboardShortcuts'
import { ErrorBoundary } from './components/ErrorBoundary'

function App() {
  return (
    <ErrorBoundary>
      <Router>
        <CalculatorProvider>
          <AppContent />
        </CalculatorProvider>
      </Router>
    </ErrorBoundary>
  )
}

function AppContent() {
  // Enable keyboard shortcuts
  useKeyboardShortcuts();

  return (
    <Routes>
      <Route path="/" element={<MainLayout />} />
      <Route path="/fill-stat" element={<MainLayout><FillStatSimulator /></MainLayout>} />
      <Route path="/traits" element={<TraitReferencePage />} />
    </Routes>
  )
}

export default App
