
import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '@reduxjs/toolkit/query';


export interface AuthState {
  loading: Boolean,
  userInfo: Record<string, any> | null | String // for user object
  userToken: string | undefined, // for storing the JWT
  error: String | null,
  success: Boolean,
}
const initialState: AuthState = {
  loading: false,
  userInfo: JSON.parse(localStorage.getItem("user") as string), // for user object
  userToken: localStorage.getItem("token") as string, // for storing the JWT
  error: null,
  success: false, // for monitoring the registration process.
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      const { user, accessToken } = action.payload;
      state.userInfo = user;
      state.userToken = accessToken;
      localStorage.setItem("token", state.userToken as string)
      localStorage.setItem("user", JSON.stringify(state.userInfo))
    },
    logout: (state) => {
      state.userInfo = null
      state.userToken = undefined
      localStorage.removeItem("token")
      localStorage.removeItem("user")
    }
  },
})

export default authSlice.reducer;
export const { setCredentials, logout } = authSlice.actions

export const selectCurrentToken = (state: RootState) => state.auth.userToken
export const selectCurrentUser = (state: RootState) => state.auth.userInfo