import { Input } from "@/components/ui/input";
import { IoSearch } from "react-icons/io5";
import { Button } from "@/components/ui/button"
import { RiRobot2Line } from "react-icons/ri";
import { useState } from "react";

export default function HeroSection() {

  const [searchToggleType, setSearchToggleType] = useState("Search")

  return (
    <section>

      <div className="flex justify-center">
         <div className="w-[115rem] rounded-full h-[115rem] -top-[103rem] absolute bg-radial-[at_0%_100%] blur-3xl to-white from-primary-100"></div>
      </div>

      <div className="h-screen flex flex-col items-center justify-center">
      <img src="src/assets/images/Plate2.png" className="absolute -top-[52rem]"></img>

      <div className="flex flex-col items-center justify-center">
        <h1 className="font-header-font font-semibold uppercase tracking-header text-[3rem] z-50">Kitchenero</h1>
        <p className="text-[1rem] font-body-font tracking-[.1rem] !text-secondary-200 font-medium">Search and cook with ease!</p>
      </div>
      
      <div className="relative flex flex-col justify-start mt-15">
        <div className="items-center flex">
            <IoSearch className="absolute text-2xl left-4 text-dark"></IoSearch>
            <Input type="search" placeholder="Search" className="pl-12 w-[50rem] text-base border-[2px] border-dark  py-5 text-dark rounded-full"/>
        </div>
            
        <div className="flex gap-2 mt-6">
          <Button onClick={() => {setSearchToggleType("Search")}} className={`rounded-full text-dark ${searchToggleType == "Search" && "!bg-secondary-200"} bg-secondary-100 px-7 text-base font-normal cursor-pointer`}><IoSearch className="text-dark" /> Search</Button>
          <Button onClick={() => {setSearchToggleType("AI")}} className={`rounded-full text-dark ${searchToggleType == "AI" && "!bg-secondary-200"} bg-secondary-100 px-7 text-base font-normal cursor-pointer`}><RiRobot2Line className="text-dark" /> AI</Button>
        </div>
      </div>

      <img src="src/assets/images/Plate1.png" className="absolute -bottom-[20rem]"></img>
      </div>
    </section>
  )
}
