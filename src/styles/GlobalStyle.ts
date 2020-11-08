import { css } from '@emotion/core'
import { colors } from './theme'

const GlobalStyle = css`
   * {
      box-sizing: border-box;
   }

   html {
      scroll-behavior: smooth;
   }

   ::selection {
      background: ${colors.FONT};
      color: ${colors.WHITE};
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
      width: 10px;
   }

   /* Track */
   ::-webkit-scrollbar-track {
      margin: 2px 0px;
      background: rgb(70, 69, 66);
      border-radius: 12px;
   }

   /* Handle */
   ::-webkit-scrollbar-thumb {
      background: rgb(102, 102, 102);
      border-radius: 4px;
   }
`
export default GlobalStyle
