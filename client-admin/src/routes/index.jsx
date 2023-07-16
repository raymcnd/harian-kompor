import { createBrowserRouter, redirect } from "react-router-dom";
import App from "../App";
import PostsView from "../views/PostsView";
import PostFormView from "../views/PostFormView";
import CategoriesView from "../views/CategoriesView";
import CategoryFormView from "../views/CategoryFormView";
import RegisterAdminView from "../views/RegisterAdminView";
import LoginView from "../views/LoginView";

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
                    element: <PostFormView />
                },
                {
                    path: "posts/edit/:id",
                    element: <PostFormView />
                },
                {
                    path: "categories",
                    element: <CategoriesView />
                },
                {
                    path: "categories/add",
                    element: <CategoryFormView />
                },
                {
                    path: "categories/edit/:id",
                    element: <CategoryFormView />
                },
                {
                    path: "register-admin",
                    element: <RegisterAdminView />
                }
            ],
        },
        {
            path: "/login",
            element: <LoginView />
        },
    ]);

  export default router