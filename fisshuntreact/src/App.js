import './App.css';
import React from 'react';
import Header from './components/Header';
// import Login from './components/Login';
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Error from './components/Error';
import Body from './components/Body';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Contact from './components/Contact';



function App() {
  return (
    <div className="App">
      <Header />
      <Outlet />

    </div>
  );
}
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/exchange",
        element: <Body />,
      },
      {
        path: "/login",
        element: <Login />,
      },

      {
        path: "/signUp",
        element: <SignUp />
      },
      {
        path: "/contact",
        element: <Contact />
      }
      // {
      //   path: "/contact",
      //   element: <Contact />,
      // },

    ],
    errorElement: <Error />,
  },
]);

export default appRouter;

