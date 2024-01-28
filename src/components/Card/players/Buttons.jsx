import './style.css'
import Preview from '../../../assets/preview-sing.png'
import Next from '../../../assets/next-sing.png'
import Play from '../../../assets/play.png'
import Pause from '../../../assets/pausa.png'
export default function Players(){
    return(
        <div className="button-container">
            <img src={Preview} alt="preview song"/> 
            <img src={Play} alt="play song"/> 
            <img src={Next} alt="next song"/> 
        </div>
    )
}