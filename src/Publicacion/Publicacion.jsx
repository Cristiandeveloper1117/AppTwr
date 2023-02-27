import React from 'react'
import './Publicacion.css';
import CachedIcon from '@mui/icons-material/Cached';
import MapsUgcIcon from '@mui/icons-material/MapsUgc';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import Usuarios from '../Usuarios/Usuarios';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';


export default function Publicacion() {
  return (
    <>
    <div className='Publicacionbox'>
      <div className='cabecerapublicacion'>
<div><Usuarios/></div>
<div className='pestañapubli'><KeyboardArrowDownIcon/></div>
</div>
    <img className='Imgpublicacion' src={require('../Publicacion/Hondasi.jpg')} />
    {/* <div className='Divicon'><div><MapsUgcIcon/></div><div><CachedIcon/></div><div><FavoriteBorderIcon/></div> <div><FileUploadIcon/></div></div> */}
    </div>
    <div className='Divicon'><div><MapsUgcIcon/></div><div><CachedIcon/></div><div><FavoriteBorderIcon/></div> <div><FileUploadIcon/></div></div>
    </>
  )
}
