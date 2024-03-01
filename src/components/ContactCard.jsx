import React from 'react'
import { HiOutlineUserCircle } from "react-icons/hi";
import { IoMdTrash } from "react-icons/io";
import { RiEditCircleLine } from "react-icons/ri";

function ContactCard({contact}) {
  return (
    <div>
        <div key={contact.id} className="flex items-center justify-around p-2 my-4 rounded-lg bg-yellow" >
           <div className="flex gap-2">
           <HiOutlineUserCircle className="text-4xl text-orange" />
            <div>
              <h2 className="font-bold" >Name: {contact.name}</h2>
              <p className="font-medium" >Cell  # : +{contact.mobile}</p>
            </div>
            </div>
            <div className="flex text-3xl">
            <RiEditCircleLine   />
              <IoMdTrash className="text-orange" />
            </div>
         </div>
    </div>
  )
}

export default ContactCard