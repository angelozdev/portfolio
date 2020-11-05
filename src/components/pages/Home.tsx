import React from 'react'

/* Components */
import { Header } from '@components/organisms'
import { Hero } from '@components/molecules'

function Home(): JSX.Element {
   return (
      <React.Fragment>
         <Header />
         <Hero />
         <div style={{ minHeight: '50vh', background: '#1a1a1a' }}></div>
         <div style={{ minHeight: '50vh' }}></div>
      </React.Fragment>
   )
}

export default Home
