import HeadTitle from "@/components/HeadTitle";
import { Therapies } from "@/components/services/Data";
import Physiotherapy from "@/components/services/Physiotherapy";
import Link from "next/link";
import { TbChevronLeft } from "react-icons/tb";

const Therapy = ({ params }) => {
  const type = decodeURIComponent(params.id).replace(/-/g, ' ');
  const treatments = Therapies.find((data) => data.type.toLowerCase() === type.toLowerCase());
  
  return (
    <div className="w-full h-full ">
      <div className="px-3 py-12 mx-auto max-w-7xl sm:px-4">
      <Link href="/service">
        <button className="p-2 mb-8 font-semibold text-center text-white rounded-full bg-main">
          <TbChevronLeft className="w-8 h-8" />
        </button>
      </Link>
        <HeadTitle title={treatments?.type} path="Service" />
        <Physiotherapy treatments={treatments} />
      </div>
    </div>
  );
};

export default Therapy;
