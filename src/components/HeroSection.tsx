import { Input } from "@/components/ui/input";

export default function HeroSection() {
  return (
    <section className="h-screen w-full flex flex-col items-center justify-center">
      <img src="src/assets/images/Plate2.png" className="absolute -top-[52rem]"></img>

      <div className="flex flex-col items-center justify-center">
        <h1 className="font-header-font font-semibold uppercase tracking-header text-[3rem]">Kitchenero</h1>
        <p className="text-[1rem] font-body-font tracking-[.1rem]">Be a master in the kitchen!</p>
      </div>
      
      <div>
        
        <Input type="search" placeholder="Search" className="w-[50rem] text-base shadow-lg text-black rounded-full border-none"/>
      </div>

      <img src="src/assets/images/Plate1.png" className="absolute -bottom-[20rem]"></img>
    </section>
  )
}
