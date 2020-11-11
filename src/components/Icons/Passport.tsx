import * as React from 'react'

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
   return (
      <svg width={400} height={500} viewBox="0 0 400 500" {...props}>
         <title>
            {
               'Passport is authentication middleware for Node.js. Extremely flexible and modular, Passport can be unobtrusively dropped in to any Express-based web application. A comprehensive set of strategies support authentication using a username and password, Facebook, Twitter, and more.'
            }
         </title>
         <g fill="none" fillRule="evenodd">
            <path
               d="M200 0C89.5 0 0 89.5 0 200h100c0-55.2 44.8-100 100-100V0z"
               fill="#D6FF00"
            />
            <path
               d="M400 200C400 89.5 310.5 0 200 0v100c55.2 0 100 44.8 100 100h100z"
               fill="#34E27A"
            />
            <path
               d="M200 400c110.5 0 200-89.5 200-200H300c0 55.2-44.8 100-100 100v100z"
               fill="#00B9F1"
            />
            <path d="M100 400V200H0v300h200V400H100z" fill="#FFF" />
         </g>
      </svg>
   )
}

const MemoSvgComponent = React.memo(SvgComponent)
export default MemoSvgComponent
