import tour1 from './images/tour-1.jpeg'
import tour2 from './images/tour-2.jpeg'
import tour3 from './images/tour-3.jpeg'
import tour4 from './images/tour-4.jpeg'

const pageLinks = [
  {
    id: 1,
    href: '#home',
    text: 'Home',
  },
  {
    id: 2,
    href: '#about',
    text: 'About',
  },
  {
    id: 3,
    href: '#services',
    text: 'Services',
  },
  {
    id: 4,
    href: '#tours',
    text: 'Tours',
  },
]

export const socialIcons = [
  { href: 'https://www.facebook.com', id: 1, iconClass: 'fab fa-facebook' },
  { href: 'https://www.twitter.com', id: 2, iconClass: 'fab fa-twitter' },
  {
    href: 'https://www.squarespace.com',
    id: 3,
    iconClass: 'fab fa-squarespace',
  },
]

export const servicesData = [
  {
    id: 1,
    serviceIcon: 'fas fa-wallet fa-fw',
    serviceText:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit Asperiores, officia.',
    serviceTitle: 'saving money',
  },
  {
    id: 2,
    serviceIcon: 'fas fa-tree fa-fw',
    serviceText:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit.speriores, officia.',
    serviceTitle: 'endless hiking',
  },
  {
    id: 3,
    serviceIcon: 'fas fa-socks fa-fw',
    serviceText:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit.Asperiores, officia.',
    serviceTitle: 'amazing comfort',
  },
]

export const toursData = [
  {
    id: 1,
    tourImg: tour1,
    tourDate: 'august 26th, 2020',
    tourText:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit.Cumque vitae tempore voluptatum maxime reprehenderit eumquod exercitationem fugit, qui corporis.',
    tourTitle: 'Tibet Adventure',
    tourLocation: 'china',
    tourDays: '6 days',
    tourPrice: 'from $2100',
  },
  {
    id: 2,
    tourImg: tour2,
    tourDate: 'october 1th, 2020',
    tourText:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit.Cumque vitae tempore voluptatum maxime reprehenderit eumquod exercitationem fugit, qui corporis.',
    tourTitle: 'best of java',
    tourLocation: 'indonesia',
    tourDays: '11 days',
    tourPrice: 'from $1400',
  },
  {
    id: 3,
    tourImg: tour3,
    tourDate: 'september 15th, 2020',
    tourText:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit.Cumque vitae tempore voluptatum maxime reprehenderit eumquod exercitationem fugit, qui corporis.',
    tourTitle: 'explore hong kong',
    tourLocation: 'hong kong',
    tourDays: '8 days',
    tourPrice: 'from $5000',
  },
  {
    id: 4,
    tourImg: tour4,
    tourDate: 'december 5th, 2019',
    tourText:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit.Cumque vitae tempore voluptatum maxime reprehenderit eumquod exercitationem fugit, qui corporis.',
    tourTitle: 'kenya highlights',
    tourLocation: 'kenya',
    tourDays: '20 days',
    tourPrice: 'from $3300',
  },
]

export default pageLinks
