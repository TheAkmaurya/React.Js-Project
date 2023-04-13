import React, { useState } from "react";
import "./Todo.css";
import DisplayData from "./DisplayData";


function Todo() {
    const [task, setTask] = useState("");
    const [data, setData] = useState([]);
    function handler(e) {
        // console.log(e);
        setTask(e.target.value);
    }


    const submitHandler = (e) => {
        e.preventDefault();
        // console.log("submit");
        const newData = task;
        setData([...data, newData]);
        setTask("");
    }

    const deleteItem = (a) => {
        const finalData = data.filter((currElem, index) => {
            return index !== a;
        })
        setData(finalData);
    }
    return (
        <div className="container">
            <div className="row justify-content-center align-items-center main-row">
                <div className="col shadow main-col bg-white">
                    <div className="row bg-primary text-whtie">
                        <div className="col p-2">
                            <h4 className="text-white text-center">Todo App</h4>
                        </div>
                    </div>
                    <form onSubmit={submitHandler}>
                        <div className="row justify-content-between text-whtie p-2">
                            <div className="form-group flex-fill mb-2 col-9">
                                <input id="todo-input" type="text" className="form-control" value={task} onChange={handler} placeholder="Write Item" />
                            </div>
                            <button type="submit" className="btn btn-primary mb-2 ml-2 col-3">Add Todo</button>
                        </div>
                    </form>
                    {data.map((value, index) => {
                        return <DisplayData
                            key={index}
                            ind={index}
                            task={value}
                            onSelect={deleteItem}
                        />
                    })}
                </div>
            </div>
        </div>
    );
}

export default Todo;