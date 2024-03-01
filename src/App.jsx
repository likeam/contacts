import Navbar from "./components/Navbar";
import {FiSearch} from "react-icons/fi"
import {AiFillPlusCircle} from "react-icons/ai"
import { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "./config/firebase";
import ContactCard from "./components/ContactCard";
import Modal from "./components/Modal";
import AddUpdateContact from "./components/AddUpdateContact";




export default function App() {

  const [contacts, setContacts] = useState([]);

  const [isOpen, setIsOpen] = useState(false);

  const onOpen = () => {
    setIsOpen(true);
  };

  const onClose = () => {
    setIsOpen(false);
  };

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

  <>   
    <div className=" max-auto max-w-[370px]  m-4" >
      <Navbar />
      <div className="relative flex items-center flex-grow gap-1">
      <FiSearch className="absolute ml-2 text-3xl text-white " />
        <input type="text" placeholder="Search Contacts" className="flex-grow h-10 pl-10 text-white bg-transparent border border-white rounded-md " />
        <AiFillPlusCircle onClick={onOpen} className="text-5xl text-white cursor-pointer" />   
      </div> 
      <div>
        <div>{contacts.map((contact) => (
          <ContactCard  key={contact.id} contact={contact} />
        ))}</div>
      </div>
    </div>  
          <AddUpdateContact isOpen={isOpen} onClose={onClose} />
    </>  
  
  )
}
