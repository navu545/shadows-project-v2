
interface MuseumCardProps {
  source: string,
  msmheading: string,
  msmtext: string
}


const MuseumCardOne:React.FC<MuseumCardProps> = ({source,msmheading,msmtext}) => {
  return (
    <div className="museum-card-wrap border-1 border-gray-300 rounded-sm h-81 overflow-hidden w-70">
      <div className="museum-card flex flex-col ">
        <div className="museum-card-img-div h-45 overflow-hidden shadow-xl">
          <img src={source} alt="museum-bw" className="scale-110"></img>
        </div>
        <div className="museum-card-text p-2">
          <p className="museum-card-headline font-bold">{msmheading}</p>
          <p className="museum-card-para text-sm text-[#787878]">{msmtext}</p>
        </div>
      </div>
    </div>
  );
};

export default MuseumCardOne;
