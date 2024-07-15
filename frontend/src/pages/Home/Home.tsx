import LoginForm from '../../components/LoginForm'
import './home.css'

export default function Home() {
return (

  <>
<LoginForm 
onLogin={(username: string) => console.log(`Logged in as ${username}`)}
/>
</>
)

}


