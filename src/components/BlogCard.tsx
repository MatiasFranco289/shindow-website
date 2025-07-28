import Image from "next/image";

interface BlogCardProps {
  author: string;
  authorPfp: string;
  title: string;
  date: string;
  paragraphs: Array<string>;
}
export default function BlogCard({
  author,
  authorPfp,
  title,
  date,
  paragraphs,
}: BlogCardProps) {
  return (
    <div className="bg-custom-green-50 p-4 rounded-2xl my-6">
      <div className="flex items-center flex-wrap">
        <div className="rounded-full overflow-hidden flex justify-center items-center w-[70px] h-[70px]">
          <Image src={authorPfp} alt="Logo de la app" width={70} height={70} />
        </div>

        <div className="ml-4">
          <p className="text-lg">{author}</p>
          <p className="text-sm text-gray-400">{date}</p>
        </div>
      </div>

      <div className="mt-3">
        <h3 className="text-xl font-semibold mb-6">{title}</h3>

        <div className="space-y-4">
          {paragraphs.map((p, index) => {
            return <p key={`blog_${title}_paragraph_${index}`}>{p}</p>;
          })}
        </div>
      </div>
    </div>
  );
}
