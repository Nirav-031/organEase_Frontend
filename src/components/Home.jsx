import React from "react";
import donor from '../assets/donor.png';
import recipient from '../assets/recipient.png';
import hospital from '../assets/hospital.png';
import organ from '../assets/organ1.png';
export default function Home() {
	return (
		<div className="w-full h-full bg-blue-100 flex justify-center items-center">
			<div className="w-[90%] h-[90%] bg-white  rounded-2xl flex justify-center items-center space-x-10">
				<div className="w-56 h-40 shadow-2xl bg-blue-100 flex flex-col  items-center rounded-md pt-2">
					
                    <div className="font-bold text-2xl ">Total Donor's</div>
                    <div className="flex justify-between p-5 w-full items-center ">
                        <img src={donor} alt="" srcset="" className="h-[80px] w-20" />
                        <p className="text-4xl font-bold">40</p>
                    </div>
				</div>
				<div className="w-56 h-40 shadow-2xl bg-blue-100 flex flex-col  items-center rounded-md pt-2">
					
                    <div className="font-bold text-2xl ">Total Recipient's</div>
                    <div className="flex justify-between p-5 w-full items-center ">
                        <img src={recipient} alt="" srcset="" className="h-[80px] w-20" />
                        <p className="text-4xl font-bold">40</p>
                    </div>
                </div>
                <div className="w-56 h-40 shadow-2xl bg-blue-100 flex flex-col  items-center rounded-md pt-2">
					
                    <div className="font-bold text-2xl ">Total Organ</div>
                    <div className="flex justify-between p-5 w-full items-center ">
                        <img src={organ} alt="" srcset="" className="h-[80px] w-20" />
                        <p className="text-4xl font-bold">40</p>
                    </div>
                </div>
                <div className="w-56 h-40 shadow-2xl bg-blue-100 flex flex-col  items-center rounded-md pt-2">
					
                    <div className="font-bold text-2xl ">Total Hospital</div>
                    <div className="flex justify-between p-5 w-full items-center ">
                        <img src={hospital} alt="" srcset="" className="h-[80px] w-20" />
                        <p className="text-4xl font-bold">40</p>
                    </div>
				</div>
			</div>
		</div>
	);
}
