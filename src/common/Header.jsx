import React from 'react'
import '../App.css';
import './Header.css'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { Col, Container, Row } from 'react-bootstrap';
import { IoSearchOutline } from "react-icons/io5";
import { GoPerson } from "react-icons/go";
import { FaRegHeart } from "react-icons/fa";
import { BsHandbag } from "react-icons/bs";
import { Link } from 'react-router-dom';

export default function Header() {
  return (

    <>
      <div className=' main d-none d-md-flex fs-6 fs-md-4'>
        <div className='left'>
          <div className='logo'>
            <img src="https://images.indianexpress.com/2021/01/myntra.png" alt="" />
          </div>
          <div className='menus'>
            <ul className='menu'>
              <li>MEN
                <div class="underline">
                  <div class="underline1"></div>
                </div>
                <div className='back'>
                  <div className='megamenu'>
                    <div className='megaop'>
                      <div className='mega un'>
                        <h6>Topwear</h6>
                        <ul className='ull'>
                          <Link to={"/filter"}><li>T-shirt</li></Link>
                          <li>Casual shirt</li>
                          <li>Formal shirt</li>
                          <li>Sweatshirt</li>
                          <li>Sweater</li>
                          <li>T-shirt</li>
                          <li>Casual shirt</li>
                          <li>Formal shirt</li>
                          <li>Sweatshirt</li>
                          <li>Sweater</li>
                        </ul>
                      </div>
                      <div className='mega '>
                        <h6>Indian & Festive wear</h6>
                        <ul className='ull'>
                          <li>Kurtas & Kurta Sets</li>
                          <li>Sherwanis</li>
                          <li>Nehru Jackets</li>
                          <li>Dhotis</li>
                        </ul>
                      </div>
                    </div>

                    <div className='megaop'>
                      <div className='mega un'>
                        <h6>Bottom wear</h6>
                        <ul className='ull'>
                          <li>T-shirt</li>
                          <li>Casual shirt</li>
                          <li>Formal shirt</li>
                          <li>Sweatshirt</li>
                          <li>Sweater</li>
                          <li>T-shirt</li>
                          <li>Casual shirt</li>
                          <li>Formal shirt</li>
                          <li>Sweatshirt</li>
                          <li>Sweater</li>
                        </ul>
                      </div>
                      <div className='mega '>
                        <h6>Indian & Festive wear</h6>
                        <ul className='ull'>
                          <li>Kurtas & Kurta Sets</li>
                          <li>Sherwanis</li>
                          <li>Nehru Jackets</li>
                          <li>Dhotis</li>
                        </ul>
                      </div>
                    </div>

                    <div className='megaop'>
                      <div className='mega un'>
                        <h6>Topwear</h6>
                        <ul className='ull'>
                          <li>T-shirt</li>
                          <li>Casual shirt</li>
                          <li>Formal shirt</li>
                          <li>Sweatshirt</li>
                          <li>Sweater</li>
                          <li>T-shirt</li>
                          <li>Casual shirt</li>
                          <li>Formal shirt</li>
                          <li>Sweatshirt</li>
                          <li>Sweater</li>
                        </ul>
                      </div>
                      <div className='mega '>
                        <h6>Indian & Festive wear</h6>
                        <ul className='ull'>
                          <li>Kurtas & Kurta Sets</li>
                          <li>Sherwanis</li>
                          <li>Nehru Jackets</li>
                          <li>Dhotis</li>
                        </ul>
                      </div>
                    </div>

                    <div className='megaop'>
                      <div className='mega un'>
                        <h6>Topwear</h6>
                        <ul className='ull'>
                          <li>T-shirt</li>
                          <li>Casual shirt</li>
                          <li>Formal shirt</li>
                          <li>Sweatshirt</li>
                          <li>Sweater</li>
                          <li>T-shirt</li>
                          <li>Casual shirt</li>
                          <li>Formal shirt</li>
                          <li>Sweatshirt</li>
                          <li>Sweater</li>
                        </ul>
                      </div>
                      <div className='mega '>
                        <h6>Indian & Festive wear</h6>
                        <ul className='ull'>
                          <li>Kurtas & Kurta Sets</li>
                          <li>Sherwanis</li>
                          <li>Nehru Jackets</li>
                          <li>Dhotis</li>
                        </ul>
                      </div>
                    </div>

                    <div className='megaop'>
                      <div className='mega un'>
                        <h6>Topwear</h6>
                        <ul className='ull'>
                          <li>T-shirt</li>
                          <li>Casual shirt</li>
                          <li>Formal shirt</li>
                          <li>Sweatshirt</li>
                          <li>Sweater</li>
                          <li>T-shirt</li>
                          <li>Casual shirt</li>
                          <li>Formal shirt</li>
                          <li>Sweatshirt</li>
                          <li>Sweater</li>
                        </ul>
                      </div>
                      <div className='mega'>
                        <h6>Indian & Festive wear</h6>
                        <ul className='ull'>
                          <li>Kurtas & Kurta Sets</li>
                          <li>Sherwanis</li>
                          <li>Nehru Jackets</li>
                          <li>Dhotis</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

              </li>
              <li>WOMEN
                <div class="underline">
                  <div class="underline2"></div>
                </div>
                <div className='back'>
                  <div className='megamenu'>
                    <div className='megaop1'>
                      <div className='mega un'>
                        <h6>Topwear</h6>
                        <ul className='ull'>
                          <li>T-shirt</li>
                          <li>Casual shirt</li>
                          <li>Formal shirt</li>
                          <li>Sweatshirt</li>
                          <li>Sweater</li>
                          <li>T-shirt</li>
                          <li>Casual shirt</li>
                          <li>Formal shirt</li>
                          <li>Sweatshirt</li>
                          <li>Sweater</li>
                        </ul>
                      </div>
                      <div className='mega '>
                        <h6>Indian & Festive wear</h6>
                        <ul className='ull'>
                          <li>Kurtas & Kurta Sets</li>
                          <li>Sherwanis</li>
                          <li>Nehru Jackets</li>
                          <li>Dhotis</li>
                        </ul>
                      </div>
                    </div>

                    <div className='megaop1'>
                      <div className='mega un'>
                        <h6>Bottom wear</h6>
                        <ul className='ull'>
                          <li>T-shirt</li>
                          <li>Casual shirt</li>
                          <li>Formal shirt</li>
                          <li>Sweatshirt</li>
                          <li>Sweater</li>
                          <li>T-shirt</li>
                          <li>Casual shirt</li>
                          <li>Formal shirt</li>
                          <li>Sweatshirt</li>
                          <li>Sweater</li>
                        </ul>
                      </div>
                      <div className='mega '>
                        <h6>Indian & Festive wear</h6>
                        <ul className='ull'>
                          <li>Kurtas & Kurta Sets</li>
                          <li>Sherwanis</li>
                          <li>Nehru Jackets</li>
                          <li>Dhotis</li>
                        </ul>
                      </div>
                    </div>

                    <div className='megaop1'>
                      <div className='mega un'>
                        <h6>Topwear</h6>
                        <ul className='ull'>
                          <li>T-shirt</li>
                          <li>Casual shirt</li>
                          <li>Formal shirt</li>
                          <li>Sweatshirt</li>
                          <li>Sweater</li>
                          <li>T-shirt</li>
                          <li>Casual shirt</li>
                          <li>Formal shirt</li>
                          <li>Sweatshirt</li>
                          <li>Sweater</li>
                        </ul>
                      </div>
                      <div className='mega '>
                        <h6>Indian & Festive wear</h6>
                        <ul className='ull'>
                          <li>Kurtas & Kurta Sets</li>
                          <li>Sherwanis</li>
                          <li>Nehru Jackets</li>
                          <li>Dhotis</li>
                        </ul>
                      </div>
                    </div>

                    <div className='megaop1'>
                      <div className='mega un'>
                        <h6>Topwear</h6>
                        <ul className='ull'>
                          <li>T-shirt</li>
                          <li>Casual shirt</li>
                          <li>Formal shirt</li>
                          <li>Sweatshirt</li>
                          <li>Sweater</li>
                          <li>T-shirt</li>
                          <li>Casual shirt</li>
                          <li>Formal shirt</li>
                          <li>Sweatshirt</li>
                          <li>Sweater</li>
                        </ul>
                      </div>
                      <div className='mega '>
                        <h6>Indian & Festive wear</h6>
                        <ul className='ull'>
                          <li>Kurtas & Kurta Sets</li>
                          <li>Sherwanis</li>
                          <li>Nehru Jackets</li>
                          <li>Dhotis</li>
                        </ul>
                      </div>
                    </div>

                    <div className='megaop1'>
                      <div className='mega un'>
                        <h6>Topwear</h6>
                        <ul className='ull'>
                          <li>T-shirt</li>
                          <li>Casual shirt</li>
                          <li>Formal shirt</li>
                          <li>Sweatshirt</li>
                          <li>Sweater</li>
                          <li>T-shirt</li>
                          <li>Casual shirt</li>
                          <li>Formal shirt</li>
                          <li>Sweatshirt</li>
                          <li>Sweater</li>
                        </ul>
                      </div>
                      <div className='mega'>
                        <h6>Indian & Festive wear</h6>
                        <ul className='ull'>
                          <li>Kurtas & Kurta Sets</li>
                          <li>Sherwanis</li>
                          <li>Nehru Jackets</li>
                          <li>Dhotis</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li>KIDS
                <div class="underline">
                  <div class="underline3"></div>
                </div>
                <div className='back'>
                  <div className='megamenu'>
                    <div className='megaop2'>
                      <div className='mega un'>
                        <h6>Topwear</h6>
                        <ul className='ull'>
                          <li>T-shirt</li>
                          <li>Casual shirt</li>
                          <li>Formal shirt</li>
                          <li>Sweatshirt</li>
                          <li>Sweater</li>
                          <li>T-shirt</li>
                          <li>Casual shirt</li>
                          <li>Formal shirt</li>
                          <li>Sweatshirt</li>
                          <li>Sweater</li>
                        </ul>
                      </div>
                      <div className='mega '>
                        <h6>Indian & Festive wear</h6>
                        <ul className='ull'>
                          <li>Kurtas & Kurta Sets</li>
                          <li>Sherwanis</li>
                          <li>Nehru Jackets</li>
                          <li>Dhotis</li>
                        </ul>
                      </div>
                    </div>

                    <div className='megaop2'>
                      <div className='mega un'>
                        <h6>Bottom wear</h6>
                        <ul className='ull'>
                          <li>T-shirt</li>
                          <li>Casual shirt</li>
                          <li>Formal shirt</li>
                          <li>Sweatshirt</li>
                          <li>Sweater</li>
                          <li>T-shirt</li>
                          <li>Casual shirt</li>
                          <li>Formal shirt</li>
                          <li>Sweatshirt</li>
                          <li>Sweater</li>
                        </ul>
                      </div>
                      <div className='mega '>
                        <h6>Indian & Festive wear</h6>
                        <ul className='ull'>
                          <li>Kurtas & Kurta Sets</li>
                          <li>Sherwanis</li>
                          <li>Nehru Jackets</li>
                          <li>Dhotis</li>
                        </ul>
                      </div>
                    </div>

                    <div className='megaop2'>
                      <div className='mega un'>
                        <h6>Topwear</h6>
                        <ul className='ull'>
                          <li>T-shirt</li>
                          <li>Casual shirt</li>
                          <li>Formal shirt</li>
                          <li>Sweatshirt</li>
                          <li>Sweater</li>
                          <li>T-shirt</li>
                          <li>Casual shirt</li>
                          <li>Formal shirt</li>
                          <li>Sweatshirt</li>
                          <li>Sweater</li>
                        </ul>
                      </div>
                      <div className='mega '>
                        <h6>Indian & Festive wear</h6>
                        <ul className='ull'>
                          <li>Kurtas & Kurta Sets</li>
                          <li>Sherwanis</li>
                          <li>Nehru Jackets</li>
                          <li>Dhotis</li>
                        </ul>
                      </div>
                    </div>

                    <div className='megaop2'>
                      <div className='mega un'>
                        <h6>Topwear</h6>
                        <ul className='ull'>
                          <li>T-shirt</li>
                          <li>Casual shirt</li>
                          <li>Formal shirt</li>
                          <li>Sweatshirt</li>
                          <li>Sweater</li>
                          <li>T-shirt</li>
                          <li>Casual shirt</li>
                          <li>Formal shirt</li>
                          <li>Sweatshirt</li>
                          <li>Sweater</li>
                        </ul>
                      </div>
                      <div className='mega '>
                        <h6>Indian & Festive wear</h6>
                        <ul className='ull'>
                          <li>Kurtas & Kurta Sets</li>
                          <li>Sherwanis</li>
                          <li>Nehru Jackets</li>
                          <li>Dhotis</li>
                        </ul>
                      </div>
                    </div>

                    <div className='megaop2'>
                      <div className='mega un'>
                        <h6>Topwear</h6>
                        <ul className='ull'>
                          <li>T-shirt</li>
                          <li>Casual shirt</li>
                          <li>Formal shirt</li>
                          <li>Sweatshirt</li>
                          <li>Sweater</li>
                          <li>T-shirt</li>
                          <li>Casual shirt</li>
                          <li>Formal shirt</li>
                          <li>Sweatshirt</li>
                          <li>Sweater</li>
                        </ul>
                      </div>
                      <div className='mega'>
                        <h6>Indian & Festive wear</h6>
                        <ul className='ull'>
                          <li>Kurtas & Kurta Sets</li>
                          <li>Sherwanis</li>
                          <li>Nehru Jackets</li>
                          <li>Dhotis</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li>HOME & LIVING
                <div class="underline">
                  <div class="underline4"></div>
                </div>
                <div className='back'>
                  <div className='megamenu'>
                    <div className='megaop3'>
                      <div className='mega un'>
                        <h6>Topwear</h6>
                        <ul className='ull'>
                          <li>T-shirt</li>
                          <li>Casual shirt</li>
                          <li>Formal shirt</li>
                          <li>Sweatshirt</li>
                          <li>Sweater</li>
                          <li>T-shirt</li>
                          <li>Casual shirt</li>
                          <li>Formal shirt</li>
                          <li>Sweatshirt</li>
                          <li>Sweater</li>
                        </ul>
                      </div>
                      <div className='mega '>
                        <h6>Indian & Festive wear</h6>
                        <ul className='ull'>
                          <li>Kurtas & Kurta Sets</li>
                          <li>Sherwanis</li>
                          <li>Nehru Jackets</li>
                          <li>Dhotis</li>
                        </ul>
                      </div>
                    </div>

                    <div className='megaop3'>
                      <div className='mega un'>
                        <h6>Bottom wear</h6>
                        <ul className='ull'>
                          <li>T-shirt</li>
                          <li>Casual shirt</li>
                          <li>Formal shirt</li>
                          <li>Sweatshirt</li>
                          <li>Sweater</li>
                          <li>T-shirt</li>
                          <li>Casual shirt</li>
                          <li>Formal shirt</li>
                          <li>Sweatshirt</li>
                          <li>Sweater</li>
                        </ul>
                      </div>
                      <div className='mega '>
                        <h6>Indian & Festive wear</h6>
                        <ul className='ull'>
                          <li>Kurtas & Kurta Sets</li>
                          <li>Sherwanis</li>
                          <li>Nehru Jackets</li>
                          <li>Dhotis</li>
                        </ul>
                      </div>
                    </div>

                    <div className='megaop3'>
                      <div className='mega un'>
                        <h6>Topwear</h6>
                        <ul className='ull'>
                          <li>T-shirt</li>
                          <li>Casual shirt</li>
                          <li>Formal shirt</li>
                          <li>Sweatshirt</li>
                          <li>Sweater</li>
                          <li>T-shirt</li>
                          <li>Casual shirt</li>
                          <li>Formal shirt</li>
                          <li>Sweatshirt</li>
                          <li>Sweater</li>
                        </ul>
                      </div>
                      <div className='mega '>
                        <h6>Indian & Festive wear</h6>
                        <ul className='ull'>
                          <li>Kurtas & Kurta Sets</li>
                          <li>Sherwanis</li>
                          <li>Nehru Jackets</li>
                          <li>Dhotis</li>
                        </ul>
                      </div>
                    </div>

                    <div className='megaop3'>
                      <div className='mega un'>
                        <h6>Topwear</h6>
                        <ul className='ull'>
                          <li>T-shirt</li>
                          <li>Casual shirt</li>
                          <li>Formal shirt</li>
                          <li>Sweatshirt</li>
                          <li>Sweater</li>
                          <li>T-shirt</li>
                          <li>Casual shirt</li>
                          <li>Formal shirt</li>
                          <li>Sweatshirt</li>
                          <li>Sweater</li>
                        </ul>
                      </div>
                      <div className='mega '>
                        <h6>Indian & Festive wear</h6>
                        <ul className='ull'>
                          <li>Kurtas & Kurta Sets</li>
                          <li>Sherwanis</li>
                          <li>Nehru Jackets</li>
                          <li>Dhotis</li>
                        </ul>
                      </div>
                    </div>

                    <div className='megaop3'>
                      <div className='mega un'>
                        <h6>Topwear</h6>
                        <ul className='ull'>
                          <li>T-shirt</li>
                          <li>Casual shirt</li>
                          <li>Formal shirt</li>
                          <li>Sweatshirt</li>
                          <li>Sweater</li>
                          <li>T-shirt</li>
                          <li>Casual shirt</li>
                          <li>Formal shirt</li>
                          <li>Sweatshirt</li>
                          <li>Sweater</li>
                        </ul>
                      </div>
                      <div className='mega'>
                        <h6>Indian & Festive wear</h6>
                        <ul className='ull'>
                          <li>Kurtas & Kurta Sets</li>
                          <li>Sherwanis</li>
                          <li>Nehru Jackets</li>
                          <li>Dhotis</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li>BEAUTY
                <div class="underline">
                  <div class="underline5"></div>
                </div>
                <div className='back'>
                  <div className='megamenu'>
                    <div className='megaop4'>
                      <div className='mega un'>
                        <h6>Topwear</h6>
                        <ul className='ull'>
                          <li>T-shirt</li>
                          <li>Casual shirt</li>
                          <li>Formal shirt</li>
                          <li>Sweatshirt</li>
                          <li>Sweater</li>
                          <li>T-shirt</li>
                          <li>Casual shirt</li>
                          <li>Formal shirt</li>
                          <li>Sweatshirt</li>
                          <li>Sweater</li>
                        </ul>
                      </div>
                      <div className='mega '>
                        <h6>Indian & Festive wear</h6>
                        <ul className='ull'>
                          <li>Kurtas & Kurta Sets</li>
                          <li>Sherwanis</li>
                          <li>Nehru Jackets</li>
                          <li>Dhotis</li>
                        </ul>
                      </div>
                    </div>

                    <div className='megaop4'>
                      <div className='mega un'>
                        <h6>Bottom wear</h6>
                        <ul className='ull'>
                          <li>T-shirt</li>
                          <li>Casual shirt</li>
                          <li>Formal shirt</li>
                          <li>Sweatshirt</li>
                          <li>Sweater</li>
                          <li>T-shirt</li>
                          <li>Casual shirt</li>
                          <li>Formal shirt</li>
                          <li>Sweatshirt</li>
                          <li>Sweater</li>
                        </ul>
                      </div>
                      <div className='mega '>
                        <h6>Indian & Festive wear</h6>
                        <ul className='ull'>
                          <li>Kurtas & Kurta Sets</li>
                          <li>Sherwanis</li>
                          <li>Nehru Jackets</li>
                          <li>Dhotis</li>
                        </ul>
                      </div>
                    </div>

                    <div className='megaop4'>
                      <div className='mega un'>
                        <h6>Topwear</h6>
                        <ul className='ull'>
                          <li>T-shirt</li>
                          <li>Casual shirt</li>
                          <li>Formal shirt</li>
                          <li>Sweatshirt</li>
                          <li>Sweater</li>
                          <li>T-shirt</li>
                          <li>Casual shirt</li>
                          <li>Formal shirt</li>
                          <li>Sweatshirt</li>
                          <li>Sweater</li>
                        </ul>
                      </div>
                      <div className='mega '>
                        <h6>Indian & Festive wear</h6>
                        <ul className='ull'>
                          <li>Kurtas & Kurta Sets</li>
                          <li>Sherwanis</li>
                          <li>Nehru Jackets</li>
                          <li>Dhotis</li>
                        </ul>
                      </div>
                    </div>

                    <div className='megaop4'>
                      <div className='mega un'>
                        <h6>Topwear</h6>
                        <ul className='ull'>
                          <li>T-shirt</li>
                          <li>Casual shirt</li>
                          <li>Formal shirt</li>
                          <li>Sweatshirt</li>
                          <li>Sweater</li>
                          <li>T-shirt</li>
                          <li>Casual shirt</li>
                          <li>Formal shirt</li>
                          <li>Sweatshirt</li>
                          <li>Sweater</li>
                        </ul>
                      </div>
                      <div className='mega '>
                        <h6>Indian & Festive wear</h6>
                        <ul className='ull'>
                          <li>Kurtas & Kurta Sets</li>
                          <li>Sherwanis</li>
                          <li>Nehru Jackets</li>
                          <li>Dhotis</li>
                        </ul>
                      </div>
                    </div>

                    <div className='megaop4'>
                      <div className='mega un'>
                        <h6>Topwear</h6>
                        <ul className='ull'>
                          <li>T-shirt</li>
                          <li>Casual shirt</li>
                          <li>Formal shirt</li>
                          <li>Sweatshirt</li>
                          <li>Sweater</li>
                          <li>T-shirt</li>
                          <li>Casual shirt</li>
                          <li>Formal shirt</li>
                          <li>Sweatshirt</li>
                          <li>Sweater</li>
                        </ul>
                      </div>
                      <div className='mega'>
                        <h6>Indian & Festive wear</h6>
                        <ul className='ull'>
                          <li>Kurtas & Kurta Sets</li>
                          <li>Sherwanis</li>
                          <li>Nehru Jackets</li>
                          <li>Dhotis</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li>STUDIO <sup>NEW</sup>
                <div class="underline">
                  <div class="underline6"></div>
                </div>
                <div className='back'>
                  <div className='megamenu1'>
                    <div className='megaopp'>
                      <div className='stimg'>
                        <img src="https://constant.myntassets.com/web/assets/img/studio-logo-new.svg" alt="" />
                        <p>Your daily inspiration for everything fashion</p>
                      </div>
                      <div className='banner'>
                        <img src="https://constant.myntassets.com/web/assets/img/sudio-nav-banner.png" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>

          </div>

        </div>
        <div className='right'>
          <div className='search fs-5'>
            <span><IoSearchOutline /></span>
            <input type="search" placeholder='Search for products, brands and more' />
          </div>
          <div className='icons'>
            <div>
              <GoPerson /><br />
              <p>Profile</p>
              <div class="underline">
                <div class="underline7"></div>
              </div>
            </div>
            <div>
              <FaRegHeart /><br />
              <p>Wishlist</p>

            </div>
            <div>
              <BsHandbag />
              <br />
              <p>Bag</p>

            </div>
          </div>
        </div>
      </div>

     
    </>


  )
}
