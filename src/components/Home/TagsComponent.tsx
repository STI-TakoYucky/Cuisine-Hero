import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { FaCarrot } from "react-icons/fa";
import { FaPizzaSlice } from "react-icons/fa";
import { SiCakephp } from "react-icons/si";
import { GiChickenOven } from "react-icons/gi";
import { LuBeef } from "react-icons/lu";
import { BiSolidBowlRice } from "react-icons/bi";

import { useNavigate } from "react-router";

export default function TagsComponent() {

  const tags = [
    { name: "Vegetarian", icon: FaCarrot },
    { name: "Pizza", icon: FaPizzaSlice },
    { name: "Dessert", icon: SiCakephp },
    { name: "Chicken", icon: GiChickenOven },
    { name: "Beef", icon: LuBeef },
    { name: "Rice", icon: BiSolidBowlRice },
  ];

  const navigate = useNavigate()

  const handleTagClick = (e: string): void => {
    navigate(`/recipes?tag=${encodeURIComponent(e.toLowerCase())}`);
  }
  
  return (
    <>
      <Carousel
        opts={{
          align: "start",
          loop: false,
          dragFree: true,
        }}
        className="w-full mt-[5rem] select-none"
      >
        <CarouselContent className="pb-4">
          {tags.map((tag, index) => {
            const Icon = tag.icon;
            return (
              <CarouselItem
                key={index}
                className={`transition-all duration-200 ease-in-out ${
                  index !== 0 ? "pl-5" : ""
                } shrink-0 basis-[17rem] bg-none`}
                 onClick={() => handleTagClick(tag.name)}
              >
                <div className="w-[13.625rem] tag-hover transition-all duration-200 h-[13.625rem] flex flex-col hover:translate-y-3 cursor-pointer justify-center items-center rounded-full hover:bg-white bg-secondary-200 shadow-md">
                  <Icon className="tag-icon text-[5rem] mb-2 text-white transition-all duration-200" />
                  <p className="!font-medium tag-header !text-[1.5rem] !font-header-font transition-all duration-200">
                    {tag.name}
                  </p>
                </div>
              </CarouselItem>
            );
          })}
        </CarouselContent>
      </Carousel>
    </>
  );
}
