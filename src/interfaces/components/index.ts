import { backgrounds, colors, techs } from '@src/styles/theme'

export interface WithChildren {
   children: React.ReactNode
}

export interface technology {
   title: string
   description: string
   icon: React.ReactNode
   color: techs
}

export interface project {
   color: colors
   background: backgrounds
   title: string
   description: string
   size: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12
   link: string
}
