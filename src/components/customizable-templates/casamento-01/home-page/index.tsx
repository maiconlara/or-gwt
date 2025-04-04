import {CustomizableCasamento01Cta} from "./call-to-action";
import {CustomizableCasamento01Hero} from "./hero";

export const CustomizableCasamento01 = () => {
  return (
    <div className="flex flex-col w-full h-full max-w-[1920px]  overflow-x-hidden items-center bg-white">
      <CustomizableCasamento01Hero />
      <CustomizableCasamento01Cta />
    </div>
  );
};
