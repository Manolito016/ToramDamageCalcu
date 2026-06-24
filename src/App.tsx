import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { CalculatorProvider } from './context/CalculatorContext'
import { MainLayout } from './components/layout/MainLayout'
import { FillStatSimulator } from './pages/FillStatSimulator'

function App() {
  return (
    <Router>
      <CalculatorProvider>
        <Routes>
          <Route path="/" element={<MainLayout />} />
          <Route path="/fill-stat" element={<MainLayout><FillStatSimulator /></MainLayout>} />
        </Routes>
      </CalculatorProvider>
    </Router>
  )
}

export default App
