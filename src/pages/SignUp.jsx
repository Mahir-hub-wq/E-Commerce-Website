import { useReducer } from "react";
import { useNavigate } from "react-router-dom";
import { initialState, signupReducer } from "../reducer/signupReducers";
import { validateForm } from "../utils/validation";

const Signup = () => {
  const navigate = useNavigate();

  const [state, dispatch] = useReducer(signupReducer, initialState);

  // Handle form fields
  const handlechange = (e) => {
    dispatch({
      type: "UPDATE_FIELD",
      field: e.target.name,
      value: e.target.value,
    });
  };

  // Handle Signup
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate form
    const errors = validateForm(state);

    if (Object.keys(errors).length > 0) {
      dispatch({
        type: "SET_ERRORS",
        payload: errors,
      });

      return;
    }

    dispatch({
      type: "SET_LOADING",
      payload: true,
    });

    setTimeout(() => {
      // Get existing users from localStorage
      const existingUsers = JSON.parse(localStorage.getItem("users")) || [];

      // Check whether email already exists
      const userExists = existingUsers.some(
        (user) => user.email === state.email,
      );

      if (userExists) {
        dispatch({
          type: "SET_ERRORS",
          payload: {
            email: "Email already registered",
          },
        });

        dispatch({
          type: "SET_LOADING",
          payload: false,
        });

        return;
      }

      // Create new user
      const newUser = {
        fullName: state.fullName,
        email: state.email,
        password: state.password,
      };

      // Add new user to existing users
      existingUsers.push(newUser);

      // Save users to localStorage
      localStorage.setItem("users", JSON.stringify(existingUsers));

      // Stop loading
      dispatch({
        type: "SET_LOADING",
        payload: false,
      });

      // Navigate to Login
      navigate("/login");
    }, 2000);
  };

  return (
    <>
      <div>
        <div
          className="w-full h-70 bg-cover bg-center bg-no-repeat flex items-center justify-center "
          style={{
            backgroundImage:
              "url(https://img.freepik.com/premium-photo/men-stylish-casual-clothing-accessories-wooden-background_151851-981.jpg)",
          }}
        >
          <h1 className="text-5xl font-bold text-gray-700">
            Sign Up
          </h1>
        </div>
      </div>
      <div className="min-h-screen bg-gray-100 flex justify-center items-center p-6">
        <div className="w-full max-w-6xl min-h-[650px] bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row">
          {/* Left Side */}
          <div className="hidden md:flex w-1/2 bg-blue-600 text-white items-center justify-center p-12">
            <div>
              <h1 className="text-5xl font-bold mb-6">
                Welcome to <br /> Estore.
              </h1>

              <p className="text-lg leading-8">
                Create your account and enjoy shopping with thousands of amazing
                products at the best prices.
              </p>
            </div>
          </div>

          {/* Right Side */}
          <div className="w-full md:w-1/2 flex items-center justify-center p-8 md:p-10 bg-white">
            <div className="w-full max-w-md">
              <h2 className="text-4xl font-bold text-center text-blue-600">
                Create Account
              </h2>

              <p className="text-center text-gray-500 mt-2 mb-8">
                Join thousands of happy shoppers today.
              </p>

              <form className="space-y-5" onSubmit={handleSubmit}>
                {/* Full Name */}
                <div>
                  <input
                    type="text"
                    name="fullName"
                    value={state.fullName}
                    onChange={handlechange}
                    placeholder="Full Name"
                    className="w-full p-3 border border-gray-300
                  rounded-lg outline-none
                  focus:border-blue-600
                  focus:ring-1 focus:ring-blue-300"
                  />

                  {state.errors.fullName && (
                    <p className="text-red-500 text-sm mt-1">
                      {state.errors.fullName}
                    </p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <input
                    type="email"
                    name="email"
                    value={state.email}
                    onChange={handlechange}
                    placeholder="Email Address"
                    className="w-full p-3 border border-gray-300
                  rounded-lg outline-none
                  focus:border-blue-600
                  focus:ring-1 focus:ring-blue-300"
                  />

                  {state.errors.email && (
                    <p className="text-red-500 text-sm mt-1">
                      {state.errors.email}
                    </p>
                  )}
                </div>

                {/* Password */}
                <div>
                  <input
                    type="password"
                    name="password"
                    value={state.password}
                    onChange={handlechange}
                    placeholder="Password"
                    className="w-full p-3 border border-gray-300
                  rounded-lg outline-none
                  focus:border-blue-600
                  focus:ring-1 focus:ring-blue-300"
                  />

                  {state.errors.password && (
                    <p className="text-red-500 text-sm mt-1">
                      {state.errors.password}
                    </p>
                  )}
                </div>

                {/* Confirm Password */}
                <div>
                  <input
                    type="password"
                    name="confirmPassword"
                    value={state.confirmPassword}
                    onChange={handlechange}
                    placeholder="Confirm Password"
                    className="w-full p-3 border border-gray-300
                  rounded-lg outline-none
                  focus:border-blue-600
                  focus:ring-1 focus:ring-blue-300"
                  />

                  {state.errors.confirmPassword && (
                    <p className="text-red-500 text-sm mt-1">
                      {state.errors.confirmPassword}
                    </p>
                  )}
                </div>

                {/* Signup Button */}
                <button
                  type="submit"
                  disabled={state.loading}
                  className="w-full bg-blue-600 hover:bg-blue-700
                disabled:bg-blue-400
                text-white p-3 rounded-lg
                font-semibold duration-300"
                >
                  {state.loading ? "Signing Up..." : "Create Account"}
                </button>
              </form>

              {/* Login Link */}
              <p className="text-center mt-6 text-gray-600">
                Already have an account?{" "}
                <span
                  onClick={() => navigate("/login")}
                  className="text-blue-600 font-semibold cursor-pointer
                hover:underline"
                >
                  <a href="/login">Sign In</a>
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
