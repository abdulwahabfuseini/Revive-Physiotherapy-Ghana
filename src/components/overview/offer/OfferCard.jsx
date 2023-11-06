import Image from "next/image";
import Link from "next/link";

const OfferCard = ({ item }) => {
  return (
    <div className="bg-white hover:shadow-md">
      <Link href={`/service/${item?.type}`}>
        <Image
          src={`/images/${item?.cover}`}
          alt=""
          width={600}
          height={600}
          className=" h-40 object-cover"
        />
        <h1 className="text-center py-1.5 text-lg">{item?.type}</h1>
      </Link>
    </div>
  );
};

export default OfferCard;
