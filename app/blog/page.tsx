import { PostTable } from "@/db/vercelPg";
import { Icons } from "@/components/icons";
import Link from "next/link";

  interface BlogProps {
    posts: Pick<PostTable, "id" | "title" | "content" | "published" | 'created_at'>[]
  }
  


  export default async function Blog() {
    const ns= [
        {
          id: '1',
          title: "Your call has been confirmed.",
          content: "first content",
          created_at: "1 day ago",
          views: 1000
        },
        {
          id: '2',
          title: "You have a new message!",
          content: "second content",
          created_at: "1 hour ago",
          views: 1000
        },
        {
          id: '3',
          title: "Your subscription is expiring soon!",
          content: "third content",
          created_at: "2 hours ago",
          views: 1000
        },
      ]
     return (
        <>
        <section className="w-full max-w-2xl mx-auto ">
            <h1 className="font-bold text-3xl font-serif mt-8 mb-16 ">Blog</h1>
            {/* <Separator /> */}
            {ns.map((n) => (
                
              <Link
               key={n.id}
               className="flex flex-col space-y-1 mb-4"
               href={`/blog/${n.title}`}
               >
                <div className="w-full flex flex-col space-y-1 mb-4">
              <h2 className="font-sans font-semibold text-2xl">{n.title}</h2>
              <p className="font-serif font-normal text-xl">{n.content}</p>
              <div className="flex items-center gap-6">

              <div className="flex items-center gap-2">
                <Icons.timer className="h-4 w-4"/>
                <p>{n.created_at}{" "}views</p>
              </div>

              <div className="flex items-center gap-2">
                <Icons.eye className="h-4 w-4"/>
                <p>{n.views}{" "}views</p>
              </div>
              </div>
            </div>
               </Link>
            ))}
        </section>
        </>
     )
  }