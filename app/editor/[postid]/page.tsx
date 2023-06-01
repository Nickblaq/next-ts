import { notFound, redirect } from "next/navigation";
import Editor from "@/components/editor";
import { db } from "@/db/vercelPg";
import { authOptions } from "@/lib/auth";
import { OutputData } from "@editorjs/editorjs";


// const postData = {
//     title: "My Editor",
//     content: "My content",
//     publishedAt: "10pm",

// }
interface EditorPageProps {
    params: { postId: string }
  }
export default async function EditorPage({ params}: EditorPageProps) {
    const id = params.postId
    // const post = await db
    // .selectFrom("posts")
    // .selectAll()
    // .where('posts.id', '=', id)
    // .executeTakeFirstOrThrow()
    const mockData: OutputData = {
        "time": Date.now(),
        "blocks": [
          {
            "id": "zbGZFPM-iI",
            "type": "paragraph",
            "data": {
               "text": "Hey. Meet the new Editor. On this page you can see it in action — try to edit this text. Source code of the page contains the example of connection and configuration."
            }
         },
        ],
        "version": "2.8.1"
      }


     const post= {
        id: '1',
        title: 'Szn Title',
        content: mockData,
        published: false
     } 


    if(!post) {
        notFound()
    }

    
    return (
    <>
    <main className="h-screen">
        {<Editor
        post= {{
            id: post.id,
            title: post.title,
            content: post.content,
            published: post.published,
        }}
         />}
    </main>
    </>
    )
}