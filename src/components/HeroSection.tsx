import { Input } from "@/components/ui/input";
import { IoSearch } from "react-icons/io5";
import { Button } from "@/components/ui/button"
import { RiRobot2Line } from "react-icons/ri";

export default function HeroSection() {
  return (
    <section>
      <div className="h-screen flex flex-col items-center justify-center">

      <img src="src/assets/images/Plate2.png" className="absolute -top-[52rem]"></img>

      <div className="flex flex-col items-center justify-center">
        <h1 className="font-header-font font-semibold uppercase tracking-header text-[3rem]">Kitchenero</h1>
        <p className="text-[1rem] font-body-font tracking-[.1rem]">Search and cook with ease!</p>
      </div>
      
      <div className="relative flex flex-col justify-start mt-15">
        <div className="items-center flex">
            <IoSearch className="absolute text-2xl left-4"></IoSearch>
            <Input type="search" placeholder="Search" className="pl-12 w-[50rem] text-base border-[2px] py-5 text-black rounded-full"/>
        </div>
            
        <div className="flex gap-2 mt-6">
          <Button className="rounded-full bg-[#FE9A53] px-7 text-base font-normal cursor-pointer"><IoSearch /> Search</Button>
          <Button className="rounded-full bg-[#FE9A53] px-7 text-base font-normal cursor-pointer"><RiRobot2Line /> AI</Button>
        </div>
      </div>

      <img src="src/assets/images/Plate1.png" className="absolute -bottom-[20rem]"></img>
      </div>
    </section>
  )
}
