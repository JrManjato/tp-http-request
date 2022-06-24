import "./Form.css"
import { useRef } from "react";
import { useState } from "react";
import axios from "axios";

export default function Form() {
  const ref = useRef(null);
  const refName = useRef(null);
  const refUsername = useRef(null);
  const refEmail = useRef(null);
  const refAdress = useRef(null);
  const refPhone = useRef(null);
  const refCompany = useRef(null);
  let [result, setResult] = useState([]);
  function Turn(){
    return(
        ref.current.style.display = "block"
    );
  }
  function Return(){
    return(
        ref.current.style.display = "none"
    );
  }
  
    return (
      <>
      <div className="primitif" ref={ref}>
      <button type="button" name="" id="" class="btn btn-secondary" onClick={Return}>X</button>
        <div className="post_form">
          <div className="form-group">
            <label for="">NAME:</label>
            <input type="text" class="form-control" aria-describedby="helpId" ref={refName}/>
          </div>
          <div className="form-group">
            <label for="">USERNAME:</label>
            <input type="text" class="form-control" aria-describedby="helpId" ref={refUsername}/>
          </div>
          <div className="form-group">
            <label for="">EMAIL:</label>
            <input type="text" className="form-control" aria-describedby="helpId" ref={refEmail}/>
          </div>
          <div className="form-group">
            <label for="">ADDRESS:</label>
            <input type="text" className="form-control" aria-describedby="helpId" ref={refAdress}/>
          </div>
          <div className="form-group">
            <label for="">PHONE:</label>
            <input type="text" className="form-control" aria-describedby="helpId" ref={refPhone}/>
          </div>
          <div className="form-group">
            <label for="">COMPANY:</label>
            <input type="text" className="form-control" aria-describedby="helpId" ref={refCompany}/>
          </div>
        </div>
        <div className="post">
        <button type="button" name="" id="" className="btn btn-primary btn-lg btn-block" onClick={ () => {
          const promise = axios.post("https://jsonplaceholder.typicode.com/users",{
              "name": refName.current.value,
              "username": refUsername.current.value,
              "email": refEmail.current.value,
              "address": {
                "street": "Kulas Light",
                "suite": "Apt. 556",
                "city": refAdress.current.value,
                "zipcode": "92998-3874",
                "geo": {
                  "lat": "-37.3159",
                  "lng": "81.1496"
                }
              },
              "phone": refPhone.current.value,
              "website": "hildegard.org",
              "company": {
                "name": refCompany.current.value,
                "catchPhrase": "Multi-layered client-server neural-net",
                "bs": "harness real-time e-markets"
              }
          });
          promise
              .then((response) => {
                console.log(response);
                setResult(response.data);
              })
              .catch((error) => {
                console.error(error);
              });
        }}>Envoyer</button>
        </div>
      </div> 
        <button type="button" name="" id="" className="btn btn-primary btn-lg btn-block" onClick={Turn}>Ajouter</button>
      </>
    );
  }