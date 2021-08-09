import axios from 'axios';
import { useState } from 'react';
import './custom.css'

function Player() {
    // let [users, setUsers] = useState({});
    let [id, setId] = useState();
    let [name, setName] = useState('');
    let [userName, setUserName] = useState('');
    let [email, setEmail] = useState('');
    let [isClick,setIsClick] = useState(false);

    const hendleChange = (e) => {
        e.preventDefault();
        const id = document.getElementById('id').value;
        setId(id);
    }

    const loadData = (e) => {
        e.preventDefault();
        axios.get(`https://jsonplaceholder.typicode.com/users/${id}`).then((res) => {
            // setUsers(res.data);
            setName(res.data.name);
            setUserName(res.data.username);
            setEmail(res.data.email);
            setIsClick(true);
            console.log(res);
            // alert(` Name:${name}, User Name:${userName}, Email:${email}`);
        })
    }

    return (
        <>
            <div className="container mt-contain">
                <div className="forms-width p-3 bg-green text-dark border-radius shadow-lg">
                    <div className='form-center'>
                        <h3 className="text-color mb-4">Player Detail</h3>
                        <form onSubmit={loadData}>
                            <div className="input-group mb-3">
                                <span className="input-group-text">Id: </span>
                                <input type="text" className="form-control" name="id" id="id" onChange={hendleChange} />
                                <button type="submit" className="btn btn-success input-group-text">Find</button>
                            </div>
                        </form>
                        {
                            isClick ?
                        <div className="card text-white bg-dark mt-5 mb-3 shadow">
                            <div className="card-header">
                                <span className="fw-bold me-3">Player Id:</span> 
                                <span className="fw-light">{id}</span>
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">
                                    <span className="fw-bold me-3">Name:</span> 
                                    <span className="fw-light">{name}</span>
                                </h5>
                                <p className="card-text">
                                    <span className="fw-bold me-3">User Name:</span> 
                                    <span className="fw-light">{userName}</span>
                                </p>
                                <p className="card-text">
                                    <span className="fw-bold me-3">Email:</span> 
                                    <span className="fw-light">{email}</span>
                                </p>
                            </div>
                        </div> : ""
                        }
                    </div>
                </div>
            </div>
        </>
    )
}
export default Player;