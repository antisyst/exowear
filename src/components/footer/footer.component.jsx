import './footer.styles.scss';
import FooterLogo from '../../icons/footer-logo';
import {BsInstagram} from 'react-icons/bs';
import {BsWhatsapp} from 'react-icons/bs';
import {MdCall} from 'react-icons/md';
import {AiFillThunderbolt} from 'react-icons/ai';

export default function Footer() {
    return(
        <div className='import-footer-bottom-prototype-element text-center color-white bg-color-black'>
            <div className="import-footer-bottom-prototype-element-container flex flex-row">
                <div className='import-footer-bottom-prototype-element-container_item-1'>
                    <FooterLogo/>
                    <h2 className='color-white font-lexend font-weight-bold'>We make the best <AiFillThunderbolt/></h2>
                    <p className='font-poppins font-weight-bold'>Developed by <a href="">Ramazan Azimli</a></p>
                    <h3 className='color-white font-poppins font-weight-bold'>Copyright 2023 © <span>All Rights Reserved</span></h3>
                </div>
                <div className='import-footer-bottom-prototype-element-container_item-2'>
                    <a href="" className='color-white'><BsInstagram/></a>
                    <a href="" className='color-white'><BsWhatsapp/></a>
                    <a href="" className='color-white'><MdCall/></a>
                </div>
            </div>
        </div>
    )
}