import { Input } from "@/components/ui/input";
import { IoSearch } from "react-icons/io5";
import { Button } from "@/components/ui/button"
import { RiRobot2Line } from "react-icons/ri";
import { useEffect, useRef, useState } from "react";
import { animate, createScope } from 'animejs';
import { useNavigate } from "react-router";
import plate2 from "@/assets/images/Plate1.png";
import plate1 from "@/assets/images/Plate2.png";

export default function HeroSection() {

  const [searchToggleType, setSearchToggleType] = useState("Search")
  const [tooltip, setTooltip] = useState(false)
  const root = useRef<any>(null)
  const scope = useRef<any>(null)

   const [value, setValue] = useState("");
  const navigate = useNavigate();

  useEffect(() => {

    //plate animation
    scope.current = createScope({ root }).add(() => {
      animate('.plate-1', {
        scale: [0,1],
        rotate: 360,
        ease: 'out(4)',
        duration: 1500,
      })

      animate('.plate-2', {
        scale: [0,1],
        rotate: 360,
        ease: 'out(4)',
        duration: 1500,
        delay: 200
      })

       animate(".fade-in", {
        opacity: [0, 1],
        translateY: [-20, 0],
        easing: "easeOutQuad",
        duration: 1000,
        delay: 300,
      });
    })

    return () => scope.current.revert()
  }, [])

   const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === "Enter") {
        navigate(`/recipes?q=${encodeURIComponent(value)}`);
      }
    };

    const showAITooltip = () => {
      setTooltip(true)

      setTimeout(() => {
        setTooltip(false)
      }, 2000)
    }

  return (
    <section className="fixed -top-[0rem] w-full -z-10" ref={root}>

      <div className="absolute inset-0 -z-50">
          <div className="w-full h-[15rem] bg-gradient-to-b blur-md from-primary-100 to-white"></div>
      </div>

      <div className="flex flex-col items-center justify-center h-screen">
      <img src={plate1} className="absolute -top-[52rem] min-w-[64rem] plate-1"></img>

      <div className="flex flex-col items-center justify-center opacity-">
        <h1 className="fade-in !font-header-font font-semibold tracking-header uppercase text-[clamp(1.5rem,5vw,3rem)] z-50">
          CUISINE HERO
        </h1>
        <p className="text-[1rem] tracking-[.1rem] !text-secondary-300 fade-in">
          Because every kitchen needs a hero!
        </p>
      </div>
      
      <div className="relative flex flex-col justify-start opacity-0 fade-in mt-15">
        <div className="flex items-center">
            <IoSearch className="absolute text-2xl left-4 text-dark"></IoSearch>
            <Input onKeyDown={handleKeyDown} value={value} onChange={(e) => setValue(e.target.value)} type="search" placeholder="Search" className="pl-12 max-w-[50rem] w-[80vw] text-base border-[2px] border-dark  py-5 text-dark rounded-full"/>
        </div>
            
        <div className="flex gap-2 mt-6 items-center">
          <Button onClick={() => {setSearchToggleType("Search")}} className={`rounded-full text-dark ${searchToggleType == "Search" && "!bg-secondary-200"} bg-secondary-100 px-7 text-base font-normal cursor-pointer`}><IoSearch className="text-dark" /> Search</Button>
          <div className="flex flex-col">  
          <Button onClick={showAITooltip} className={`rounded-full text-dark ${searchToggleType == "AI" && "!bg-secondary-200"} bg-secondary-100 px-7 text-base font-normal cursor-pointer`}><RiRobot2Line className="text-dark" /> AI</Button>
            { tooltip &&
              <div className="relative flex justify-center top-[-2rem]">
              <div className="absolute top-[2.8rem] border-l-[20px] border-l-transparent border-r-[20px] border-r-transparent border-solid border-b-secondary-200 border-b-[1.3rem]"></div>
              <p className="absolute !text-sm bg-secondary-200 rounded-full top-[4REM] w-[9rem] text-center p-[.4rem]">Coming Soon!</p>
            </div>}
          </div>
        </div>
      </div>

      <img src={plate2} className="plate-2 absolute -bottom-[20rem] min-w-[35rem] -z-20 scale-[.7]"></img>
      </div>
    </section>
  )
}
