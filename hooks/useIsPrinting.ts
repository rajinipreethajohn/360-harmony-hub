"use client";
import { useEffect, useState } from "react";

export default function useIsPrinting() {
  const [isPrinting, setIsPrinting] = useState(false);

  useEffect(() => {
  const handleBeforePrint = () => {
    document.body.classList.add("printing");
  };
  const handleAfterPrint = () => {
    document.body.classList.remove("printing");
  };
  window.addEventListener("beforeprint", handleBeforePrint);
  window.addEventListener("afterprint", handleAfterPrint);
  return () => {
    window.removeEventListener("beforeprint", handleBeforePrint);
    window.removeEventListener("afterprint", handleAfterPrint);
  };
}, []);
