/*
1- burger builder 
img: src
url: https://burger-builder-536c0.web.app/
github_link: https://github.com/Howaida-95/burger-builder-react-redux
features:
html5 & css3
React and redux
axios
react-transition-group package
authenication 
firebase

==================================================
2-search movie app 
url: https://movie-app-b6168.web.app/
github_link: https://github.com/Howaida-95/movie-app-react-redux
features:
html5 & css3
React and redux
axios
fontawesom library 

====================================================
3- phone ecommerce 
url: https://phone-e-commerce.web.app/
github_link: https://github.com/Howaida-95/phone-Ecommerce-react-redux
features:
html5 & css3
React and redux
axios
fontawesom library 
bootstrap grid
react-paypal-express-checkout package 
react-transition-group package

======================================================
4- nubian resort 
url: https://resort-recording.web.app/
github_link: https://github.com/Howaida-95/nubian-resort-react-hooks
features:
html5 & css3 & sass 
axios
bootstrap grid
react-icons
react hooks and context api

======================================================
5- food recipe 
url: https://food-recipe-205d6.web.app/
github_link: https://github.com/Howaida-95/food-searching-react-hooks
features:
html5 & css3 
axios
react hooks and context api 
uuid package

=======================================================
6- bootstrap 
url: https://web-ninja2.000webhostapp.com/bootstrap/
github_link: https://github.com/Howaida-95/bootstrap-project
features
html5 & css3
bootstrap4 
js 
swiper.js
fontawesom
*/
// true apps
import trueapps from '../assets/images/trueapps.png';
import trueapps1 from '../assets/images/trueapps1.png'
import trueapps2 from '../assets/images/trueapps2.png'
import trueapps3 from '../assets/images/trueapps3.png'
import trueapps4 from '../assets/images/trueapps4.png'
import trueapps5 from '../assets/images/trueapps5.png'
import trueapps6 from '../assets/images/trueapps6.png'
import trueapps7 from '../assets/images/trueapps7.png'
// dashboard 
import dashboard from '../assets/images/dashboard.png'
import dashboard1 from '../assets/images/dashboard1.png'
import dashboard2 from '../assets/images/dashboard2.png'
import dashboard3 from '../assets/images/dashboard3.png'
import dashboard4 from '../assets/images/dashboard4.png'
import dashboard6 from '../assets/images/dashboard6.png'
import dashboard7 from '../assets/images/dashboard7.png'
import dashboard8 from '../assets/images/dashboard8.png'
import dashboard9 from '../assets/images/dashboard9.png'
import dashboard10 from '../assets/images/dashboard10.png'
import dashboard11 from '../assets/images/dashboard11.png'
// fivestar website
import fivestarWeb from '../assets/images/fivestarWeb.png'
import fivestarWeb1 from '../assets/images/fivestarWeb1.png'
import fivestarWeb2 from '../assets/images/fivestarWeb2.png'
import fivestarWeb3 from '../assets/images/fivestarWeb3.png'
import fivestarWeb4 from '../assets/images/fivestarWeb4.png'
import fivestarWeb5 from '../assets/images/fivestarWeb5.png'
import fivestarWeb6 from '../assets/images/fivestarWeb6.png'
import fivestarWeb7 from '../assets/images/fivestarWeb7.png'
import fivestarWeb8 from '../assets/images/fivestarWeb8.png'
// fivestar
import fivestar from '../assets/images/fivestar.webp'
import fivestar0 from '../assets/images/fivestar0.webp'
import fivestar1 from '../assets/images/fivestar1.webp'
import fivestar2 from '../assets/images/fivestar2.webp'
import fivestar3 from '../assets/images/fivestar3.webp'
import fivestar4 from '../assets/images/fivestar4.webp'
import fivestar5 from '../assets/images/fivestar5.webp'

// fivestar admin
import fivestarAdmin from '../assets/images/fivestarAdmin.webp'
import fivestarAdmin1 from '../assets/images/fivestarAdmin1.webp'
import fivestarAdmin2 from '../assets/images/fivestarAdmin2.webp'
import fivestarAdmin3 from '../assets/images/fivestarAdmin3.webp'
import fivestarAdmin4 from '../assets/images/fivestarAdmin4.webp'
import fivestarAdmin5 from '../assets/images/fivestarAdmin5.webp'

export const project = [
  {
    img: trueapps,
    heading: 'True Apps',
    list: [
        'React JS and redux',
        'CSS3',
        'Bootstrap grid',
    ],
    imgsList: [
      trueapps1,
      trueapps2,
      trueapps3,
      trueapps4,
      trueapps5,
      trueapps6,
      trueapps7
    ],
    preview: 'https://trueapps.co/',
    // bitbucket: 'https://bitbucket.org/howaida_95/true-apps/src/master/',
    app: false
  },
  {
    img: dashboard,
    heading: 'Dashboard',
    list: [
      'React JS and redux',
      'ant design  and sass',
    ],
    imgsList: [
      dashboard1,
      dashboard2,
      dashboard3,
      dashboard4,
      dashboard6,
      dashboard7,
      dashboard8,
      dashboard9,
      dashboard10,
      dashboard11
    ],
    preview: 'https://fivestars-admin.trueapps.co/login',
    // bitbucket: 'https://bitbucket.org/my-guide/myguide/src/master/',
    app: false
  }, 
  {
    img: fivestarWeb,
    heading: 'FiveStar-website',
    list: [
      'React typescript',
      'redux toolkit',
      'ant design  and sass',
    ],
    imgsList: [
      fivestarWeb1,
      fivestarWeb2,
      fivestarWeb3,
      fivestarWeb4,
      fivestarWeb5,
      fivestarWeb6,
      fivestarWeb7,
      fivestarWeb8,
    ],
    //preview: 'https://fivestars-admin.trueapps.co/login',
    // bitbucket: 'https://bitbucket.org/my-guide/myguide/src/master/',
    app: false
  },  
  {
    img: fivestar,
    heading: 'fivestars-users app', 
    list: [
      'React native and redux'
    ],
    imgsList: [
      fivestar0,
      fivestar1,
      fivestar2,
      fivestar3,
      fivestar4,
      fivestar5,
    ],
    preview: 'https://play.google.com/store/apps/details?id=com.fivestarclient&hl=en&gl=US',
    // bitbucket: 'https://bitbucket.org/my-guide/myguide/src/master/',
    app: true
  }, 
  {
    img: fivestarAdmin,
    heading: 'fivestars-admin app', 
    list: [
      'React native and redux'
    ],
    imgsList: [
      fivestarAdmin1,
      fivestarAdmin2,
      fivestarAdmin3,
      fivestarAdmin4,
      fivestarAdmin5,
    ],
    preview: 'https://play.google.com/store/apps/details?id=com.fivestarclient&hl=en&gl=US',
    // bitbucket: 'https://bitbucket.org/my-guide/myguide/src/master/',
    app: true
  }
]