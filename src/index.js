import { lazy, Suspense } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter , RouterProvider } from "react-router-dom";
import App from "./App";
import Contact from "./components/Contact";
import Home from "./components/Home";
import RestaurantMenu from "./components/RestaurantMenu";
import Shimmer from "./components/Shimmer";

const About = lazy( () => import("./components/About"));

const container = document.getElementById("root");
const root = createRoot(container)

const router = createBrowserRouter([
    {
        path : "/",
        element : <App />,
        children : [
            {
                path : "/",
                element : <Home />
            },
            {
                path : "/about",
                element : <Suspense fallback={<Shimmer />}> <About /> </Suspense>
            },{
                path : "/contact",
                element : <Contact />
            },{
                path : "/restaurant/:restaurantId",
                element : <RestaurantMenu />
            }  
        ]
    },
]);

root.render(<RouterProvider router={router} />);
