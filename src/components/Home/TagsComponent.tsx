import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { MdFreeBreakfast } from "react-icons/md";
import { MdLunchDining } from "react-icons/md";
import { MdDinnerDining } from "react-icons/md";
import { FaCookieBite } from "react-icons/fa";
import { SiCakephp } from "react-icons/si";
import { RiBreadFill } from "react-icons/ri";

export default function TagsComponent() {
  return (
    <>
        <Carousel
        opts={{
        align: "start",
        loop: true,
        containScroll: false,
        dragFree: true,
        watchDrag:false
        }}
        className="w-full mt-[5rem] select-none"
        >
            <CarouselContent className='pb-4'>
                <CarouselItem className='transition-all duration-200 ease-in-out basis-1/6 bg-none'>
                <div className="w-[13.625rem] tag-hover transition-all duration-200 h-[13.625rem] cursor-pointer flex flex-col hover:translate-y-3 justify-center items-center rounded-full hover:bg-white bg-secondary-200 shadow-md">
                  <MdFreeBreakfast className="tag-icon text-[6rem] text-white transition-all duration-200"/>
                  <p className="!font-medium tag-header !text-[1.5rem] !font-header-font transition-all duration-200">Breakfast</p>
                </div>
                </CarouselItem>

                <CarouselItem className='pl-5 transition-all duration-200 ease-in-out basis-1/6 bg-none'>
                <div className="w-[13.625rem] tag-hover transition-all duration-200 h-[13.625rem] flex flex-col hover:translate-y-3 cursor-pointer justify-center items-center  rounded-full hover:bg-white bg-secondary-200 shadow-md">
                  <MdLunchDining  className="tag-icon text-[6rem] text-white transition-all duration-200"/>
                  <p className="!font-medium tag-header !text-[1.5rem] !font-header-font transition-all duration-200">Lunch</p>
                </div>
                </CarouselItem>

                <CarouselItem className='pl-5 transition-all duration-200 ease-in-out basis-1/6 bg-none'>
                <div className="w-[13.625rem] tag-hover transition-all duration-200 h-[13.625rem] flex flex-col hover:translate-y-3 cursor-pointer justify-center items-center  rounded-full hover:bg-white bg-secondary-200 shadow-md">
                  <MdDinnerDining  className="tag-icon text-[6rem] text-white transition-all duration-200"/>
                  <p className="!font-medium tag-header !text-[1.5rem] !font-header-font transition-all duration-200">Dinner</p>
                </div>
                </CarouselItem>

                <CarouselItem className='pl-5 transition-all duration-200 ease-in-out basis-1/6 bg-none'>
                <div className="w-[13.625rem] tag-hover transition-all duration-200 h-[13.625rem] flex flex-col hover:translate-y-3 cursor-pointer justify-center items-center  rounded-full hover:bg-white bg-secondary-200 shadow-md">
                  <FaCookieBite className="tag-icon text-[6rem] text-white transition-all duration-200"/>
                  <p className="!font-medium tag-header !text-[1.5rem] !font-header-font transition-all duration-200">Snacks</p>
                </div>
                </CarouselItem>

                <CarouselItem className='pl-5 transition-all duration-200 ease-in-out basis-1/6 bg-none'>
                <div className="w-[13.625rem] tag-hover transition-all duration-200 h-[13.625rem] flex flex-col hover:translate-y-3 cursor-pointer justify-center items-center  rounded-full hover:bg-white bg-secondary-200 shadow-md">
                  <SiCakephp  className="tag-icon text-[6rem] text-white transition-all duration-200"/>
                  <p className="!font-medium tag-header !text-[1.5rem] !font-header-font transition-all duration-200">Desserts</p>
                </div>
                </CarouselItem>

                <CarouselItem className='pl-5 transition-all duration-200 ease-in-out basis-1/6 bg-none'>
                <div className="w-[13.625rem] tag-hover transition-all duration-200 h-[13.625rem] flex flex-col hover:translate-y-3 cursor-pointer justify-center items-center  rounded-full hover:bg-white bg-secondary-200 shadow-md">
                  <RiBreadFill  className="tag-icon text-[6rem] text-white transition-all duration-200"/>
                  <p className="!font-medium tag-header !text-[1.5rem] !font-header-font transition-all duration-200">Bread</p>
                </div>
                </CarouselItem>
            </CarouselContent>
        </Carousel>
    </>
  )
}
