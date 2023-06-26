 import React from "react";
 import { Link } from "react-router-dom";

 const Signin = () => {
    return(
        <div className="max-w-[700px] mx-auto my-16 p-4">
        <div>
            <h1 className="text-2xl font-bold py-2">REGISTRATE CUENTA GRATIS</h1>
            <p className="py-2">
                NO TIENES UNA CUENTA?... <Link to='/signup' className='underline'>REGISTRATE.</Link>

            </p> 
        </div>   
        <form>
            <div className="flex flex-col py-2">
                <label className="py-2 font-medium">CORREO ELECTRONICO</label>
                <input className="border p-3" type="email" />
            </div>
            <div className="flex flex-col py-2">
                <label className="py-2 font-medium">CONTRASEÑA</label>
                <input className="border p-3" type="password" />
            </div>
            <button className="border border-blue-400 bg-blue-500 hover:bg-blue-400 w-full p-4 my-2 text-white">INICIAR SESION</button>
        </form>     
    </div>
    )
 }

 export default Signin