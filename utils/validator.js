export const validateStudent = (value) => {
  return value.trim().length >= 3;
};

export const validateCourse = (value) => {
  return value.trim().length >= 6;
};