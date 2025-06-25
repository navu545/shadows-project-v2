const Art = () => {
  const images = [
    "Slider1.png",
    "Slider2.png",
    "Slider3.png",
    "Slider4.png",
    "slider5.png",
    "slider6.png",
    "slider7.png",
    "slider8.png",
    "slider9.png",
    "Slider10.png",
    "Slider11.png",
  ];

  return (
    <div className="flex flex-col items-center mb-20">
      <div className="relative max-w-7xl w-full overflow-hidden mt-10 mb-10 group fade-left fade-right">
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

export default Art;
