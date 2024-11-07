import { Offcanvas, Button } from 'react-bootstrap';
import React, { useState } from 'react';
import './App.css';
import logo from './assets/Group 1 (1).svg';
import icon from './assets/icons8-menu-50.png';
import bola from './assets/LIS_3368 1.svg';
import video from './assets/Polygon 2.svg';
import qiz from './assets/Group 161.svg';
import bol from './assets/Group 73.svg';
import foot from './assets/photo_2024-07-11_08-39-33.jpg';
import haykal from './assets/Mask Group.svg'
import people from './assets/image 71.svg'
import krasovka from './assets/84262145266048 (1) 4.svg'

function App() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className='About'>
      <div className="header">
        <div className="header_item">
          <img src={logo} alt="Logo" />
          <a href=""> <h1>WEESTEP</h1></a>
        </div>
        <div className="header_item">
          <nav>
            <a className="lin1" href="#">О нас</a>
            <a className="lin2" href="#">Каталог</a>
            <a className="lin3" href="#">Где купить</a>
            <a className="lin4" href="#">Блог</a>
            <a className="lin5" href="#">Контакты</a>
            <a className="lin6" href="#">find your fit</a>

            <form action="#">
              <select name="languages" id="languages">
                <optgroup label="Available Languages">
                  <option value="UZB">O'zbek</option>
                  <option value="RUS">Rus</option>
                  <option value="ENG">Ingliz</option>
                </optgroup>
              </select>
            </form>
          </nav>
          <div className="icon">
            <a className='a' href="#" onClick={handleShow}>
              <img src={icon} alt="Menu Icon" />
            </a>

            <Offcanvas show={show} onHide={handleClose} placement='end'>
              <Offcanvas.Header closeButton>
                <Offcanvas.Title>MENU</Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <nav className='nav'>
                  <a className="lin1" href="#">О нас</a>
                  <a className="lin2" href="#">Каталог</a>
                  <a className="lin3" href="#">Где купить</a>
                  <a className="lin4" href="#">Блог</a>
                  <a className="lin5" href="#">Контакты</a>
                  <a className="lin6" href="#">find your fit</a>
                </nav>
              </Offcanvas.Body>
            </Offcanvas>
          </div>

        </div>

      </div>
      <div className="d">
        <div className="div">
          <div className="div_item">
            <div className="i">
              <h1>weestep <br /> be bigger</h1>
              <br />
              <h3>Для детей как для взрослых. Даже лучше.</h3>
              <br />
              <nav>
                <a href="">Sandals</a>
              </nav>
              <br /><br />

            </div>
          </div>
          <div className="div_item">
            <img src={haykal} alt="" />

          </div>
        </div>
      </div>
      <div className="main">
        <div className="min">
          <div className="main_item">
            <img src={people} alt="" />
          </div>
          <div className="main_item">
            <h1>attract develop surprise</h1>
          </div>
        </div>
      </div>
      <div className="foot">
        <div className="fot">
          <div className="foot_item">
           <div className="h">
           <h1>just scan</h1>
           <h3>Все говорят о долговечности, а мы предлагаем пробег. Наши кроссовки — гарантия 100 километров. При покупке нашей пары обуви сканируй QR-код на коробке или на бирке, чтобы узнать детали.</h3>
           </div>
          </div>
          <div className="foot_item">
            <img src={krasovka} alt="" />
          </div>
        </div>
      </div>

      <div className="footer">
        <h1>Где купить?</h1>

        <div className="footer_item">
          <a href="" className='lin1'>nd</a>
          <a href="" className='lin2'>Estonia</a>
          <a href="" className='lin3'>Bulgaria</a>
          <a href="" className='lin4'>Gr</a>
        </div>
        <div className="footer_item">
          <a href="" className='lin1'>Latvia</a>
          <a href="" className='lin2'>Lithuania</a>
          <a href="" className='lin3'>Slovakia</a>
        </div>
        <div className='di'>
          <nav>
            <a href="">Выбрать</a>
          </nav>
        </div>
      </div>


      <footer className="footerr">
        <div className="footer-logo">
          <img src={logo} alt="Weestep Logo" />
          <h1>WEESTEP</h1>
        </div>

        <div className="footer-links">
          <ul>
            <li><a href="#about">о нас</a></li>
            <li><a href="#blog">блог</a></li>
            <li><a href="#catalog">каталог</a></li>
            <li><a href="#where-to-buy">где купить</a></li>
            <li><a href="#contacts">контакты</a></li>
            <li><a href="#find-your-fit">find your fit</a></li>
          </ul>
          <ul>
            <li><a href="#tiktok">tiktok</a></li>
            <li><a href="#instagram">instagram</a></li>
            <li><a href="#facebook">facebook</a></li>
            <li><a href="#youtube">youtube</a></li>
          </ul>
          <ul>
            <li><a href="#private-policy">private policy</a></li>
            <li><a href="#terms-conditions">terms & conditions</a></li>
          </ul>
        </div>
       
      </footer>
      <div className="footer-credit">
          <div className="d">
          <div className="f">
            <p>Website: Other Land</p>

          </div>
          
          <div className="f">
          <p>(c) 2021 All rights reserved</p>
          </div>
          </div>
        </div>
    </div>
  )
}

export default App