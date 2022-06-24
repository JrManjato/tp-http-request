import axios from "axios";
import React, { useState } from "react";

export function Card(props) {
  const { title, children, button } = props;
  const [name, setName] = useState('');
  const [username, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [street, setStreet] = useState('');
  const [city, setCity] = useState('');
  const [website, setWebsite] = useState('');
  const [company, setCompany] = useState('');
  const [defclass, setDefclass] = useState('parent cacher')

  function toggles() {
    defclass === 'parent cacher' ? setDefclass('parent') : setDefclass('parent cacher')
  }

  // setting state with the value in the input
  function handleChangeName(e) {
    setName(e.target.value);
  }
  function handleChangeUserName(e) {
    setUserName(e.target.value);
  }
  function handleChangeEmail(e) {
    setEmail(e.target.value);
  }
  function handleChangeStreet(e) {
    setStreet(e.target.value);
  }
  function handleChangeCity(e) {
    setCity(e.target.value);
  }
  function handleChangeWebsite(e) {
    setWebsite(e.target.value);
  }
  function handleChangeCompany(e) {
    setCompany(e.target.value);
  }
  function SendPost() {
    defclass === 'parent cacher' ? setDefclass('parent') : setDefclass('parent cacher');
    const promise = axios.post("https://jsonplaceholder.typicode.com/users", {
      name: name,
      username: username,
      email: email,
      address: {
        street: street,
        city: city,
        zipcode: "",
        geo: {
          lat: "",
          lng: "",
        }
      },
      phone: "",
      website: website,
      company: {
        name: company,
        catchPhrase: "",
        bs: ""
      }
    })
    promise.then((response) => {
      console.log(response)
    })
      .catch((err) => {
        console.log(err);
      })
  }
  return (
    <>
      <div className="card mb-4">
        {title || button ? (
          <div className="card-header">
            <i className="fas fa-table me-1"></i>
            {title}
            <button className="btn btn-primary" onClick={toggles}>ADD</button>
            <div className={defclass}>
              <div className="madal-conteneur" >
                <div className="modal-window">
                  <p>
                    <label>Name</label> : <input type="text"
                      name="name" onChange={handleChangeName} />
                  </p>
                  <p>
                    <label>UserName</label> : <input type="text"
                      name="username" onChange={handleChangeUserName} />
                  </p>
                  <p>
                    <label>Email</label> : <input type="text"
                      name="email" onChange={handleChangeEmail} />
                  </p>
                  <p>
                    <label>Street</label> : <input type="text"
                      name="street" onChange={handleChangeStreet} />
                  </p>
                  <p>
                    <label>City</label> : <input type="text"
                      name="city" onChange={handleChangeCity} />
                  </p>
                  <p>
                    <label>Website</label> : <input type="text"
                      name="website" onChange={handleChangeWebsite} />
                  </p>
                  <p>
                    <label>Company Name</label> : <input type="text"
                      name="company" onChange={handleChangeCompany} />
                  </p>
                  <button className="btn btn-primary" onClick={SendPost} id="Addbutton">{button}</button>
                </div>
              </div>
            </div>
          </div>
        ) : null}
        <div className="card-body">{children}</div>
      </div>
    </>
  );
}
