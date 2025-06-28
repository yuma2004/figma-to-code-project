import { useMobile } from "./ui/use-mobile";
import Component6 from "../imports/フレーム区切り";
import B from "../imports/B案の配色";

export default function ResponsiveMensDepilation() {
  const isMobile = useMobile();

  return (
    <div className="w-full min-h-screen flex justify-center">
      <div className="w-full max-w-[1400px] relative">
        {isMobile ? <B /> : <Component6 />}
      </div>
    </div>
  );
}