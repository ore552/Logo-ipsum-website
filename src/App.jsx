import './App.css'
import {Routes, Route} from 'react-router-dom' 
import Hero from './Components/Hero'
import Metrics from './Components/Metrics'
import Navbar from './Components/Navbar'
import Services from './Components/Services'
import SubIndex from './Components/SubIndex'
import SubPlans from './Components/SubPlans'


function App() {
  return (
    <>
      <Navbar/>
      <Routes> 
        <Route path='/' element={<Hero/>}/>
        <Route path='/metrics' element={<Metrics/>}/>
        <Route path='/subindex' element={<SubIndex/>}/>
        <Route path='/services' element={<Services/>}/>
        <Route path='/subplans' element={<SubPlans/>}/>
      </Routes>
    </>
  )
}

export default App
