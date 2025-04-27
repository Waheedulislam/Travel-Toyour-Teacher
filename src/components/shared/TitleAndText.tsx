type TTitleAndText = {
  title: string;
  text: string;
};
const TitleAndText = ({ title, text }: TTitleAndText) => {
  return (
    <div>
      <div className="  text-center px-4">
        <h2 className="text-3xl md:text-5xl font-normal text-[#FF2D55] lg:mb-4 ">
          {title}
        </h2>
        <p className="text-xl  font-normal md:text-3xl text-[#64D0FF]">
          {text}
        </p>
      </div>
    </div>
  );
};

export default TitleAndText;
