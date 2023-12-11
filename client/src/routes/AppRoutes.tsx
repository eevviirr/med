import { FC } from "react";
import { authRoutes, publicRoutes } from "./routes";
import { Navigate, Route, Routes } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../store/slice/userSlice";

const AppRoutes: FC = ({}) => {
    const token = localStorage.getItem("token");
    const isAuth = useSelector((state: any) => state.userSlice.isAuth);
    const dispatch = useDispatch();
    if (token) {
        dispatch(setUser(true));
    }
    return (
        <div className='container pt-8'>
            <Routes>
                {publicRoutes.map(({ path, Component }) => (
                    <Route key={path} path={path} element={<Component />} />
                ))}
                {isAuth &&
                    authRoutes.map(({ path, Component }) => (
                        <Route key={path} path={path} element={<Component />} />
                    ))}
                <Route path='*' element={<Navigate to={"/login"} />} />
            </Routes>
        </div>
    );
};

export { AppRoutes };
