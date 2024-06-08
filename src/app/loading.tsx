import React from "react";
import MoonLoader from "react-spinners/MoonLoader";

const Loading = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <MoonLoader
        color={"#444"}
        loading={true}
        size={50}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
};

export default Loading;
