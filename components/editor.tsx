'use client'

import { useEffect, useState, useRef, useCallback, ChangeEventHandler, Suspense } from "react";
import { useRouter } from "next/navigation";
import EditorJS, { OutputData} from "@editorjs/editorjs";
import TextareaAutosize from "react-textarea-autosize";
import { Button, buttonVariants } from "./ui/button";
import "@/styles/editor.css"
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Icons } from "./icons";
import { PostTable } from "@/db/vercelPg";
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { postPatchSchema } from "@/lib/validate";
import { toast } from "./ui/use-toast";
import { Skeleton } from "./ui/skeleton";


export function EditorSkeleton() {
  return (
    <div className="flex flex-col px-4 mx-autogap-10">
      <div className="flex w-full items-center justify-between">
        <Skeleton className="h-[38px] w-[90px]" />
        <Skeleton className="h-[38px] w-[80px]" />
      </div>
      <div className="mx-auto w-[800px] space-y-6">
        <Skeleton className="h-[50px] w-full" />
        <Skeleton className="h-[20px] w-2/3" />
        <Skeleton className="h-[20px] w-full" />
        <Skeleton className="h-[20px] w-full" />
      </div>
    </div>
  )
}


interface EditorProps {
  post: Pick<PostTable, "id" | "title" | "content" | "published">
}

type FormData = z.infer<typeof postPatchSchema>

export default function Editor ( {post}: EditorProps) {

  const { register, handleSubmit } = useForm<FormData>({
    resolver: zodResolver(postPatchSchema),
  })
  

  const ref = useRef<EditorJS>();
  const router = useRouter()

  const [isMounted, setIsMounted] = useState<boolean>(false)
  const [isSaving, setIsSaving] = useState<boolean>(false)

  // const [title, setTitle] = useState<string>("");
  // const [content, setContent] = useState<OutputData>();
  // const [isPublished, setPublished] = useState<boolean>(false)
  // const [blocks, setBlocks] = useState<OutputData>();


  const initEditor = 
        useCallback(
          async() => {
          const EditorJS = (await import("@editorjs/editorjs")).default
          const Header = (await import("@editorjs/header")).default
          const Paragraph = (await import("@editorjs/paragraph")).default
          const Quote = (await import("@editorjs/quote")).default
          const Image = (await import("@editorjs/image")).default
          const Embed = (await import("@editorjs/embed")).default
          const Table = (await import("@editorjs/table")).default
          const List = (await import("@editorjs/list")).default
          const Code = (await import("@editorjs/code")).default
          const LinkTool = (await import("@editorjs/link")).default
          const InlineCode = (await import("@editorjs/inline-code")).default
          
          
          const body = postPatchSchema.parse(post)

            if (!ref.current) {
              const editor = new EditorJS ({
                onReady: () => {
                  ref.current = editor
                },
                // async onChange (api) {
                //   if (ref.current) {
                //     const savedData = await api.saver.save();
                //     console.log(savedData)
                //     if (onChange) {
                //       onChange(savedData);
                //     }
                //   }
                // },
                holder: "editor",
                data: body.content,
                // tools,
                tools: {
                  code: Code,
                  embed: Embed,
                  header: {
                    class: Header,
                    inlineToolbar: ['bold', 'italic', 'quote']
                  },
                  linkTool: {
                    class: LinkTool,
                    inlineToolbar: ['bold', 'italic', 'quote', 'link']
                  },
                  list: List,
                  inlineCode: InlineCode,
                  image: {
                    class: Image,
                    inlineToolbar: ['link']
                  },
                  paragraph: {
                    class: Paragraph,
                    inlineToolbar: ['link']
                  },
                  table: Table,
                  quote: Quote
                },
                placeholder: 'Write something here...',
                inlineToolbar: true,
                hideToolbar: false
              })
            }
        }, [post])

        useEffect(() => {
          if (typeof window !== "undefined") {
            setIsMounted(true)
          }
        }, [])
      
        useEffect(() => {
          if (isMounted) {
            initEditor()
      
            return () => {
              ref.current?.destroy()
              ref.current = undefined
            }
          }
        }, [isMounted, initEditor]);

        if (!isMounted) {
          return null
        }


      async function onSubmit(data: FormData) {
        setIsSaving(true)
    
        const blockData = await ref.current?.save()
          console.log('this is block data', blockData)
        // const response = await fetch(`/api/posts/${post.id}`, {
        //   method: "POST",
        //   headers: {
        //     "Content-Type": "application/json",
        //   },
        //   body: JSON.stringify({
        //     title: data.title,
        //     content: blocks,
        //   }),
        // })
    
        setIsSaving(false)
    
        // if (!response?.ok) {
        //   return toast({
        //     title: "Something went wrong.",
        //     description: "Your post was not saved. Please try again.",
        //     variant: "destructive",
        //   })
        // }
    
        router.refresh()
    
        return 
        // toast({
        //   description: "Your post has been saved.",
        // })
      }
    

      

      return (
        <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col px-4 mx-auto gap-10">
        <div className="flex w-full items-center justify-between">
          <div className="flex items-center space-x-10">
          <Link href='/'
          className={cn(buttonVariants({variant: 'ghost'}))}
          >
            <>
            <Icons.chevronLeft className="mr-2 h-4 w-4" />
            Back
            </>
          </Link>
          <p className="text-sm text-muted-foreground">
          {post.published ? 'Published' : 'Draft'}
          </p>
          </div>
          <button type="submit" className={cn(buttonVariants())}>
            {isSaving && (
              <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
            )}
            <span>Save</span>
          </button>
        </div>
        <div className="prose prose-stone space-y-10  w-full dark:prose-invert">
        <TextareaAutosize 
        className="w-full resize-none appearance-none overflow-hidden bg-transparent text-3xl text-gray-700/80 font-bold focus:outline-none"
        autoFocus
        id="title"
        defaultValue={post.title}
        placeholder="Enter your post title"
        {...register("title")}
        />
         <Suspense fallback={<EditorSkeleton />}>
          <div id='editor' className="min-h-[500px]" />
      </Suspense> 
      {/* <p className="text-sm text-gray-500">
        Use{" "}
        <kbd className="rounded-md border bg-muted px-1 text-xs uppercase">
          Tab
        </kbd>
        to open the command menu.
      </p> */}
        </div>
        </div>

      </form>




        {/* <div className="mx-auto w-full h-screen px-8 my-20 flex items-start">
        <div className="w-full py-10">
        <TextareaAutosize 
        className="flex items-center text-center w-full appearance-none font-normal focus:outline-none resize-none border-2 border-gray-200 rounded-md py-5"
        autoFocus
        name="title"
        id="title"
        defaultValue={title}
        onChange={onTitleChange}
        placeholder="Enter your title"
        />
        </div>
        <div className="w-full ">
          <Suspense fallback={<TablePlaceholder />}>
          <div id='editor' className="min-h-[500px] border-red-500 border-2" />
      </Suspense>   
        </div>
        <Button onClick={hadleSave} />
        </div> */}
        </>
      )
}