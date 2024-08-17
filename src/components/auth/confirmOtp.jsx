
// // import React from 'react';
// // import { useDispatch, useSelector } from 'react-redux';
// // import { ArrowRight } from 'lucide-react';
// // import { useNavigate } from 'react-router-dom';
// // import { Formik, Form, Field, ErrorMessage } from 'formik';
// // import * as Yup from 'yup';
// // import { confirmOtp, resendOtp } from '../../redux/actions/authAction';

// // useEffect(() => {
// //   let interval;
// //   if (timer > 0) {
// //     interval = setInterval(() => {
// //       setTimer((prevTimer) => prevTimer - 1);
// //     }, 1000);
// //   } else if (timer === 0) {
// //     clearInterval(interval);
// //   }
// //   return () => clearInterval(interval);
// // }, [timer]);

// // const formatTime = (time) => {
// //   const minutes = Math.floor(time / 60);
// //   const seconds = time % 60;
// //   return `${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
// // };

// // function ConfirmOtp() {
// //   const navigate = useNavigate();
// //   const dispatch = useDispatch();
// //   const { error, email } = useSelector((state) => state.auth);

// //   const otpSchema = Yup.object().shape({
// //     otp: Yup.string().required('OTP is required'),
// //   });

// //   const handleSubmit = async (values, { setSubmitting, setErrors }) => {
// //     const resultAction = await dispatch(confirmOtp({ email, otp: values.otp, navigate }));
// //   //   if (confirmOtp.fulfilled.match(resultAction)) {
// //   //     navigate('/login'); // or any other action on success
// //   //   } else {
// //   //     setErrors({ otp: resultAction.payload || 'OTP verification failed' });
// //   //   }
// //   //   setSubmitting(false); // End submitting state
// //   };


// //   const handleResendOtp = async () => {
// //     await dispatch(resendOtp({ email }));
// //   };

// //   return (
// //     <section>
// //       <div className="flex flex-col lg:flex-row">
// //         <div className="flex items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24 flex-1">
// //           <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
// //             <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl">Confirm OTP Form</h2>
// //             <Formik
// //               initialValues={{ otp: '' }}
// //               validationSchema={otpSchema}
// //               onSubmit={handleSubmit}
// //             >
// //               {({ isSubmitting }) => (
// //                 <Form className="mt-8">
// //                   <div className="space-y-5">
// //                     <div>
// //                       <label htmlFor="otp" className="text-base font-medium text-gray-900">
// //                         Enter OTP
// //                       </label>
// //                       <div className="mt-2">
// //                         <Field
// //                           className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
// //                           type="text"
// //                           placeholder="Enter OTP"
// //                           id="otp"
// //                           name="otp"
// //                         />
// //                         <ErrorMessage name="otp" component="div" className="text-red-500 text-sm mt-1" />
// //                       </div>
// //                     </div>
// //                   </div>
// //                   <br />
// //                   <div>
// //                     <button
// //                       type="submit"
// //                       className="inline-flex w-full items-center justify-center rounded-md bg-black px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80"
// //                       disabled={isSubmitting}
// //                     >
// //                       Submit <ArrowRight className="ml-2" color="yellow" size={16} />
// //                     </button>
// //                     <br /><br />
// //                   </div>
// //                   {error && <p style={{ color: 'red' }}>{error}</p>} {/* Display the error message */}
// //                 </Form>
// //               )}
// //             </Formik>
// //             <button
// //               type="button"
// //               className="inline-flex w-full items-center justify-center rounded-md bg-gray-200 px-3.5 py-2.5 font-semibold leading-7 text-gray-900 hover:bg-gray-300"
// //               onClick={handleResendOtp}
// //             >
// //               Resend OTP <ArrowRight className="ml-2" color="black" size={16} />
// //             </button>
// //           </div>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // }

// // export default ConfirmOtp;


// import React, { useState, useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { ArrowRight } from 'lucide-react';
// import { useNavigate } from 'react-router-dom';
// import { Formik, Form, Field, ErrorMessage } from 'formik';
// import * as Yup from 'yup';
// import { confirmOtp, resendOtp } from '../../redux/actions/authAction';

// const ConfirmOtp = () => {
//   const [timer, setTimer] = useState(120); // 2 minutes timer
//   const navigate = useNavigate();
//   const dispatch = useDispatch();
//   const { error, email } = useSelector((state) => state.auth);

//   useEffect(() => {
//     let interval;
//     if (timer > 0) {
//       interval = setInterval(() => {
//         setTimer((prevTimer) => prevTimer - 1);
//       }, 1000);
//     } else if (timer === 0) {
//       clearInterval(interval);
//     }
//     return () => clearInterval(interval);
//   }, [timer]);

//   const formatTime = (time) => {
//     const minutes = Math.floor(time / 60);
//     const seconds = time % 60;
//     return `${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
//   };

//   const otpSchema = Yup.object().shape({
//     otp: Yup.string().required('OTP is required'),
//   });

//   const handleSubmit = async (values, { setSubmitting, setErrors }) => {
//     const resultAction = await dispatch(confirmOtp({ email, otp: values.otp, navigate }));
//     setSubmitting(false); // End submitting state
//     if (resultAction.error) {
//       setErrors({ otp: resultAction.payload || 'OTP verification failed' });
//     }
//   };

