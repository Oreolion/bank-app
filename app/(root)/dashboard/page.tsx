import React, { Suspense } from "react";
import {BankDashboard} from "@/components/BankDashboard";
import LoaderSpinner from "@/components/LoaderSpinner";

const Page = () => {
  return (
    <>
      <Suspense fallback={<LoaderSpinner />}>
        <BankDashboard></BankDashboard>
      </Suspense>
    </>
  );
};

export default Page;
