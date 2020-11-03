import React from 'react'

/* Style */
import { Global } from '@emotion/core'
import GlobalStyle from '@src/styles/GlobalStyle'

/* Components */
import { Home } from '@components/pages'

function App(): JSX.Element {
   return (
      <React.Fragment>
         <Home />
         <Global styles={GlobalStyle} />
      </React.Fragment>
   )
}

export default App
