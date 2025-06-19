import { Check, ChevronsUpDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useEffect, useState } from "react";
import { getRecipes } from "@/api/getRecipes";
import type { URLSearchParamsInit } from "react-router";

type Tag = { value: string; label: string };
type HeaderProps = {
  setSearchQuery?: (
    nextInit: URLSearchParamsInit,
    navigateOptions?: { replace?: boolean; state?: any }
  ) => void;
  tagParams: string
};

export function TagComboBox({setSearchQuery, tagParams}: HeaderProps ) {
  const [open, setOpen] = useState(false);
  const [value, setValue]= useState<string>(tagParams)
  const [tags, setTags] = useState<Tag[]>();

  useEffect(() => {

    if(setSearchQuery && value) {
        setSearchQuery({tag: value})
    }
  }, [value])

  useEffect(() => {
    if (!tagParams) {
      setValue("");
    } else {
      setValue(tagParams.toLowerCase());
    }
  }, [tagParams]);

  useEffect(() => {
    const fetchTags = async () => {
      try {
        const response = await getRecipes("tags");
        const data = await response?.json();
        const formatted = data.map((item: string) => ({
          value: item.toLowerCase(),
          label: item,
        }));

        setTags(formatted);
      } catch (error) {
        console.error(error);
      }
    };

    fetchTags();
  }, []);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[200px] border-secondary-300 justify-between bg-white text-dark mb-10 !font-body-font"
        >
          {value
            ? tags?.find((tag) => tag.value === value || tag.value === tagParams)?.label
            : "Select Category..."}
          <ChevronsUpDown className="opacity-50" />
        </Button>
      </PopoverTrigger>

      <PopoverContent className="w-[200px] p-0 bg-white text-dark border-secondary-300">
        <Command>
          <CommandInput
            placeholder="Search Category..."
            className="h-9 text-dark placeholder:text-dark border-secondary-300 !font-body-font"
          />
          <CommandList>
            <CommandEmpty className="text-dark">
              No category found.
            </CommandEmpty>
            <CommandGroup>
              {tags?.map((tag) => (
                <CommandItem
                  key={tag.value}
                  value={tag.value}
                  className="text-dark !font-body-font"
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? "" : currentValue);
                    setOpen(false);
                  }}
                >
                  {tag.label}
                  <Check
                    className={cn(
                      "ml-auto text-secondary-300",
                      value === tag.value ? "opacity-100" : "opacity-0"
                    )}
                  />
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
