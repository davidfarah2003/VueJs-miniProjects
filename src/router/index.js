import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/Home.vue'
import About from '@/views/About.vue'
import Jobs from '@/views/jobs/Jobs.vue'
import JobDetails from "@/views/jobs/JobDetails";
import NotFound from "@/views/NotFound";

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/jobs',
    name: 'Jobs',
    component: Jobs
  },
  {
    path: '/jobs/:id',
    name: 'JobDetails',
    component: JobDetails,
    props: true //attach route param to object when linked (in props)
  },
  //redirect
  {
    path: '/all-jobs',
    redirect: '/jobs',
  },
  //catchall 404
  {
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: NotFound,
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
