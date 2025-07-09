import supabase from "@/utils/supabase";
import { DataTable } from "./_components/data-table";
import { columns } from "./_components/colums";
import PhoneForm from "./_components/form";

const PhonePage = async () => {
  let { data: phone, error } = await supabase.from("phone").select("*");

  return (
    <section className="p-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Phone List</h1>
        <PhoneForm />
      </div>
      <div className="mt-4">
        {error && <p className="text-red-500">{error.message}</p>}
        {phone && phone.length === 0 && (
          <p className="text-gray-500">No phone found</p>
        )}
        {phone && phone.length > 0 && (
          <DataTable columns={columns} data={phone} />
        )}
      </div>
    </section>
  );
};

export default PhonePage;
