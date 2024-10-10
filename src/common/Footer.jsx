import React from 'react'
import './Footer.css'

export default function Footer() {
  return (
    <div className='footer d-none d-md-flex'>
        <div className='listt'>
        <div className='flist'>
            <h6>ONLINE SHOPPING</h6>
            <ul>
                <li>Men</li>
                <li>Women</li>
                <li>Kids</li>
                <li>Home & Living</li>
                <li>Beauty</li>
                <li>Gift Cards</li>
                <li>Myntra Insider</li>
            </ul>
        </div>
        <div className='flist'>
            <h6>USEFUL LINKS</h6>
            <ul>
                <li>Blog</li>
                <li>Careers</li>
                <li>Site Map</li>
                <li>Corporate Information</li>
                <li>Whitehat</li>
                <li>Cleartrip</li>
            </ul>
        </div>
        </div>
        <div className='listt'>
        <div className='flist'>
            <h6>ONLINE SHOPPING</h6>
            <ul>
                <li>Men</li>
                <li>Women</li>
                <li>Kids</li>
                <li>Home & Living</li>
                <li>Beauty</li>
                <li>Gift Cards</li>
                <li>Myntra Insider</li>
            </ul>
        </div>
        
        </div>

        <div className='listr '>
            <div className='flist d-none d-md-block'>
                <h6> EXPERIENCE MYNTRA APP ON MOBILE </h6>
                <ul className='ful'>
                    <li>
                    <img src=" https://constant.myntassets.com/web/assets/img/80cc455a-92d2-4b5c-a038-7da0d92af33f1539674178924-google_play.png" alt="" />
                    </li>
                    <li>
                    <img src=" https://constant.myntassets.com/web/assets/img/bc5e11ad-0250-420a-ac71-115a57ca35d51539674178941-apple_store.png" alt="" />
                    </li>
                </ul>
            </div>
            <div className='flist '>
                <h6>KEEP IN TOUCH</h6>
                <ul className='ficons  d-md-flex'>
                    <li><img src="https://constant.myntassets.com/web/assets/img/d2bec182-bef5-4fab-ade0-034d21ec82e31574604275433-fb.png" alt="" /></li>
                    <li><img src="https://constant.myntassets.com/web/assets/img/f10bc513-c5a4-490c-9a9c-eb7a3cc8252b1574604275383-twitter.png" alt="" /></li>
                    <li><img src="https://constant.myntassets.com/web/assets/img/a7e3c86e-566a-44a6-a733-179389dd87111574604275355-yt.png" alt="" /></li>
                    <li> <img src="https://constant.myntassets.com/web/assets/img/b4fcca19-5fc1-4199-93ca-4cae3210ef7f1574604275408-insta.png" alt="" /></li>
                </ul>
            </div>
        </div>

        <div className='listr d-none d-md-block'>
            <div className='flist d-flex'>
                <div><img src="https://constant.myntassets.com/web/assets/img/6c3306ca-1efa-4a27-8769-3b69d16948741574602902452-original.png" width="50px"alt="" /></div>
                <div className='ms-2'><p> <b>100% ORIGINAL </b>guarantee for all products at myntra.com </p></div>
            </div>
            <div className='flist d-flex'>
                <div><img src="https://assets.myntassets.com/assets/images/retaillabs/2023/5/22/becb1b16-86cc-4e78-bdc7-7801c17947831684737106127-Return-Window-image.png" width="50px"alt="" /></div>
                <div className='ms-2'><p> <b>Return within 14days  </b>of receiving your order </p></div>
            </div>
        </div>
    </div>
  )
}
