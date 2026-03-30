import Home from './pages/Home/Home'
import AwardWinnings from './pages/awardWinnings/awardWinnings'
import './App.css'
import StatsGrid from './pages/StatsGrid/StatsGrid'
import useLenis from './hooks/useLenis'

function App() {
  useLenis()

  return (
    <>
      <Home />
      <AwardWinnings />
      <StatsGrid />
    </>
  )
}

export default App
