const routes = [
  {
    path: '/',
    component: () => import('../pages/Index.vue'),
    name: "home"
  },
  {
    path: '/about',
    component: () => import('../pages/About.vue'),
    name: "about"
  },
  {
    path: '/privacy-policy',
    component: () => import('../pages/PrivacyPolicy.vue'),
    name: "privacy-policy"
  },
  {
    path: '/license-terms',
    component: () => import('../pages/LicenseTerms.vue'),
    name: "license-terms"
  }
];

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('../pages/Error404.vue')
  })
}

export default routes