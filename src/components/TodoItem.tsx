"use client"

type TodoItemPropos = {
    id: string
    title: string
    complete: boolean
    toggleTodo: (id: string, complete: boolean) => void

}


export function  TodoItem({id, title, complete, toggleTodo}: TodoItemPropos){
    return <li className="flex gap-1 items-center">
        <input id={id}
         type="checkbox" 
         className="cursor-pointer peer"
         defaultChecked={complete}
         onChange={e => toggleTodo(id, e.target.checked)}
         />

        <label htmlFor={id} className="peer-checked:line-through">{title}</label>
    </li>
}