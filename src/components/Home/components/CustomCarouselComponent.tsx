import {
  Carousel,
  CarouselContent,
  CarouselItem,

} from "@/components/ui/carousel"
import { FaRegClock } from "react-icons/fa6";
import { FaBowlFood } from "react-icons/fa6";
import type { CustomCarouselComponentProps } from '@/types';

export default function CustomCarouselComponent( { recipes }: CustomCarouselComponentProps) {
    const tags: string[] = ["American", "Under 30 Mins", " Comfort Food", "Blah", "Bleh"]

  return (
    <>
        <Carousel
        opts={{
        align: "start",
        loop: true,
        containScroll: false,
        dragFree: true,
        watchDrag: recipes != null && recipes.length > 5
        }}
        className="w-full mt-5 select-none"
        >
        <CarouselContent className='pb-4'>
        {recipes.map((recipe:any, index: number) => 
            {
            let id: string = recipe.canonical_id.replace("recipe:", "")
            return (
           <CarouselItem id={id} key={index} className='pl-5 basis-1/5' onClick={() => alert("wdan")}>
            <div className="w-[19rem] h-[28rem] rounded-md bg-white shadow-md flex flex-col overflow-hidden carousel-item hover:bg-slate-100 hover:translate-y-3 cursor-pointer transition-all duration-200 ease-in-out hover:shadow-none">
                
                <div className='overflow-hidden'>
                <img
                    src={recipe.thumbnail_url}
                    className='carousel-image w-full rounded-t-md aspect-square max-h-[14rem] object-cover'
                    alt=""
                />
                </div>

                <div className='flex flex-col justify-between flex-1 p-5'>

                <div className='flex flex-col gap-2'>
                    <h1 className='text-[1.1rem] !font-medium'>{recipe.name}</h1>

                    <div className='flex items-center w-full gap-5'>
                    {recipe.cook_time_minutes !== 0 && recipe.prep_time_minutes !== 0 && (
                        <span className='flex items-center gap-2'>
                        <FaRegClock className='text-[1.6rem] text-secondary-200'/>
                        <p className='!text-[0.875rem]'>{recipe.cook_time_minutes + recipe.prep_time_minutes} mins</p>
                        </span>
                    )}
                    <span className='flex items-center gap-2'>
                        <FaBowlFood className='text-[1.6rem] text-secondary-200'/>
                        <p className='!text-[0.875rem]'>{recipe.num_servings > 1 ? recipe.num_servings + " servings": recipe.num_servings + " serving"}</p>
                    </span>
                    </div>
                </div>

                <div className='flex flex-wrap gap-2 mt-4'>
                    {recipe.tags?.slice(0, 4).map((item: any, idx: number) => (
                    <p key={idx} className='!text-[0.875rem] bg-primary-100 inline px-3 py-[.2rem] rounded-full'>
                        {item.display_name}
                    </p>
                    ))}
                </div>
                </div>

            </div>
            </CarouselItem>
           )})}
        </CarouselContent>
    </Carousel>
    </>
  )
}
