import Form from './components/form'
import {Info} from './/components/info'
import './components/style.css'
import { useState } from 'react'



function App() {

    const [ info,setInfo] = useState([])
    const [ state,setState] = useState("")
    return (
        <div>
            <Form setInfo={setInfo} setState={setState} />
            <Info info={info} state={state}/>
            
        </div>
    )
}

export default App