import React from 'react';
import './Home.css';
import Product from './Product';
function Home() {
    return (
        <div className='home'>
            <div className='home-container'>

                <img className="home-img" src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/new/hero/2_DesktopHero_3000x1200._CB577038747_.jpg" alt="" />
                <div className='home__row'>
                <Product img="https://m.media-amazon.com/images/I/41KuRShR97L._AC_UL480_FMwebp_QL65_.jpg"
                        title='Lorem ipsum dolor sit amet, conse' 
                        rating={4}
                        price={599}/>
                 <Product img="https://loremflickr.com/620/480/business"
                        title="Oriental Plastic Bike"
                        rating={5}
                        price={936.00}
                        id={1}/>

                </div>
                <div className='home__row'>
                    <Product img="https://loremflickr.com/630/480/business"
                        title='Handcrafted Frozen Gloves' 
                        rating={4}
                        price={457.00}/>
                     <Product img="https://loremflickr.com/641/480/business"
                        title='Awesome Fresh Shirt' 
                        rating={3}
                        price={507.00}/>
                     <Product img="https://loremflickr.com/640/480/business"
                        title='Rustic Concrete Table' 
                        rating={5}
                        price={700.00}/>

                </div>
                <div className='home__row'>
                <Product img="https://loremflickr.com/645/480/business"
                        title='Handmade Fresh Car' 
                        rating={4}
                        price={899.00}/>
                </div>
            </div>
        </div>
    )
}

export default Home;
