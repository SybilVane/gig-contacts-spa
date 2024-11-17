export const validateFields = (
  firstName: string,
  lastName: string,
  email: string,
): { [key: string]: string } => {
  const nameRegex = /^[a-zA-Z]{2,}$/;
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  const errors: { [key: string]: string } = {};

  if (!nameRegex.test(firstName)) {
    errors.firstName =
      "First name must be at least 2 characters long and contain only letters.";
  }
  if (!nameRegex.test(lastName)) {
    errors.lastName =
      "Last name must be at least 2 characters long and contain only letters.";
  }
  if (!emailRegex.test(email)) {
    errors.email = "Email is not valid.";
  }

  return errors;
};
