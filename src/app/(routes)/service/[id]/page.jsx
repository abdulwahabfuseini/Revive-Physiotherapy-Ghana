import HeadTitle from "@/components/HeadTitle";
import { Therapies } from "@/components/services/Data";
import Physiotherapy from "@/components/services/Physiotherapy";

const Therapy = ({ params }) => {
  const type = decodeURIComponent(params.id).replace(/-/g, ' ');
  const treatments = Therapies.find((data) => data.type.toLowerCase() === type.toLowerCase());
  
  return (
    <div className="w-full h-full ">
      <div className="px-3 py-20 mx-auto max-w-7xl sm:px-4">
        <HeadTitle title={treatments?.type} path="Service" />
        <Physiotherapy treatments={treatments} />
      </div>
    </div>
  );
};

export default Therapy;
