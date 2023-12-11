import { Home } from "../pages/home/Home";
import { Login } from "../pages/login/Login";

interface IRoute {
    path: string;
    Component: React.FC;
}

export const publicRoutes: IRoute[] = [
    {
        path: "/login",
        Component: Login,
    },
];

export const authRoutes: IRoute[] = [
    {
        path: "/",
        Component: Home,
    },
];
