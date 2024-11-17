import * as YUP from "yup";

export const registrationSchema = YUP.object({
	name: YUP.string()
		.min(2, "Please enter At least 2 character")
		.required("Name is required"),
	email: YUP.string().email().required("Email Required"),
	area: YUP.string().required("Area Required"),
	city: YUP.string().required("City Required"),
	state: YUP.string().required("State Required"),
	pincode: YUP.string()
		.min(6, "please enter valid Pincode")
		.max(6, "please enter valid Pincode")
		.required("Pincode Required"),
	mono: YUP.string()
		.min(10, "please valid mobile Number")
		.max(10, "please enter valid mobile Number")
		.required("Mobile Number Required"),
	password: YUP.string()
		.min(4, "atleast 4 Character Required")
		.required("Password Required"),
	confirm_password: YUP.string().oneOf(
		[YUP.ref("password")],
		"Password Did not Match"
	),
});

export const loginSchema = YUP.object({
	email: YUP.string().email().required("Email must be Required"),
	password: YUP.string()
		.min(4, "atleast 4 Character Required")
		.required("Password Required"),
});

export const registerDonorSchema = YUP.object({
	name: YUP.string()
		.min(2, "Please enter At least 2 character")
		.required("Name is required"),
	mobile: YUP.string()
		.min(10, "Please Enter Valid Mobile Number")
		.max(10, "Please Enter Valid Mobile Number")
		.required("Mobile Number Required"),
	email: YUP.string().email().required("Email Required"),
	area: YUP.string().required("Area Required"),
	city: YUP.string().required("City Required"),
	state: YUP.string().required("State Required"),
});
