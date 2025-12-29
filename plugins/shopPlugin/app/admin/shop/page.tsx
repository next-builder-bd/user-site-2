import { ShopService } from "../../../services/shop.service";
import { deletePost } from "./actions";
import DeleteButton from "./DeleteButton";

export default async function AdminBlogPage() {
  const posts = await ShopService.getAll();

  return (
    <main style={{ padding: 24 }}>
      <h1>Admin Blog</h1>

      <a href="/admin/shop/create">➕ Create Post</a>



      <ul style={{ marginTop: 20 }}>
        {posts.map(post => (
          <li key={post.id} style={{ marginBottom: 10 }}>
            <strong>{post.name}</strong>{" "}
            — 

            {" | "}
          

            {" |   "}
            {/* <a href={`/admin/blog/edit/${post.id}`}>✏️ Edit</a> */}

            <a href={`/admin/edit/${post.id}`}>✏️ Edit</a>


            {" | "}
            <form
              action={deletePost.bind(null, post.id)}
              style={{ display: "inline" }}
            >
              <DeleteButton />
            </form>
          </li>
        ))}
      </ul>
    </main>
  );
}
