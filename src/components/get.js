import axios from "axios";
import React, { useEffect, useState } from "react";

export function Get() {
    var datas = [];
    let [result, setResult] = useState([]);
    const [defclass, setDefclass] = useState('parent cacher')
    const [name, setName] = useState('');
    const [username, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [street, setStreet] = useState('');
    const [city, setCity] = useState('');
    const [website, setWebsite] = useState('');
    const [company, setCompany] = useState('');

    //This useeEffect do the request GET with AXIOS
    useEffect(() => {
        const promise = axios.get("https://jsonplaceholder.typicode.com/users");
        promise.then((response) => {
            setResult(response.data);
        }).catch((err) => {
            console.log(err);
        })
    }, [])

    // This function gets all informations on each cell<tr>
    function testing(e) {
        defclass === 'parent cacher' ? setDefclass('parent') : setDefclass('parent cacher');
        var target = e.target;
        console.log(target.nodeName); // TD
        console.log(target.parentNode); // <tr> <td></td> <td></td> </tr>
        while (target && target.nodeName !== "TR") {
            target = target.parentNode;
        }
        if (target) {
            var cells = target.getElementsByTagName("td");
            for (var i = 0; i < cells.length; i++) {
                datas.push(cells[i].innerHTML);
            }
        }
        setName(datas[0]); setUserName(datas[1]); setEmail(datas[2]); setStreet(datas[3]);
        setCity(datas[4]); setWebsite(datas[5]); setCompany(datas[6]);

    }
    //The function below do the request PATCH with AXIOS when the button Update is clicked
    function Patch() {
        defclass === 'parent cacher' ? setDefclass('parent') : setDefclass('parent cacher');
        const promise = axios.patch("https://jsonplaceholder.typicode.com/users/1", {
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
            console.log(response);
        })
            .catch((err) => {
                console.log(err);
            })
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
    return (
        <div>
            <p>this is : {name}  </p>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Usename</th>
                        <th>Email</th>
                        <th>Street</th>
                        <th>City</th>
                        <th>Website</th>
                        <th>Company Name</th>
                    </tr>
                </thead>
                <tbody onClick={testing}>
                    {result.map((item) => (
                        <tr key={`${item.id}-${item.name}`}>
                            <td>{item.name}</td>
                            <td>{item.username}</td>
                            <td>{item.email}</td>
                            <td>{item.address.street}</td>
                            <td>{item.address.city}</td>
                            <td>{item.website}</td>
                            <td>{item.company.name}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <>
                <div className={defclass}>
                    <div className="madal-conteneur" >
                        <div className="modal-window">
                            <p>
                                <label>Name</label> : <input type="text"
                                    name="pseudo" defaultValue={name} onChange={handleChangeName} />
                            </p>
                            <p>
                                <label>UserName</label> : <input type="text"
                                    name="username" defaultValue={username} onChange={handleChangeUserName} />
                            </p>
                            <p>
                                <label>Email</label> : <input type="text"
                                    name="email" defaultValue={email} onChange={handleChangeEmail} />
                            </p>
                            <p>
                                <label>Street</label> : <input type="text"
                                    name="street" defaultValue={street} onChange={handleChangeStreet} />
                            </p>
                            <p>
                                <label>City</label> : <input type="text"
                                    name="city" defaultValue={city} onChange={handleChangeCity} />
                            </p>
                            <p>
                                <label>Website</label> : <input type="text"
                                    name="website" defaultValue={website} onChange={handleChangeWebsite} />
                            </p>
                            <p>
                                <label>Company Name</label> : <input type="text"
                                    name="company" defaultValue={company} onChange={handleChangeCompany} />
                            </p>
                            <button className="btn btn-primary" onClick={Patch} id="Addbutton">Update</button>
                        </div>
                    </div>
                </div>
            </>
        </div>
    );
}