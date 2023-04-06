import tour1 from './images/tour-1.jpeg';
import tour2 from './images/tour-2.jpeg';
import tour3 from './images/tour-3.jpeg';
import tour4 from './images/tour-4.jpeg';

export const pageLinks = [
  {id: 1, href: '#home', text: 'home'},
  {id: 2, href: '#about', text: 'about'},
  {id: 3, href: '#services', text: 'services'},
  {id: 4, href: '#tours', text: 'tours'},
];

export const socialLinks = [
  {id:1, href:'www.facebook.com', icon:'fab fa-facebook'},
  {id:2, href:'www.twitter.com', icon:'fab fa-twitter'},
  {id:3, href:'www.squarespace.com', icon:'fab fa-squarespace'},
];

export const services = [
  {id:1, icon:'fas fa-wallet fa-fw', title:'Saving Money', text:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.'},
  {id:1, icon:"fas fa-tree fa-fw", title:'Endless Hiking', text:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.'},
  {id:1, icon:"fas fa-socks fa-fw", title:'Amazing Comfort', text:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.'},
]

export const tours = [
  {id:1, image: tour1, date:'august 26th, 2020', title:'Tibet Adventure',info:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumquevitae tempore voluptatum maxime reprehenderit eum quodexercitationem fugit, qui corporis.', location:"China", duration: 6, price: 2100},
  {id:2, image: tour2, date:'october 1th, 2020', title:'Best Of Java',info:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumquevitae tempore voluptatum maxime reprehenderit eum quodexercitationem fugit, qui corporis.', location:"Indonesia", duration: 11, price: 1400},
  {id:3, image: tour3, date:'september 15th, 2020', title:'Explore Hong Kong',info:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumquevitae tempore voluptatum maxime reprehenderit eum quodexercitationem fugit, qui corporis.', location:"Hong Kong", duration: 8, price: 5000},
  {id:4, image: tour4, date:'december 5th, 2019', title:'Kenya Highlights',info:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumquevitae tempore voluptatum maxime reprehenderit eum quodexercitationem fugit, qui corporis.', location:"Kenya", duration: 20, price: 3300},
]