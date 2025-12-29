// plugins/blog/plugin.ts
import BlogListPage from "./app/shop/page";
import AdminBlogPage from "./app/admin/shop/page";
import CreateBlogPage from "./app/admin/shop/create/page";
import EditBlogPage from "./app/admin/shop/edit/[id]/page";

export const shopPlugin = {
  name: "shop",
  routes: {
    "/shop": BlogListPage,
    "/admin/shop": AdminBlogPage,
    "/admin/shop/create": CreateBlogPage,
    "/admin/shop/edit/[id]": EditBlogPage,
  },
};

export default shopPlugin;
