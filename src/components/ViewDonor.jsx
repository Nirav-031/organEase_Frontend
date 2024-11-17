import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function ViewDonor() {

	const [donor, setDonor] = useState([]);
	const fetchAllDoner = () => {
		const url = import.meta.env.VITE_API_URL;
		axios
			.get(`${url}/DonorRegistrationGet/`)
			.then((res) => {
				setDonor(res.data);
				console.log(donor);
			})
			.catch((err) => {
				console.error(err);
			});
	}
	useEffect(() => {
		fetchAllDoner();
	},[])
	return (
		<div className="w-full h-full bg-blue-100 flex overflow-hidden justify-center items-center">
      <div className="w-[99%] h-[95%] bg-white  rounded-2xl ">
        	<div className="h-10 w-full bg-[#4D44B5] flex justify-start items-center font-poppins text-white p-2 text-xl rounded-tl-2xl rounded-tr-2xl">
						{" "}
						<p>View Donor's</p>
        </div>
        <div className="rounded-br-2xl rounded-bl-2xl h-[90%] w-full ">
					<div className=" overflow-y-auto max-h-[500px]">
						<table className="w-full ">
							<thead className="bg-gray-300 h-14 font-poppins">
								<th>Donor Name</th>
								<th>Blood Type</th>
								<th>DOB</th>
								<th>Mobile Number</th>
								<th>City</th>
								<th>Gender</th>
								<th>Action</th>
							</thead>
							<tbody className="space-y-5 ">
								{
									donor.map((data) => {
										return (
											<tr className="text-center border-b-2 ">
												<td className="py-4 px-2">{data.name}</td>
												<td className="py-4 px-2">{data.bloodtype}</td>
												<td className="py-4 px-2">{data.DOB}</td>
												<td className="py-4 px-2">{data.mobile_number}</td>
												<td className="py-4 px-2">{data.city}</td>
												<td className="py-4 px-2 ">
													{/* <span
														className={`${"yes" ? "bg-red-500" : "bg-green-500"}
                 pl-5 pr-5 text-white pt-2 pb-2 rounded-full`}> */}
														Yes
													{/* </span> */}
												</td>
												<td className="py-4 px-2">
													<Link to="/app/organ">
														<span className="pr-5 pl-5 pb-2 pt-2 rounded-full text-white bg-[#4D44B5]">
															Add Organ
														</span>
													</Link>
												</td>
											</tr>
										);
									})
								}
								
              </tbody>
          </table>
          </div>
          </div>
      </div>
		</div>
	);
}
