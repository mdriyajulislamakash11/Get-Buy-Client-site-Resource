import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../hook/useAuth";
import useAxiosPublic from "../../hook/useAxiosPublic";
import Swal from "sweetalert2";

const Register = () => {
  const { createUser, updateUserProfile, googleLogin } = useAuth();
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  // Google Login handler
  const handleGoogleLogin = () => {
    googleLogin()
      .then((result) => {
        console.log("✅ Google Login Success:", result.user);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.error("❌ Google login failed:", error.message);
      });
  };

  const onSubmit = (data) => {
    createUser(data.email, data.password)
      .then((result) => {
        console.log(result.user);

        updateUserProfile(data.name, data.photoURL)
          .then(() => {
            // create user entry in the database
            const userInfo = {
              name: data.name,
              email: data.email,
            };

            axiosPublic.post("/users", userInfo).then((res) => {
              if (res.data.insertedId) {
                console.log("user addede to the database");
                reset();
                Swal.fire({
                  icon: "success",
                  title: "Signup Successful!",
                  text: `Welcome, ${data.name}!`,
                  timer: 2000,
                  showConfirmButton: false,
                });
              }
              navigate(from, { replace: true });
            });
          })
          .catch((error) => {
            console.error("Profile update error:", error);
            Swal.fire({
              icon: "error",
              title: "Profile Update Failed",
              text:
                error.message ||
                "Something went wrong while updating your profile.",
            });
          });
      })
      .catch((error) => {
        console.error("Signup error:", error);
        Swal.fire({
          icon: "error",
          title: "Signup Failed",
          text: error.message || "Please try again later.",
        });
      });
  };

  return (
    <div className="hero min-h-screen bg-gradient-to-r from-indigo-200 via-purple-200 to-pink-200">
      <div className="hero-content flex-col lg:flex-row-reverse gap-10">
        {/* Right side - Login Card */}
        <div className="card bg-base-100 w-full max-w-sm shadow-2xl p-6">
          <h2 className="text-3xl font-bold text-center text-indigo-600 mb-6">
            Create Your Account
          </h2>

          <form onSubmit={handleSubmit(onSubmit)} className="card-body p-0">
            {/* Name */}
            <div className="form-control mb-4">
              <label className="label">
                <span className="label-text font-medium">Name</span>
              </label>
              <input
                type="name"
                {...register("name")}
                placeholder="Enter your email"
                className="input input-bordered focus:outline-none focus:ring-2 focus:ring-indigo-400"
                required
              />
            </div>
            {/* photo url */}
            <div className="form-control mb-4">
              <label className="label">
                <span className="label-text font-medium">Photo URL</span>
              </label>
              <input
                type="photo"
                {...register("photoURL")}
                placeholder="Enter your email"
                className="input input-bordered focus:outline-none focus:ring-2 focus:ring-indigo-400"
                required
              />
            </div>
            {/* Email */}
            <div className="form-control mb-4">
              <label className="label">
                <span className="label-text font-medium">Email</span>
              </label>
              <input
                type="email"
                {...register("email")}
                placeholder="Enter your email"
                className="input input-bordered focus:outline-none focus:ring-2 focus:ring-indigo-400"
                required
              />
            </div>

            {/* Password */}
            <div className="form-control mb-2">
              <label className="label">
                <span className="label-text font-medium">Password</span>
              </label>
              <input
                type="password"
                {...register("password")}
                placeholder="Enter your password"
                className="input input-bordered focus:outline-none focus:ring-2 focus:ring-indigo-400"
                required
              />
            </div>

            {/* Button */}
            <div className="form-control mt-6">
              <button className="btn btn-primary w-full">Register</button>
            </div>
          </form>

          {/* Divider */}
          <div className="divider">OR</div>

          {/* Google Login */}
          <button
            onClick={handleGoogleLogin}
            className="btn btn-outline w-full mb-3"
          >
            <img
              src="https://www.svgrepo.com/show/355037/google.svg"
              alt="Google"
              className="w-5 h-5 mr-2"
            />
            Continue with Google
          </button>

          {/* Redirect to Register */}
          <p className="text-center text-sm text-gray-600">
            have an account?{" "}
            <Link
              to="/login"
              className="text-indigo-600 font-medium hover:underline"
            >
              Login Now
            </Link>
          </p>
        </div>

        {/* Left side - Illustration or Text */}
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-extrabold text-indigo-700">
            Welcome Back!
          </h1>
          <p className="py-6 text-lg text-gray-700 max-w-md">
            Enter your credentials to access your account and continue exploring
            our amazing platform. We're glad to have you back!
          </p>
          <Link
            to="/"
            className="btn bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white font-semibold hover:opacity-90 transition-all"
          >
            Go To Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
