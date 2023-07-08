import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Contact from './pages/Contact'
import About from './pages/About'
import TermsCondition from './pages/TermsCondition'
import PrivacyPolicy from './pages/PrivacyPolicy'
import Faq from './pages/Faq'
import Blog from './pages/Blog'

const FooterRoute = () => {
  return (
    <>
    <Routes>
        <Route path='/Contact' element={<Contact/>}/>
        <Route path='/About' element={<About/>}/>
        <Route path='/TermsCondition' element={<TermsCondition/>}/>
        <Route path='/PrivacyPolicy' element={<PrivacyPolicy/>}/>
        <Route path='/Faq' element={<Faq/>}/>
        <Route path='/Blog' element={<Blog/>}/>
    </Routes>
    </>
  )
}

export default FooterRoute