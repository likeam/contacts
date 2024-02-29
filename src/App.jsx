import Navbar from "./components/Navbar";
import {FiSearch} from "react-icons/fi"
import {AiFillPlusCircle} from "react-icons/ai"
import { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "./config/firebase";
import { HiOutlineUserCircle } from "react-icons/hi";
import { IoMdTrash } from "react-icons/io";
import { RiEditCircleLine } from "react-icons/ri";



export default function App() {

  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    const getContacts = async () => {
      try {
        const contactsRef =  collection( db, "contacts");

        const contactsSnapshot = await getDocs(contactsRef);
        const contactsList = contactsSnapshot.docs.map((doc)=> {
          return {
            id: doc.id,
            ...doc.data()
          };
        }
        );

        setContacts(contactsList);

      } catch (e) {
        console.log(e);
      }
    };

    getContacts();
  }, []);




  return (

    
    <div className=" max-auto max-w-[370px]  m-4" >
      <Navbar />
      <div className="relative flex items-center flex-grow gap-1">
      <FiSearch className="absolute ml-2 text-3xl text-white " />
        <input type="text" placeholder="Search Contacts" className="flex-grow h-10 pl-10 text-white bg-transparent border border-white rounded-md " />
        <AiFillPlusCircle className="text-5xl text-white cursor-pointer" />   
      </div> 
      <div>
        <div>{contacts.map((contact) => (
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
        ))}</div>
      </div>
    </div>   
    
    
  
  )
}
