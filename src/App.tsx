import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import { Login } from './components/auth/Login'
import { AppDetail } from './components/auth/AppDetail'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/appDetail" element={<AppDetail />} />
      </Routes>
    </Router>
  )
}

export default App
