//import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { Link } from "react-router-dom";
//import { UserAuth } from "./context/AuthContext";
import {createUserWithEmailAndPassword} from "firebase/auth";
import { auth } from "../firebase"
import { Alert } from "./context/Alert";


const Signup = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    //const {crearUsuario} = UserAuth();

    const handleSubmit = async (e) => {
        e.preventDefault()
        setError('')
        try{
            //await UserAuth.crearUsuario(email,password)
            await createUserWithEmailAndPassword(auth, email, password)
            //await crearUsuario(email, password)
        } catch (e) {
            console.log(e.code)
            //setError(e.message)
            if (e.code === "auth/weak-password"){
                setError('contraseña invalida')
            }
            if(e.code === "auth/missing-email"){
                setError('Escribe un correo')
            }
        }
    };

    return (
        <div className="max-w-[700px] mx-auto my-16 p-4">
            <div>
                <h1 className="text-2xl font-bold py-2">INICIA SESION EN SU CUENTA</h1>
                <p className="py-2">
                    YA TIENES UNA CUENTA?... <Link to='/' className='underline'>INICIA SESION.</Link>
                </p> 
            </div>   
            <form onSubmit={handleSubmit}>
                <div className="flex flex-col py-2">
                    <label className="py-2 font-medium">CORREO ELECTRONICO</label>
                    <input onChange={(e) => setEmail(e.target.value)} className="border p-3" type="email" />
                </div>
                <div className="flex flex-col py-2">
                    <label className="py-2 font-medium">CONTRASEÑA</label>
                    <input onChange={(e) => setPassword(e.target.value)} className="border p-3" type="password" />
                    {error && <Alert message={error}/>}              
                </div>
                <button className="border border-blue-400 bg-blue-500 hover:bg-blue-400 w-full p-4 my-2 text-white">REGISTRATE</button>
            </form>     
        </div>
    )
}

export default Signup