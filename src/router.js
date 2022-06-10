import {
    createRouter,
    createWebHistory,
    createWebHashHistory
  } from 'vue-router'
  
  const routerHistory = createWebHashHistory()
  
  import HomePage from './pages/home'
  import AboutPage from './pages/about'
  
  const router = createRouter({
    history: routerHistory,
    routes: [
      {
        path: '/',
        name: 'home',
        component: HomePage
      },
      {
        path: '/about',
        name: 'about',
        component: AboutPage
      }
    ]
  })
  
  export default router
  