import React from 'react'

/* Components */
import { Header, Hero, About } from '@components/organisms'
import { Technologies } from '@components/molecules'

function Home(): JSX.Element {
   return (
      <React.Fragment>
         <Header />
         <Hero />
         <About />
         <Technologies title="Frontend Technologies" />
      </React.Fragment>
   )
}

export default Home
