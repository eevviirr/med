import { FC, useEffect } from "react";
import { AuthForm } from "../../Components/AuthForm";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../../store/slice/userSlice";
import { useNavigate } from "react-router-dom";

const Login: FC = ({}) => {
    const dispatch = useDispatch();
    const isAuth = useSelector((state: any) => state.userSlice.isAuth);
    const navigate = useNavigate();

    const onSubmit = async (value: { login: string; password: string }) => {
        await axios
            .post("http://localhost:5000/auth/user", {
                login: value.login,
                password: value.password,
            })
            .then(({ data }) => {
                localStorage.setItem("token", data.token);
                dispatch(setUser(true));
            });
    };
    useEffect(() => {
        if (isAuth) {
            navigate("/");
        }
    }, [isAuth]);
    return (
        <div>
            <h1 className='title'>login</h1>
            <AuthForm handleSubmit={(value) => onSubmit(value)} />
        </div>
    );
};

export { Login };
