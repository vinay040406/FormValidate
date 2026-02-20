import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [login, setLogin] = useState(false);

  const data = JSON.parse(localStorage.getItem("Users"));
  const user = data?.find(
    (u) => u.email === formData.email && u.password === formData.password,
  );

  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(true);
    if (!user) {
      return;
    }
    setLogin(true);
    setTimeout(() => {
      navigate("/profile");
      setLogin(false);
    }, 2000);
    setErrors(false);
  };

  return (
    <div>
      {data ? (
        <div className="min-h-screen flex flex-col items-center justify-center p-4">
          <div className="shadow-[0_0_30px_20px_rgba(0,0,0,0.2)] rounded-3xl p-15 w-full  text-center max-w-160 ">
            <h2 className="text-4xl font-bold text-center mb-2">
              Welcome Back!
            </h2>
            <p className="text-[rgba(17,45,73,1) text-md mb-4 w-1/2 m-auto ">
              Log in below to access your account and keep things running
              smoothly.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <input
                  name="email"
                  type="email"
                  autoComplete="false"
                  placeholder="Email address"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full px-6 py-3 rounded-4xl bg-[rgba(244,248,247,1)] focus:outline-none focus:ring-2 focus:ring-black"
                />
                {formData.email === "" && errors && (
                  <p className="text-red-500 text-sm mt-1">This is required</p>
                )}
                {formData.email !== data[0].email &&
                  errors &&
                  formData.email && (
                    <p className="text-red-500 text-sm mt-1">
                      Email do not match
                    </p>
                  )}
              </div>

              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  value={formData.password}
                  name="password"
                  onChange={(e) =>
                    setFormData({ ...formData, password: e.target.value })
                  }
                  className="w-full px-6 py-3 rounded-4xl bg-[rgba(244,248,247,1)] focus:outline-none focus:ring-2 focus:ring-black"
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-4 text-sm text-black cursor-pointer"
                >
                  {showPassword ? "Hide" : "Show"}
                </button>

                {formData.password === "" && errors && (
                  <p className="text-red-500 text-sm mt-1">This is required</p>
                )}
                {formData.password !== data[0].password &&
                  errors &&
                  formData.password && (
                    <p className="text-red-500 text-sm mt-1">
                      Please fill correct password
                    </p>
                  )}
              </div>

              <button
                type="submit"
                className={`w-full bg-black cursor-pointer text-white font-semibold py-3 rounded-xl hover:bg-gray-800  ease-in duration-300 hover:scale-101`}
              >
                {login ? "Logging In ..." : "Log In"}
              </button>
            </form>

            <div className="flex items-center my-6">
              <div className="grow h-px bg-gray-300"></div>
              <span className="px-4 text-sm text-gray-500">OR</span>
              <div className="grow h-px bg-gray-300"></div>
            </div>

            <p className="text-center mt-6 text-lg ">
              Don't have an account?
              <Link to="/" className="underline font-semibold text-xl ">
                &nbsp; Create Account &nbsp;
              </Link>
            </p>
          </div>
        </div>
      ) : (
        <div className="h-screen w-screen flex flex-col items-center justify-center ">
          <h1 className="text-7xl font-medium">
            You have not registered yet ,
          </h1>
          <br />
          <h1 className="text-7xl font-medium mb-10">Please register first </h1>

          <Link to={"/"}>
            {" "}
            <span className="underline text-xl font-bold">SignUp Here</span>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Login;
