import { useEffect } from "react";

const Donorbox = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://donorbox.org/widget.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="flex justify-center">
      <iframe
        src="https://donorbox.org/embed/friend-of-shadows?default_interval=o&show_content=true"
        name="donorbox"
        onLoad={() => console.log("loaded mitro")}
        allow="payment"
        seamless
        frameBorder="0"
        scrolling="no"
        title="Donate with Donorbox"
        style={{
          width: "100%",
          maxWidth: "500px",
          minWidth: "250px",
          height: "100%",
          border: "none",
          borderRadius: "12px",
        }}
      />
    </div>
  );
};

export default Donorbox;
