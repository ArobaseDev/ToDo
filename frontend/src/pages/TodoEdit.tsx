/* eslint-disable @typescript-eslint/no-unused-vars */

import { useState, useEffect, FormEvent } from "react"
import { useParams, useNavigate } from "react-router-dom"

interface Todo {
  id: string;
  title: string;
  description?: string;
  category?: string;
  complete?: boolean;
  created_at: Date
}

export default function TodoSingle () {

const navigate = useNavigate()
  const {id} = useParams()
 const [, setTodo] = useState<string>('')
  const [title, setTitle] = useState<string>('');
  const [category, setCategory] = useState<string>('');
  const [description, setDescription] = useState<string>('');
 
  useEffect(() => {
    const storedTodos = localStorage.getItem('todos')
    if (storedTodos) {
      const todos = JSON.parse(storedTodos)
      
      const foundTodo = todos.find((todo: Todo ) => todo.id == id );
      if (foundTodo) {
        setTodo(foundTodo);
        setTitle(foundTodo.title || '');
        setCategory(foundTodo.category || '');
        setDescription(foundTodo.description || '');
      }
    }
  }, [id]);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    const todos = (localStorage.getItem('todos'))
    if (todos) {
     const storedTodos = JSON.parse(todos);
     const updatedTodos = storedTodos.map((todo: Todo) => {
       if (todo.id == id) {
         return { ...todo, title, category, description };
       }
       return todo;
     });
     localStorage.setItem('todos', JSON.stringify(updatedTodos));
     navigate(-1);
    }
    
  }

// Validation et mise à jour de la todo
  const handleUpdate = (e: FormEvent<HTMLFormElement>) => {
   e.preventDefault();
   const todos = (localStorage.getItem('todos'))
   if (todos) {
    const storedTodos = JSON.parse(todos);
    const updatedTodos = storedTodos.map((todo: Todo) => {
      if (todo.id == id) {
        return { ...todo, title, category, description };
      }
      return todo;
    });
    localStorage.setItem('todos', JSON.stringify(updatedTodos));
    navigate(-1);
   }
    
  };

  return(
   <>
   <div className="header">
      <h1 className="h1-site-title"><strong>My TODO</strong>  App</h1>
      
    </div>
   <div className="bg-white border border-4 rounded-lg shadow relative m-10 w-[70%] mx-auto">

<div className="flex items-start justify-between p-5 border-b rounded-t ">
    <h3 className="text-xl font-semibold text-red-500">
        Modification de la tâche
    </h3>
    <button 
    type="button" 
    className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center" 
    onClick={ () => navigate(-1) }
    >
       <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
    </button>
    {title}
</div>

<div className="p-6 space-y-6">
    <form  onSubmit={ handleUpdate}>
        <div className="grid grid-cols-6 gap-6">
            <div className="col-span-6 sm:col-span-3">
                <label htmlFor="title" className="text-sm font-medium text-gray-900 block mb-2">Titre</label>
                <input 
                type="text" 
                name="title"
                 id="title" 
                  value={title}
                  onChange={e => setTitle(e.target.value)}
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" 
               
                 />
            </div>
            <div className="col-span-6 sm:col-span-3">
                <label htmlFor="category" className="text-sm font-medium text-gray-900 block mb-2">Categorie</label>
                <input 
                type="text" 
                name="category" 
                id="category" 
                  value={category}
                  onChange={e => setCategory(e.target.value)}
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" 
                 />
            </div>
  
            <div className="col-span-full">
                <label htmlFor="description" className="text-sm font-medium text-gray-900 block mb-2">Description</label>
                <textarea 
                id="description"
                  value={description} 
                rows={2}
                 className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-4" 
                 placeholder="Details"
                  onChange={e => setDescription(e.target.value)}
                 >
                </textarea>
            </div>
        </div>
    </form>
</div>

<div className="p-6 gap-3 border-t border-gray-200 rounded-b flex flex-row justify-center">
    {/* <button 
     onClick={ () => navigate(-1) }
    className="text-white bg-orange-500 hover:bg-orange-700 focus:ring-4 focus:ring-cyan-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center" 
    type="button"
    >Annuler
    </button> */}
    <button 
    onClick={handleClick}
    className="btn-xl text-white bg-cyan-600 hover:bg-cyan-700 focus:ring-4 focus:ring-cyan-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center" 
    type="submit"
    >
      Modifier
      </button>
</div>

</div></>
  )
}