// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'
import '~/styles/main.scss'
import VueSVGIcon from 'vue-svgicon'
import '~/assets/icons'
import VueSmoothScroll from 'vue2-smooth-scroll'


export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
  Vue.use(VueSVGIcon)
  Vue.use(VueSmoothScroll,{
    duration: 400,
    updateHistory: false,
    offset: -80,
  })
}
