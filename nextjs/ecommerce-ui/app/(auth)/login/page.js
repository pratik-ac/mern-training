'use client';

import { loginUserValidationSchema } from '@/validation-schema/login.user.validation.schema';
import {
  Button,
  FormControl,
  FormHelperText,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
} from '@mui/material';
import { Formik } from 'formik';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { useState } from 'react';

const Login = () => {
  // password
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleMouseUpPassword = (event) => {
    event.preventDefault();
  };

  const router = useRouter();
  const handleSubmit = async (values) => {
    try {
      const response = await axios({
        method: 'POST',
        url: 'http://localhost:8080/user/login',
        data: values,
      });

      window.localStorage.setItem('token', response?.data?.accessToken);
      window.localStorage.setItem(
        'firstName',
        response?.data?.userDetails?.firstName
      );

      window.localStorage.setItem(
        'userRole',
        response?.data?.userDetails?.role
      );

      router.push('/');
    } catch (error) {
      console.log('error');
    }
  };

  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      validationSchema={loginUserValidationSchema}
      onSubmit={(values) => {
        handleSubmit(values);
      }}
    >
      {(formik) => {
        return (
          <form onSubmit={formik.handleSubmit} className="auth-form">
            <p className="text-3xl font-bold">Login</p>
            {/* email */}
            <FormControl fullWidth>
              <TextField label="Email" {...formik.getFieldProps('email')} />
              {formik.touched.email && formik.errors.email ? (
                <FormHelperText error>{formik.errors.email}</FormHelperText>
              ) : null}
            </FormControl>

            {/* password */}
            <FormControl fullWidth variant="outlined">
              <InputLabel htmlFor="outlined-adornment-password">
                Password
              </InputLabel>

              <OutlinedInput
                {...formik.getFieldProps('password')}
                type={showPassword ? 'text' : 'password'}
                // type="text"
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label={
                        showPassword
                          ? 'hide the password'
                          : 'display the password'
                      }
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      onMouseUp={handleMouseUpPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                label="Password"
              />

              {formik.touched.password && formik.errors.password ? (
                <FormHelperText error>{formik.errors.password}</FormHelperText>
              ) : null}
            </FormControl>

            <div className="w-full flex flex-col justify-center items-center">
              <Button
                fullWidth
                type="submit"
                variant="contained"
                color="secondary"
              >
                sign in
              </Button>

              <Link
                href="/register"
                className="text-md underline text-blue-600 mt-2"
              >
                New here? Register
              </Link>
            </div>
          </form>
        );
      }}
    </Formik>
  );
};

export default Login;
