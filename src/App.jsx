import Home from './pages/Home/Home'
import AwardWinnings from './pages/awardWinnings/awardWinnings'
import './App.css'
import StatsGrid from './pages/StatsGrid/StatsGrid'
import useLenis from './hooks/useLenis'
import CursorFollower from './components/common/CursorFollower'
import ServicesSection from './pages/services section/ServicesSection'
import SelectedAwards from './pages/selected Awards/SelectedAwards'
import MarqueeBanner from './pages/Marqueebanner/Marqueebanner'
import Recognition from './pages/Recognition/Recognition'
import AwardsTable from './pages/Awardstable/Awardstable'
import Footer from './pages/Footer/Footer'

function App() {
  useLenis()

  return (
    <>
      <CursorFollower />
      <Home />
      <AwardWinnings />
      <StatsGrid />
      <ServicesSection />
      <SelectedAwards />
      <MarqueeBanner />
      <Recognition />
      <AwardsTable />
      <Footer />
    </>
  )
}

export default App
