import { CalculatorProvider } from './context/CalculatorContext'
import { MainLayout } from './components/layout/MainLayout'

function App() {
  return (
    <CalculatorProvider>
      <MainLayout />
    </CalculatorProvider>
  )
}

export default App
