import axios from 'axios';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { useEffect, useState } from 'react';
import './custom.css';
import { useParams } from 'react-router-dom';

function PlayerUpdate(props) {

    const [id, setId] = useState();
    const [name, setName] = useState('');
    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');

    const params = useParams();
    console.log(params.id);

    const headers = {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
    }

    const loadData = () => {
        let id = params.id;
        axios.get(`https://jsonplaceholder.typicode.com/users/${id}`).then(res => {
            let player = res.data;
            console.log(res)
            console.log(player);
            setId(player.id);
            setName(player.name);
            setUserName(player.username);
            setEmail(player.email);
        })
    }

    useEffect(() => {
        loadData();
    }, []);



    const handleChange = (e) => {
        e.preventDefault();
        const id = document.getElementById('id').value;
        const name = document.getElementById('name').value;
        const username = document.getElementById('user-name').value;
        const email = document.getElementById('email').value;
        setId(params.id);
        setName(name);
        setUserName(username);
        setEmail(email);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const user = {
            name,
            userName,
            email
        };
        axios.put(`https://jsonplaceholder.typicode.com/users/${id}`, user, { headers: headers })
            .then((res) => {
                console.log(res.data);
                alert(`Update player successfully 
            Name:${name}, User Name:${userName}, Email: ${email}`);
            })
    }

    return (
        <>
            <div className="container mt-contain">
                <div className="form-center">
                    <div className="p-4 bg-green text-dark border-radius shadow-lg">
                        <form onSubmit={handleSubmit}>
                            <h1 className="text-center mb-4 text-color">Update Player</h1>
                            <div className="input-group mb-3">
                                <label htmlFor="id" className="input-group-text">Id:</label>
                                <input type="text" className="form-control" name="id" id="id" value={id} onChange={handleChange} />
                            </div>
                            <div className="input-group mb-3">
                                <label htmlFor="name" className="input-group-text">Name:</label>
                                <input type="text" className="form-control" name="name" id="name" value={name} onChange={handleChange} />
                            </div>
                            <div className="input-group mb-3">
                                <label htmlFor="user-name" className="input-group-text">User Name:</label>
                                <input type="text" className="form-control" name="user-name" value={userName} id="user-name" onChange={handleChange} />
                            </div>
                            <div className="input-group mb-3">
                                <label htmlFor="email" className="input-group-text">Email:</label>
                                <input type="email" className="form-control" name="email" value={email} id="email" onChange={handleChange} />
                                {/* <input type="email" name="email" id="email"  onChange={(e)=>setEmail(e.target.value)} /> */}
                            </div>
                            <div className="d-grid gap-2 text-center mt-4">
                                <button type="submit" className="btn btn-success">Update Player</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
export default PlayerUpdate;