import React from 'react'
import './App.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";


export default function Body() {
    var settings = {
        dots: true,
        infinite: true,
        autoplay:true,
        autoplaySpeed:5000,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 6
    };
    return (
        <div className='bodyy'>
            
            <div className='boxx'>
                <img src="https://assets.myntassets.com/w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2024/6/17/b70e072d-9110-4256-9724-830b3cab84251718623898350-FLAT-400-Off-on-1st-Purchase-Strip-----7.jpg" alt="" />
            </div>
            <div className='boxx'>
                <img src="https://assets.myntassets.com/w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2024/6/17/e8a2ea55-9b2e-4ca0-8127-ca9e0984c49c1718623745662-DESKTOP-HP.jpg" alt="" />
            </div>
            <div className='boxx'>
                <img src="https://assets.myntassets.com/w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2024/6/12/dde45ca3-3735-46e4-847e-815757c0c2d81718179286708-COUPONS-CORNER.jpg" alt="" />
            </div>
            <div className='boxx'>
                <div className='bleft'>
                    <img src="https://assets.myntassets.com/w_490,c_limit,fl_progressive,dpr_2.0/assets/images/2024/6/17/9e451493-fc53-445e-8799-5027c2bf38e41718624179226-MYNTRA100.jpg" alt="" />
                </div>
                <div className='bright'>
                    <img src="https://assets.myntassets.com/w_490,c_limit,fl_progressive,dpr_2.0/assets/images/2024/6/17/d52307bd-19fb-430e-858b-05dc98a8896d1718624179250-MYNTRA200.jpg" alt="" />
                </div>
            </div>
            <div className='boxx'>
                <img src="https://assets.myntassets.com/w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2024/6/17/faf138ea-7758-4a07-b53b-06cf4efd0fe81718624006349-Crazy-Deals.jpg" alt="" />
            </div>
            <div className='booxx'>
                <Slider {...settings}>
                    <div>
                        <img src="https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2024/6/8/0aa6a8f5-8bb6-428d-bad4-ba621e20de8e1717865842867-Sassafras-Tokyo_Talkies.png" alt="" />
                    </div>
                    <div>
                        <img src="https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2024/6/8/547ef0f1-4040-45fb-a29d-1f8a72b08df61717865842920-M-S_and_Triumph.png" alt="" />
                    </div>
                    <div>
                        <img src="https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2024/6/8/2660692a-a055-4d17-b885-ea8307dfc66d1717865842786-Vero_Moda-ONLYMin_50_Off.png" alt="" />
                    </div>
                    <div>
                        <img src="https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2024/6/8/e1a001e9-578e-4ca5-94fa-831dc6e3216c1717865842544-.png" alt="" />
                    </div>
                    <div>
                        <img src="https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2024/6/8/ce3d0ecf-669d-41ae-a832-6293ab340d661717865842004-SanskrutiHomes-Bannos_swagger.png" alt="" />
                    </div>
                    <div>
                        <img src="https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2024/5/9/eb5d191f-8d61-43d0-bc8d-e69f7cfa46ca1715237114592-image_png1940696437.png" alt="" />
                    </div>
                    <div>
                        <img src="https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2024/6/8/0aa6a8f5-8bb6-428d-bad4-ba621e20de8e1717865842867-Sassafras-Tokyo_Talkies.png" alt="" />
                    </div>
                    <div>
                        <img src="https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2024/6/8/547ef0f1-4040-45fb-a29d-1f8a72b08df61717865842920-M-S_and_Triumph.png" alt="" />
                    </div>
                    <div>
                        <img src="https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2024/6/8/2660692a-a055-4d17-b885-ea8307dfc66d1717865842786-Vero_Moda-ONLYMin_50_Off.png" alt="" />
                    </div>
                    <div>
                        <img src="https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2024/6/8/e1a001e9-578e-4ca5-94fa-831dc6e3216c1717865842544-.png" alt="" />
                    </div>
                    <div>
                        <img src="https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2024/6/8/ce3d0ecf-669d-41ae-a832-6293ab340d661717865842004-SanskrutiHomes-Bannos_swagger.png" alt="" />
                    </div>
                    <div>
                        <img src="https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2024/5/9/eb5d191f-8d61-43d0-bc8d-e69f7cfa46ca1715237114592-image_png1940696437.png" alt="" />
                    </div>
                    <div>
                        <img src="https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2024/6/8/0aa6a8f5-8bb6-428d-bad4-ba621e20de8e1717865842867-Sassafras-Tokyo_Talkies.png" alt="" />
                    </div>
                    <div>
                        <img src="https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2024/6/8/547ef0f1-4040-45fb-a29d-1f8a72b08df61717865842920-M-S_and_Triumph.png" alt="" />
                    </div>
                    <div>
                        <img src="https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2024/6/8/2660692a-a055-4d17-b885-ea8307dfc66d1717865842786-Vero_Moda-ONLYMin_50_Off.png" alt="" />
                    </div>
                    <div>
                        <img src="https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2024/6/8/e1a001e9-578e-4ca5-94fa-831dc6e3216c1717865842544-.png" alt="" />
                    </div>
                    <div>
                        <img src="https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2024/6/8/ce3d0ecf-669d-41ae-a832-6293ab340d661717865842004-SanskrutiHomes-Bannos_swagger.png" alt="" />
                    </div>
                    <div>
                        <img src="https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2024/5/9/eb5d191f-8d61-43d0-bc8d-e69f7cfa46ca1715237114592-image_png1940696437.png" alt="" />
                    </div>
                    <div>
                        <img src="https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2024/6/8/0aa6a8f5-8bb6-428d-bad4-ba621e20de8e1717865842867-Sassafras-Tokyo_Talkies.png" alt="" />
                    </div>
                    <div>
                        <img src="https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2024/6/8/547ef0f1-4040-45fb-a29d-1f8a72b08df61717865842920-M-S_and_Triumph.png" alt="" />
                    </div>
                    <div>
                        <img src="https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2024/6/8/2660692a-a055-4d17-b885-ea8307dfc66d1717865842786-Vero_Moda-ONLYMin_50_Off.png" alt="" />
                    </div>
                    <div>
                        <img src="https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2024/6/8/e1a001e9-578e-4ca5-94fa-831dc6e3216c1717865842544-.png" alt="" />
                    </div>
                    <div>
                        <img src="https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2024/6/8/ce3d0ecf-669d-41ae-a832-6293ab340d661717865842004-SanskrutiHomes-Bannos_swagger.png" alt="" />
                    </div>
                    <div>
                        <img src="https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2024/5/9/eb5d191f-8d61-43d0-bc8d-e69f7cfa46ca1715237114592-image_png1940696437.png" alt="" />
                    </div>
                </Slider>
            </div>
            <div className='boxx'>
            <img src="https://assets.myntassets.com/w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2024/6/17/9cfac75a-bf32-48ee-b1fb-911e7ec967cf1718624006404-Shop-By-Category.jpg" alt="" />
            </div>
            <div className='boxx'>
                <div className='box-i'>
                    <img src="https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2024/6/17/e08dee2d-0f9b-4fc0-8808-06a422d040801718624757083-Shop-By-Category_HP_02.jpg" alt="" />
                </div>
                <div className='box-i'>
                    <img src="https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2024/6/17/8cd106c7-fad6-4fdb-9855-d6d3ac8774231718624757104-Shop-By-Category_HP_03.jpg" alt="" />
                </div>
                <div className='box-i'>
                    <img src="https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2024/6/17/59767a44-c969-4ff9-8739-df9d78b4df431718624757126-Shop-By-Category_HP_04.jpg" alt="" />
                </div>
                <div className='box-i'>
                    <img src="https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2024/6/17/206a7626-feaa-4e09-9717-8e1095b235031718624757147-Shop-By-Category_HP_05.jpg" alt="" />
                </div>
                <div className='box-i'>
                    <img src="https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2024/6/17/0fa78ddd-3776-443c-be34-650fa0fd0bb61718624757168-Shop-By-Category_HP_06.jpg" alt="" />
                </div>
                <div className='box-i'>
                    <img src="https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2024/6/17/3c3abd27-1e6f-4890-9d52-51da706f51e81718624757190-Shop-By-Category_HP_07.jpg" alt="" />
                </div>
                <div className='box-i'>
                    <img src="https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2024/6/17/e08dee2d-0f9b-4fc0-8808-06a422d040801718624757083-Shop-By-Category_HP_02.jpg" alt="" />
                </div>
                <div className='box-i'>
                    <img src="https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2024/6/17/8cd106c7-fad6-4fdb-9855-d6d3ac8774231718624757104-Shop-By-Category_HP_03.jpg" alt="" />
                </div>
                <div className='box-i'>
                    <img src="https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2024/6/17/59767a44-c969-4ff9-8739-df9d78b4df431718624757126-Shop-By-Category_HP_04.jpg" alt="" />
                </div>
                <div className='box-i'>
                    <img src="https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2024/6/17/206a7626-feaa-4e09-9717-8e1095b235031718624757147-Shop-By-Category_HP_05.jpg" alt="" />
                </div>
                <div className='box-i'>
                    <img src="https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2024/6/17/0fa78ddd-3776-443c-be34-650fa0fd0bb61718624757168-Shop-By-Category_HP_06.jpg" alt="" />
                </div>
                <div className='box-i'>
                    <img src="https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2024/6/17/3c3abd27-1e6f-4890-9d52-51da706f51e81718624757190-Shop-By-Category_HP_07.jpg" alt="" />
                </div>
                <div className='box-i'>
                    <img src="https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2024/6/17/e08dee2d-0f9b-4fc0-8808-06a422d040801718624757083-Shop-By-Category_HP_02.jpg" alt="" />
                </div>
                <div className='box-i'>
                    <img src="https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2024/6/17/8cd106c7-fad6-4fdb-9855-d6d3ac8774231718624757104-Shop-By-Category_HP_03.jpg" alt="" />
                </div>
                <div className='box-i'>
                    <img src="https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2024/6/17/59767a44-c969-4ff9-8739-df9d78b4df431718624757126-Shop-By-Category_HP_04.jpg" alt="" />
                </div>
                <div className='box-i'>
                    <img src="https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2024/6/17/206a7626-feaa-4e09-9717-8e1095b235031718624757147-Shop-By-Category_HP_05.jpg" alt="" />
                </div>
                <div className='box-i'>
                    <img src="https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2024/6/17/0fa78ddd-3776-443c-be34-650fa0fd0bb61718624757168-Shop-By-Category_HP_06.jpg" alt="" />
                </div>
                <div className='box-i'>
                    <img src="https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2024/6/17/3c3abd27-1e6f-4890-9d52-51da706f51e81718624757190-Shop-By-Category_HP_07.jpg" alt="" />
                </div>
                <div className='box-i'>
                    <img src="https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2024/6/17/e08dee2d-0f9b-4fc0-8808-06a422d040801718624757083-Shop-By-Category_HP_02.jpg" alt="" />
                </div>
                <div className='box-i'>
                    <img src="https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2024/6/17/8cd106c7-fad6-4fdb-9855-d6d3ac8774231718624757104-Shop-By-Category_HP_03.jpg" alt="" />
                </div>
                <div className='box-i'>
                    <img src="https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2024/6/17/59767a44-c969-4ff9-8739-df9d78b4df431718624757126-Shop-By-Category_HP_04.jpg" alt="" />
                </div>
                <div className='box-i'>
                    <img src="https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2024/6/17/206a7626-feaa-4e09-9717-8e1095b235031718624757147-Shop-By-Category_HP_05.jpg" alt="" />
                </div>
                <div className='box-i'>
                    <img src="https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2024/6/17/0fa78ddd-3776-443c-be34-650fa0fd0bb61718624757168-Shop-By-Category_HP_06.jpg" alt="" />
                </div>
                <div className='box-i'>
                    <img src="https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2024/6/17/3c3abd27-1e6f-4890-9d52-51da706f51e81718624757190-Shop-By-Category_HP_07.jpg" alt="" />
                </div>
                <div className='box-i'>
                    <img src="https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2024/6/17/206a7626-feaa-4e09-9717-8e1095b235031718624757147-Shop-By-Category_HP_05.jpg" alt="" />
                </div>
                <div className='box-i'>
                    <img src="https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2024/6/17/0fa78ddd-3776-443c-be34-650fa0fd0bb61718624757168-Shop-By-Category_HP_06.jpg" alt="" />
                </div>
                <div className='box-i'>
                    <img src="https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2024/6/17/3c3abd27-1e6f-4890-9d52-51da706f51e81718624757190-Shop-By-Category_HP_07.jpg" alt="" />
                </div>
            </div>
            <div className='boxx'>
                <img src="https://assets.myntassets.com/w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2024/6/17/cbfd5519-695b-425f-baf2-1a318e5b75121718623628347-App-Install-Banner.jpg" alt="" />
            </div>
            <div className='sbanner d-none d-md-block'><p>FLAT ₹300 OFF</p></div>
        </div>
    )
}
