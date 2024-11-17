import { NavLink } from "react-router-dom";
import logo from "../assets/organ.png";
import { IoHomeOutline } from "react-icons/io5";
import { IoIosSearch } from "react-icons/io";
import { IoPersonAddOutline } from "react-icons/io5";
import { RiHeartAdd2Line } from "react-icons/ri";
import { GoPeople } from "react-icons/go";
import { TbReportAnalytics } from "react-icons/tb";
import { IoNotificationsOutline } from "react-icons/io5";
import { ImProfile } from "react-icons/im";
const Sidebar = () => {
	return (
		<div className="w-[20%] h-full bg-[#4D44B5] ">
			<div className="w-full h-25 flex flex-col items-center">
				<img src={logo} alt="" srcset="" className="w-40 h-full" />
			</div>
			<div>
				<ul className="space-y-2 w-full pl-5 font-poppins" >
					<li className="w-full hover:text-black hover:bg-white ">
						<NavLink
							to="/app/home"
							className={({ isActive }) =>
								`block py-2 pr-4 pl-3 duration-200 ${
									isActive ? "text-black bg-white" : "text-white bg-[#4D44B5]"
								}   p-5 flex items-center `
							}>
							<span className="mr-2">
								<IoHomeOutline />
							</span>
							<span>DashBoard</span>
						</NavLink>
                    </li>
                    <li className="w-full hover:text-black hover:bg-white ">
						<NavLink
							to="/app/searchOrgan"
							className={({ isActive }) =>
								`block py-2 pr-4 pl-3 duration-200 ${
									isActive ? "text-black bg-white" : "text-white bg-[#4D44B5]"
								}   p-5 flex items-center `
							}>
							<span className="mr-2">
								<IoIosSearch />
							</span>
							<span>Search Organ</span>
						</NavLink>
                    </li>
                    
                    <li className="w-full hover:text-black hover:bg-white ">
						<NavLink
							to="/app/registerDonor"
							className={({ isActive }) =>
								`block py-2 pr-4 pl-3 duration-200 ${
									isActive ? "text-black bg-white" : "text-white bg-[#4D44B5]"
								}   p-5 flex items-center `
							}>
							<span className="mr-2">
								<IoPersonAddOutline />
							</span>
							<span>Register Donor</span>
						</NavLink>
                    </li>
                    
                    <li className="w-full hover:text-black hover:bg-white ">
						<NavLink
							to="/app/registerrecipient"
							className={({ isActive }) =>
								`block py-2 pr-4 pl-3 duration-200 ${
									isActive ? "text-black bg-white" : "text-white bg-[#4D44B5]"
								}   p-5 flex items-center `
							}>
							<span className="mr-2">
								<RiHeartAdd2Line />
							</span>
							<span>Register Recepient</span>
						</NavLink>
                    </li>
                    
                    <li className="w-full hover:text-black hover:bg-white ">
						<NavLink
							to="/app/viewDonor"
							className={({ isActive }) =>
								`block py-2 pr-4 pl-3 duration-200 ${
									isActive ? "text-black bg-white" : "text-white bg-[#4D44B5]"
								}   p-5 flex items-center `
							}>
							<span className="mr-2">
								<GoPeople />
							</span>
							<span>View Donor's</span>
						</NavLink>
                    </li>
                    
                    <li className="w-full hover:text-black hover:bg-white ">
						<NavLink
							to="/app/report"
							className={({ isActive }) =>
								`block py-2 pr-4 pl-3 duration-200 ${
									isActive ? "text-black bg-white" : "text-white bg-[#4D44B5]"
								}   p-5 flex items-center `
							}>
							<span className="mr-2">
								<TbReportAnalytics />
							</span>
							<span>Report</span>
						</NavLink>
                    </li>
                    
                    <li className="w-full hover:text-black hover:bg-white ">
						<NavLink
							to="/app/notification"
							className={({ isActive }) =>
								`block py-2 pr-4 pl-3 duration-200 ${
									isActive ? "text-black bg-white" : "text-white bg-[#4D44B5]"
								}   p-5 flex items-center `
							}>
							<span className="mr-2">
								<IoNotificationsOutline />
							</span>
							<span>Notification</span>
						</NavLink>
                    </li>
                    
                    <li className="w-full hover:text-black hover:bg-white ">
						<NavLink
							to="/app/hospitalProfile"
							className={({ isActive }) =>
								`block py-2 pr-4 pl-3 duration-200 ${
									isActive ? "text-black bg-white" : "text-white bg-[#4D44B5]"
								}   p-5 flex items-center `
							}>
							<span className="mr-2">
								<ImProfile />
							</span>
							<span>Hospital Profile</span>
						</NavLink>
                    </li>
                    

					
				</ul>
			</div>
		</div>
	);
};

export default Sidebar;
