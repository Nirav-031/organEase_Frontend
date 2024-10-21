import { Outlet } from "react-router-dom";
import Header from "./Header";

import Sidebar from "./Sidebar";

const Dashboard = () => {
    return <div className="h-screen w-screen bg-black flex">
        <Sidebar />
         <div className='w-[80%] h-screen bg-slate-400 flex flex-col'  >
            <Header />
            <Outlet/>
        </div>

    </div>
}

export default Dashboard;