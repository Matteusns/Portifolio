import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const IconSkill = ({ icon, name }) => {
  return (
    <div className="w-[100px] h-[100px] bg-[#232329] rounded-xl flex justify-center items-center group cursor-default">
      <div className="flex flex-col justify-center gap-1 items-center group-hover:text-accent transition-all duration-300">
        <div className="text-5xl">{icon}</div>
        <p className="capitalize text-[12px] font-semibold">{name}</p>
      </div>
    </div>
  );
};

export default IconSkill;
