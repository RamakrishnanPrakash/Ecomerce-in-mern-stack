import axios from "axios";
import { toast } from "react-toastify";
const inputValidator = async (URL, inputData) => {
  const { username, email, password, cpassword } = inputData;

  // Validate that all fields are filled
  if (
    !username.trim() ||
    !email.trim() ||
    !password.trim() ||
    !cpassword.trim()
  ) {
    toast.error("Please enter all required fields.");
    return false;
  }

  // Validate email format and check if it exists in the database
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    toast.error("Invalid email address!");
    return false;
  } else {
    try {
      const response = await axios.post(`${URL}/api/user/email`, { email });
      if (!response.data.success) {
        toast.error(
          "Email address already exists. Please enter another email address."
        );
        return false;
      }
    } catch (error) {
      if (error.response) {
        toast.error(
          "Email address already exists. Please enter another email address."
        );
      } else {
        toast.error(
          "An error occurred while verifying the email. Please try again."
        );
      }
      return;
    }
  }

  // Validate password length
  if (password.trim().length < 8) {
    toast.error("Password must contain at least 8 characters.");
    return false;
  }

  // Validate password complexity
  if (
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
      password
    )
  ) {
    toast.error(
      "Password must include uppercase, lowercase, number, and special character."
    );
    return false;
  }

  // Confirm that passwords match
  if (password.trim() !== cpassword.trim()) {
    toast.error("Password does not match the confirm password.");
    return false;
  }

  return true;
};

export { inputValidator };
