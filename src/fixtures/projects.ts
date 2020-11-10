import { project } from '@src/interfaces/components'
import { backgrounds, colors } from '@src/styles/theme'

const projects: project[] = [
   {
      title: 'Muvick - A Streaming Platform',
      color: colors.WHITE,
      background: backgrounds.GREEN,
      description:
         'Muvick is an on demand streaming platform where each user can watch their favorite movies and series and can get recommendations depending on their movies or series watched.',
      link: 'https://muvick.com',
      size: 12
   },
   {
      title: 'My Unsplash',
      description:
         'My Unsplash is a challenge on the devchallenges.io page where each user can upload their images, see their own images and those of their friends. He has the option to "like" them and do a search for the label.',
      color: colors.WHITE,
      background: backgrounds.RED,
      link: 'https://github.com/CuttingEdgeCoders/my-unsplash-frontend',
      size: 6
   },
   {
      title: 'Devtter - A Twitter for Developers',
      description:
         'Devtter is a twitter clone where a user has his own account, can write his "tweets" that are saved in a database and can upload images with his tweets.',
      background: backgrounds.DARK_BLUE,
      color: colors.WHITE,
      link: 'https://devtter.vercel.app/',
      size: 6
   }
]

export default projects
