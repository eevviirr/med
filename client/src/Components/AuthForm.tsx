import React, { FC } from "react";

interface IProps {
    handleSubmit: (n: any) => void;
}
const AuthForm: FC<IProps> = ({ handleSubmit }) => {
    const [value, setValue] = React.useState({
        login: "",
        password: "",
    });
    return (
        <form
            onSubmit={(e) => {
                e.preventDefault();
                handleSubmit(value);
            }}
            className='p-8 bg-white bg-opacity-20 rounded-lg mt-8 '>
            <div className='flex gap-8 mb-8'>
                <input
                    type='text'
                    className='border-white border bg-[transparent] px-8 py-4 rounded-lg outline-none text-white w-full font-medium'
                    placeholder='login'
                    onChange={(e) =>
                        setValue({ ...value, login: e.target.value })
                    }
                />
                <input
                    type='text'
                    className='border-white border bg-[transparent] px-8 py-4 rounded-lg outline-none text-white w-full font-medium'
                    placeholder='password'
                    onChange={(e) =>
                        setValue({ ...value, password: e.target.value })
                    }
                />
            </div>
            <button
                className='px-8 py-4 bg-white rounded-lg font-bold'
                type='submit'>
                submit
            </button>
        </form>
    );
};

export { AuthForm };
