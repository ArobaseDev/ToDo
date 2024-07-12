import { useEffect, useState } from 'react'
import './home.css'



export default function Home() {
  const[isUserInputActive, setUserInputActive ] = useState(false)
  const[isPasswordInputActive, setPasswordInputActive ] = useState(false)

useEffect(() => {
 
const userInput = document.querySelector('#username')
const passwordInput = document.querySelector('#password')
 userInput.addEventListener('input', (e) => {
 if(e.target.value !="") {
  setUserInputActive(true)
 }else {
  setUserInputActive(false)
 }
  })
  passwordInput.addEventListener('input', (e) => {
    if (e.target.value !="") {
      setPasswordInputActive(true)
    } else {
      setPasswordInputActive(false)
    }
  })
   
},[isUserInputActive, isPasswordInputActive])

const handleSubmit = () => {

  console.log(first)
}


  return (
    <>
      <div className="globalPanel">

        <div className="leftPanel">
          <h1 className="h1-site-title"><strong>My TODO</strong>  App</h1>
          <form className="formBlock">
            <h3>Identifiez-vous</h3>
            <div className={`formGroup ${isUserInputActive ? "animation" : ""}`}>
              <label htmlFor="username">Utilisateur</label>
              <input
                type="text"
                required
                maxLength={16}
                id="username"
                name='password'
              />
            </div>
            <div className={`formGroup ${isPasswordInputActive ? "animation" : ""}`}>
              <label htmlFor="password">Mot de passe</label>
              <input
                type="password"
                name='password'
                required
                maxLength={16}
                id="password" />
            </div>
            <div className="formGroup">
              <input type="submit" value="Login" className="btn-submit" />
            </div>
            <div className="register">
              Pas encore de compte ? <a href="/register"> Inscrivez-vous maintenant ! </a>
            </div>


          </form>
        </div>
        <div className="rightPanel">
          <div className="illustration">
            <img data-alt="image check-list" className="rightPanel-img" />
          </div>
          <h2>My TODO App !</h2>
        </div>

      </div>



    </>
  )
}


