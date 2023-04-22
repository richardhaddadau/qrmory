import React from "react";
import MyFooter from "../Components/MyFooter";

const Standard = ({ admin = false, children }) => {
  // States

  return (
    <div className="flex flex-col items-stretch w-full bg-stone-100">
      {children}
      {admin ? null : <MyFooter />}
    </div>
  );
};

export default Standard;
