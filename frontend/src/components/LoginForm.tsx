import { useState, useRef, ChangeEvent, FormEvent, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

interface LoginForm {
  onLogin: (username: string) => void;
}

export default function LoginForm  ({onLogin})  {
  const navigate = useNavigate();
  const [isUserInputActive, setUserInputActive] = useState(false)
  const [isPasswordInputActive, setPasswordInputActive] = useState(false)

  const userInputRef = useRef<HTMLInputElement | null>(null);
  const passwordInputRef = useRef<HTMLInputElement | null>(null);
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string | null>(null);

  const handleUsernameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  useEffect(() => {
    let userInput = userInputRef.current;
    let passwordInput = passwordInputRef.current;

    userInput = document.querySelector('#username')
    passwordInput = document.querySelector('#password')

    if (userInput) {
      userInput.addEventListener('input', (e: Event) => {
        const target = e.target as HTMLInputElement
        if (target.value != "") {
          setUserInputActive(true)
        } else {
          setUserInputActive(false)
        }
      })
    }

    if (passwordInput) {
      passwordInput.addEventListener('input', (e: Event) => {
        const target = e.target as HTMLInputElement
        if (target.value != "") {
          setPasswordInputActive(true)
        } else {
          setPasswordInputActive(false)
        }
      })
    }

  }, [])

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (username.trim() === '' || password.trim() === '') {
      setError('Login et mot de passe requis');
      console.log('Username and password are required');
    } else {
      const storedUsers = JSON.parse(localStorage.getItem("My-Todo-App-Users"));
      const storedUser = storedUsers.find(u => u.username === username)
      if (storedUser) {
        if (storedUser.password === password) {
          setError(null);
          onLogin(username);
          navigate('/todos');
        } else {
          setError('Identifiants incorrects');
          console.log('Invalid password');
        }
      } else {
        setError('Vérifiez vos identifiants');
        console.log('User not found');
      }
    }
  };

  return (
    <>
      <div className="globalPanel">

        <div className="leftPanel">
          <h1 className="h1-site-title"><strong>My TODO</strong>  App</h1>
          <form 
          onSubmit={handleSubmit}
          className="formBlock">
            <h3>Identifiez-vous</h3>
            <div className={`formGroup ${isUserInputActive ? "animation" : ""}`}>
              <label htmlFor="username">Utilisateur</label>
              <input
                 onChange={handleUsernameChange}
                type="text"
                required
                maxLength={16}
                id="username"
                name='username'
              />
            </div>
            <div className={`formGroup ${isPasswordInputActive ? "animation" : ""}`}>
              <label htmlFor="password">Mot de passe</label>
              <input
                onChange={handlePasswordChange}
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
              Pas encore de compte ? <a href="/register"> Inscrivez-vous maintenant</a>
            </div>
            {error && <div className="login-error-msg">{error}</div>}


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
  );
};
