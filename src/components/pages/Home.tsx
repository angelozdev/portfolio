import React from 'react'

/* Components */
import { Header, Hero, About, Projects, Footer } from '@components/organisms'
import { Technologies } from '@components/molecules'

/* Fixtures */
import frontTechnologies from '@src/fixtures/frontendTechnologies'
import backTechnologies from '@src/fixtures/backendTechnologies'

function Home(): JSX.Element {
   return (
      <React.Fragment>
         <Header />
         <Hero />
         <About />
         <Technologies
            technologies={frontTechnologies}
            title="Frontend Technologies."
         />
         <Technologies
            technologies={backTechnologies}
            title="Backend Technologies."
         />
         <Projects />
         <Footer />
      </React.Fragment>
   )
}

export default Home
