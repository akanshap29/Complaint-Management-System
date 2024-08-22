import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import StuDash from './comStu/StuDash'
import AddComplaint from './comStu/AddComplaint'
import ComplaintHistory from './comStu/ComplaintHistory'
import Settings from './comStu/Settings'
import Profilepic from './Profilepic.jpeg'
import logout from './logout-icon.jpeg'


function Dashboard () {
  const [activeTab, setActiveTab] = useState('StuDash');

  const navigate=useNavigate();

  const renderContent = () => {
    switch(activeTab){
            case 'StuDash':
              console.log("dashboard content");
                return <StuDash />;
                break;
            case 'AddComplaint':
              console.log("lodge content");
                return <AddComplaint />;
                break;
            case 'complaintHistory':
              console.log("histroy content");
                return <ComplaintHistory />;
                break;
            case 'Settings':
              console.log("settings content");
                return <Settings />;
                break;
            default:
                return <Dashboard />;
                break;
    }
  }

  const handlelogout=()=> {
    navigate('/');
  };

  return (
  <>
    <div className="full flex">
      {/*side bar*/}
      <div className="side-bar flex flex-col items-center w-1/4 h-screen bg-slate-400 p-4">
        <img 
            src={Profilepic}
            alt="Profile" 
            className=" border-2 border-gray-600  rounded-full h-24 w-24 mt-4 mb-4 object-cover "/>
        <h2 className="Name font-semibold text-center">Student Name</h2>

      <ul className="mt-20 w-full space-y-2 text-l font-medium">
      <hr className="border-gray-600 " />
       <li>
        <button
            className="w-full py-2 text-left px-4 hover:bg-gray-700"
            onClick={() => setActiveTab('StuDash')}>
            Dashboard
        </button>
       </li>
       <hr className="border-gray-600" />
       <li>
        <button
            className="w-full py-2 text-left px-4 hover:bg-gray-700"
            onClick={() => setActiveTab('AddComplaint')}>
            Add Complaint
        </button>
       </li>
       <hr className="border-gray-600" />
       <li>
        <button
            className="w-full py-2 text-left px-4 hover:bg-gray-700"
            onClick={() => setActiveTab('complaintHistory')}>
            Complaint History
        </button>
       </li>
       <hr className="border-gray-600" />
       <li>
        <button
            className="w-full py-2 text-left px-4 hover:bg-gray-700"
            onClick={() => setActiveTab('Settings')}>
            Settings
        </button>
       </li>
       <hr className="border-gray-600" />
      </ul>
    </div>

      <div className="right w-full bg-yellow-50">
        <div className="nav-bar flex justify-between items-center bg-red-500 rounded border-b-2 border-t-2 border-grey-300 h-14 " >
          Profile
          <button onClick={(handlelogout)}>
            <img 
            src={logout}
            alt="Logout" 
            className="h-10 w-11 rounded-full bg-yellow-100" />
          </button>
        </div>
        <div className="content ">
        {renderContent()}
        </div>
      </div>
    </div>
  </>
  )
}

export default Dashboard
