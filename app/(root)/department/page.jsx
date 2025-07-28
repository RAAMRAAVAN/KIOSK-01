import React, { Suspense } from "react";
import Department from "./Department";

export default function DepartmentPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Department />
    </Suspense>
  );
}
