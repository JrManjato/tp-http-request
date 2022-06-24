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
    useEffect(() => {
        const promise = axios.get("https://jsonplaceholder.typicode.com/users");
        promise.then((response) => {
            setResult(response.data);
        }).catch((err) => {
            console.log(err);
        })
    }, [])
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
    return (
        <div>
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
                                    name="pseudo" defaultValue={name} />
                            </p>
                            <p>
                                <label>UserName</label> : <input type="text"
                                    name="username" defaultValue={username} />
                            </p>
                            <p>
                                <label>Email</label> : <input type="text"
                                    name="email" defaultValue={email} />
                            </p>
                            <p>
                                <label>Street</label> : <input type="text"
                                    name="street" defaultValue={street} />
                            </p>
                            <p>
                                <label>City</label> : <input type="text"
                                    name="city" defaultValue={city} />
                            </p>
                            <p>
                                <label>Website</label> : <input type="text"
                                    name="website" defaultValue={website} />
                            </p>
                            <p>
                                <label>Company Name</label> : <input type="text"
                                    name="company" defaultValue={company} />
                            </p>
                            <button className="btn btn-primary" onClick={testing} id="Addbutton">Update</button>
                        </div>
                    </div>
                </div>
            </>
        </div>
    );
}