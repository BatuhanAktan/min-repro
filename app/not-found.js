import React from "react";
import NavBar from "./components/NavBar";
import { headers } from "next/headers";


export default async function NotFound() {

   const pathname = headers().get("my-url");  
   
  return (
   <> 
    <NavBar/>
    <div className="flex flex-col justify-center items-center w-full text-center  ">
      <h1 className="font-bold text-6xl">404 - Not Found</h1>
    </div>
    </>
  );
}
