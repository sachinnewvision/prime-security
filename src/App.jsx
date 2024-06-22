import "./App.css";
import Homepage from "./components/homepage/Homepage";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Header from "./components/constantpages/Header";
import Services from "./components/services/Services";
import Error from "./components/Error";
import AboutUs from "./components/aboutus/AboutUs";
import Jobseekers from "./components/jobseekers/Jobseekers";
import Contactus from "./components/contactus/Contactus";
import Partnerwithus from "./components/partnerwithus/Partnerwithus";
import Referandearn from "./components/referandearn/Referandearn";

let AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Homepage />,
      },
      {
        path: "/services",
        element: <Services />,
      },
      {
        path: "/aboutus",
        element: <AboutUs />,
      },
      {
        path: "/jobseekers",
        element: <Jobseekers />,
      },
      {
        path: "/partnerwithus",
        element: <Partnerwithus />,
      },
      {
        path: "/referandearn",
        element: <Referandearn />,
      },
      {
        path: "/contactus",
        element: <Contactus />,
      },
    ],
    errorElement: <Error />,
  },
]);

let root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
