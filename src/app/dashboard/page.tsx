import { ChartAreaInteractive } from "@/components/chart-area-interactive";
import { DataTable } from "@/components/data-table";
import { SectionCards } from "@/components/section-cards";

import data from "./data.json";
import { createClient } from "@/lib/server";
import { redirect } from "next/navigation";

export default async function Page() {
  const supabase = await createClient();

  const { data: dataUser, error } = await supabase.auth.getUser();
  if (error || !dataUser?.user || dataUser?.user?.email !== "admin@gmail.com") {
    redirect("/");
  }

  return (
    <div className="flex flex-1 flex-col">
      <div className="@container/main flex flex-1 flex-col gap-2">
        <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
          <SectionCards />
          <div className="px-4 lg:px-6">
            <ChartAreaInteractive />
          </div>
          <DataTable data={data} />
        </div>
      </div>
    </div>
  );
}
