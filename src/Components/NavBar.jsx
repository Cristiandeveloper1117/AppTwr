import React from 'react'
import './Navbar.css';
// import TwitterIcon from '@mui/icons-material/Twitter';
// import HomeIcon from '@mui/icons-material/Home';
// import TagIcon from '@mui/icons-material/Tag';
// import NotificationsIcon from '@mui/icons-material/Notifications';
// import EmailIcon from '@mui/icons-material/Email';
// import BookmarksIcon from '@mui/icons-material/Bookmarks';
// import ListAltIcon from '@mui/icons-material/ListAlt';
// import PersonIcon from '@mui/icons-material/Person';
// import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Boton from '../Botones/Boton';





export default function NavBar() {
  return (
   
    <div className='Navbar'>
        <div className='Seccionestatica3'> 
        {/* <div>
        <div className='twittericon'><TwitterIcon/></div>
        <HomeIcon className='home'/>
        <div className='text'><div><TagIcon/></div>Explorar<TagIcon/></div>
        <div><NotificationsIcon/>Notificación</div>
        <div><EmailIcon/>Mensajes</div>
        <div><BookmarksIcon/>Favoritos</div>
        <div><ListAltIcon/>Listas</div>
        <div><PersonIcon/>Perfil</div>
        <div><MoreHorizIcon/>Mas</div></div>

        <div><Boton/></div> */}
        <h1 className='textcabecera'>Twitter ®</h1>
      <label className='label'><i class="fa-brands fa-twitter"></i></label><br/>
      <ul>
        <li><i class="fa-solid fa-house"></i><a href="#">Inicio</a></li><br/>
        <li><i class="fa-solid fa-hashtag"></i><a href="#">Explorar</a></li><br/>
        <li><i class="fa-solid fa-bell"></i><a href="#">Notificación</a></li><br/>
        <li><i class="fa-solid fa-comment"></i><a href="#">Mensajes</a></li><br/>
        <li><i class="fa-solid fa-bookmark"></i><a href="#">Favoritos</a></li><br/>
        <li><i class="fa-solid fa-list-ul"></i><a href="#">Lista</a></li><br/>
        <li><i class="fa-solid fa-user"></i><a href="#">Perfil</a></li><br/>
        <li><i class="fa-solid fa-hashtag"></i><a href="#">Mas</a></li><br/>
        <li><Boton/></li>
      </ul>
        </div>
      
    </div>

  )
}
