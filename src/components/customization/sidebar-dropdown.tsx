"use client";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { CircleQuestionIcon } from "@/assets/icons";
import { usePathname } from "next/navigation";
interface SidebarItemProps {
    id: number;
    title: string;
    items: any[];
    activeDropdown: number;
    setActiveDropdown: React.Dispatch<React.SetStateAction<number>>;
    helpText?: string;
}

export const SidebarDropdown = ({
    id,
    title,
    items,
    activeDropdown,
    setActiveDropdown,
    helpText,
}: SidebarItemProps) => {
    const pathname = usePathname();

    const handleAccordionChange = () => {
        setActiveDropdown(activeDropdown === id ? -1 : id);
    };

    return (
        <Accordion
            disabled={pathname === "/templates" && title !== "Suporte"}
            value={activeDropdown === id ? "item-1" : ""}
            onValueChange={handleAccordionChange}
            type="single"
            collapsible
            className="flex w-full flex-col"
        >
            <AccordionItem className="mb-0 flex w-full flex-col" value="item-1">
                <AccordionTrigger className="rounded-full bg-transparent p-0">
                    <div
                        className={` ${
                            activeDropdown === id
                                ? "rounded-br-[52px] bg-[#78A5B9]"
                                : "border-b border-lines/5 bg-darkteal"
                        } ${
                            activeDropdown === id - 1 ? "rounded-tr-[52px]" : "border-b border-lines/5"
                        } flex h-[111px] w-full flex-row items-center justify-between px-14 transition-all`}
                    >
                        <p className="max-w-[156px] font-poppins text-xl font-bold text-white">{title}</p>
                        <TooltipProvider delayDuration={200} skipDelayDuration={500}>
                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <div>
                                        <CircleQuestionIcon
                                            key={id}
                                            w={25}
                                            h={25}
                                            className="cursor-help text-black/30"
                                        />
                                    </div>
                                </TooltipTrigger>
                                <TooltipContent>
                                    <p> {helpText}</p>
                                </TooltipContent>
                            </Tooltip>
                        </TooltipProvider>
                    </div>
                </AccordionTrigger>
                <AccordionContent className="mt-0 w-full bg-white py-4">
                    {items?.map((item, index) => (
                        <div key={index} className="flex w-full flex-row">
                            {item.content}
                        </div>
                    ))}
                </AccordionContent>
            </AccordionItem>
        </Accordion>
    );
};
