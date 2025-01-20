import Yup from 'yup';

export const addStudentValidationSchema = Yup.object({
  firstName: Yup.string().required().trim().max(55),
  lastName: Yup.string().required().trim().max(55),
  address: Yup.string().required().trim().max(60),
  gender: Yup.string().trim().required().oneOf(['male', 'female', 'other']),
});
