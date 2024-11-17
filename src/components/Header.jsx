import React from 'react'
import { useSelector,useDispatch } from 'react-redux';
import { setUser } from '../feature/userSlice';
import { useNavigate} from 'react-router-dom';
export default function Header() {
    const dispatch = useDispatch();
    const data = useSelector((state) => state.user);
    const navigate = useNavigate();
    function handleLogOut() {
        dispatch(setUser(null));
        navigate('/');
    }
  return (
      <div className='w-full h-15 bg-blue-100 flex justify-between items-center p-5'>
          <p className=' text-xl font-bold'>
              {`Hospital ID : ${data["id"]} `}<br />
              {`Hospital Name : ${data.hospital_name}`}
          </p>
          <button className='bg-[#4D44B5] h-10 w-28 rounded-full text-white' onClick={handleLogOut}> LogOut</button>
      </div>
  )
}
