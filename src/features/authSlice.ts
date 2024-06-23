
import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '@reduxjs/toolkit/query';


export interface AuthState {
  loading: Boolean,
  userInfo: Record<string, any> | null | String // for user object
  userToken: String | null, // for storing the JWT
  error: String | null,
  success: Boolean,
}
const initialState: AuthState = {
  loading: false,
  userInfo: null, // for user object
  userToken: null, // for storing the JWT
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
    },
    logout: (state) => {
      state.userInfo = null
      state.userToken = null
    }
  },
})

export default authSlice.reducer;
export const { setCredentials, logout } = authSlice.actions

export const selectCurrentToken = (state:RootState) => state.auth.userToken
export const selectCurrentUser = (state:RootState) => state.auth.userInfo