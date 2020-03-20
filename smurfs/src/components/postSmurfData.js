import React, {useState} from "react";
import axios from "axios";

export const PostSmurfData = () => {

    const [smurf, setSmurf] = useState({
        name: "",
        age: "",
        height: ""
    })

    const handleChange = e =>{
        setSmurf({...smurf,[e.target.name]: e.target.value})
    }

    const handleSubmit = e =>{
        e.preventDefault();
        console.log("smurf",smurf)
        axios
            .post("http://localhost:3333/smurfs", smurf)
            .then(res => {
                console.log(res);
            })
            .catch(err => {
                console.error("error fetching data from api, err: ", err);
            });

        setSmurf({name:"", age:"", height:""})
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name:
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={smurf.name}
                        placeholder="name"
                        onChange={handleChange}
                    />
                </label>
                <label htmlFor="age">Age: 
                    <input
                        type="number"
                        id="age"
                        name="age"
                        value={smurf.age}
                        placeholder="age"
                        onChange={handleChange}
                    />
                </label>
                <label htmlFor="height">Height:
                    <input
                        type="text"
                        id="height"
                        name="height"
                        value={smurf.height}
                        placeholder="height"
                        onChange={handleChange}
                    />
                </label>
                <button type="submit">Add a new smurf</button>
            </form>
        </div>
    )
}