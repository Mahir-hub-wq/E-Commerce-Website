import  { useReducer } from "react";
import { useNavigate } from "react-router-dom";
import { initialState, signupReducer } from "../reducer/signupReducers";
import { validateForm } from "../utils/validation";

const Signup = () => {
  const navigate = useNavigate();

  const [state, dispatch] = useReducer(signupReducer, initialState);

  const handlechange = (e) => {
    dispatch({
      type: "UPDATE_FIELD",
      field: e.target.name,
      value: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

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
      localStorage.setItem(
        "user",
        JSON.stringify({
          fullName: state.fullName,
          email: state.email,
          password: state.password,
        }),
      );

      dispatch({
        type: "SET_LOADING",
        payload: false,
      });

      navigate("/verify");
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center p-6">
      <div className="w-full max-w-6xl h-162.5 bg-white rounded-3xl shadow-2xl overflow-hidden flex">
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
        <div className="w-full md:w-1/2 flex items-center justify-center p-10 bg-white">
          <div className="w-full max-w-md">
            <h2 className="text-4xl font-bold text-center text-blue-600">
              Create Account
            </h2>

            <p className="text-center text-gray-500 mt-2 mb-8">
              Join thousands of happy shoppers today.
            </p>

            <form className="space-y-5" onSubmit={handleSubmit}>
              <input
                type="text"
                name="fullName"
                value={state.fullName}
                onChange={handlechange}
                placeholder="Full Name"
                className="w-full p-3 border rounded-lg outline-none focus:border-blue-600"
              />
              <p className="text-red-500 text-sm">{state.errors.fullName}</p>

              <input
                type="email"
                name="email"
                value={state.email}
                onChange={handlechange}
                placeholder="Email Address"
                className="w-full p-3 border rounded-lg outline-none focus:border-blue-600"
              />
              <p className="text-red-500 text-sm">{state.errors.email}</p>

              <input
                type="password"
                placeholder="Password"
                name="password"
                value={state.password}
                onChange={handlechange}
                className="w-full p-3 border rounded-lg outline-none focus:border-blue-600"
              />
              <p className="text-red-500 text-sm">{state.errors.password}</p>

              <input
                type="password"
                placeholder="Confirm Password"
                value={state.confirmPassword}
                name="confirmPassword"
                onChange={handlechange}
                className="w-full p-3 border rounded-lg outline-none focus:border-blue-600"
              />
              <p className="text-red-500 text-sm">
                {state.errors.confirmPassword}
              </p>
              {/* <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-lg font-semibold duration-300"
              >
                {state.loading ? "Signing Up..." : "Sign Up"}
                Create Account
              </button> */}

              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-lg"
              >
                {state.loading ? "Signing Up..." : "Create Account"}
              </button>
            </form>

            <p className="text-center mt-6 text-gray-600">
              Already have an account?
              <span className="text-blue-600 font-semibold cursor-pointer">
                {" "}
                Sign In
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
