import { prisma } from '@/db'
import { redirect } from 'next/navigation'
import Link from 'next/link'
import React from 'react'

async function createTodo(data: FormData){
  "use server"

  const title = data.get("title")?.valueOf()
  // check if the title is a string
  if(typeof title !== "string" || title.length === 0){
    throw new Error("invalid Title")
  }

  await prisma.todo.create({data: {title: title, complete: false}})
  redirect("/")

  // console.log("Hi")
}


export default function Page() {
  return (
    <>
      <header className='flex justify-between items-center mb-4'>
        <h1 className='text-2xl'>New</h1>
      </header>

      <form action={createTodo} className='flex gap-2 flex-col'>
        <input type='text' name='title' 
        className='border border-slate-300 bg-transparent rounded px-2 py-1 outline-none focus-within:border-slate-100'/>

        <div className='flex gap-1 justify-end'>
          <Link href=".." className='border border-slate-300 bg-transparent rounded px-2 py-1 outline-none focus-within:border-slate-100'>
            Cancel 
            </Link>

          <button type='submit'
          className='border border-slate-300 bg-transparent rounded px-2 py-1 outline-none focus-within:border-slate-100'>
            Create
          </button>

        </div>
      </form>
    </>
  )
}
