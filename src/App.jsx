import NavBar from './components/NavBar'
import Hero from './components/Hero'
import AboutMe from './components/AboutMe'
import Skills from './components/Skills'
import TimeLine from './components/TimeLine'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <div>
      <NavBar className='navb' />
      <main>
        <section id="home"><Hero className='hero' /></section>
        <section id="about"><AboutMe /></section>
        <section id="experience">
          <Skills />
          <TimeLine />
        </section>
        <section id="projects"><Projects /></section>
        <section id="contact"><Contact /></section>
      </main>
      <Footer />
    </div>
  )
}

export default App