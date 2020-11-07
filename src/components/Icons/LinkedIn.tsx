import * as React from 'react'

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
   return (
      <svg
         width={20}
         height={20}
         viewBox="0 0 2400 2293"
         fill="white"
         {...props}
      >
         <path d="M266 .7c-52.6 3.1-105.8 19.1-144.2 43.4-25.2 16-55.9 44-72.2 65.9C18.2 152.2 2.3 199.7.3 257c-1.6 47.7 7.4 91.9 26.8 131 26 52.5 72.4 97.2 125.2 120.7 37.8 16.8 75.4 24.7 123.7 26 96.5 2.5 173.1-24.8 230.5-82.2 41.4-41.5 64.8-90.8 71.1-150.3 2-17.9 1.4-53.5-1.1-71.6-8.3-60.7-31.9-109.7-72.3-150.3C463 38.9 409.7 12.9 347.5 4 323.7.5 291.1-.8 266 .7zM1767 710.1c-96.9 6.7-180.7 33.6-254.5 81.7-59.9 39.1-114.3 93.5-158.6 158.9l-9.9 14.7V746H828.9l.6 3.2c2.4 14.7 4.5 225.9 4.5 462.3 0 231.6-3 937-4.5 1043.2l-.5 38.3h515v-445.8c0-297.4.4-450.4 1-459.7 3-39.8 9.3-66.3 22.9-96.4 15.5-34.4 37.2-66 64.5-93.9 36.6-37.6 70.5-58.4 114.6-70.6 51.7-14.4 119.1-13.3 169 2.6 94.2 30.1 149.5 113.9 164.9 249.8 4.6 40.5 4.5 24.6 4.8 480.2l.4 433.8h514l-.4-473.3c-.3-354.5-.6-477.2-1.5-489.2-.7-8.8-2.1-26.1-3.2-38.5-12-133.3-45.4-243.2-101.2-332.2-56.8-90.7-143.1-164.3-240.8-205.3-60.7-25.5-125.5-39.9-200-44.5-18.8-1.1-68.9-1.1-86 .1zm-423.4 259.6c-1 1-1.9-.5-1-1.8.6-1.1.8-1.1 1.2 0 .2.7.1 1.5-.2 1.8zM30 1519.5V2293h514V746H30v773.5z" />
      </svg>
   )
}

const MemoSvgComponent = React.memo(SvgComponent)
export default MemoSvgComponent
