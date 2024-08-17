
import React from 'react'
import { ArrowRight } from 'lucide-react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { login } from '../../redux/actions/authAction'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { error } = useSelector((state) => state.auth); 

  const loginSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Email is required'),
    password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
  });

  const handleSubmit = async (values) => {
    const result = await dispatch(login(values, navigate));
  }

  return (
    <>
      <section>
        <div className="flex flex-col lg:flex-row">
          <div className="flex items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24 flex-1">
            <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
              <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl">Login Form</h2>
              <Formik
                initialValues={{ email: '', password: '' }}
                validationSchema={loginSchema}
                onSubmit={handleSubmit}
              >
                {({ isSubmitting }) => (
                  <Form action="#" method="POST" className="mt-8">
                    <h2>Sign in to your account</h2>
                    <br />
                    <div className="space-y-5">
                      <div>
                        <label htmlFor="email" className="text-base font-medium text-gray-900">
                          Your Email
                        </label>
                        <div className="mt-2">
                          <Field
                            className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                            type="email"
                            placeholder="name@company.com"
                            id="email"
                            name="email"
                          />
                          <ErrorMessage name="email" component="div" className="text-red-500 text-sm mt-1" />
                        </div>
                      </div>
                      <div>
                        <label htmlFor="password" className="text-base font-medium text-gray-900">
                          Password
                        </label>
                        <div className="mt-2">
                          <Field
                            className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                            type="password"
                            placeholder="........"
                            id="password"
                            name="password"
                          />
                          <ErrorMessage name="password" component="div" className="text-red-500 text-sm mt-1" />
                        </div>
                      </div>
                    </div>

                   {error &&  <div className="text-red-500 text-sm mt-2">
                    {error}
                     </div>}                    
                    <div>
                      <br />
                      <button
                        type="submit"
                        className="inline-flex w-full items-center justify-center rounded-md bg-black px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80"
                        disabled={isSubmitting}
                      >
                        Login <ArrowRight className="ml-2" color="yellow" size={16} />
                      </button>
                      <br /><br />
                      <button
                        type="button"
                        className="inline-flex w-full items-center justify-center rounded-md bg-gray-200 px-3.5 py-2.5 font-semibold leading-7 text-gray-900 hover:bg-gray-300"
                      >
                        Reset Password <ArrowRight className="ml-2" color="black" size={16} />
                      </button>
                    </div>
                  </Form>
                )}
              </Formik>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}


export default Login
