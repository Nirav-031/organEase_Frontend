import React, { useState } from "react";
import { useFormik } from "formik";
import { registerDonorSchema } from "../schemas";
export default function RegisterRecipient() {
	const [blood, setBlood] = useState("A+");

	const bloodTypes = [
		{ value: "A+", label: "A+" },
		{ value: "A-", label: "A-" },
		{ value: "B+", label: "B+" },
		{ value: "B-", label: "B-" },
		{ value: "AB+", label: "AB+" },
		{ value: "AB-", label: "AB-" },
		{ value: "O+", label: "O+" },
		{ value: "O-", label: "O-" },
	];

	const initialValues = {
		name: "",
		mobile: "",
		email: "",
		bDate: "",
		gender: "M", // Added gender here
		blood: "A+",
		area: "",
		city: "",
		state: ""
		
	};
	const { values, errors, handleChange, handleSubmit } = useFormik({
		initialValues,
		validationSchema: registerDonorSchema,
		onSubmit: (value) => {
			console.log(value);
		},
	});
	return (
		<div className="w-full h-full bg-blue-100 flex overflow-hidden justify-center items-center">
			<div className="w-[99%] h-[95%] bg-white  rounded-2xl ">
					<div className="h-10 w-full bg-[#4D44B5] flex justify-start items-center font-poppins text-white p-2 text-xl rounded-tl-2xl rounded-tr-2xl">
						{" "}
						<p>Add Recipient Information</p>
					</div>
				<form onSubmit={handleSubmit}>
					<div className="w-full grid grid-cols-2 p-5 space-y-2 overflow-y-auto max-h-[550px]">
						<div className="">
							<label className="block mb-2 text-sm font-medium text-gray-900 ">
								Name *
							</label>
							<input
								type="text"
								name="name"
								value={values.name}
								onChange={handleChange}
								className="bg-gray-50 border w-[90%] border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  p-2.5 "
							/>
							{errors.name && <p className="text-red-600">{errors.name}</p>}
						</div>
						<div className="">
							<label className="block mb-2 text-sm font-medium text-gray-900 ">
								Phone *
							</label>
							<input
								type="number"
								name="mobile"
								value={values.mobile}
								onChange={handleChange}
								className="bg-gray-50 border w-[90%] border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  p-2.5 "
							/>
							{errors.mobile && <p className="text-red-600">{errors.mobile}</p>}
						</div>
						<div className="">
							<label className="block mb-2 text-sm font-medium text-gray-900 ">
								Email *
							</label>
							<input
								type="email"
								name="email"
								value={values.email}
								onChange={handleChange}
								className="bg-gray-50 border w-[90%] border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  p-2.5 "
							/>
							{errors.email && <p className="text-red-600">{errors.email}</p>}
						</div>
						<div className="">
							<label className="block mb-2 text-sm font-medium text-gray-900 ">
								Date Of Birth *
							</label>
							<input
								type="date"
								name="bDate"
								value={values.bDate}
								onChange={handleChange}
								className="bg-gray-50 border w-[90%] border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  p-2.5 "
							/>
						</div>
						<div className="">
							<label className="block mb-2 text-sm font-medium text-gray-900 ">
								Gender *
							</label>
							<input
								type="radio"
								name="gender"
								value="M"
								checked={values.gender === "M"}
								onChange={handleChange}
							/>{" "}
							Male
							<input
								type="radio"
								name="gender"
								value="F"
								checked={values.gender === "F"}
								onChange={handleChange}
							/>{" "}
							Female
						</div>
						<div>
							<label className="block mb-2 text-sm font-medium text-gray-900 ">
								Blood Type *
							</label>
							<select
								 name="blood"
                                value={values.blood}
                                onChange={handleChange}
								className="rounded-3xl text-[#4D44B5] p-2 text-center font-poppin border-2 border-[#4D44B5]">
								{bloodTypes.map((blood) => (
									<option key={blood.value} value={blood.value}>
										{blood.label}
									</option>
								))}
							</select>
						</div>
						<div className="">
							<label className="block mb-2 text-sm font-medium text-gray-900 ">
								Area
							</label>
							<input
								type="text"
								name="area"
								value={values.area}
								onChange={handleChange}
								className="bg-gray-50 border w-[90%] border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  p-2.5 "
							/>
							{errors.area && <p className="text-red-600">{errors.area}</p>}
						</div>
						<div className="">
							<label className="block mb-2 text-sm font-medium text-gray-900 ">
								City
							</label>
							<input
								type="text"
								name="city"
								value={values.city}
								onChange={handleChange}
								className="bg-gray-50 border w-[90%] border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  p-2.5 "
							/>
							{errors.city && <p className="text-red-600">{errors.city}</p>}
						</div>
						<div className="">
							<label className="block mb-2 text-sm font-medium text-gray-900 ">
								State
							</label>
							<input
								type="text"
								name="state"
								value={values.state}
								onChange={handleChange}
								className="bg-gray-50 border w-[90%] border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  p-2.5 "
							/>
							{errors.state && <p className="text-red-600">{errors.state}</p>}
						</div>

						

						<div className=" flex w-[90%] justify-end items-end h-full ">
							<input
								type="submit"
								name="submit"
								className="bg-[#4D44B5]  hover:bg-blue-900 text-white font-bold py-2 px-4 rounded  font-poppins"
							/>
						</div>
					</div>
				</form>
			</div>
		</div>
	);
}
