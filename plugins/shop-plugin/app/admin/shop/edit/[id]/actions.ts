"use server";

import { ShopService } from "../../../../../services/shop.service";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

export async function updateBlog(formData: FormData) {
  const id = Number(formData.get("id"));

  await ShopService.update(id, {
    name: String(formData.get("name")),
    content: String(formData.get("content")),
    
  });

  revalidatePath("/admin/shop");
  redirect("/admin/shop");
}
