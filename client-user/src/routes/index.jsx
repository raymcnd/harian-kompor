import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import MainPage from "../views/MainPage";
import SinglePostPage from "../views/SinglePostPage";
  
const router = createBrowserRouter([
    {
        element: <App />,
        children: [
            {
                path: "/",
                element: <MainPage /> 
            },
            {
                path: "/post/:id",
                element: <SinglePostPage /> 
            }
        ]
    },
]);

export default router
  