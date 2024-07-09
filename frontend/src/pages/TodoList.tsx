import { useEffect, useState } from "react";
import {Button, Form, Modal} from "react-bootstrap";

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

  return (
    <>
          {/* <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button> */}

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Ajouter une tâche</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="addTodoForm.ControlInput1">
              <Form.Label>Titre</Form.Label>
              <Form.Control
                type="text"
                autoFocus
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="addTodoForm.ControlTextarea1"
            >
              <Form.Label>Description</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            Annuler
          </Button>
          <Button variant="info" onClick={handleClose}>
            Valider
          </Button>
        </Modal.Footer>
      </Modal>
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
