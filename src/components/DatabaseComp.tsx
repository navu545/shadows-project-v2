const DatabaseComp = () => {
  return (
    <div className="database-wrap flex flex-col items-center bg-[#171717] text-white px-4">
      <div className="database max-w-7xl w-full items-center mt-10 lg:mt-15">
        <div className="database-heading-btn flex flex-col items-end">
          <div className="database-heading text-right italic font-light w-full">
            <h1
              className="
              text-3xl
              xxxs:text-4xl
              xs:text-5xl
              md:text-6xl
              lg:text-7xl
            "
            >
              HELP US{" "}
              <span className="not-italic font-normal">COLLECT DATA</span> ON
              WHERE{" "}
              <span className="not-italic font-normal">UKRAINIAN ARTISTS</span>{" "}
              ARE STILL MISLABELED{" "}
              <span className="not-italic font-normal">TODAY.</span>
            </h1>
          </div>

          <div className="database-btn flex flex-col items-end gap-4 mt-10 w-full">
            <button
              className="
                rounded-full border-2 border-white
                flex items-center justify-center cursor-pointer italic
                text-xl
                xs:text-2xl
                md:text-3xl
                px-6 xs:px-10 md:px-15
                py-4 md:py-5
                font-light
                hover:bg-[linear-gradient(to_right,#2597FF,#FFF500)] hover:text-white focus:bg-[linear-gradient(to_right,#2597FF,#FFF500)]
    focus:text-white
    active:bg-[linear-gradient(to_right,#2597FF,#FFF500)]
    active:text-white
              "
              onClick={() => window.open("https://forms.gle/7tHM7hSF3nHcUnbGA")}
            >
              SUBMIT A&nbsp;
              <span className="not-italic font-normal">MISLABELED ARTIST</span>
            </button>
            <button
              className="
                rounded-full border-2 border-white
                flex items-center justify-center cursor-pointer italic
                text-xl
                xs:text-2xl
                md:text-3xl
                px-6 xs:px-10 md:px-15
                py-4 md:py-5
                font-light
                hover:bg-[linear-gradient(to_right,#2597FF,#FFF500)] hover:text-white focus:bg-[linear-gradient(to_right,#2597FF,#FFF500)]
    focus:text-white
    active:bg-[linear-gradient(to_right,#2597FF,#FFF500)]
    active:text-white
              "
              onClick={() =>
                window.open(
                  "https://docs.google.com/spreadsheets/d/1ujP1yZdNV4lQl7lksxq0OwHYx4zExI7CZBtEPitnVPs/edit?usp=sharing"
                )
              }
            >
              SEE THE&nbsp;
              <span className="not-italic font-normal">FULL DATABASE</span>
            </button>
          </div>
        </div>

        <div className="database-chart mt-10 mb-20">
          <h1
            className="
            text-center
            text-3xl
            xxxs:text-4xl
            xs:text-5xl
            md:text-6xl
            lg:text-7xl
            mb-6 md:mb-10
          "
          >
            DATABASE
          </h1>

          <div
            className="w-full"
            style={{ height: "0", paddingBottom: "75%", position: "relative" }}
          >
            <iframe
              src="https://docs.google.com/spreadsheets/d/e/2PACX-1vRTdateNO8n92yZTqXplxPJa1sGGEl2QuZjXz7zyaszkXbz7KGumKV8PjZrXMMVp7XAQjL2bYBNXuwe/pubhtml?gid=1732555911&amp;single=true&amp;widget=true&amp;headers=false"
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
              }}
              frameBorder="0"
              title="Embedded Google Sheet"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DatabaseComp;
