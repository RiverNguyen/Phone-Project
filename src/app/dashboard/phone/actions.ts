"use server";

import { revalidatePath } from "next/cache";
import supabase from "@/utils/supabase";

export async function addPhone(formData: FormData) {
  try {
    const name = formData.get("name") as string;
    const price = formData.get("price") as string;
    const quality = formData.get("quality") as string;
    const desc = formData.get("desc") as string;
    const image = formData.get("image") as string;

    if (!name || !price || !quality || !image) {
      return { error: "Missing required fields" };
    }

    const { data, error } = await supabase
      .from("phone")
      .insert({
        name,
        price,
        quality,
        desc,
        image,
      })
      .select();

    if (error) {
      return { error: error.message };
    }

    // Revalidate the phone page to refresh the data
    revalidatePath("/dashboard/phone");

    return { success: true, data };
  } catch (error) {
    console.error("Error adding phone:", error);
    return { error: "Failed to add phone" };
  }
}

export async function updatePhone(formData: FormData, id: string) {
  try {
    const name = formData.get("name") as string;
    const price = formData.get("price") as string;
    const quality = formData.get("quality") as string;
    const desc = formData.get("desc") as string;
    const image = formData.get("image") as string;

    const { data, error } = await supabase
      .from("phone")
      .update({ name, price, quality, desc, image })
      .eq("id", id)
      .select();

    if (error) {
      return { error: error.message };
    }

    return { success: true, data };
  } catch (error) {
    console.error("Error updating phone:", error);
    return { error: "Failed to update phone" };
  }
}
