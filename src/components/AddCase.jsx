import { useState } from "react";
import React from 'react';

const AddCase = () => {
    const [fname,setFname]=useState("");
    const [mname,setMname]=useState("");
    const [lname,setLname]=useState("");
    const [email,setEmail]=useState("");
    const [gender,setGender]=useState("");
    const [mob,setMob]=useState("");
    const [alMob,setAlMob]=useState("");
    const [address,setAddress]=useState("");
    const [state,setState]=useState("");
    const [city,setCity]=useState("");
    const [advname,setAdvname]=useState("");
    const [advid,setAdvid]=useState("");

    return (
        <>
            <h1 className='mx-auto' >ADD CASE</h1>


    <div className="max-w-7xl mx-auto bg-white p-6 rounded-md shadow-md">

        <form action="#" method="POST">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">

                <div className="space-y-2">
                    <label for="first_name">First Name</label>
                    <input type="text" id="first_name" name="first_name" className="w-full border rounded-md p-2"/>
                </div>
                <div className="space-y-2">
                    <label for="middle_name">Middle Name</label>
                    <input type="text" id="middle_name" name="middle_name" className="w-full border rounded-md p-2"/>
                </div>
                <div className="space-y-2">
                    <label for="last_name">Last Name</label>
                    <input type="text" id="last_name" name="last_name" className="w-full border rounded-md p-2"/>
                </div>

                <div className="space-y-2">
                    <label>Gender</label>
                    <div className=" flex items-center space-x-3">
                        <label htmlFor="male" className="flex items-center">
                            <input type="radio" id="male" name="gender" value="male" className="mr-2 h-5 w-5"/>
                            <span className='h-5 w-5'>Male</span>
                        </label>
                        <label htmlFor="female" className="">
                            <input type="radio" id="female" name="gender" value="female" className="mr-1 h-5 w-5"/> 
                            <span className='h-5 w-5'>Female</span>
                        </label>
                        
                    </div>
                </div>
                <div className="space-y-2">
                    <label for="email">Email ID</label>
                    <input type="email" id="email" name="email" className="w-full border rounded-md p-2"/>
                </div>
                <div className="space-y-2">
                    <label for="mobile">Mobile No</label>
                    <input type="tel" id="mobile" name="mobile" className="w-full border rounded-md p-2"/>
                </div>

                <div className="space-y-2">
                    <label for="alternate_number">Alternate Number</label>
                    <input type="tel" id="alternate_number" name="alternate_number" className="w-full border rounded-md p-2"/>
                </div>
                <div className="space-y-2">
                    <label for="address">Address</label>
                    <textarea id="address" name="address" className="w-full border rounded-md p-2"></textarea>
                </div>

                <div className="space-y-2">
                    <label for="country">Country</label>
                    <input type="text" id="country" name="country" className="w-full border rounded-md p-2"/>
                </div>
                <div className="space-y-2">
                    <label for="state">State</label>
                    <input type="text" id="state" name="state" className="w-full border rounded-md p-2"/>
                </div>
                <div className="space-y-2">
                    <label for="city">City</label>
                    <input type="text" id="city" name="city" className="w-full border rounded-md p-2"/>
                </div>
               
                <div className="space-y-2">
                    <label for="reference_name">Reference Name</label>
                    <input type="text" id="reference_name" name="reference_name" className="w-full border rounded-md p-2"/>
                </div>
                <div className="space-y-2">
                    <label for="reference_mobile">Reference Mobile</label>
                    <input type="tel" id="reference_mobile" name="reference_mobile" className="w-full border rounded-md p-2"/>
                </div>
            </div>
            <div className="mt-4">
                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Submit</button>
            </div>
        </form>
    </div>


            <div></div>
        </>
    )
}

export default AddCase
