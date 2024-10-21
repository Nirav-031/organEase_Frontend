import { useFormik } from "formik";
import { registrationSchema } from "../schemas";
import { Link } from "react-router-dom";
function Registration() {
	const initialValues = {
		name: "",
		email: "",
		area: "",
		city: "",
		state: "",
		pincode: "",
		mono: "",
		password: "",
		confirm_password: "",
	};

	const { values, handleSubmit, errors, handleChange } = useFormik({
		initialValues,
		validationSchema: registrationSchema,
		onSubmit: function (values) {
			console.log(values);
		},
	});
	return (
		<>
			<div className="w-screen h-screen flex justify-center items-center">
				<div className="md:w-[80%] md:h-[90%] h-full w-full bg-gray-100 flex rounded-md shadow-lg">
					{/* Left section */}
					<div className="md:w-[50%] md:h-full hidden md:block bg-blue-700 rounded-s-lg rounded-es-lg">
						<div className="w-full h-[15%] flex justify-start items-center">
							<img
								src="src/assets/organ.png"
								alt="logo"
								className="w-40 h-40"
							/>
						</div>
						<div className="w-full h-[85%] flex justify-center items-center">
							<img
								src="src/assets/registration.png"
								className="lg:w-[90%] lg:h-[100%] md:w-[90%] md:h-[100%]"
							/>
						</div>
					</div>

					{/* Right section */}
					<div className="md:w-[50%] md:h-full w-full h-full flex flex-col justify-center md:pl-5 md:pr-5 bg-gray-100 rounded-r-md overflow-auto">
						<div className="w-full flex justify-start md:hidden bg-blue-700 h-20 items-center pl-5 pr-5">
							<img
								src="src/assets/organ.png"
								alt="logo"
								className="w-auto h-full ml-[-20px]"
								style={{ maxHeight: "100%", maxWidth: "100%" }}
							/>
						</div>
						<div className="w-full h-[90%] md:h-[90%] md:p-0 p-5">
							<p className="font-poppins text-xl font-semibold mb-5">
								Create An Account
							</p>
							<div>
								<form onSubmit={handleSubmit}>
									<div className="mb-3">
										<label
											htmlFor="default-input"
											className="block mb-2 text-sm font-medium text-gray-900 ">
											Hospital Name
										</label>
										<input
											type="text"
											name="name"
											onChange={handleChange}
											value={values.name}
											id="default-input"
											className="bg-gray-50 border border-gray-300
                                     text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500
                                     block w-full p-2.5 "
										/>
										{errors.name && (
											<p className="text-red-600">{errors.name}</p>
										)}
									</div>
									<div className="mb-3">
										<label
											htmlFor="default-input"
											className="block mb-2 text-sm font-medium text-gray-900 ">
											Hospital Email
										</label>
										<input
											type="email"
											name="email"
											id="default-input"
											onChange={handleChange}
											value={values.email}
											className="bg-gray-50 border border-gray-300
                                     text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500
                                     block w-full p-2.5 "
										/>
										{errors.email && (
											<p className="text-red-600">{errors.email}</p>
										)}
									</div>
									<div className="mb-3 flex justify-between">
										<div>
											<label
												htmlFor="default-input"
												className="block mb-2 text-sm font-medium text-gray-900 ">
												Area
											</label>
											<input
												type="text"
												name="area"
												onChange={handleChange}
												value={values.area}
												id="default-input"
												className="bg-gray-50 border border-gray-300
                                        text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500
                                        block w-full p-2.5 "
											/>
											{errors.area && (
												<p className="text-red-600">{errors.area}</p>
											)}
										</div>
										<div>
											<label
												htmlFor="default-input"
												className="block mb-2 text-sm font-medium text-gray-900 ">
												City
											</label>
											<input
												type="text"
												name="city"
												onChange={handleChange}
												value={values.city}
												id="default-input"
												className="bg-gray-50 border border-gray-300
                                        text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500
                                        block w-full p-2.5 "
											/>
											{errors.city && (
												<p className="text-red-600">{errors.city}</p>
											)}
										</div>
									</div>
									<div className="mb-3 flex justify-between">
										<div>
											<label
												htmlFor="default-input"
												className="block mb-2 text-sm font-medium text-gray-900 ">
												State
											</label>
											<input
												type="text"
												name="state"
												onChange={handleChange}
												value={values.state}
												id="default-input"
												className="bg-gray-50 border border-gray-300
                                        text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500
                                        block w-full p-2.5 "
											/>
											{errors.state && (
												<p className="text-red-600">{errors.state}</p>
											)}
										</div>
										<div>
											<label
												htmlFor="default-input"
												className="block mb-2 text-sm font-medium text-gray-900 ">
												Pincode
											</label>
											<input
												type="number"
												name="pincode"
												onChange={handleChange}
												value={values.pincode}
												id="default-input"
												className="bg-gray-50 border border-gray-300
                                        text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500
                                        block w-full p-2.5 "
											/>
											{errors.pincode && (
												<p className="text-red-600">{errors.pincode}</p>
											)}
										</div>
									</div>
									<div className="mb-3">
										<label
											htmlFor="default-input"
											className="block mb-2 text-sm font-medium text-gray-900 ">
											Mobile Number
										</label>
										<input
											type="number"
											name="mono"
											onChange={handleChange}
											value={values.mono}
											id="default-input"
											className="bg-gray-50 border border-gray-300
                                     text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500
                                     block w-full p-2.5 "
										/>
										{errors.mono && (
											<p className="text-red-600">{errors.mono}</p>
										)}
									</div>
									<div className="mb-3 flex justify-between">
										<div>
											<label
												htmlFor="default-input"
												className="block mb-2 text-sm font-medium text-gray-900 ">
												Password
											</label>
											<input
												type="text"
												name="password"
												onChange={handleChange}
												value={values.password}
												id="default-input"
												className="bg-gray-50 border border-gray-300
                                        text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500
                                        block w-full p-2.5 "
											/>
											{errors.password && (
												<p className="text-red-600">{errors.password}</p>
											)}
										</div>
										<div>
											<label
												htmlFor="default-input"
												className="block mb-2 text-sm font-medium text-gray-900 ">
												Confirm Password
											</label>
											<input
												type="password"
												onChange={handleChange}
												value={values.confirm_password}
												name="confirm_password"
												id="default-input"
												className="bg-gray-50 border border-gray-300
                                        text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500
                                        block w-full p-2.5 "
											/>
											{errors.confirm_password && (
												<p className="text-red-600">
													{errors.confirm_password}
												</p>
											)}
										</div>
									</div>
									<button
										type="submit"
										className="bg-blue-500  hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full font-poppins">
										Register
									</button>
									<p className="mt-3 font-poppins">
										Already Have Account ?{" "}
										<span className="font-poppins hover:text-blue-400 cursor-pointer">
											<Link to="/">Login Here</Link>
										</span>
									</p>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default Registration;
