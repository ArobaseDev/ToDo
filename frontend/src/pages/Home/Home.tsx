//import { useState } from 'react'

import { redirect } from 'react-router-dom'
import './home.css'

export default function Home() {

  return (
    <>
    <div className="globalPanel">

<div className="leftPanel">
  <h1 className="h1-site-title"><strong>My TODO</strong>  App</h1>
  <form className="formBlock">
    <h3>Identifiez-vous</h3>
    <div className="formGroup">
      <label htmlFor="user">Utilisateur</label>
      <input 
      type="text" 
      required 
      maxLength={16}
      id="user"
      />
    </div>
    <div className="formGroup">
      <label htmlFor="pwd">Mot de passe</label>
      <input 
      type="password" 
      required 
      maxLength={16}
      id="pwd"/>
    </div>
    <div className="formGroup">
      <input type="submit" value="Login" className="btn-submit"/>
    </div>
    <div className="register">
      Pas encore de compte ? <a href="/register"> Inscrivez-vous maintenant ! </a>
    </div>
    

  </form>
</div>
<div className="rightPanel">
  <div className="illustration">
    <img  data-alt="image check-list" className="rightPanel-img"/>
  </div>
  <h2 type="button" onClick={() =>redirect('/todos-list')} >My TODO App !</h2>
</div>

</div>

    </>
  )
}


