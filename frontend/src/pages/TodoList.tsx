import { useEffect, useState } from "react";
import '../assets/css/index.css'

export default function TodoList() {
  const list = [
    {
      id: 1,
      title: "Faire la lessive et le repassage",
      description: " Lorem ipsum dolores ... ",
      completed: false,
    },
    {
      id: 2,
      title: "Task 2",
      description: " Lorem ipsum dolores ... ",
      completed: true,
    },
    {
      id: 3,
      title: "Task 3",
      description: " Lorem ipsum dolores ... ",
      completed: false,
    },
  ];

  const [todos, setTodos] = useState(list);
  const [logIn, setLogIn] = useState(false);

  return (
    <>
      <div className="container flex  justify-center flex-column flex-center w-1/1 gap-5 h-1/4">
        {todos.map((item) => (
          <div className="block w-full rounded-lg border border-success-600 bg-transparent text-surface shadow-secondary-1 dark:bg-surface-dark dark:text-white">
            <div className="border-b-2 border-success-600 px-6 py-3 text-center">{item.title}</div>
            <div className="ici p-6">
              <p className="text-sm text-gray-600">{item.description}</p>
              

              <h5 className="mb-2 text-xl font-medium leading-tight text-success-600">
              Success card title
            </h5>
            <p className="text-base text-success-600">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>

            </div>
            <div
              key={item.id}
              className={`w-full flex items-center p-4 border-b border-solid border-gray-200 ${
                item.completed ? "bg-success-800 text-red-200" : ""
              }`}
            >
              <input
                type="checkbox"
                checked={item.completed}
                onChange={() => {
                  setTodos(
                    todos.map((todo) =>
                      todo.id === item.id
                        ? { ...todo, completed: !todo.completed }
                        : todo
                    )
                  );
                }}
              />
              <p className="ml-4">{item.title}</p>
              
            </div>
            <div className="border-t-2 border-success-600 px-6 py-3">
            <div className="flex items-center gap-2">
                <button className="text-red-600">Delete</button>
              </div>
            </div>
          </div>
        ))}


        {/* <div className="block w- rounded-lg border border-success-600 bg-transparent text-surface shadow-secondary-1 dark:bg-surface-dark dark:text-white">
          <div className="border-b-2 border-success-600 px-6 py-3">Header</div>
          <div className="p-6">
            <h5 className="mb-2 text-xl font-medium leading-tight text-success-600">
              Success card title
            </h5>
            <p className="text-base text-success-600">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
          <div className="border-t-2 border-success-600 px-6 py-3">Footer</div>
        </div> */}
      </div>
    </>
  );
}
