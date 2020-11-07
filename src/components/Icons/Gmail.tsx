import * as React from 'react'

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
   return (
      <svg width={28} height={28} viewBox="0 0 28 28" fill="none" {...props}>
         <g clipPath="url(#prefix__clip0)">
            <path
               d="M27.118 5.647v16.47c0 .934-.714 1.648-1.647 1.648h-1.648V8.817l-9.882 7.097L4.06 8.817v14.948H2.412a1.617 1.617 0 01-1.647-1.648V5.647c0-.467.178-.879.473-1.173A1.631 1.631 0 012.412 4h.549l10.98 7.96L24.921 4h.55c.466 0 .878.178 1.173.474.297.294.474.706.474 1.173z"
               fill="#fff"
            />
         </g>
         <defs>
            <clipPath id="prefix__clip0">
               <path
                  fill="#fff"
                  transform="translate(.765 .706)"
                  d="M0 0h26.353v26.353H0z"
               />
            </clipPath>
         </defs>
      </svg>
   )
}

const MemoSvgComponent = React.memo(SvgComponent)
export default MemoSvgComponent
