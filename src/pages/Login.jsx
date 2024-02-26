import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Formik, Form, Field } from "formik";
import toast, { Toaster } from "react-hot-toast";
// import * as Yup from "yup";
import LoopIcon from "@mui/icons-material/Loop";
import logo_2 from "../assets/logo_2.png";

const Login = () => {
  const [hasAccount, setHasAccount] = useState(true);
  // Tạo một biến state để làm hiệu ứng loading khi nhấn nút
  const [isSubmitted, setIsSubmitted] = useState(false);
  const navigate = useNavigate();

  const handleSwitchForm = () => {
    setHasAccount(!hasAccount);
    setIsSubmitted(false);
  };

  const validateFullname = (value, hasAccount) => {
    if (!hasAccount && !value) {
      return "Vui lòng nhập tên đầy đủ";
    } else if (!hasAccount && (value.length < 3 || value.length > 255)) {
      return "Tên đầy đủ phải dài ít nhất 3 ký tự và không quá 255 ký tự";
    }
    return undefined;
  };

  const validateUsername = (value) => {
    if (!value) {
      return "Vui lòng nhập tên người dùng";
    } else if (value.length < 3 || value.length > 50) {
      return "Tên người dùng phải dài ít nhất 3 ký tự và không quá 50 ký tự";
    } else if (!/^\S+$/.test(value)) {
      return "Tên người dùng không được chứa khoảng trắng";
    }
    return undefined;
  };

  const validatePassword = (value) => {
    if (!value) {
      return "Vui lòng nhập mật khẩu";
    } else if (value.length < 8) {
      return "Mật khẩu phải dài ít nhất 8 ký tự";
    } else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+/.test(value)) {
      return "Mật khẩu phải bao gồm ít nhất một chữ cái viết thường, một chữ cái viết hoa và một số";
    }
    return undefined;
  };

  return (
    <div>
      <div className="absolute bg-black bg-opacity-5 top-[0px] flex flex-col gap-4 items-center w-full h-full pt-5">
        <div className="max-w-[700px] min-w-[460px] flex flex-row items-center justify-start gap-2">
          <img className="h-[40px]" src={logo_2} alt="Web chat" />
          <h1 className="text-white text-xl font-light">MESSENGER APP</h1>
        </div>

        {/* Thông tin biểu mẫu */}
        <Formik
          initialValues={{
            fullname: "",
            username: "",
            password: "",
          }}
          onSubmit={(values) => {
            // same shape as initial values
            console.log(values);
            setIsSubmitted(true);
            setTimeout(() => {
              setIsSubmitted(false);
              navigate("/chat");
            }, 2000);
            return toast.success("Login successfully!");
          }}
        >
          {({ errors, touched }) => (
            <Form
              className="z-10 max-w-[700px] min-w-[460px] p-5 bg-white flex flex-col gap-5 items-center border rounded-md border-gray-300 shadow-md"
              action=""
            >
              {/* Chữ tiêu đề */}
              <h1 className="text-2xl font-normal mt-5">
                Welcome To Messenger App!
              </h1>
              <span className="text-sm text-slate-400 font-medium">
                To use our services you must be a registered user
              </span>
              <h1 className="text-2xl -mb-2">
                {hasAccount ? "LOGIN" : "REGISTER"}
              </h1>

              {/* Thông tin các trường đầu vào */}
              <div className="w-[300px] flex flex-col">
                {/* Tạo mới trường thông tin full name nếu như chuyển đổi sang Register Form */}
                {!hasAccount && (
                  <>
                    <label className="mt-2" htmlFor="">
                      Your Full Name
                    </label>
                    <Field
                      className="border-[1px] px-1 py-1 focus:border-gray-500 rounded-[4px] outline-none mt-1 mb-1"
                      type="text"
                      name="fullname"
                      validate={validateFullname}
                    />
                    {touched.fullname && errors.fullname && (
                      <div className="text-red-600 text-xs -mt-1">
                        {errors.fullname}
                      </div>
                    )}
                  </>
                )}
                <label className="mt-2" htmlFor="">
                  Username
                </label>
                <Field
                  className="border-[1px] px-1 py-1 focus:border-gray-500 rounded-[4px] outline-none mt-1 mb-1"
                  type="text"
                  name="username"
                  validate={validateUsername}
                />
                {touched.username && errors.username && (
                  <div className="text-red-600 text-xs -mt-1">
                    {errors.username}
                  </div>
                )}
                <label className="mt-2" htmlFor="">
                  Password
                </label>
                <Field
                  className="border-[1px] px-1 py-1 focus:border-gray-500 rounded-[4px] outline-none mt-1 mb-1"
                  type="password"
                  name="password"
                  validate={validatePassword}
                />
                {touched.password && errors.password && (
                  <div className="text-red-600 text-xs -mt-1">
                    {errors.password}
                  </div>
                )}

                <button
                  className="text-white bg-[#506ea2] h-[35px] mt-6 rounded-sm active:bg-blue-400"
                  type="submit"
                >
                  {isSubmitted ? (
                    <>
                      <LoopIcon
                        className="animate-spin"
                        style={{ fontSize: 20 }}
                      />{" "}
                      Loading...
                    </>
                  ) : hasAccount ? (
                    "Login"
                  ) : (
                    "Register"
                  )}
                </button>
                <Toaster />
              </div>

              {/* Liên kết chuyển đổi form login/register */}
              <div className="text-sm font-medium mb-8">
                {hasAccount
                  ? "Don't have an account yet?"
                  : "Already have an account?"}{" "}
                <a
                  className="no-underline text-slate-400 hover:cursor-pointer"
                  onClick={handleSwitchForm}
                >
                  {hasAccount ? "Register" : "Login"}
                </a>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Login;
