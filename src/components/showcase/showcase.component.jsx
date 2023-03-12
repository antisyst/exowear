import './showcase.styles.scss';
import { Link } from "react-router-dom";

export default function Showcase() {
    const BackgroundImg = {
        img1: 'https://www.bybasicman.com/productimages/112355/middle/6132_t005.jpg',
        img2: 'https://www.bybasicman.com/productimages/112833/middle/6362_t005.jpg',
        img3: 'https://i.pinimg.com/564x/10/37/a6/1037a669f36f806ead18c878c719810d.jpg',
        img4: 'https://i.pinimg.com/564x/e7/c6/a3/e7c6a3b32badef824b1f7ff05a585b36.jpg',
        img5: 'https://www.bybasicman.com/productimages/109878/middle/5205_t002.jpg',
        img6: 'https://www.bybasicman.com/productimages/107394/middle/2467_std.jpg'
    }
    return(
        <div className='home-target-showcase-element-prototype'>
            <h1 className='font-lexend font-weight-bold first-showcase-content' id='black'>Categories</h1>
            <div className="home-target-showcase-element-prototype_container">
                <Link to='/sweatshirts'>
                    <div className='home-target-showcase-element-prototype_container_item' style={{background: `url(https://www.bybasicman.com/productimages/112355/middle/6132_t005.jpg)`}}>
                        <h1 className='user-s-no color-white'>Sweatshirts</h1>
                    </div>
                </Link>
                <Link to='/t-shirts'>
                    <div className='home-target-showcase-element-prototype_container_item' style={{background: `url(https://www.bybasicman.com/productimages/112833/middle/6362_t005.jpg)`}}>
                        <h1 className='user-s-no color-white'>T-Shirts</h1>
                    </div>
                </Link>
                <Link to='/pants'>
                    <div className='home-target-showcase-element-prototype_container_item' style={{background: `url(https://i.pinimg.com/564x/10/37/a6/1037a669f36f806ead18c878c719810d.jpg)`}}>
                        <h1 className='user-s-no color-white font-author-bold'>Pants</h1>
                    </div>
                </Link>
                <Link to='/sneakers'>
                    <div className='home-target-showcase-element-prototype_container_item' style={{background: `url(https://i.pinimg.com/564x/aa/cc/0c/aacc0cf645ae1c17528eeafaefc169ce.jpg)`}}>
                        <h1 className='user-s-no color-white'>Sneakers</h1>
                    </div>
                </Link>
                <Link to='/shorts'>
                    <div className='home-target-showcase-element-prototype_container_item' style={{background: `url(https://www.bybasicman.com/productimages/109878/middle/5205_t002.jpg)`}}>
                        <h1 className='user-s-no color-white'>Shorts</h1>
                    </div>
                </Link>
                <Link to='/socks'>
                    <div className='home-target-showcase-element-prototype_container_item' style={{background: `url(https://i.pinimg.com/564x/16/a1/90/16a190f8d271036c84e777a69fda6c52.jpg)`}}>
                        <h1 className='user-s-no color-white'>Socks</h1>
                    </div>
                </Link>
            </div>

            {/* TRENDS */}

            <h1 className='font-lexend font-weight-bold first-showcase-content' style={{marginTop: '70px'}}>Trends</h1>
            <div className='cards-target-showcase-element-prototype_container'>
                <div className='card-target-showcase-element-prototype_container_item box-shadow-third'>
                   <div>
                     <img src="https://www.bybasicman.com/productimages/111213/middle/5628_t023.jpg" alt="`$[count]`" />
                   </div>
                   <div className='card-target-showcase-element-prototype_container_item-bottom'>
                    <h2 className='font-author-bold'>Dark Green Pieced Hoodie SweatShirt</h2>
                    <h3 className='font-outfit-extrabold'>$54.00</h3>
                    <h4 className='font-lexend font-weight-bold color-red coming-warning-content'>Coming Soon</h4>
                   </div>
                </div>
                <div className='card-target-showcase-element-prototype_container_item box-shadow-third'>
                   <div>
                     <img src="https://www.bybasicman.com/productimages/110661/middle/5477_t001.jpg" alt="`$[count]`" />
                   </div>
                   <div className='card-target-showcase-element-prototype_container_item-bottom'>
                    <h2 className='font-author-bold'>White NFL Printed Hoodie SweatShirt</h2>
                    <h3 className='font-outfit-extrabold'>$55.00</h3>
                    <h4 className='font-lexend font-weight-bold color-red coming-warning-content'>Coming Soon</h4>
                   </div>
                </div>
                <div className='card-target-showcase-element-prototype_container_item box-shadow-third'>
                   <div>
                     <img src="https://www.bybasicman.com/productimages/112344/middle/6127_t005.jpg" alt="`$[count]`" />
                   </div>
                   <div className='card-target-showcase-element-prototype_container_item-bottom'>
                    <h2 className='font-author-bold'>Black J.JACE Printed Hoodie Sweatshirt</h2>
                    <h3 className='font-outfit-extrabold'>$69.00</h3>
                    <h4 className='font-lexend font-weight-bold color-red coming-warning-content'>Coming Soon</h4>
                   </div>
                </div>
                <div className='card-target-showcase-element-prototype_container_item box-shadow-third'>
                   <div>
                     <img src="https://www.bybasicman.com/productimages/112318/middle/6119_t017.jpg" alt="`$[count]`" />
                   </div>
                   <div className='card-target-showcase-element-prototype_container_item-bottom'>
                    <h2 className='font-author-bold'>Light Gray Imagination Printed Hoodie Sweatshirt</h2>
                    <h3 className='font-outfit-extrabold'>$60.00</h3>
                    <h4 className='font-lexend font-weight-bold color-red coming-warning-content'>Coming Soon</h4>
                   </div>
                </div>
                <div className='card-target-showcase-element-prototype_container_item box-shadow-third'>
                   <div>
                     <img src="https://www.bybasicman.com/productimages/112316/middle/6119_t005.jpg" alt="`$[count]`" />
                   </div>
                   <div className='card-target-showcase-element-prototype_container_item-bottom'>
                    <h2 className='font-author-bold'>Black Imagination Printed Hoodie Sweatshirt</h2>
                    <h3 className='font-outfit-extrabold'>$60.00</h3>
                    <h4 className='font-lexend font-weight-bold color-red coming-warning-content'>Coming Soon</h4>
                   </div>
                </div>
                <div className='card-target-showcase-element-prototype_container_item box-shadow-third'>
                   <div>
                     <img src="https://www.bybasicman.com/productimages/112302/middle/6116_t005.jpg" alt="`$[count]`" />
                   </div>
                   <div className='card-target-showcase-element-prototype_container_item-bottom'>
                    <h2 className='font-author-bold'>Black Mario Printed Hoodie Sweatshirt</h2>
                    <h3 className='font-outfit-extrabold'>$55.00</h3>
                    <h4 className='font-lexend font-weight-bold color-red coming-warning-content'>Coming Soon</h4>
                   </div>
                </div>
                <div className='card-target-showcase-element-prototype_container_item box-shadow-third'>
                   <div>
                     <img src="https://www.bybasicman.com/productimages/112297/middle/6114_t006.jpg" alt="`$[count]`" />
                   </div>
                   <div className='card-target-showcase-element-prototype_container_item-bottom'>
                    <h2 className='font-author-bold'>Green Batik Angel Dust Printed Hoodie Sweatshirt</h2>
                    <h3 className='font-outfit-extrabold'>$57.00</h3>
                    <h4 className='font-lexend font-weight-bold color-red coming-warning-content'>Coming Soon</h4>
                   </div>
                </div>
                <div className='card-target-showcase-element-prototype_container_item box-shadow-third'>
                   <div>
                     <img src="https://www.bybasicman.com/productimages/112284/middle/6113_t008.jpg" alt="`$[count]`" />
                   </div>
                   <div className='card-target-showcase-element-prototype_container_item-bottom'>
                    <h2 className='font-author-bold'>Gray Superior Printed Hoodie Sweatshirt</h2>
                    <h3 className='font-outfit-extrabold'>$49.00</h3>
                    <h4 className='font-lexend font-weight-bold color-red coming-warning-content'>Coming Soon</h4>
                   </div>
                </div>
                <div className='card-target-showcase-element-prototype_container_item box-shadow-third'>
                   <div>
                     <img src="https://www.bybasicman.com/productimages/112283/middle/6113_t005.jpg" alt="`$[count]`" />
                   </div>
                   <div className='card-target-showcase-element-prototype_container_item-bottom'>
                    <h2 className='font-author-bold'>Black Superior Printed Hoodie Sweatshirt</h2>
                    <h3 className='font-outfit-extrabold'>$45.00</h3>
                    <h4 className='font-lexend font-weight-bold color-red coming-warning-content'>Coming Soon</h4>
                   </div>
                </div>
                <div>
                  <h1>
                    <Link to='/sweatshirts' className='text-center text-dec-no bottom-showcase-content-second color-black font-weight-bold'>Look More ...</Link>
                  </h1>
                </div>
            </div>
        </div>
    )
}