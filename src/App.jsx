import "./global.css"
import { BrowserRouter } from 'react-router-dom'
import { Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import Home from './pages/Home'
import { About } from "./pages/About"
import { ScrollToTop } from "./components/scrollToTop/scrollToTop"
import { PrivacyPolicy } from "./pages/PrivacyPolicy"

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="privacy-policy" element={<PrivacyPolicy />} />
        </Route>
      </Routes>
    </BrowserRouter>

  )
}

export default App
