"use server";

import { ShopService } from "../../../services/shop.service";
import { revalidatePath } from "next/cache";

export async function deletePost(id: number) {
  await ShopService.delete(id);

  // refresh admin list
  revalidatePath("/admin/blog");
}
