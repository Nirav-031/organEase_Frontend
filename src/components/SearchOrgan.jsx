import React, { useState } from "react";

export default function SearchOrgan() {
	const [organ, setOrgan] = useState("heart");
	const [blood, setBlood] = useState("A+");
	const organs = [
		{ value: "heart", label: "Heart" },
		{ value: "lungs", label: "Lungs" },
		{ value: "liver", label: "Liver" },
		{ value: "kidneys", label: "Kidneys" },
		{ value: "pancreas", label: "Pancreas" },
		{ value: "intestines", label: "Intestines" },
		{ value: "corneas", label: "Corneas" },
		{ value: "skin", label: "Skin" },
		{ value: "bones", label: "Bones" },
		{ value: "heart_valves", label: "Heart Valves" },
		{ value: "tendons", label: "Tendons" },
		{ value: "veins", label: "Veins" },
	];

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
	console.log(organ);

	return (
		<div className="w-full h-full bg-blue-100 flex justify-center items-center">
			<div className="w-[99%] h-[95%] bg-white  rounded-2xl">
				<div className=" rounded-tl-2xl rounded-tr-2xl h-[10%] flex justify-end items-center mr-5 space-x-3">
					<p className="text-md text-[#4D44B5] font-poppins font-bold">
						{" "}
						Search Organ Using Filters :
					</p>

					{/* show all the organ option using organ array  */}
					<select
						onChange={(e) => setOrgan(e.target.value)}
						className="rounded-3xl text-[#4D44B5] p-2 text-center font-poppin border-2 border-[#4D44B5]">
						{organs.map((organ) => (
							<option key={organ.value} value={organ.value}>
								{organ.label}
							</option>
						))}
					</select>

					{/* show all the blood option using bloodType array  */}
					<select
						onChange={(e) => setBlood(e.target.value)}
						className="rounded-3xl text-[#4D44B5] p-2 text-center font-poppin border-2 border-[#4D44B5]">
						{bloodTypes.map((blood) => (
							<option key={blood.value} value={blood.value}>
								{blood.label}
							</option>
						))}
					</select>
				</div>
				<div className="rounded-br-2xl rounded-bl-2xl h-[90%] w-full ">
					<div className=" overflow-y-auto h-[500px]">
						<table className="w-full ">
							<thead className="bg-gray-300 h-14 font-poppins">
								<th>Organ Name</th>
								<th>Blood Type</th>
								<th>Expiry Date</th>
								<th>Hospital Name</th>
								<th>City</th>
								<th>Surgery History</th>
								<th>Action</th>
							</thead>
							<tbody className="space-y-5 ">
								<tr className="text-center border-b-2 ">
									<td className="py-4 px-2">kidney</td>
									<td className="py-4 px-2">A+</td>
									<td className="py-4 px-2">March 25, 2026</td>
									<td className="py-4 px-2">LifeGift Hospital</td>
									<td className="py-4 px-2">Ahmedabad</td>
									<td className="py-4 px-2 ">
										<span
											className={`${"yes" ? "bg-red-500" : "bg-green-500"}
                 pl-5 pr-5 text-white pt-2 pb-2 rounded-full`}>
											Yes
										</span>
									</td>
									<td className="py-4 px-2">
										<span className="pr-5 pl-5 pb-2 pt-2 rounded-full text-white bg-[#4D44B5]">
											view more
										</span>
									</td>
								</tr>

								<tr className="text-center border-b-2">
									<td className="py-4 px-2">kidney</td>
									<td className="py-4 px-2">A+</td>
									<td className="py-4 px-2">March 25, 2026</td>
									<td className="py-4 px-2">LifeGift Hospital</td>
									<td className="py-4 px-2">Ahmedabad</td>
									<td className="py-4 px-2 ">
										<span
											className={`${"yes" ? "bg-red-500" : "bg-green-500"}
                 pl-5 pr-5 text-white pt-2 pb-2 rounded-full`}>
											Yes
										</span>
									</td>
									<td className="py-4 px-2">
										<span className="pr-5 pl-5 pb-2 pt-2 rounded-full text-white bg-[#4D44B5]">
											view more
										</span>
									</td>
								</tr>

								<tr className="text-center border-b-2">
									<td className="py-4 px-2">kidney</td>
									<td className="py-4 px-2">A+</td>
									<td className="py-4 px-2">March 25, 2026</td>
									<td className="py-4 px-2">LifeGift Hospital</td>
									<td className="py-4 px-2">Ahmedabad</td>
									<td className="py-4 px-2 ">
										<span
											className={`${"yes" ? "bg-red-500" : "bg-green-500"}
                 pl-5 pr-5 text-white pt-2 pb-2 rounded-full`}>
											Yes
										</span>
									</td>
									<td className="py-4 px-2">
										<span className="pr-5 pl-5 pb-2 pt-2 rounded-full text-white bg-[#4D44B5]">
											view more
										</span>
									</td>
								</tr>

								<tr className="text-center border-b-2">
									<td className="py-4 px-2">kidney</td>
									<td className="py-4 px-2">A+</td>
									<td className="py-4 px-2">March 25, 2026</td>
									<td className="py-4 px-2">LifeGift Hospital</td>
									<td className="py-4 px-2">Ahmedabad</td>
									<td className="py-4 px-2 ">
										<span
											className={`${"yes" ? "bg-red-500" : "bg-green-500"}
                 pl-5 pr-5 text-white pt-2 pb-2 rounded-full`}>
											Yes
										</span>
									</td>
									<td className="py-4 px-2">
										<span className="pr-5 pl-5 pb-2 pt-2 rounded-full text-white bg-[#4D44B5]">
											view more
										</span>
									</td>
								</tr>

								<tr className="text-center border-b-2">
									<td className="py-4 px-2">kidney</td>
									<td className="py-4 px-2">A+</td>
									<td className="py-4 px-2">March 25, 2026</td>
									<td className="py-4 px-2">LifeGift Hospital</td>
									<td className="py-4 px-2">Ahmedabad</td>
									<td className="py-4 px-2 ">
										<span
											className={`${"yes" ? "bg-red-500" : "bg-green-500"}
                 pl-5 pr-5 text-white pt-2 pb-2 rounded-full`}>
											Yes
										</span>
									</td>
									<td className="py-4 px-2">
										<span className="pr-5 pl-5 pb-2 pt-2 rounded-full text-white bg-[#4D44B5]">
											view more
										</span>
									</td>
								</tr>

								<tr className="text-center border-b-2">
									<td className="py-4 px-2">kidney</td>
									<td className="py-4 px-2">A+</td>
									<td className="py-4 px-2">March 25, 2026</td>
									<td className="py-4 px-2">LifeGift Hospital</td>
									<td className="py-4 px-2">Ahmedabad</td>
									<td className="py-4 px-2 ">
										<span
											className={`${"yes" ? "bg-red-500" : "bg-green-500"}
                 pl-5 pr-5 text-white pt-2 pb-2 rounded-full`}>
											Yes
										</span>
									</td>
									<td className="py-4 px-2">
										<span className="pr-5 pl-5 pb-2 pt-2 rounded-full text-white bg-[#4D44B5]">
											view more
										</span>
									</td>
								</tr>

								<tr className="text-center border-b-2">
									<td className="py-4 px-2">kidney</td>
									<td className="py-4 px-2">A+</td>
									<td className="py-4 px-2">March 25, 2026</td>
									<td className="py-4 px-2">LifeGift Hospital</td>
									<td className="py-4 px-2">Ahmedabad</td>
									<td className="py-4 px-2 ">
										<span
											className={`${"yes" ? "bg-red-500" : "bg-green-500"}
                 pl-5 pr-5 text-white pt-2 pb-2 rounded-full`}>
											Yes
										</span>
									</td>
									<td className="py-4 px-2">
										<span className="pr-5 pl-5 pb-2 pt-2 rounded-full text-white bg-[#4D44B5]">
											view more
										</span>
									</td>
								</tr>

								<tr className="text-center border-b-2">
									<td className="py-4 px-2">kidney</td>
									<td className="py-4 px-2">A+</td>
									<td className="py-4 px-2">March 25, 2026</td>
									<td className="py-4 px-2">LifeGift Hospital</td>
									<td className="py-4 px-2">Ahmedabad</td>
									<td className="py-4 px-2 ">
										<span
											className={`${"yes" ? "bg-red-500" : "bg-green-500"}
                 pl-5 pr-5 text-white pt-2 pb-2 rounded-full`}>
											Yes
										</span>
									</td>
									<td className="py-4 px-2">
										<span className="pr-5 pl-5 pb-2 pt-2 rounded-full text-white bg-[#4D44B5]">
											view more
										</span>
									</td>
								</tr>

								<tr className="text-center border-b-2">
									<td className="py-4 px-2">kidney</td>
									<td className="py-4 px-2">A+</td>
									<td className="py-4 px-2">March 25, 2026</td>
									<td className="py-4 px-2">LifeGift Hospital</td>
									<td className="py-4 px-2">Ahmedabad</td>
									<td className="py-4 px-2 ">
										<span
											className={`${"yes" ? "bg-red-500" : "bg-green-500"}
                 pl-5 pr-5 text-white pt-2 pb-2 rounded-full`}>
											Yes
										</span>
									</td>
									<td className="py-4 px-2">
										<span className="pr-5 pl-5 pb-2 pt-2 rounded-full text-white bg-[#4D44B5]">
											view more
										</span>
									</td>
								</tr>

								<tr className="text-center border-b-2">
									<td className="py-4 px-2">kidney</td>
									<td className="py-4 px-2">A+</td>
									<td className="py-4 px-2">March 25, 2026</td>
									<td className="py-4 px-2">LifeGift Hospital</td>
									<td className="py-4 px-2">Ahmedabad</td>
									<td className="py-4 px-2 ">
										<span
											className={`${"yes" ? "bg-red-500" : "bg-green-500"}
                 pl-5 pr-5 text-white pt-2 pb-2 rounded-full`}>
											Yes
										</span>
									</td>
									<td className="py-4 px-2">
										<span className="pr-5 pl-5 pb-2 pt-2 rounded-full text-white bg-[#4D44B5]">
											view more
										</span>
									</td>
								</tr>

								<tr className="text-center border-b-2">
									<td className="py-4 px-2">kidney</td>
									<td className="py-4 px-2">A+</td>
									<td className="py-4 px-2">March 25, 2026</td>
									<td className="py-4 px-2">LifeGift Hospital</td>
									<td className="py-4 px-2">Ahmedabad</td>
									<td className="py-4 px-2 ">
										<span
											className={`${"yes" ? "bg-red-500" : "bg-green-500"}
                 pl-5 pr-5 text-white pt-2 pb-2 rounded-full`}>
											Yes
										</span>
									</td>
									<td className="py-4 px-2">
										<span className="pr-5 pl-5 pb-2 pt-2 rounded-full text-white bg-[#4D44B5]">
											view more
										</span>
									</td>
								</tr>

								<tr className="text-center border-b-2">
									<td className="py-4 px-2">kidney</td>
									<td className="py-4 px-2">A+</td>
									<td className="py-4 px-2">March 25, 2026</td>
									<td className="py-4 px-2">LifeGift Hospital</td>
									<td className="py-4 px-2">Ahmedabad</td>
									<td className="py-4 px-2 ">
										<span
											className={`${"yes" ? "bg-red-500" : "bg-green-500"}
                 pl-5 pr-5 text-white pt-2 pb-2 rounded-full`}>
											Yes
										</span>
									</td>
									<td className="py-4 px-2">
										<span className="pr-5 pl-5 pb-2 pt-2 rounded-full text-white bg-[#4D44B5]">
											view more
										</span>
									</td>
								</tr>

								<tr className="text-center border-b-2">
									<td className="py-4 px-2">kidney</td>
									<td className="py-4 px-2">A+</td>
									<td className="py-4 px-2">March 25, 2026</td>
									<td className="py-4 px-2">LifeGift Hospital</td>
									<td className="py-4 px-2">Ahmedabad</td>
									<td className="py-4 px-2 ">
										<span
											className={`${"yes" ? "bg-red-500" : "bg-green-500"}
                 pl-5 pr-5 text-white pt-2 pb-2 rounded-full`}>
											Yes
										</span>
									</td>
									<td className="py-4 px-2">
										<span className="pr-5 pl-5 pb-2 pt-2 rounded-full text-white bg-[#4D44B5]">
											view more
										</span>
									</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</div>
	);
}
