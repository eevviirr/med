import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isAuth: false,
};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.isAuth = action.payload;
        },
    },
});

export default userSlice.reducer;
export const { setUser } = userSlice.actions;
