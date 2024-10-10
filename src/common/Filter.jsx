import React from 'react'
import './Filter.css'

export default function Filter() {
  return (
    <div className='filt'>
      <div className=' border-bottom'>
        <div className=''>
          <ul className='d-flex gap-2'>
            <li>Home</li>
            <li>/</li>
            <li>Clothings</li>
            <li>/</li>
            <li><b>Men</b></li>
          </ul>
        </div>
        <div className=''>
          <ul>
            <li> <p className='text-black-50'><b className='text-black'>Men</b>-141292 items</p></li>
          </ul>
        </div>
        <div className='d-flex'>
          <div className=' fw-bold box-w'>
            <ul>
              <li>FILTERS</li>
            </ul>
          </div>
          <div className=''>
            <div>

            </div>
          </div>
          <div>

          </div>
        </div>
      </div>
      <div className='w-100 row'>
        <div className='col-2 border-end'>

          <div className='border-bottom py-2'>
            <ul>
              <li>
                <h5>Categories</h5>
              </li>
              <li className='d-flex my-2'> <input type='checkbox' className='me-2' /> T-Shirt <span className='text-black-50 '> (144874)</span> </li>
            </ul>
          </div>

          <div className='border-bottom py-2'>
            <ul>
              <li>
                <h5>Brand</h5>
              </li>
              <li className='d-flex my-2'> <input type='checkbox' className='me-2' /> T-Shirt <span className='text-black-50 '> (144874)</span> </li>
            </ul>
          </div>

          <div className='border-bottom py-2'>
            <ul>
              <li>
                <h5>Price</h5>
              </li>
              <li className='d-flex my-2'> <input type='checkbox' className='me-2' /> T-Shirt <span className='text-black-50 '> (144874)</span> </li>
            </ul>
          </div>

          <div className='border-bottom py-2'>
            <ul>
              <li>
                <h5>Color</h5>
              </li>
              <li className='d-flex my-2'> <input type='checkbox' className='me-2' /> T-Shirt <span className='text-black-50 '> (144874)</span> </li>
            </ul>
          </div>

          <div className='border-bottom py-2'>
            <ul>
              <li>
                <h5>Discount</h5>
              </li>
              <li className='d-flex my-2'> <input type='checkbox' className='me-2' /> T-Shirt <span className='text-black-50 '> (144874)</span> </li>
            </ul>
          </div>

        </div>

        <div className='p-3 col-10  '>

          <div className='row row-cols-4 justify-content-start'>
          <div class="card col "  >
            <img src="..." class="card-img-top" alt="..."/>
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
              </div>
          </div>

          <div class="card col "  >
            <img src="..." class="card-img-top" alt="..."/>
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
              </div>
          </div>

          <div class="card col "  >
            <img src="..." class="card-img-top" alt="..."/>
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
              </div>
          </div>

          <div class="card col "  >
            <img src="..." class="card-img-top" alt="..."/>
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
              </div>
          </div>
          </div>
          

        </div>
      </div>

    </div>
  )
}



