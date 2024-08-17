import { createSlice } from "@reduxjs/toolkit";
import ResendOtp from "../../components/auth/resendOtp";

const initialState = {
  email: '',
  otpConfirmed: false,
  loading: false,
  error: null,
  token: null,
  user: null,
};

export const authSlice = createSlice({
   name: 'auth',
   initialState,
   reducers: {
    signupStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    signupSuccess: (state,action) => {
     state.loading = false;
     state.email = action.payload.email;
    },
    signupFailure: (state,action) => {
     state.loading = false;
     state.error = action.payload.error;
    },

    // ConfirmOtp
    confirmOtpStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    confirmOtpSuccess: (state) => {
      state.loading = false;
    
    },
    confirmOtpFailue: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    // ResendOtp
    resendOtpStart: (state) => {
     state.loading = true;
     state.error = null;
    },
    resendOtpSuccess: (state) => {
     state.loading = false;     
    },
    resendOtpFailure: (state, action) => {
     state.loading = false;
     state.action = action.payload;
    },
    loginStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    loginSuccess: (state, action) => {
      state.loading = false;
      state.token = action.payload?.userToken?.token;
      state.user = action.payload?.user?.user;
    },
    loginFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    logout: (state) => {
      return initialState;
    }
   }
})

export const { signupStart, signupSuccess, signupFailure, confirmOtpStart, confirmOtpSuccess, confirmOtpFailue, resendOtpStart, resendOtpSuccess, resendOtpFailure, loginStart, loginSuccess, loginFailure, logout } = authSlice.actions;

export default authSlice.reducer;