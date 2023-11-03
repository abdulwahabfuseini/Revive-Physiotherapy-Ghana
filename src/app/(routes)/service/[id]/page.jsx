import HeadTitle from "@/components/HeadTitle";
import { Therapies } from "@/components/services/Data";
import Physiotherapy from "@/components/services/Physiotherapy";
import { notFound } from "next/navigation";

const getService = (service) => {
  const data = Therapies[service];
  if (data) {
    return data;
  }
  return notFound();
};

const Therapy = ({ params }) => {
  const treatment = getService(params.id);
  return (
    <div className="w-full h-full ">
      <div className="px-2 py-20 mx-auto max-w-7xl sm:px-4">
        <HeadTitle title={treatment.type} path="Service" />
        <Physiotherapy treatment={treatment} />
      </div>
    </div>
  );
};

export default Therapy;
