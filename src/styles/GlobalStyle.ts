import { css } from '@emotion/core'
import { colors } from './theme'

const GlobalStyle = css`
   * {
      box-sizing: border-box;
   }

   html {
      scroll-behavior: smooth;
   }

   body {
      padding: 0;
      margin: 0;
      color: ${colors.FONT};
      font-family: 'Inter', sans-serif;
   }

   a {
      color: ${colors.FONT};
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
