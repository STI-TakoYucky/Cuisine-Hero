import {
  Carousel,
  CarouselContent,
  CarouselItem,

} from "@/components/ui/carousel"
import type { CustomCarouselComponentProps } from '@/types';
import RecipeCardComponent from "../RecipeCardComponent";

export default function CustomCarouselComponent( { recipes }: CustomCarouselComponentProps) {

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
            return (
           <CarouselItem id={recipe.id} key={index} className='pl-5 basis-1/2 lg:basis-1/3 xl:basis-1/5'>
            <RecipeCardComponent recipe={recipe}/>
            </CarouselItem>
           )})}
        </CarouselContent>
    </Carousel>
    </>
  )
}
