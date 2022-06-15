
const routes = [
  // Main Layout routes
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    redirect: '/login',
    children: [
      { 
        path: 'last', 
        component: () => import('pages/Main/Index.vue'), 
      },
      { 
        path: 'main_page', 
        component: () => import('pages/Main/News.vue'), 
      },
      { 
        path: 'profile_page', 
        component: () => import('pages/Main/Profile.vue'), 
      },
      { 
        path: 'do_claim_page', 
        component: () => import('pages/Main/Orders.vue'), 
      },
      { 
        path: 'providers', 
        component: () => import('pages/Main/Providers.vue'), 
      },
      { 
        path: 'addprovider', 
        component: () => import('pages/Main/AddProviders.vue'), 
      },
      { 
        path: 'seo', 
        component: () => import('pages/Main/Seo.vue'), 
      },
      { 
        path: 'sales_management_page', 
        component: () => import('pages/Main/Start.vue'), 
      },
      { 
        path: 'creditors_control_page', 
        component: () => import('pages/Main/Creditors.vue'), 
      },
      { 
        path: 'employer_control_page',
        component: () => import('src/pages/Main/EmployersPage.vue'), 
      },
      { 
        path: 'employer_control_page/:id',
        name: 'employer_page_item',
        component: () => import('src/pages/Main/EmployersItemPage.vue'), 
        props: true,
      },
      { 
        path: 'add_employer_page',
        component: () => import('src/pages/Main/AddEmployerPage.vue'), 
      },
      { 
        path: 'upload_report_page', 
        component: () => import('pages/Main/Report.vue'), 
      },
      { 
        path: 'project_management_page', 
        component: () => import('pages/Main/Projects.vue'), 
      },
      { 
        path: 'add_position_page', 
        component: () => import('src/pages/Main/AppointmentPage.vue'), 
      },
      { 
        path: 'add_position_page/:id', 
        name: 'position_page_item',
        component: () => import('src/pages/Main/AppointmentItemPage.vue'),
        props: true
      },
      {
        path: 'add_appointment_page',
        component: () => import('pages/Main/AddAppointmentPage.vue')
      },
      { 
        path: 'gantt-page', 
        component: () => import('pages/Main/GanttPage.vue'), 
      }
    ],
    meta: {
      required: true
    }
  },

  // Auth Layout routes
  {
    path: '/login',
    component: () => import('layouts/LoginLayout.vue'),
    children: [
      {
        path: '',
        component: () => import('src/pages/Auth/Check.vue')
      },
      {
        path: 'signup',
        component: () => import('src/pages/Auth/SignUp.vue'),
      },
      {
        path: 'signin',
        component: () => import('src/pages/Auth/Login.vue'),
      }
    ],
    meta: {
      public: true,
      onlyWhenLoggedOut: true
    }
  },

  // Admin Layout routes
  {
    path: '/admin',
    component: () => import('layouts/AdminLayout.vue'),
    redirect: '/admin/home',
    children: [
      { 
        path: 'home', 
        component: () => import('src/pages/Admin/Index.vue'), 
      },
      { 
        path: 'add', 
        component: () => import('src/pages/Admin/AddUser.vue'), 
      },
      { 
        path: 'profile', 
        component: () => import('src/pages/Admin/Profile.vue'), 
      }
    ]
  },

  // Other routes
  {
    path: '*',
    component: () => import('pages/Error404.vue'),
    meta: {
      public: true,
    }
  }
]

export default routes
