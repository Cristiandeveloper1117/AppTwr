import React from 'react'
import './Usuarios.css';


export default function Usuarios() {
  return (
    <div className='divusuariosflex'> 
        <div className='divimg'><img className='Imgusuarios' src={require('../Usuarios/React.jpg')} /></div>
        <div className='Nombreusuario'>React</div><div>@User_react HOLA</div>
    </div>
  )
}
