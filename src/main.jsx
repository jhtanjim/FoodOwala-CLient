import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import { router } from './Routes/Router';
import AuthProvider from './Providers/AuthProvider';
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>

    <AuthProvider>
      <div >
        <RouterProvider router={router} />
      </div>
    </AuthProvider>

  </React.StrictMode>
);