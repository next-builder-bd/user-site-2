import { ShopService } from "../../../../../services/shop.service";
import { updateBlog } from "./actions";
import type { PluginPageProps } from "@/plugins/types";
import { notFound } from "next/navigation";
export default async function EditShopPage({ params }: PluginPageProps) {

  const id = Number(params.id);
  if (!id) notFound();

  if (Number.isNaN(id)) {
    return <p>Invalid post id</p>;
  }

  const post = await ShopService.getById(id);

  if (!post) {
    return <p>Post not found</p>;
  }

  return (
    <main style={{ padding: 24 }}>
      <h1>Edit Post</h1>

      <form action={updateBlog}>
        <input type="hidden" name="id" value={post.id} />

        <div>
          <input
            name="name"
            defaultValue={post.name}
            placeholder="Name"
          />
        </div>

        <div>
          <textarea
            name="content"
            defaultValue={post.content}
            placeholder="Content"
          />
        </div>

        

        <br />

        <button type="submit">💾 Save</button>
      </form>
    </main>
  );
}
