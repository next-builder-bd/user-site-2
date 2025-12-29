"use server";

import { ShopService } from "../../../../services/shop.service";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

export async function createPost(formData: FormData) {
  const name = String(formData.get("name"));
  const content = String(formData.get("content"));

  // Create post using ShopService
  await ShopService.create({
    name,
    content,
  });

  // Revalidate admin shop page
  revalidatePath("/admin/shop");

  // Redirect to shop list
  redirect("/admin/shop");
}
