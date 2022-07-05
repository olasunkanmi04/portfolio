const c1 = () => import(/* webpackChunkName: "page--src--templates--portfolio-vue" */ "/Users/mac/Documents/portfolio/src/templates/Portfolio.vue")
const c2 = () => import(/* webpackChunkName: "page--src--pages--project-detail-vue" */ "/Users/mac/Documents/portfolio/src/pages/project-detail.vue")
const c3 = () => import(/* webpackChunkName: "page--node-modules--gridsome--app--pages--404-vue" */ "/Users/mac/Documents/portfolio/node_modules/gridsome/app/pages/404.vue")
const c4 = () => import(/* webpackChunkName: "page--src--pages--index-vue" */ "/Users/mac/Documents/portfolio/src/pages/Index.vue")

export default [
  {
    path: "/project/:title/",
    component: c1
  },
  {
    path: "/project-detail/",
    component: c2
  },
  {
    name: "404",
    path: "/404/",
    component: c3
  },
  {
    name: "home",
    path: "/",
    component: c4
  },
  {
    name: "*",
    path: "*",
    component: c3
  }
]
