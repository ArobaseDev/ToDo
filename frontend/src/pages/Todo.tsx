 
 
 const Todo = ({ todo, onToggle, onDelete}) => {
  return (
    <>
     
        <div className="block w-full rounded-lg border border-stone-900  text-surface shadow dark:bg-dark dark:text-black hover:shadow-[0_35px_60px_-15px_rgba(0,0,0,0.6)]">
          <div className={`bg-blueviolet text-white border-b-2 border-stone-300 px-6 py-3 text-center ${todo.completed ? "bg-gray-300 text-red-600 line-through" : ""
            }`}><span className="inner">{todo.title}</span></div>
          <div className=" p-6">
            <p className="text-sm text-gray-600 mb-3">{todo.created_at}</p>


            <h5 className={`mb-2 text-xl font-medium leading-tight text-success-600 ${todo.completed ? " text-red-600 line-through" : ""
              }`}>
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
            className={`w-full flex items-center p-4 border-b border-solid border-fuschia-500 ${todo.completed ? "bg-danger-500 text-blue-600" : ""
              }`}
          >
            <input
              className="todo-checkbox"
              type="checkbox"
              checked={todo.completed}
            onChange={() => onToggle(todo.id)}
              // onChange={() => {
              //   setTodos(
              //     todos.map((todo) =>
              //       todo.id === todo.id
              //         ? { ...todo, completed: !todo.completed }
              //         : todo
              //     )
              //   );
              // }}
            />
            <p className="ml-4"> Tâche {todo.completed ? `terminée ` : ` à effectuer`}</p>

          </div>
          <div className="border-t-2 border-slate-400 px-6 py-3 ">
            <div className="flex items-center gap-2 justify-end">
              <button className="text-red-600 bg-indigo-200  rounded px-3 hover:bg-purple">Modifier</button>
              <button onClick={() => onDelete(todo.id)} className="text-red-600 bg-indigo-200  rounded px-3 hover:bg-purple">Supprimer</button>
            </div>
          </div>
        </div>
    </>
  )
}
export default Todo;