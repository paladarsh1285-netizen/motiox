import Home from './pages/Home/Home'
import AwardWinnings from './pages/awardWinnings/awardWinnings'
import './App.css'
import StatsGrid from './pages/StatsGrid/StatsGrid'
import useLenis from './hooks/useLenis'
import CursorFollower from './components/common/CursorFollower'
import ServicesSection from './pages/services section/ServicesSection'

function App() {
  useLenis()

  return (
    <>
      <CursorFollower />
      <Home />
      <AwardWinnings />
      <StatsGrid />
      <ServicesSection />
    </>
  )
}

export default App
