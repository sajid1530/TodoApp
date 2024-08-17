import { useDispatch } from "react-redux";
import { signupStart,signupSuccess,signupFailure, confirmOtpStart, confirmOtpSuccess, confirmOtpFailue, resendOtpStart, resendOtpSuccess, resendOtpFailure, loginStart, loginSuccess, loginFailure } from "../reducers/authSlice";
import { toast } from 'react-toastify';
import  'react-toastify/dist/ReactToastify.css'; 

    // Import the base URL from environment variables
    const BASE_URL = import.meta.env.VITE_BASE_URL;

    export const signup = (userData, navigate) => async (dispatch) => {
      dispatch(signupStart());
    
      try {
        const response = await fetch(`${BASE_URL}/api/v1.0/auth/signUp`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(userData),
        });
    
        const data = await response.json();
    
        if (response.status === 409) {
          toast.error(data.message || 'Signup failed, please try again.');
          return { error: true, message: data.message };
        }
    
        if (!response.ok) {
          throw new Error(data.message || 'Failed to sign up');
        }
    
        dispatch(signupSuccess({ ...data, email: userData.email }));
        toast.success('Signup successful! Please confirm your OTP.');
        navigate('/confirmotp');
        return { error: false };
       
      } catch (error) {
        dispatch(signupFailure(error.message));
        toast.error(error.message || 'Signup failed, please try again.');
        return { error: true, message: error.message };
      }
    };


  // ConfirmOtp
export const confirmOtp = ({ email, otp, navigate }) => async (dispatch) => {
  dispatch(confirmOtpStart());

  try {
    const response = await fetch(`${BASE_URL}/api/v1.0/auth/confirm/otp`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({ email, otp }),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || 'Failed to Confirm OTP');
    }

    dispatch(confirmOtpSuccess());
    navigate('/login');
    return { error: false };
  } catch (error) {
    dispatch(confirmOtpFailue(error.message));
    return { error: true, message: error.message };
  }
};




export const resendOtp = ({ email}) => async (dispatch) => {
  dispatch(resendOtpStart());
  try {
    const response = await fetch(`${BASE_URL}/api/v1.0/auth/resend/otp`, {
      method: 'POST',
      headers: {
        'content-type' : 'application/json',
      },
      body: JSON.stringify({ email }),
    });
  
    const data = await response.json();
  
    if (!response.ok) {
      toast.error(data.message || 'Failed to resend OTP')
      const errorData = await response.json();
      throw new Error(errorData.message || 'Failed to resend OTP');
    }
  
    dispatch(resendOtpSuccess());
      toast.success('OTP has been successfully sent to your email');

    return { error: false };
  } catch (error) {
    dispatch(resendOtpFailure(error.message));
    toast.error(error.message || 'Failed to resend OTP');
    return { error: true, message: error.message };
  }
};


export const login = (credentials, navigate) => async (dispatch) => {
  dispatch(loginStart());
  try {
    const response = await fetch(`${BASE_URL}/api/v1.0/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(credentials),
    });
     

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Failed to login');
    }

    const data = await response.json();
    console.log("🚀 ~ login ~ data:", data)
    dispatch(loginSuccess(data));
    navigate('/dashboard')
    return { error: false };
  } catch (error) {
    dispatch(loginFailure(error.message));
    return { error: true, message: error.message };
  }
};


export { signupStart, signupSuccess, signupFailure , confirmOtpStart, confirmOtpSuccess, confirmOtpFailue,resendOtpStart, resendOtpSuccess, resendOtpFailure, loginStart, loginSuccess, loginFailure, logout} from '../reducers/authSlice'







