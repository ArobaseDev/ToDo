import { useEffect, useState } from "react";
//import {Button, Form, Modal} from "react-bootstrap";
import {Modal, Ripple, initTWE} from 'tw-elements'

//import 'bootstrap/dist/css/bootstrap.min.css'
import '../assets/css/index.css'
import ImgAdd from '../assets/img/icons8-plus-188.png'

export default function TodoList() {
  const list = [
    {
      id: 1,
      title: "Faire la lessive et le repassage",
      description: " Lorem ipsum dolores ... ",
      completed: false,
      created_at: '01/07/2024'
    },
    {
      id: 2,
      title: "Task 2",
      description: " Lorem ipsum dolores ... ",
      completed: true,
      created_at: '01/07/2024'
    },
    {
      id: 3,
      title: "Task 3",
      description: " Lorem ipsum dolores ... ",
      completed: false,
      created_at: '01/07/2024'
    },
    {
      id: 4,
      title: "Task 2",
      description: " Lorem ipsum dolores ... ",
      completed: true,
      created_at: '01/07/2024'
    },
    {
      id: 5,
      title: "Task 3",
      description: " Lorem ipsum dolores ... ",
      completed: false,
      created_at: '01/07/2024'
    },
    {
      id: 6,
      title: "Task 2",
      description: " Lorem ipsum dolores ... ",
      completed: true,
      created_at: '01/07/2024'
    },
    {
      id: 7,
      title: "Laver la voiture",
      description: " Pour partir prévoir 2 litres de savon détergent... ",
      completed: false,
      created_at: '01/07/2024'
    },
    {
      id: 5,
      title: "Task 3",
      description: " Lorem ipsum dolores ... ",
      completed: false,
      created_at: '01/07/2024'
    },
    {
      id: 6,
      title: "Task 2",
      description: " Lorem ipsum dolores ... ",
      completed: true,
      created_at: '01/07/2024'
    },
    {
      id: 7,
      title: "Laver la voiture",
      description: " Pour partir prévoir 2 litres de savon détergent... ",
      completed: false,
      created_at: '01/07/2024'
    },
    {
      id: 5,
      title: "Task 3",
      description: " Lorem ipsum dolores ... ",
      completed: false,
      created_at: '01/07/2024'
    },
    {
      id: 6,
      title: "Task 2",
      description: " Lorem ipsum dolores ... ",
      completed: true,
      created_at: '01/07/2024'
    },
    {
      id: 7,
      title: "Laver la voiture",
      description: " Pour partir prévoir 2 litres de savon détergent... ",
      completed: false,
      created_at: '01/07/2024'
    },
  ];

  const [todos, setTodos] = useState(list);
  const [logIn, setLogIn] = useState(false);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    initTWE({Modal, Ripple});
  },[]);

  return (
    <>



      {/* <!-- Button trigger modal --> */}
<button
  type="button"
  className="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
  data-twe-toggle="modal"
  data-twe-target="#exampleModal"
  data-twe-ripple-init
  data-twe-ripple-color="light">
  Launch demo modal
</button>

{/* <!-- Modal --> */}
<div
  data-twe-modal-init
  className="fixed left-0 top-0 z-[1055] hidden h-full w-full overflow-y-auto overflow-x-hidden outline-none"
  id="exampleModal"
  tabindex="-1"
  aria-labelledby="exampleModalLabel"
  aria-hidden="true">
  <div
    data-twe-modal-dialog-ref
    className="pointer-events-none relative w-auto translate-y-[-50px] opacity-0 transition-all duration-300 ease-in-out min-[576px]:mx-auto min-[576px]:mt-7 min-[576px]:max-w-[500px]">
    <div
      className="pointer-events-auto relative flex w-full flex-col rounded-md border-none bg-black bg-clip-padding text-current shadow-4 outline-none dark:bg-surface-dark">
      <div
        className="flex flex-shrink-0 items-center justify-between rounded-t-md border-b-2 border-neutral-100 p-4 dark:border-white/10">
        <h5
          className="text-xl font-medium leading-normal text-surface dark:text-white"
          id="exampleModalLabel">
          Modal title
        </h5>
        <button
          type="button"
          className="box-content rounded-none border-none text-neutral-500 hover:text-neutral-800 hover:no-underline focus:text-neutral-800 focus:opacity-100 focus:shadow-none focus:outline-none dark:text-neutral-400 dark:hover:text-neutral-300 dark:focus:text-neutral-300"
          data-twe-modal-dismiss
          aria-label="Close">
          <span className="[&>svg]:h-6 [&>svg]:w-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 18L18 6M6 6l12 12" />
            </svg>
          </span>
        </button>
      </div>

      {/* <!-- Modal body --> */}
      <div className="relative flex-auto p-4 text-white" data-twe-modal-body-ref>
        Modal body text goes here.
        Modal body text goes here.
        Modal body text goes here.
        Modal body text goes here.
        Modal body text goes here.
        Modal body text goes here.
        Modal body text goes here.
        Modal body text goes here.
        Modal body text goes here.
      </div>

      {/* <!-- Modal footer --> */}
      <div
        className=" text-white flex flex-shrink-0 flex-wrap items-center justify-end rounded-b-md border-t-2 border-neutral-100 p-4 dark:border-white/10">
        <button
          type="button"
          className=" text-white inline-block rounded bg-primary-100 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-primary-700 transition duration-150 ease-in-out hover:bg-primary-accent-200 focus:bg-primary-accent-200 focus:outline-none focus:ring-0 active:bg-primary-accent-200 dark:bg-primary-300 dark:hover:bg-primary-400 dark:focus:bg-primary-400 dark:active:bg-primary-400"
          data-twe-modal-dismiss
          data-twe-ripple-init
          data-twe-ripple-color="light">
          Close
        </button>
        <button
          type="button"
          className=" text-white ms-1 inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
          data-twe-ripple-init
          data-twe-ripple-color="light">
          Save changes
        </button>
      </div>
    </div>
  </div>
</div>


{/* ******* */}



      
      <div className="header">
      <h1 className="h1-site-title"><strong>My TODO</strong>  App</h1>
      <img src={ImgAdd} className="text-white bg-red add-todo" width={50} alt="" onClick={handleShow} />
    </div>
      <div className="container grid grid-cols-2 w-1/1 gap-5 h-1/4">
        {todos.map((item) => (
          <div className="block w-full rounded-lg border border-stone-900  text-surface shadow dark:bg-dark dark:text-black hover:shadow-[0_35px_60px_-15px_rgba(0,0,0,0.6)]">
            <div className={`bg-blueviolet text-white border-b-2 border-stone-300 px-6 py-3 text-center ${
                item.completed ? "bg-gray-300 text-red-600 line-through" : ""
              }`}><span className="inner">{item.title}</span></div>
            <div className=" p-6">
              <p className="text-sm text-gray-600 mb-3">{item.created_at}</p>
              

              <h5 className={`mb-2 text-xl font-medium leading-tight text-success-600 ${
                item.completed ? " text-red-600 line-through" : ""
              }`}>
              <span className="inner">{item.title}</span>
            </h5>
            <p className="text-base text-success-600">
              {/* Some quick example text to build on the card title and make up the
              bulk of the card's content. */}
              {item.description}
            </p>

            </div>
            <div
              key={item.id}
              className={`w-full flex items-center p-4 border-b border-solid border-fuschia-500 ${
                item.completed ? "bg-danger-500 text-blue-600" : ""
              }`}
            >
              <input
              className="todo-checkbox"
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
              <p className="ml-4"> Tâche {item.completed ? `terminée ` : ` à effectuer` }</p>
              
            </div>
            <div className="border-t-2 border-slate-400 px-6 py-3 ">
            <div className="flex items-center gap-2 justify-end">
                <button className="text-red-600 bg-indigo-200  rounded px-3 hover:bg-purple">Modifier</button>
                <button className="text-red-600 bg-indigo-200  rounded px-3 hover:bg-purple">Supprimer</button>
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
