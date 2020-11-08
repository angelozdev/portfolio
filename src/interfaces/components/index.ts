import { techs } from '@src/styles/theme'

export interface WithChildren {
   children: React.ReactNode
}

export interface technology {
   title: string
   description: string
   icon: React.ReactNode
   color: techs
}
