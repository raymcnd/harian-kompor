import { createBrowserRouter, redirect } from "react-router-dom";
import App from "../App";
import PostsView from "../views/PostsView";
import PostForm from "../views/PostForm";

const router = createBrowserRouter([
        {
            path: "/",
            element: <App />,
            children: [
                {
                    path: "",
                    loader: () => redirect("/posts")
                },
                {
                    path: "posts",
                    element: <PostsView />
                },
                {
                    path: "posts/add",
                    element: <PostForm />
                }
            ]
        }
        // {
        //   path: "/",
        //   element: <Root />,
        //   loader: rootLoader,
        //   children: [
        //     {
        //       path: "team",
        //       element: <Team />,
        //       loader: teamLoader,
        //     },
        //   ],
        // },
    ]);

  export default router