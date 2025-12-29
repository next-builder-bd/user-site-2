import { ShopService } from "../../services/shop.service";

export default async function ShopListPage() {
  const posts = await ShopService.getPublicPosts();

  return (
    <main style={{ padding: 24 }}>
      <h1>Shop</h1>

      {posts.length === 0 && <p>No shop yet.</p>}

      <ul>
        {posts.map(post => (
          <li key={post.id}>
            {/* <a href={`/blog/${post.slug}`}> */}
              {post.name}
            {/* </a> */}
          </li>
        ))}
      </ul>
    </main>
  );
}
