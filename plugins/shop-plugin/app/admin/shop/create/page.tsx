"use client";

import { useState } from "react";
import { createPost } from "./actions";

export default function CreateShopPost() {
  const [name, setName] = useState("");
  const [content, setContent] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", name);
    formData.append("content", content);

    await createPost(formData); // Call server action
  }

  return (
    <main style={{ padding: 24 }}>
      <h1>Create Shop Post</h1>

      <form onSubmit={handleSubmit}>
        <input
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />

        <textarea
          placeholder="Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <br />

        <button type="submit">Create</button>
      </form>
    </main>
  );
}
