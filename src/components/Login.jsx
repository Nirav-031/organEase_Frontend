import { useFormik } from "formik";
import { loginSchema } from "../schemas/index";
import { Link,useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LoadingSpinner from "./LoadingSpinner";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setUser } from "../feature/userSlice";
function Login() {
	const [loading, setLoading] = useState(false);
	const dispatch = useDispatch();
	const initialValues = {
		email: "",
		password: "",
	};
	const url = import.meta.env.VITE_API_URL;
	
	const navigate = useNavigate();
	const successToast = () => {
		setLoading(false);
		return toast.success("Login SuccessFully", {
			position: "top-center",
		});
	};
	const errorToast = (err) => {
		return toast.error(err,{ position: "top-right"})
	};
	
	const loginApiCall = (data) => {
		
		axios.post(`${url}/login/`,{...data})
			.then(res => {
			// console.log(res);
				if (res.status == 200)
				{
					Promise.all([
						successToast(),
						setTimeout(() => navigate("/app/home")),
						dispatch(setUser(res.data["user "])),
					]);
				}
		})
			.catch(err => {
				Promise.all([
					setLoading(false),
					setTimeout(() => errorToast(err.response.data["error"]),1000),
				]);
				
			console.error(err.response.data['error']); 
			
		})
	}
	const { values, errors, handleChange, handleSubmit } = useFormik({
		initialValues,
		validationSchema: loginSchema,
		onSubmit: (values) => {
			setLoading(true)
			loginApiCall(values);
		},
	});

	
	return (
		<>
			{loading ? (
				<div className="w-screen h-screen flex justify-center items-center">
					<LoadingSpinner />
				</div>
			) : (
				<div className="w-screen h-screen flex justify-center items-center">
					<div className="md:w-[80%] md:h-[90%] h-full w-full bg-gray-100  flex rounded-md">
						<div className="md:w-[50%] md:h-full hidden md:block  bg-blue-700 rounded-s-lg rounded-es-lg">
							<div className="w-full h-[15%]  flex justify-start items-center">
								<img src="src\assets\organ.png" alt="" className="w-40 h-40 " />
							</div>
							<div className="w-full h-[85%] flex justify-center items-center ">
								<img
									src="src\assets\login.png"
									className="lg:w-[90%] lg:h-[100%] md:w-[90%] md:h-[100%]"
								/>
							</div>
						</div>
						<div className="md:w-[50%] md:h-full w-full h-full md:mt-5 mt-0 overflow-hidden md:ml-5">
							<div className="w-full flex justify-start md:hidden bg-blue-700 h-20 items-center pl-5 pr-5">
								<img
									src="src/assets/organ.png"
									alt="logo"
									className="w-auto h-full ml-[-20px]"
									style={{ maxHeight: "100%", maxWidth: "100%" }}
								/>
							</div>

							<div className="w-full h-[5%] md:h-[10%]  md:flex md:justify-start  md:items-center ">
								<p className="font-semibold font-poppins md:ml-0 ml-5">
									A Organ Donation System
								</p>
							</div>
							<div className="w-full h-[95%] md:h-[90%]  flex md:justify-start justify-center items-center">
								<div className="w-[80%] h-[80%]  ">
									<form onSubmit={handleSubmit}>
										<p className="text-3xl font-poppins  mb-4 font-bold">
											Login
										</p>
										<p className="font-poppins mb-10 font-semibold">
											Welcome back! Please Enter Your Details.
										</p>
										<div className="mb-6">
											<label
												htmlFor="default-input"
												className="block mb-2 text-sm font-medium text-gray-900 ">
												Email
											</label>
											<input
												type="email"
												id="default-input1"
												name="email"
												value={values.email}
												onChange={handleChange}
												className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
											/>
											{errors.email && (
												<p className="text-red-600">{errors.email}</p>
											)}
										</div>
										<div className="mb-4">
											<label
												htmlFor="default-input"
												className="block mb-2 text-sm font-medium text-gray-900 ">
												Password
											</label>
											<input
												type="password"
												id="default-input"
												name="password"
												value={values.password}
												onChange={handleChange}
												className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
											/>
											{errors.password && (
												<p className="text-red-600">{errors.password}</p>
											)}
										</div>
										<p className="font-poppins mb-5 hover:text-blue-400 cursor-pointer">
											Forgot Password ?
										</p>
										<div className="w-full flex justify-center items-center ">
											<button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full font-poppins">
												Log in
											</button>
										</div>
										<p className="font-poppins text-sm w-full text-center mt-5">
											Don't Have An Account ?{" "}
											<span className="hover:text-blue-400 cursor-pointer">
												<Link to="/registration">sign up here</Link>
											</span>{" "}
										</p>
									</form>
								</div>
							</div>
						</div>
					</div>
					<ToastContainer />
				</div>
			)}
		</>
	);
}

export default Login;
