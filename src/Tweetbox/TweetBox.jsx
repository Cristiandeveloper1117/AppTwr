import React from 'react';
import Tweet from '../Botones/Tweet';
import Usuarios from '../Usuarios/Usuarios';
import "./Tweetbox.css";
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import GifBoxIcon from '@mui/icons-material/GifBox';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';


export default function TweetBox() {
  return (
    
    <div className='Tweetbox'><Usuarios/>
    <form>
    <div className='inputtweet'>

    <div class='nuevoestado' placeholder='Hosssssssssssssssssssssssla' contentEditable></div>
    </div>

    <div className='botontweet'>
        <div className='flexicon'>
        <div><AddPhotoAlternateIcon/></div>
        <div><GifBoxIcon/></div>
        <div><SentimentSatisfiedAltIcon/></div>
        </div>
        <Tweet className='Hola'/>
    </div>

    </form>
    </div>
  )
}
