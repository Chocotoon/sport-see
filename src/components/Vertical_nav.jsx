import '../styles/Vertical_nav.css'
import Icon from './Icon';
import Bike from '../assets/icon_bike.png';
import Weight from '../assets/icon_weight.png';
import Swim from '../assets/icon_swin.png';
import Yoga from '../assets/icon_yoga.png';

function VerticalNav() {
    return (
        <div className='vertical_nav'>
            <div className='icons'>
            <Icon>
                {Yoga}
            </Icon>
            <Icon>
                {Swim}
            </Icon>
            <Icon>
                {Bike}
            </Icon>
            <Icon>
                {Weight}
            </Icon>
            </div>
            <p>Copiryght, SportSee 2020</p>

        </div>
    )
}

export default VerticalNav