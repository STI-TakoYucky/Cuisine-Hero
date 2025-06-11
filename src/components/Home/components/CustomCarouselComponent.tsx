import { useState } from 'react'
import {
  Carousel,
  CarouselContent,
  CarouselItem,

} from "@/components/ui/carousel"
import { FaRegClock } from "react-icons/fa6";
import { FaUser } from "react-icons/fa6";
import type { CustomCarouselComponentProps } from '@/types';

export default function CustomCarouselComponent( { items }: CustomCarouselComponentProps) {
    const [itemLength, setItemLength] = useState(items || null);
    const tags: string[] = ["American", "Under 30 Mins", " Comfort Food", "Blah", "Bleh"]

  return (
    <>
        <Carousel
        opts={{
        align: "start",
        loop: true,
        containScroll: false,
        dragFree: true,
        watchDrag: itemLength != null && itemLength > 5
        }}
        className="w-full mt-5"
        >
        <CarouselContent className='py-1'>
        {Array.from({ length: itemLength || 0 }).map((_, index) => (
            <CarouselItem key={index} className='pl-5 basis-1/5'>
            <div className="w-[19rem] h-[28rem] rounded-md bg-white shadow-md">

                <div>
                    <img src="src\assets\images\Toast.png" className='w-full' alt="" />
                </div>

                <div className='p-5 flex flex-col gap-6 w-full'>
                    <div className='flex flex-col gap-3'>
                        <div>
                            <h1 className='text-[1rem] !font-medium'>How to make French Toast</h1>
                        </div>
                        <div className='flex items-center gap-5 w-full'>
                            <span className='flex items-center gap-2'>
                                <FaRegClock  className='text-[1.6rem] text-secondary-200'/>
                                <p className='!text-[0.875rem]'>15 mins</p>
                            </span>
                            <span className='flex items-center gap-2'>
                                <FaUser  className='text-[1.6rem] text-secondary-200'/>
                                <p className='!text-[0.875rem]'>5 People</p>
                            </span>
                        </div>

                    </div>

                <div className='flex flex-wrap gap-2'>
                    {
                        tags.map((item, index) => {
                            if (index <= 3) {
                                return (
                                <p key={index} className='!text-[0.875rem] bg-primary-100 inline px-3 py-[.2rem] rounded-full' >
                                    {item}
                                </p>
                                )
                            } else {
                                return (
                                <p key={index} className='!text-[0.875rem] bg-primary-100 inline px-3 py-[.2rem] rounded-full' >
                                    +{tags.length - 4}
                                </p>
                                )
                            }
                        }) 
                    }
                </div>
            </div>
        </div>
            </CarouselItem>
           ))}
        </CarouselContent>
    </Carousel>
    </>
  )
}
