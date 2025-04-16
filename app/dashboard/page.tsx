import { Suspense } from "react";
import DashNav from "../ui/Dashboard/DashNav";
import Loading from "./loading";

export default function Dashboard() {
  return (
    <Suspense fallback={<Loading/>}>
      <DashNav />
    </Suspense>
  );
}
