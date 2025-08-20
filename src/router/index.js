import { createRouter, createWebHistory } from 'vue-router'
import Certificates from '../components/Certificates.vue'  

const routes = [
  {
    path: '/',
    name: 'Certificates',
    component: Certificates
  },
  {
    path: '/certificates/:slug',
    name: 'CertificateModal',
    component: Certificates
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
