// // import React from 'react'
// // import ReactDOM from 'react-dom/client'
// // import App from './App.jsx'
// // import './index.css'

// //         // import components
// // import Root from './routes/root.jsx'
// // import Login from './components/auth/login.jsx'
// // import ConfirmOtp from './components/auth/confirmOtp.jsx'
// // import Dashboard from './components/auth/dashboard.jsx'
// // import ResendOtp from './components/auth/resendOtp.jsx'
// // import {  createBrowserRouter, RouterProvider, } from 'react-router-dom'
// // import { ToastContainer, toast } from 'react-toastify'


// // import { store } from './redux/store.js'
// // import { Provider } from 'react-redux'
// // import ForgetPassword from './components/auth/forgetPassword.jsx'
// // import Par from './components/auth/par.jsx'
// // import Signup from './components/auth/signup.jsx'


// // const router = createBrowserRouter( [
// //   {
// //     path: "/",
// //     element: <Root />
// //   },
// //   {
// //     path: "/signup",
// //     element: <Signup />
// //   },
// //   {
// //     path: "/login",
// //     element: <Login />
// //   },
// //   {
// //     path: "/confirmotp",
// //     element: <ConfirmOtp />
// //   },
// //   {
// //     path: '/dashboard',
// //     element: <Dashboard />
// //   },
// //   {
// //     path: '/resendotp',
// //     element: <ResendOtp />
// //   },
// //   {
// //     path: '/forgetpassword',
// //     element: <ForgetPassword />
// //   },
// //   {
// //     path: '/par',
// //     element: <Par />
// //   },
// // ])


// // ReactDOM.createRoot(document.getElementById('root')).render(
 
// //   <React.StrictMode>
// //      <Provider store={store}>
// //     {/* <App /> */}
// //     <RouterProvider router={router} />
// //     </Provider>
// //     <ToastContainer 
// //      position={toast.POSITION.TOP_CENTER}
// //     />
// //   </React.StrictMode>,
 
// // )



// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
// import './index.css'

// import Root from './routes/root.jsx'
// import Login from './components/auth/login.jsx'
// import ConfirmOtp from './components/auth/confirmOtp.jsx'
// import Dashboard from './components/auth/dashboard.jsx'
// import ResendOtp from './components/auth/resendOtp.jsx'
// import { createBrowserRouter, RouterProvider } from 'react-router-dom'
// import { ToastContainer, toast } from 'react-toastify'
// import 'react-toastify/dist/ReactToastify.css'

// import { store } from './redux/store.js'
// import { Provider } from 'react-redux'
// import ForgetPassword from './components/auth/forgetPassword.jsx'
// import Par from './components/auth/par.jsx'
// import Signup from './components/auth/signup.jsx'

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Root />
//   },
//   {
//     path: "/signup",
//     element: <Signup />
//   },
//   {
//     path: "/login",
//     element: <Login />
//   },
//   {
//     path: "/confirmotp",
//     element: <ConfirmOtp />
//   },
//   {
//     path: '/dashboard',
//     element: <Dashboard />
//   },
//   {
//     path: '/resendotp',
//     element: <ResendOtp />
//   },
//   {
//     path: '/forgetpassword',
//     element: <ForgetPassword />
//   },
//   {
//     path: '/par',
//     element: <Par />
//   },
// ])

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <Provider store={store}>
//       <RouterProvider router={router} />
//     </Provider>
//     <ToastContainer 
//       position="top-center" 
//     />
//   </React.StrictMode>,
// )





// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';

// import Root from './routes/root.jsx';
// import Login from './components/auth/login.jsx';
// import ConfirmOtp from './components/auth/confirmOtp.jsx';
// import Dashboard from './components/auth/dashboard.jsx';
// import ResendOtp from './components/auth/resendOtp.jsx';
// import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// import { ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// import { store } from './redux/store.js';
// import { Provider } from 'react-redux';
// import ForgetPassword from './components/auth/forgetPassword.jsx';
// import Par from './components/auth/par.jsx';
// import Signup from './components/auth/signup.jsx';
// import ProtectedRoute from './routes/protectedRoute.jsx';
// import TodoForm from './components/auth/todoForm.jsx';

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Root />
//   },
//   {
//     path: "/signup",
//     element: <Signup />
//   },
//   {
//     path: "/login",
//     element: <Login />
//   },
//   {
//     path: "/confirmotp",
//     element: <ConfirmOtp />
//   },

//   {
//     path: '/dashboard',
//     element: (
//       <ProtectedRoute>
//         <Dashboard />
//       </ProtectedRoute>
//     )
//   },
//   {
//     path: '/resendotp',
//     element: <ResendOtp />
//   },
//   {
//     path: '/forgetpassword',
//     element: <ForgetPassword />
//   },
//   {
//    path: '/todoform',
//    element: <TodoForm />
//   },
//   {
//     path: '/par',
//     element: <Par />
//   },
// ]);

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <Provider store={store}>
//       <RouterProvider router={router} />
//     </Provider>
//     <ToastContainer position="top-center" />
//   </React.StrictMode>,
// );



import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Root from './routes/root.jsx';
import Login from './components/auth/login.jsx';
import ConfirmOtp from './components/auth/confirmOtp.jsx';
import Dashboard from './components/auth/dashboard.jsx';
import ResendOtp from './components/auth/resendOtp.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { store, persistor } from './redux/store.js';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import ForgetPassword from './components/auth/forgetPassword.jsx';
import Par from './components/auth/par.jsx';
import Signup from './components/auth/signup.jsx';
import ProtectedRoute from './routes/protectedRoute.jsx';
import TodoForm from './components/auth/todoForm.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />
  },
  {
    path: "/signup",
    element: <Signup />
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/confirmotp",
    element: <ConfirmOtp />
  },
  {
    path: '/dashboard',
    element: (
      <ProtectedRoute>
        <Dashboard />
      </ProtectedRoute>
    )
  },
  {
    path: '/resendotp',
    element: <ResendOtp />
  },
  {
    path: '/forgetpassword',
    element: <ForgetPassword />
  },
  {
    path: '/todoform',
    element: <TodoForm />
  },
  {
    path: '/par',
    element: <Par />
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <RouterProvider router={router} />
      </PersistGate>
    </Provider>
    <ToastContainer position="top-center" />
  </React.StrictMode>,
);

