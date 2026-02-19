// Create component User
// Accept name as prop
// Render <h2>Hello {name}</h2>
import './App.css'
import UserComponent from './components/props-app6';
function App()
{
    return(
        <>
            <UserComponent name='Param'/>
        </>
    )
}
export default App
