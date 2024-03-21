import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// Components
import Footer from './components/Footer'
import Home from './pages/Home'
import Layout from './components/Layout'
import Projects from './pages/Projects'
import NoPage from './pages/NoPage'
import Project from './pages/Project';
import Loading from './pages/Loading';
import { useEffect, useState } from 'react';

function App() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 2000)
  }, []);

  return (
    loading ?

      (<Loading />)

      :

      (<Router>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='projects' element={<Projects />}></Route>
            <Route path="/project/:id" element={<Project />} />
            <Route path='*' element={<NoPage />}></Route>
          </Route>
        </Routes>
        <Footer />
      </Router>)

  )
}

export default App
