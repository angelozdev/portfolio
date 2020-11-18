import { project } from '@src/interfaces/components'
import { backgrounds, colors } from '@src/styles/theme'
import Muvick from '../../public/assets/muvick.png'
import Devtter from '../../public/assets/devtter.png'
import Github from '../../public/assets/github-search.png'
import MyUnsplash from '../../public/assets/myunsplash.png'
import Petgram from '../../public/assets/petgram.png'

const projects: project[] = [
   {
      title: 'Muvick - A Streaming Platform',
      color: colors.WHITE,
      background: backgrounds.DARK_BLUE,
      description:
         'Muvick is an on demand streaming platform where each user can watch their favorite movies and series and can get recommendations depending on their movies or series watched.',
      link: 'https://muvick.com',
      size: 12,
      image: Muvick
   },
   {
      title: 'Devtter - A Twitter for Developers',
      description:
         'Devtter is a twitter clone where a user has his own account, can write his "tweets" that are saved in a database and can upload images with his tweets.',
      background: backgrounds.DARK_GREY,
      color: colors.WHITE,
      link: 'https://devtter.vercel.app/',
      size: 6,
      image: Devtter
   },
   {
      title: 'GitHub Search',
      description:
         "GitHub Search is an application where you can search Github's profiles and see their general information like repositories, starts, followers, and follows. Besides, it has performed dark mode.",
      background: backgrounds.BLACK,
      color: colors.WHITE,
      link: 'https://github-search-1355b.web.app/',
      size: 6,
      image: Github
   },
   {
      title: 'My Unsplash',
      description:
         'My Unsplash is a challenge on the devchallenges.io page where each user can upload their images, see their own images and those of their friends. He has the option to "like" them and do a search for the label.',
      color: colors.WHITE,
      background: backgrounds.GREEN,
      link: 'https://github.com/CuttingEdgeCoders/my-unsplash-frontend',
      size: 12,
      image: MyUnsplash
   },
   {
      title: 'Petgram - An Instagram for our pets',
      description:
         'Petgram is an Instagram clone where you can see photographs of pets by categories. Using Webpack, GraphQL, React Hooks, React Router, SEO and PWAs.',
      background: backgrounds.RED,
      color: colors.WHITE,
      link: 'https://petgram.angelozam17.vercel.app/',
      size: 12,
      image: Petgram
   }
]

export default projects
