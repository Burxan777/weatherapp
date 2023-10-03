import axios from "axios"
import {   useState } from "react"




export default function  Form({setInfo,setState}){
    const [city,setCity] = useState("")

   
    


    const handleChange = async () =>{
        try {
            const api = '3c426922c2b1dc1b7ec8940ea0d9fb91'
            const baseUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api}&units=metric&lang=tr`
          await  axios(baseUrl).then(res => setInfo(res.data));
            setState(true)
            
        } catch (error) {
        alert("bele bir Olke ve ya seher  yoxdur")
        }
      
    }
   

    
return(
    <div>
        <h1>Hava Proqnozu</h1>
        <form onSubmit={(e) => {e.preventDefault(); handleChange()}}>
            <div className="form">
                <input onChange={(e)=>setCity(e.target.value)} className="inputText" type="text" placeholder="Şəhər adı yazın"/>
            </div>
            <div className="btnDiv">
                <button type="submit" className="btn">Goster</button>
            </div>
        </form>
    </div>
)

}