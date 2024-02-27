import Navbar from "./components/Navbar";
import {FiSearch} from "react-icons/fi"
import {AiFillPlusCircle} from "react-icons/ai"

export default function App() {
  return (
   <div className=" max-auto max-w-[370px]  m-4" >
    <Navbar />
    <div className="flex relative flex-grow items-center gap-2">
    <FiSearch className="text-white text-3xl absolute ml-2 " />
      <input type="text" placeholder="Search Contacts" className=" text-white pl-10 flex-grow bg-transparent h-10 border-white rounded-md border " />
      <AiFillPlusCircle className="cursor-pointer text-5xl text-white" />   
    </div>
  </div>
  )
}
