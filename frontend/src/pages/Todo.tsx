
import { RefObject, useEffect } from "react";
import { useNavigate } from "react-router-dom";

interface TodoProps {
 // todo: RefObject;
  onToggle: (id: Key) => void;
  onDelete: (id: Key) => void;
}

const Todo: React.FC<TodoProps> = ({ todo, onToggle, onDelete }) => {
let navigate = useNavigate()

const update = (id) => {
  console.log(id)
  navigate(`/todos/${todo.id}`)
}

// useEffect(()=>  {
// toto
// },[toto])



  return (
    <>
      <div className="block w-full rounded-lg border border-stone-900  text-surface shadow dark:bg-dark dark:text-black hover:shadow-[0_35px_60px_-15px_rgba(0,0,0,0.6)]">
        <div
          className={`bg-blueviolet text-white border-b-2 border-stone-300 px-6 py-3 text-center ${
            todo.completed ? "bg-gray-300 text-red-600 line-through" : ""
          }`}
        >
          <h2 className="inner">{todo.title}</h2>
        </div>
        <div className=" p-6">
          <span className="text-sm text-gray-600  mr-10">{todo.created_at}</span>
          <span className="text-lg text-red-600 mb-3 ml-10 mt-1 my-10">{todo.category}</span>

          <h5
            className={`mb-2 text-xl font-medium leading-tight text-success-600 ${
              todo.completed ? " text-red-600 line-through" : ""
            }`}
          >
            <span className="inner">{todo.title}</span>
          </h5>
          <p className="text-base text-success-600">
            {/* Some quick example text to build on the card title and make up the
              bulk of the card's content. */}
            {todo.description}
          </p>
        </div>
        <div
          key={todo.id}
          className={`w-full flex items-center p-4 border-b border-solid border-fuschia-500 ${
            todo.completed ? "bg-success-500 text-white" : ""
          }`}
        >
          <input
            className="todo-checkbox"
            type="checkbox"
            checked={todo.completed}
            onChange={() => onToggle(todo.id)}
          />
          <p className="ml-4 text-black-500">
            {" "}
            Tâche {todo.completed ? `complétée ` : ` en cours`}
          </p>
        </div>
        <div className="border-t-2 border-slate-400 px-6 py-3 ">
          <div className="flex items-center gap-2 justify-end">
            
            <button 
            className="text-yellow-900  bg-emerald-400  rounded px-3 hover:bg-sky-500"
            onClick={() =>{update(todo.id) } }
            >
              Modifier
              </button>
            <button
              onClick={() => onDelete(todo.id)}
              className="text-red-600 bg-indigo-200  rounded px-3 hover:bg-purple"
            >
              Supprimer
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Todo;
