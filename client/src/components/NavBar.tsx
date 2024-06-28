import React from "react";

export const NavBar = ({
  children,
  styles,
}: {
  children: React.ReactNode;
  styles?: string;
}) => {
  return (
    <>
      <div
        className={`w-full h-20 fixed bg-white/3 backdrop-blur lg:px-64 lg:py-2 py-1 px-2`}
      >
        <div className={`w-full flex justify-between items-center ${styles}`}>
          {children}
        </div>
      </div>
    </>
  );
};
