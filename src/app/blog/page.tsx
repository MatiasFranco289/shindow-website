import blogs from "../../../public/documents/blogs.json";
import BlogCard from "@/components/BlogCard";

export default function Blog() {
  return (
    <div
      className="w-full bg-gradient-to-t from-custom-green-50 to-custom-green-150 font-roboto 
    overflow-hidden min-h-screen flex flex-col items-center pb-12 pt-6"
    >
      <h2 className="text-3xl font-semibold">Blogs</h2>

      <div className="w-5/6 lg:w-3/6">
        {blogs.map((blog, index) => {
          return (
            <BlogCard
              title={blog.title}
              author={blog.author}
              authorPfp={blog.author_pfp}
              date={blog.date}
              paragraphs={blog.paragraphs}
              key={`blog_card_${index}`}
            />
          );
        })}
      </div>
    </div>
  );
}
