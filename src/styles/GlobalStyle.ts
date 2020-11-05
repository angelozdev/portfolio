import { css } from '@emotion/core'
import { colors } from './theme'

const GlobalStyle = css`
   * {
      box-sizing: border-box;
   }

   body {
      margin: 0;
      padding: 0;
      font-family: 'Inter', sans-serif;
      color: ${colors.FONT};
   }

   a {
      text-decoration: none;
   }

   /* width */
   ::-webkit-scrollbar {
      width: 0.5rem;
   }

   /* Track */
   ::-webkit-scrollbar-track {
      background: #eee;
   }

   /* Handle */
   ::-webkit-scrollbar-thumb {
      background: #555;
   }

   /* Handle on hover */
   ::-webkit-scrollbar-thumb:hover {
      background: #222;
   }
`
export default GlobalStyle
