import React from "react";
import { CheckIco } from "@/assets/svgs/export";

interface BadgeProps {
  label: string;
}

export function Badge({ label = "" }: BadgeProps) {
  return (
    <div
      className={`flex py-3 px-5 items-center gap-[15px] rounded-[35px] border border-gray-custom text-base font-normal text-gray-custom`}
    >
      <CheckIco/>
      <p>{label}</p>
    </div>
  );
}
