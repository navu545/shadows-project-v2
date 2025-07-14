
const DatabaseComp = () => {
  return (
    <div className="database-wrap flex flex-col items-center bg-[#171717] text-white">
      <div className="database max-w-7xl items-center mt-15">
        <div className="database-heading-btn">
          <div className="database-heading text-right text-7xl italic font-light">
            <h1>
              HELP US{" "}
              <span className="not-italic font-normal">COLLECT DATA</span> ON
              WHERE{" "}
              <span className="not-italic font-normal">UKRAINIAN ARTISTS</span>{" "}
              ARE STILL MISLABELED{" "}
              <span className="not-italic font-normal">TODAY.</span>
            </h1>
          </div>
          <div className="database-btn flex flex-col items-end mt-10">
            <button className="rounded-full border-2 border-white flex items-center justify-center cursor-pointer italic text-3xl px-15 py-5 font-light mb-5">
              SUBMIT A&nbsp;
              <span className="not-italic font-normal">MISLABELED ARTIST</span>
            </button>
            <button className="rounded-full border-2 border-white flex items-center justify-center cursor-pointer italic text-3xl px-15 py-5 font-light">
              SEE THE&nbsp;
              <span className="not-italic font-normal">FULL DATABASE</span>
            </button>
          </div>
        </div>
        <div className="database-chart">
          <h1>HERE WILL BE THE DATABASE</h1>
        </div>
      </div>
    </div>
  );
}

export default DatabaseComp
