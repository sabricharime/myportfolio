import AboutMe from './sections/AboutMe'
import HeroPage from './sections/heroPage'
import { english } from './data/siteData'
import { NextUIProvider } from '@nextui-org/react'
import NavBarComponent from './components/navbar'
import Projects from './sections/projects'
import Contact from './sections/contact'

const App = () => {
  return (
    <NextUIProvider>
      <main className=" dark text-foreground-200 bg-background-200">
        <NavBarComponent />
        <HeroPage
          one={english.intro.one}
          two={english.intro.tow}
          three={english.intro.three}
          des={english.intro.des}
          btn={english.intro.btn}
        />

        <AboutMe english={english} />
        <Projects />
        <Contact />
      </main>
    </NextUIProvider>
  )
}

export default App
