

const Art3 = () => {
  const images = [
    "campaignHome1.png",
    "campaignHome2.png",
    "campaignHome3.png",
    "campaignHome4.png",
    "campaignHome5.png",
    "campaignHome6.png",
    "campaignHome7.png",
    "campaignHome8.png",
  ];

  return (
    <div className="flex flex-col items-center mb-20">
      <div
        className="
            relative w-full
            max-w-xs
            xs:max-w-lg
            sm:max-w-2xl
            md:max-w-3xl
            lg:max-w-5xl
            xl:max-w-7xl
            overflow-hidden mt-10 mb-10 group fade-left fade-right
          "
      >
        <div className="flex gap-8 animate-marquee pause-on-hover w-max">
          {[...images, ...images].map((filename, index) => (
            <div
              key={index}
              className="w-[120px] sm:w-[150px] h-[140px] sm:h-[160px] flex-shrink-0"
            >
              <img
                src={`https://ik.imagekit.io/shadows/Shadows-project/${filename}`}
                alt=""
                className="w-full h-full object-cover rounded-md shadow-sm"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Art3;
