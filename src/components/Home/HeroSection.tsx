import { Input } from "@/components/ui/input";
import { IoSearch } from "react-icons/io5";
import { Button } from "@/components/ui/button"
import { RiRobot2Line } from "react-icons/ri";
import { useEffect, useRef, useState } from "react";
import { animate, createScope } from 'animejs';
import { TypeAnimation } from 'react-type-animation';

export default function HeroSection() {

  const [searchToggleType, setSearchToggleType] = useState("Search")
  const root = useRef<any>(null)
  const scope = useRef<any>(null)

  useEffect(() => {

    //plate animation
    scope.current = createScope({ root }).add(self => {
      animate('.plate-1', {
        scale: [
          { to: .7, ease: 'inOut(3)', duration: 200 },
          { to: 1, ease:'inOut(3)' }
        ],
        rotate: 360,
        ease: 'out(4)',
        duration: 2500,
      })

      animate('.plate-2', {
        scale: [
          { to: .1, ease: 'inOut(3)', duration: 200 },
          { to: 1, ease:'inOut(3)' }
        ],
        rotate: 360,
        ease: 'out(4)',
        duration: 2500,
      })

      animate('.fade-in', {
        opacity: [
          { to: 0, ease: 'inOut(3)', duration: 200 },
          { to: 1, ease:'inOut(3)' }
        ],
        ease: 'out(4)',
        duration: 2500,
      })
    })

    return () => scope.current.revert()
  }, [])

  return (
    <section className="fixed -top-[0rem] w-full -z-10" ref={root}>
      <div className="absolute inset-0 -z-50">
          <div className="w-full h-[15rem] bg-gradient-to-b blur-md from-primary-100 to-white"></div>
      </div>

      <div className="flex flex-col items-center justify-center h-screen">
      <img src="src/assets/images/Plate2.png" className="absolute -top-[52rem]  plate-1"></img>

      <div className="flex flex-col items-center justify-center">
        <h1 className="fade-in !font-header-font font-semibold tracking-header uppercase text-[3rem] z-50">
          CUISINE HERO
        </h1>
        <p className="text-[1rem] tracking-[.1rem] !text-secondary-300 fade-in">
          Because every kitchen needs a hero!
        </p>
      </div>
      
      <div className="relative flex flex-col justify-start opacity-0 fade-in mt-15">
        <div className="flex items-center">
            <IoSearch className="absolute text-2xl left-4 text-dark"></IoSearch>
            <Input type="search" placeholder="Search" className="pl-12 w-[50rem] text-base border-[2px] border-dark  py-5 text-dark rounded-full"/>
        </div>
            
        <div className="flex gap-2 mt-6">
          <Button onClick={() => {setSearchToggleType("Search")}} className={`rounded-full text-dark ${searchToggleType == "Search" && "!bg-secondary-200"} bg-secondary-100 px-7 text-base font-normal cursor-pointer`}><IoSearch className="text-dark" /> Search</Button>
          <Button onClick={() => {setSearchToggleType("AI")}} className={`rounded-full text-dark ${searchToggleType == "AI" && "!bg-secondary-200"} bg-secondary-100 px-7 text-base font-normal cursor-pointer`}><RiRobot2Line className="text-dark" /> AI</Button>
        </div>
      </div>

      <img src="src/assets/images/Plate1.png" className="plate-2 absolute -bottom-[20rem] -z-20"></img>
      </div>
    </section>
  )
}
