


export default function Register () {
  return (
    <>
    <div className="header">
       <h1 className="h1-site-title"><strong>My TODO</strong>  App</h1>
       <h3 className="text-xl font-semibold text-red-500 align-center">
         INSCRIPTION
     </h3>
       
     </div>
    <div className="bg-white border border-4 rounded-lg shadow relative m-10 ">
 
 <div className="flex items-start justify-between p-5 border-b rounded-t ">
     <h3 className="text-xl font-semibold text-red-500 align-center">
         Créé votre compte
     </h3>
     <button type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center" data-modal-toggle="product-modal">
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
     </button>
 </div>
 
 <div className="p-6 space-y-6">
     <form action="#">
         <div className="grid grid-cols-6 gap-6">
             <div className="col-span-6 sm:col-span-3">
                 <label htmlFor="username" className="text-sm font-medium text-gray-900 block mb-2">Nom d'utilisateur</label>
                 <input type="text" name="username" id="username" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" placeholder="Choisissez un nom d'utilisateur" />
             </div>
             <div className="col-span-6 sm:col-span-3">
                 <label htmlFor="email" className="text-sm font-medium text-gray-900 block mb-2">Adresse email</label>
                 <input type="text" name="email" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" placeholder="mail@mail.fr" />
             </div>
             <div className="col-span-6 sm:col-span-3">
                 <label htmlFor="password" className="text-sm font-medium text-gray-900 block mb-2">Mot de passe</label>
                 <input type="password" name="password" id="password" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" placeholder="Entrer un mot de passe" />
             </div>
             <div className="col-span-6 sm:col-span-3">
                 <label htmlFor="password_confirm" className="text-sm font-medium text-gray-900 block mb-2">Confirmation du mot de passe</label>
                 <input type="password" name="password_confirm" id="password_confirm" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" placeholder="Ressaisissez votre mot de passe" />
             </div>
         </div>
     </form>
 </div>
 
 <div className="p-6 gap-3 border-t border-gray-200 rounded-b flex flex-row justify-center">

     <button 
     className="text-white bg-red-600 hover:bg-red-700 focus:ring-4 focus:ring-cyan-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center" 
     type="button">Annuler</button>
     <button 
     className="text-white bg-cyan-600 hover:bg-cyan-700 focus:ring-4 focus:ring-cyan-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center" 
     type="submit">Enregistrer</button>
 </div>
 
 </div></>
  )
}