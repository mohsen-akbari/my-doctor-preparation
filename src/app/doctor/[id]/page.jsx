import React from "react";

import { notFound } from "next/navigation";

import { doctors } from "@/mock/doctors";

export default function Page({ params }) {
  const doctor = doctors.find((doctor) => params.id === doctor.id);

  if (!doctor) {
    return notFound();
  }

  return <div>{doctor?.name}</div>;
}
