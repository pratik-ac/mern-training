'use client';

import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  TextField,
} from '@mui/material';
import React from 'react';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import { loginUserValidationSchema } from '@/validation-schema/login.user.validation.schema';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const Login = () => {
  const router = useRouter();
  return (
    // <div className="text-7xl text-red-800 underline uppercase bg-gray-400 hidden md:block">
    //   Login
    // </div>
    <Box>
      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        validationSchema={loginUserValidationSchema}
        onSubmit={async (values) => {
          try {
            const response = await axios.post(
              'http://localhost:8080/user/login',
              values
            );

            localStorage.setItem('token', response?.data?.token);
            localStorage.setItem(
              'firstName',
              response?.data?.userDetails?.firstName
            );
            localStorage.setItem('userRole', response?.data?.userDetails?.role);

            router.push('/');
          } catch (err) {
            console.log(err);
          }
        }}
      >
        {(formik) => {
          return (
            <Form
              onSubmit={formik.handleSubmit}
              className="flex flex-col justify-between items-center max-w-[600px] shadow-2xl shadow-slate-500 px-8 py-4 min-h-[300px]"
            >
              <p className="text-3xl">Sign in</p>
              {/* email */}
              <FormControl fullWidth>
                <TextField label="Email" {...formik.getFieldProps('email')} />
                {formik.touched.email && formik.errors.email ? (
                  <FormHelperText error>{formik.errors.email}</FormHelperText>
                ) : null}
              </FormControl>

              {/* password */}
              <FormControl fullWidth>
                <TextField
                  label="Password"
                  {...formik.getFieldProps('password')}
                />
                {formik.touched.password && formik.errors.password ? (
                  <FormHelperText error>
                    {formik.errors.password}
                  </FormHelperText>
                ) : null}
              </FormControl>
              <Button
                type="submit"
                variant="contained"
                color="secondary"
                fullWidth
              >
                Login
              </Button>
              <div>
                <Link
                  href="/register"
                  className="text-md underline text-blue-600"
                >
                  New here? Register
                </Link>
              </div>
            </Form>
          );
        }}
      </Formik>
    </Box>
  );
};

export default Login;
