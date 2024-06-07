import { createSlice } from '@reduxjs/toolkit'


export interface AuthState {
  loading: Boolean,
  userInfo: Record<string, any> // for user object
  userToken: String | null, // for storing the JWT
  error: String | null,
  success: Boolean,
}
const initialState: AuthState = {
  loading: false,
  userInfo: {}, // for user object
  userToken: null, // for storing the JWT
  error: null,
  success: false, // for monitoring the registration process.
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
})

export default authSlice.reducer