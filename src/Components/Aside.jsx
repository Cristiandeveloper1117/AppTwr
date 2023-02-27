import React from 'react'
import Noticias from '../Noticias/Noticias';
import './Aside.css';
import SearchIcon from '@mui/icons-material/Search';
import Seguir from '../Seguir/Seguir';


export default function Aside() {
  return (
    <div className='Aside'>
      <div className='Asidebox'>
        <div className='Seccionestatica2'><SearchIcon className='searchicon'/><input placeholder='Buscar en App' className='buscadorinput' type="search" /></div>
        <div className='Noticias'><div className='Noticiastitle'>Tendencias</div><Noticias/><Noticias/><Noticias/><Noticias/></div>
        <div className='tendencias'> <div className='seguir'>Seguir</div><Seguir/><Seguir/><Seguir/><Seguir/></div>
    </div>
    </div>
  )
}
