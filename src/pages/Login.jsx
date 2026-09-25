import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const [formdata, setFormData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  const handleForm = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Get registered users
    const storedUsers = localStorage.getItem("users");

    // No user registered
    if (!storedUsers) {
      setError("User Not Found");
      return;
    }

    const users = JSON.parse(storedUsers);

    // Empty users array
    if (!Array.isArray(users) || users.length === 0) {
      setError("User Not Found");
      return;
    }

    // Find user with matching email
    const user = users.find((item) => item.email === formdata.email);

    // Email doesn't exist
    if (!user) {
      setError("Wrong Email or Password");
      return;
    }

    // Password doesn't match
    if (user.password !== formdata.password) {
      setError("Wrong Email or Password");
      return;
    }

    // Login successful
    localStorage.setItem("isLoggedIn", "true");

    localStorage.setItem("loggedInUser", JSON.stringify(user));

    alert("Login Successfully 😊");

    navigate("/");
  };

  return (
    <>
      <div
        className="w-full h-70 bg-cover bg-center bg-no-repeat flex items-center justify-center "
        style={{
          backgroundImage:
            "url(https://img.freepik.com/premium-photo/men-stylish-casual-clothing-accessories-wooden-background_151851-981.jpg)",
        }}
      >
        <h1 className="text-5xl font-bold text-gray-700">LogIn</h1>
      </div>

      <div className="min-h-screen flex items-center justify-center px-4 py-8">
        <div className="w-full max-w-4xl bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col md:flex-row">
          {/* Left Side */}
          <div className="w-full md:w-1/2 bg-blue-50 flex items-center justify-center p-8 md:p-12">
            <div className="text-center">
              <h1 className="text-3xl md:text-4xl font-bold text-blue-800 mb-4">
                New to Our Shop?
              </h1>

              <p className="text-gray-600 leading-relaxed mb-7">
                Create an account and enjoy a smooth and amazing shopping
                experience with us.
              </p>

              <button
                type="button"
                onClick={() => navigate("/signup")}
                className="px-7 py-3 bg-blue-600 text-white
              font-semibold rounded-lg hover:bg-blue-700
              transition duration-300 shadow-md"
              >
                Create Account
              </button>
            </div>
          </div>

          {/* Right Side */}
          <div className="w-full md:w-1/2 p-8 md:p-12 flex items-center">
            <div className="w-full">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
                Please Sign In
              </h1>

              <p className="text-gray-500 mb-8">
                Sign in to continue shopping with us.
              </p>

              <form className="space-y-5" onSubmit={handleSubmit}>
                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold
                  text-gray-700 mb-2"
                  >
                    Email Address
                  </label>

                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={formdata.email}
                    onChange={handleForm}
                    placeholder="Enter your email"
                    className="w-full px-4 py-3 border
                  border-gray-300 rounded-lg outline-none
                  focus:ring-2 focus:ring-blue-300
                  focus:border-blue-500 transition duration-200"
                  />
                </div>

                {/* Password */}
                <div>
                  <label
                    htmlFor="password"
                    className="block text-sm font-semibold
                  text-gray-700 mb-2"
                  >
                    Password
                  </label>

                  <input
                    type="password"
                    name="password"
                    id="password"
                    value={formdata.password}
                    onChange={handleForm}
                    placeholder="Enter your password"
                    className="w-full px-4 py-3 border
                  border-gray-300 rounded-lg outline-none
                  focus:ring-2 focus:ring-blue-300
                  focus:border-blue-500 transition duration-200"
                  />
                </div>

                {/* Error Message */}
                {error && (
                  <p className="text-red-500 text-sm font-medium">{error}</p>
                )}

                {/* Forgot Password */}
                <div className="text-right">
                  <button
                    type="button"
                    className="text-sm font-medium text-blue-600
                  hover:text-blue-800 hover:underline transition"
                  >
                    Forgot Password?
                  </button>
                </div>

                {/* Login */}
                <button
                  type="submit"
                  className="w-full py-3 bg-blue-600
                text-white font-semibold rounded-lg
                hover:bg-blue-700
                active:scale-[0.98]
                transition duration-300 shadow-md"
                >
                  Login
                </button>
              </form>

              <p className="text-center text-gray-500 text-sm mt-7">
                New to our shop?{" "}
                <button
                  type="button"
                  onClick={() => navigate("/signup")}
                  className="text-blue-600 font-semibold
                hover:underline"
                >
                  Create Account
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
