import Yup from 'yup';

export const updateAttendanceValidationSchema = Yup.object({
  studentId: Yup.string().required().trim(),
  present: Yup.bool().required(),
  absent: Yup.bool().required(),
});
