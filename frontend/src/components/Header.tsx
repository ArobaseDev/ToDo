import iconAddTask from '../assets/img/plus.svg'

export default function Header() {
  return (
    <>
    <div className="header">
      <h1 className="h1-site-title"><strong>My TODO</strong>  App</h1>
      <img src={iconAddTask} className="text-white bg-red add-todo" width={50} alt="" />
    </div>
    </>
  )
}