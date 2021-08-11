import axios from 'axios';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { useState } from 'react';

function PlayerDelete() {

    const [id, setId] = useState();
    // const [users, setUsers] = useState({});
    const [isClick, setIsClick] =useState(false);

    const headers = {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
    }

    const handleChange = (e) => {
        e.preventDefault();
        const id = document.getElementById('id').value;
        setId(id);
    }

    const onFocus=()=>{
        setId();
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const user = {
            id
        };
        axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`, user, { headers: headers })
            .then((res) => {
                console.log(res);
                // setUsers(res.data);
                setIsClick(true);
                // alert(`Delete player successfully with ID: ${id}`);
            })
    }

    return (
        <>
            <div className="container mt-contain">
                <div className="forms-width p-3 bg-green text-dark border-radius shadow-lg animate__animated animate__zoomIn">
                    <div className="form-center">
                        <form onSubmit={handleSubmit}>
                            <h1 className="text-center text-color mb-4 animate__animated animate__flash">Delete Player</h1>
                            <div className="input-group mb-3">
                                <span className="input-group-text">Id: </span>
                                <input type="text" className="form-control" name="id" id="id" onFocus={onFocus} onChange={handleChange} />
                                <button type="submit" className="btn btn-success input-group-text">Delete Player</button>
                            </div>
                        </form>
                        {
                            isClick ? <p>Delete player successfully with ID: {id}</p> : ""
                        }
                    </div>
                </div>
            </div>
        </>
    )
}
export default PlayerDelete;