//   const handleResendOtp = async () => {
//     await dispatch(resendOtp({ email }));
//     setTimer(120); // Reset the timer on OTP resend
//   };

//   return (
//     <section>
//       <div className="flex flex-col lg:flex-row">
//         <div className="flex items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24 flex-1">
//           <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
//             <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl">Confirm OTP Form</h2>
//             <Formik
//               initialValues={{ otp: '' }}
//               validationSchema={otpSchema}
//               onSubmit={handleSubmit}
//             >
//               {({ isSubmitting }) => (
//                 <Form className="mt-8">
//                   <div className="space-y-5">
//                     <div>
//                       <label htmlFor="otp" className="text-base font-medium text-gray-900">
//                         Enter OTP
//                       </label>
//                       <div className="mt-2">
//                         <Field
//                           className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
//                           type="text"
//                           placeholder="Enter OTP"
//                           id="otp"
//                           name="otp"
//                         />
//                         <ErrorMessage name="otp" component="div" className="text-red-500 text-sm mt-1" />
//                       </div>
//                     </div>
//                   </div>
//                   <br />
//                   <div>
//                     <button
//                       type="submit"
//                       className="inline-flex w-full items-center justify-center rounded-md bg-black px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80"
//                       disabled={isSubmitting}
//                     >
//                       Submit <ArrowRight className="ml-2" color="yellow" size={16} />
//                     </button>
//                     <br /><br />
//                   </div>
//                   {error && <p style={{ color: 'red' }}>{error}</p>} {/* Display the error message */}
//                 </Form>
//               )}
//             </Formik>
//             <button
//               type="button"
//               className="inline-flex w-full items-center justify-center rounded-md bg-gray-200 px-3.5 py-2.5 font-semibold leading-7 text-gray-900 hover:bg-gray-300"
//               onClick={handleResendOtp}
//             >
//               Resend OTP <ArrowRight className="ml-2" color="black" size={16} />
//             </button>
//             <p>Time left: {formatTime(timer)}</p> {/* Display the timer */}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ConfirmOtp;




import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { confirmOtp, resendOtp } from '../../redux/actions/authAction';

const ConfirmOtp = () => {
  const [timer, setTimer] = useState(0); // Initialize with 0 to indicate no timer initially
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { error, email } = useSelector((state) => state.auth);

  useEffect(() => {
    let interval;
    if (timer > 0) {
      interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);
    } else if (timer === 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [timer]);

  useEffect(() => {
    // Initialize the timer if OTP was already sent
    if (email) {
      setTimer(120); // Set the timer to 2 minutes if email exists (OTP was sent)
    }
  }, [email]);

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
  };

  const otpSchema = Yup.object().shape({
    otp: Yup.string().required('OTP is required'),
  });

  const handleSubmit = async (values, { setSubmitting, setErrors }) => {
    const resultAction = await dispatch(confirmOtp({ email, otp: values.otp, navigate }));
    setSubmitting(false); // End submitting state
    if (resultAction.error) {
      setErrors({ otp: resultAction.payload || 'OTP verification failed' });
    }
  };

  const handleResendOtp = async () => {
    const resultAction = await dispatch(resendOtp({ email }));
    if (resultAction.error) {
      return; // Exit if resend OTP failed
    }
    setTimer(120); // Reset the timer to 2 minutes on OTP resend
  };

  return (
    <section>
      <div className="flex flex-col lg:flex-row">
        <div className="flex items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24 flex-1">
          <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
            <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl">Confirm OTP Form</h2>
            <Formik
              initialValues={{ otp: '' }}
              validationSchema={otpSchema}
              onSubmit={handleSubmit}
            >
              {({ isSubmitting }) => (
                <Form className="mt-8">
                  <div className="space-y-5">
                    <div>
                      <label htmlFor="otp" className="text-base font-medium text-gray-900">
                        Enter OTP
                      </label>
                      <div className="mt-2">
                        <Field
                          className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                          type="text"
                          placeholder="Enter OTP"
                          id="otp"
                          name="otp"
                        />
                        <ErrorMessage name="otp" component="div" className="text-red-500 text-sm mt-1" />
                      </div>
                    </div>
                  </div>
                  <br />
                  <div>
                    <button
                      type="submit"
                      className="inline-flex w-full items-center justify-center rounded-md bg-black px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80"
                      disabled={isSubmitting}
                    >
                      Submit <ArrowRight className="ml-2" color="yellow" size={16} />
                    </button>
                    <br /><br />
                  </div>
                  {error && <p style={{ color: 'red' }}>{error}</p>} {/* Display the error message */}
                </Form>
              )}
            </Formik>
            <button
              type="button"
              className="inline-flex w-full items-center justify-center rounded-md bg-gray-200 px-3.5 py-2.5 font-semibold leading-7 text-gray-900 hover:bg-gray-300"
              onClick={handleResendOtp}
            >
              Resend OTP <ArrowRight className="ml-2" color="black" size={16} />
            </button>
            {timer > 0 && <p>Time left: {formatTime(timer)}</p>} {/* Display the timer only when it's active */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConfirmOtp;
 
