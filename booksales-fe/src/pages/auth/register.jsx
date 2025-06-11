import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { register } from "../../_services/auth";

export default function Register() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    // Clear field-specific error when user starts typing
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: null,
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrors({});

    try {
      await register(formData);
      return navigate("/login");
    } catch (error) {
      if (error?.response?.data && typeof error.response.data === "object") {
        const responseData = error.response.data;
        if (responseData.name || responseData.email || responseData.password) {
          setErrors(responseData);
        } else {
          setErrors({ general: responseData.message || "An error occurred" });
        }
      } else {
        setErrors({
          general: error?.response?.data?.message || "An error occurred",
        });
      }
    } finally {
      setLoading(false);
    }
  };

  const getFieldError = (fieldName) => {
    return errors[fieldName] && errors[fieldName][0];
  };

  return (
    <>
      <section className="bg-gray-50 dark:bg-gray-900">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Create an account
              </h1>

              {errors.general && (
                <div className="text-red-500 text-sm">
                  <span className="block sm:inline">{errors.general}</span>
                </div>
              )}

              <form
                className="space-y-4 md:space-y-6"
                action="#"
                onSubmit={handleSubmit}
              >
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`bg-gray-50 border text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white ${
                      getFieldError("email")
                        ? "border-red-500 focus:ring-red-500 focus:border-red-500 dark:focus:ring-red-500 dark:focus:border-red-500"
                        : "border-gray-300 focus:ring-indigo-600 focus:border-indigo-600 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    }`}
                    placeholder="name@company.com"
                    required=""
                  />
                  {getFieldError("email") && (
                    <p className="mt-1 text-sm text-red-500">
                      {getFieldError("email")}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="name"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`bg-gray-50 border text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white ${
                      getFieldError("name")
                        ? "border-red-500 focus:ring-red-500 focus:border-red-500 dark:focus:ring-red-500 dark:focus:border-red-500"
                        : "border-gray-300 focus:ring-indigo-600 focus:border-indigo-600 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    }`}
                    placeholder="Name"
                    required=""
                  />
                  {getFieldError("name") && (
                    <p className="mt-1 text-sm text-red-500">
                      {getFieldError("name")}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="••••••••"
                    className={`bg-gray-50 border text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white ${
                      getFieldError("password")
                        ? "border-red-500 focus:ring-red-500 focus:border-red-500 dark:focus:ring-red-500 dark:focus:border-red-500"
                        : "border-gray-300 focus:ring-indigo-600 focus:border-indigo-600 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    }`}
                    required
                  />
                  {getFieldError("password") && (
                    <p className="mt-1 text-sm text-red-500">
                      {getFieldError("password")}
                    </p>
                  )}
                </div>

                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="terms"
                      aria-describedby="terms"
                      type="checkbox"
                      className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-indigo-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-indigo-600 dark:ring-offset-gray-800"
                      required=""
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label
                      htmlFor="terms"
                      className="font-light text-gray-500 dark:text-gray-300"
                    >
                      I accept the{" "}
                      <Link
                        className="font-medium text-indigo-600 hover:underline dark:text-indigo-500"
                        to={"#"}
                      >
                        Terms and Conditions
                      </Link>
                    </label>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full text-white bg-indigo-600 hover:bg-indigo-700 focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800"
                >
                  {loading ? "Creating your account..." : "Create an account"}
                </button>

                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                  Already have an account?{" "}
                  <Link
                    to={"/login"}
                    className="font-medium text-indigo-600 hover:underline dark:text-indigo-500"
                  >
                    Login here
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
