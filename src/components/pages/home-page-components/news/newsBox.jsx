import { Arrow, Button, Data, Profile } from "../../../common";

export const NewsBox = ({ name, title, description, imageUrl }) => {
  return (
    <div
      className={`box   w-[800px] h-[530px] bg-cover bg-no-repeat p-[45px] z-[100]`}
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      <Data />
      <div
        className="bg-white w-[613px] px-[47px] py-[46px] rounded-[30px] mt-[255px] rounded-tl-[31px] rounded-tr-[34px] rounded-bl-[30px] rounded-br-[30px]
shadow-md flex flex-col items-start"
      >
        <div className="flex gap-[5px] items-baseline ">
          <Profile />
          <p className="text-[18px] leading-[21px]">{name}</p>
        </div>
        <div>
          <h6 className="text-[25px] text-Arapawa font-bold leading-[29px] mt-[15px]">
            {title}
          </h6>
          <p className="text-[18px] text-CityRain mb-[15px]">{description}</p>
        </div>
        <Button variant="primary" icon={<Arrow />}>
          Read More
        </Button>
      </div>
    </div>
  );
};
