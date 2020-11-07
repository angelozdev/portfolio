import React from 'react'

/* Components */
import { Header, Hero, About } from '@components/organisms'

function Home(): JSX.Element {
   return (
      <React.Fragment>
         <Header />
         <Hero />
         <About />
      </React.Fragment>
   )
}

export default Home
