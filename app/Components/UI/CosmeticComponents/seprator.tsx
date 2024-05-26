import React from "react";

export default function Seprator() {
  return (
    <>
      <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
      <div className="absolute top-0 w-3/4 h-px inset-x-20 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
      <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
      <div className="absolute top-0 w-1/4 h-px inset-x-60 bg-gradient-to-r from-transparent via-sky-500 to-transparent" />
    </>
  );
}
