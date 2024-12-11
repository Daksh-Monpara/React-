import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { viewUser, deleteUser } from '../Redux/Action/action';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';


const View = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(viewUser());
    }, [dispatch]);

    const users = useSelector(state => state.crud.user);

    const deleteRecord = (id) => {
        dispatch(deleteUser(id));
        alert("Record deleted...");
    };

    return (
        <div>
           <header style={{backgroundColor : "rgb(68 68 68)", padding:"15px"}}>
                <div className="header d-flex justify-content-between align-items-center">
                    <div className="col-3 logo">
                        <h2 style={{ color: "#fff", fontSize: "50px" }} >Todo List</h2>
                    </div>

                    <div className="col-3  d-flex justify-content-end">
                        <Link to={`/add`} className="btn btn-primary" style={{ color: "#fff", width: "80px" }}>Add</Link>
                    </div>
                </div>
            </header>

            <div className="container">
                <div className="row col-8 mx-auto mt-5 shadow rounded" style={{backgroundColor:"rgb(244 246 246)"}}>

                    {users.map((val) => {
                        return (
                            <div className=" main-box d-flex align-items-center justify-content-around p-3" key={val.id}>
                                <div className="col-8">
                                    <div className="text-box" style={{fontSize:"18px"}}>{val.name}</div>
                                </div>
                                <div className="col-4 d-flex justify-content-end">
                                    <button onClick={() => deleteRecord(val.id)} className='btn btn-sm btn-danger' style={{fontSize:"18px"}}>Delete</button>
                                </div>
                            </div>
                        );
                    })}

                </div>
            </div>

        </div>
    );
};

export default View;
