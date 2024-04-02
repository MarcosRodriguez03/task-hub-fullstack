'use client'
import { Button } from "flowbite-react";
import { useState } from "react";
import HomePage from "./pages/HomePage/page";


export default function Home() {
  const [switchBool, setSwitchBool] = useState(true);


  const handleSwitch = () => {
    setSwitchBool(!switchBool)
  }
  return (
    <HomePage/>

  );
}
