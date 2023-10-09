import './App.css'
import { RoutesData } from './routes'
import {Routes,Route} from "react-router-dom";

function App() {
  
  return (
     <>
    <Routes>
      {RoutesData.map(({path,element:Component},i:number)=>(
       <Route key={i} path={path} element={<Component/>} />

      ))}
    </Routes>
    </>
  )
}

export default App
