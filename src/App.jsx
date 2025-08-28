import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import LandingPage from './TailwindBlocks/pages/LandingPage'
import Flavors from './TailwindBlocks/pages/Flavors'
import Scoops from './TailwindBlocks/pages/Scoops'
import Sundaes from './TailwindBlocks/pages/Sundaes'
import Toppings from './TailwindBlocks/pages/Toppings'
const App = () => {
  const [theme, setTheme] = useState('light');

  useEffect(()=>{
      if(theme === 'dark'){
        document.documentElement.classList.add("dark");
      }
      else{
        document.documentElement.classList.remove("dark")
      }
  }, [theme])

  const handleThemeChange = ()=>{
    setTheme(theme === "light"? "dark": "light")
  }

  return (
    <Router>
      <Routes>
        {/* Home page */}
        <Route path="/" element={<LandingPage change={handleThemeChange} />} />

        {/* Other pages */}
        <Route path="/flavors" element={<Flavors />} />
        <Route path="/scoops" element={<Scoops />} />
        <Route path="/sundaes" element={<Sundaes />} />
        <Route path="/toppings" element={<Toppings />} />
      </Routes>
    </Router>
  )
}

export default App