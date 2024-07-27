import React from 'react'

const Profile = ({userData}) => {
    
    
  return (
    <div className=' text-white text-xl bg-slate-800 rounded m-auto grid p-10 max-w-screen-lg mt-5'>
        {userData.map(item=> (
            <div key={item._id} className=''>
                <h2 className='text-3xl font-bold mb-5 text-center'>Hello, {item.firstName}</h2>
            <form className="" >
                <div className="mb-3 grid">
                    <label >Fullname:</label> 
                    <input id="name" type="text" placeholder={`${item.firstName} ${item.lastName}`} className='pl-1 rounded'/>
                </div> 
                <div className="grid grid-cols-2 gap-2">
                    <div className="mb-3 grid ">
                        <label >Gender:</label> 
                        <input id="gender" type="text" placeholder={`${item.gender}`} className='pl-1 rounded'/>
                    </div>
                    <div className="mb-3 grid">
                        <label >Birthday:</label> 
                        <input id="bday" type="text" placeholder={`${item.birthday}`} className='pl-1 rounded'/>
                    </div>
                </div> 
                <div className="grid grid-cols-2 gap-2">
                    <div className="mb-3 grid ">
                        <label >Email:</label>
                        <input id="email" type="email" placeholder={`${item.email}`} className='pl-1 rounded'/>
                    </div>
                    <div className="mb-3 grid">
                        <label >Contact:</label>
                        <input id="contact" type="tel" placeholder={`${item.contact}`} className='pl-1 rounded'/>
                    </div>
                </div> 
                <div className="mb-3 grid">
                    <label >Address:</label>
                    <input id="address" type="text" placeholder={`${item.address}`} className='pl-1 rounded'/>
                </div>
                <div className="button text-center flex flex-col gap-2 ">
                    <button className="bg-blue-600 p-2 hover:bg-blue-700 rounded" value="Change-information">Edit information</button>
                    <button className="bg-blue-600 p-2 hover:bg-blue-700 rounded" value="Change-Password">Change Password</button>
                    <button className="bg-blue-600 p-2 hover:bg-blue-700 rounded" value="save" disabled>Save</button>
                </div>
            </form>
        </div>
        ))}
    </div>
  )
}

export default Profile