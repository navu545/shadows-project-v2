const Art2 = () => {
  const images = [
    "newslider1.png",
    "newslider2.png",
    "newslider3.png",
    "newslider4.png",
    "newslider5.png",
    "newslider6.png",
    "newslider7.png",
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

export default Art2;
