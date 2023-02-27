import React from 'react'
import Publicacion from '../Publicacion/Publicacion';
import TweetBox from '../Tweetbox/TweetBox';
// import Usuarios from '../Usuarios/Usuarios';
import './Seccion.css';


export default function Seccion() {
  return (
    <div className='Seccion'>
        <div className='Seccionestatica'>Inicio</div>
        <div className='Publicaciones'><TweetBox/></div>
    <Publicacion/>
    <Publicacion/>
    <Publicacion/>
    <Publicacion/>
    <Publicacion/>
    <Publicacion/>
    <Publicacion/>
    </div>
  )
}
