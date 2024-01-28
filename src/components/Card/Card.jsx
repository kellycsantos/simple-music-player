import './style.css'
import Album from '../../assets/1m-album.png'
import Players from './players/Buttons'
import Volume from '../volume/Volume'
export default function Card(){
    return(

        <div className="card-container">
        <img src={Album} alt="album-img"/>
        <p className='music-title'>ILLELLA (일낼라) - MAMAMOO</p>
        <Players/>
        <Volume/>
        </div>
    )
}