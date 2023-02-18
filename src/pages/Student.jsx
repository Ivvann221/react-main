import React, { useState } from "react";
import  "../styles/StudentPage.css";

const Student = () => {
  let [counter, setCounter] = useState(0);
  let [name, setName] = useState('');
  let [fatherName, setfatherName] = useState('');
  let [surname, setSurname] = useState('');
  let [gmail, setemail] = useState('');

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1 className='title'>Student Page</h1>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam
              aut rem, laudantium quia veritatis minima esse iure eos at officia
              odit corporis ab sint repellendus sit eius quibusdam officiis
              possimus!
            </p>
            <div
              className="btn btn-success"
              onClick={() => {
                setCounter(counter + 1);
              }}
            >
              Add +1
            </div>
            <h2>
                <form action="">
            <input onChange={(e) => {setSurname(e.target.value)}} type="text" placeholder="Прізвище"/>
            <input onChange={(e) => {setName(e.target.value.toUpperCase())}} type="text" placeholder="Імя"/>
            <input onChange={(e) => {setfatherName(e.target.value.toUpperCase())}} type="text" placeholder="По-батькові"/>
            <input onChange={(e) => {setemail(e.target.value)}} type="email" placeholder="Email" required/>
            </form>
            </h2>
            <p className="surname">
                {surname.charAt(0).toUpperCase() + surname.slice(1)}
            </p>
            <p className="name">
                {name.length ? name[0] + '.' : ''}
            </p>
            <p className="fathername">
            {fatherName.length ? fatherName[0] + '.' : ''}
            </p>
            <p className="gmail">
                {gmail}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Student;