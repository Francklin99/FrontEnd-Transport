import { Routes } from '@angular/router';

export const MAIN_ROUTES:Routes = [
  {
    path: 'workspace',
    loadComponent: () => import('../../../Layouts/Private/layout/layout.component'),
    children: [
      {
        path: 'index',
        loadComponent: () => import('../../../Private/index/index.component')
      },
      {
        path: 'Profile',
        loadComponent: () => import('../../../Private/my-profile/my-profile.component')
      },
      {
        path:'OrderTaxi',
        loadComponent: () => import('../../../Private/order-taxi/order-taxi.component')
      },
      {
        path:'TravelScheduled',
        loadComponent: () => import('../../../Private/travel-scheduled/travel-scheduled.component')
      },
      {
        path: 'HistoryTravels',
        loadComponent: () => import('../../../Private/history-travels/history-travels.component')
      },
      {
        path: 'FollowUp',
        loadComponent: () => import('../../../Private/follow-up/follow-up.component')
      },
      {
        path: 'Favorites',
        loadComponent: () => import('../../../Private/favorites/favorites.component')
      },
      {
        path: 'DriverProfile',
        loadComponent: () => import('../../../Private/driver-profile/driver-profile.component')
      },
      {
        path: 'CardPayment',
        loadComponent: () => import('../../../Shared/Components/card-payment/card-payment.component')
      },
      {
        path: 'PaymentMethods',
        loadComponent: () => import('../../../Private/payment-methods/payment-methods.component')
      },
      {
        path: 'YapePayment',
        loadComponent: () => import('../../../Private/yape-payment/yape-payment.component')
      }
    ]

  },
  {
      path: 'LackImplementation',
      loadComponent: () => import('../../../Private/lack-implementation/lack-implementation.component')
  }
]
