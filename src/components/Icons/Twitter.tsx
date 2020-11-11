import * as React from 'react'

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
   return (
      <svg width={27} height={28} viewBox="0 0 27 28" fill="none" {...props}>
         <g clipPath="url(#prefix__clip0)">
            <path
               d="M26.773 5.723a10.98 10.98 0 01-3.102.85 5.444 5.444 0 002.375-2.99 11.159 11.159 0 01-3.433 1.3 5.402 5.402 0 00-9.346 3.687c0 .43.05.84.14 1.235C8.916 9.593 4.935 7.437 2.27 4.177a5.295 5.295 0 00-.73 2.717c0 1.878.954 3.528 2.402 4.498a5.386 5.386 0 01-2.447-.677v.067a5.406 5.406 0 004.333 5.3 5.485 5.485 0 01-2.429.094 5.42 5.42 0 005.056 3.752 10.835 10.835 0 01-6.7 2.311c-.429 0-.856-.025-1.285-.073a15.368 15.368 0 008.297 2.425c9.942 0 15.372-8.23 15.372-15.357 0-.23 0-.461-.017-.692a10.91 10.91 0 002.702-2.797l-.052-.022z"
               fill="#fff"
            />
         </g>
         <defs>
            <clipPath id="prefix__clip0">
               <path
                  fill="#fff"
                  transform="translate(.47 .706)"
                  d="M0 0h26.353v26.353H0z"
               />
            </clipPath>
         </defs>
      </svg>
   )
}

const MemoSvgComponent = React.memo(SvgComponent)
export default MemoSvgComponent
