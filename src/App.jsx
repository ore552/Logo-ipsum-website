import './App.css'
import Hero from './Components/Hero'
import Metrics from './Components/Metrics'
import Navbar from './Components/Navbar'
import Services from './Components/Services'
import SubIndex from './Components/SubIndex'
import SubPlans from './Components/SubPlans'


function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <SubIndex />
      <Metrics />
      <Services />
      {/* <SubPlans /> */}
    </>
  )
}

export default App
