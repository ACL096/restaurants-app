import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Search from './pages/Search'
import NewRestaurant from './pages/NewRestaurant'
import Navbar from './components/Navbar'
import FirebaseTest from './pages/FirebaseTest'
<Route path="/test" element={<FirebaseTest />} />

export default function App() {
  return (
    <Router>
      <Navbar />
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/new" element={<NewRestaurant />} />
        </Routes>
      </div>
    </Router>
  )
}

