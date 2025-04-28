type TTitleAndText = {
  title: string;
  text: string;
};
const TitleAndText = ({ title, text }: TTitleAndText) => {
  return (
    <div>
      <div className="  text-center px-4">
        <h2
          data-aos="fade-up"
          data-aos-duration="1600"
          data-aos-anchor-placement="top-bottom"
          className="text-3xl md:text-6xl  text-[#FF2D55] lg:mb-4 uppercase"
        >
          {title}
        </h2>
        <p
          data-aos="fade-up"
          data-aos-duration="1700"
          data-aos-anchor-placement="top-bottom"
          className="text-xl lg:mx-28 mx-2  font-semibold md:text-3xl text-[#64D0FF]"
        >
          {text}
        </p>
      </div>
    </div>
  );
};

export default TitleAndText;
