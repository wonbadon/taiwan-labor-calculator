import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Overtime from './pages/Overtime'
import AnnualLeave from './pages/AnnualLeave'
import Severance from './pages/Severance'
import LaborPension from './pages/LaborPension'
import Guide from './pages/Guide'
import Scenarios from './pages/Scenarios'
import FAQ from './pages/FAQ'
import About from './pages/About'
import NotFound from './pages/NotFound'

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/guide" element={<Guide />} />
        <Route path="/scenarios" element={<Scenarios />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/about" element={<About />} />
        <Route path="/overtime" element={<Overtime />} />
        <Route path="/annual-leave" element={<AnnualLeave />} />
        <Route path="/severance" element={<Severance />} />
        <Route path="/labor-pension" element={<LaborPension />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  )
}
