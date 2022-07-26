import React, { useState } from 'react'

function FuntionalForm() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [person, setPerson] = useState([
      { name: " Orison", email: "orisontetteh@gmail", password: 1111111 },
      {
        name: " Chunkz",
        email: "chunkz@gmail.com",
        password: 22222,
      },
    ]);

    const handleSubmit = (e) =>{
        e.preventDefault()
        setPerson(
            [...person, {name,email,password}],
          setName(""),
          setEmail(""),
          setPassword("")
        )
    }

  return (
    <div id="main-container">
      <form>
        <div>
          <label className="label-1">Name</label>
          <input
            type="text"
            value={name}
            name="name"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>
        <div>
          <label className="label-2">Email</label>
          <input
            type="email"
            value={email}
            name="email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>
        <div>
          <label className="label-3">Password</label>
          <input
            type="password"
            value={password}
            name="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>
        <label className="label-4">Click Submit </label>
        <button onClick={handleSubmit}>Submit</button>
      </form>
      {person.map((item, index) => {
        return (
          <div id="field" key={index}>
            <h2>Name: {item.name}</h2>
            <h2>Email: {item.email}</h2>
            <h2>Password: {item.password}</h2>
          </div>
        );
      })}
    </div>
  );
}

export default FuntionalForm