import { t } from 'ttag'

import logo from './img/logo.png';
import phone_png from './img/phonereceiver_99743.png'
import email_png from './img/email.png'
import header_img from './img/background_pipes.jpg'
import pixel_line from './img/pixel_line.png'
import warm_img from './img/warm.png'
import vent_img from './img/vent.png'
import snowflake_img from './img/snowflake.png'
import drops_img from './img/drops.png'
import tubes_img from './img/tubes.png'
import './App.css';
import Movingimage_component from './components/moving_image'
// import OwlCarousel from 'react-owl-carousel';
// import 'owl.carousel/dist/assets/owl.carousel.css';
// import 'owl.carousel/dist/assets/owl.theme.default.css';

import carousel_pic from './img/carousel_imgs/2.jpg'


// import { addLocale, useLocale } from 'ttag';
// const locale = getLocale(); // fetch locale code from cookies, url, localStorage e.t.c

// if (locale !== 'ru') {
//     // load json file with translations
//     const translationsObj = require(`../i18n/${locale}.po.json`);
//     addLocale(locale, translationsObj);
//     useLocale(locale);
// } 

{/* <OwlCarousel items={3} className='owl-theme' loop margin={10} nav>
    <div class='item'>    
        <img src={carousel_pic} alt="" />      
    </div>
    <div class='item'>
        <h4>2</h4>
    </div>
    <div class='item'>
        <h4>3</h4>
    </div>
    <div class='item'>
        <h4>4</h4>
    </div>
    <div class='item'>
        <h4>5</h4>
    </div>
    <div class='item'>
        <h4>6</h4>
    </div>
    <div class='item'>
        <h4>7</h4>
    </div>
    <div class='item'>
        <h4>8</h4>
    </div>
    <div class='item'>
        <h4>9</h4>
    </div>
    <div class='item'>
        <h4>10</h4>
    </div>
    <div class='item'>
        <h4>11</h4>
    </div>
    <div class='item'>
        <h4>12</h4>
    </div>
</OwlCarousel>; */}


function App() {  return (
    
    <div className='background_pic_div'>
      <div className='background_pic_wrapper'>
        
      
        <div className='content'>      
            
      
          <div className="App">
            <a name="main"></a>

            <div className='upper'>

              <div className='header'>

                <div className='logo_wrapper'>              
                  <div className='logo'>
                    <img src={logo} alt="" />
                  </div>
                </div>
              

                <div className='contacts_text'>
                  <div className='contacts_strings'>                
                    <div className='contact_string'>

                      <div className='contact_pic'>
                      <img src={phone_png} alt="" />
                      </div>                      
                                       
                      <p>+7-916-000-00-00</p>
                    </div>
                    <div className='contact_string'>
                      <div className='contact_pic'>
                      <img src={email_png} alt="" />
                      </div>    
                      
                      <p><a href="mailto:abcdef@google.ru">abcdef@google.ru</a></p>
                    </div>
                  </div>
                  
                </div>
              
              </div>
              <div className='under_header'>

                <div className='under_header_div'>
                
                  <div className='button_div mainpage' onclick="alert('Кнопка нажата')"><p><a href='#main'>{ t('Главная') }</a></p></div>
                  <div className='button_div aboutcompany' onclick="alert('Кнопка нажата')"><p><a href='#about_us'>{ t('О компании') }</a></p></div>
                  <div className='button_div ourjobs' onclick="alert('Кнопка нажата')"><p><a href='#our_jobs'>{ t('Наши работы') }</a></p></div>
                  <div className='button_div contacts' onclick="alert('Кнопка нажата')"><p><a href='#contacts'>{ t('Контакты') }</a></p></div>                 
               
                </div>
                

                <div className='moving_image_div'>
                  <Movingimage_component />                  
                </div>
                
                <div className='middle_line'>
                  <img className='middle_line_img' src={pixel_line} alt="" />                  
                </div>
                <a name="about_us"></a>
                <div className='middle_strings'>
                     {/* <div className='middle_string'>                  */}
                     <p className='present_text'>Представляем вам нашу компанию  </p>
                    {/* </div> */}
                    {/* <div className='middle_string'>  */}
                      <p className='company_name'>"СтройЭнергоТехнология"</p>
                    {/* </div> */}
                    {/* <div className='middle_string'>  */}
                      <p className='present_text_2'>по работе с инженерными системами:</p>
                    {/* </div> */}
                </div>
                {/* <div className='middle_line'>
                  <img className='middle_line_img' src={pixel_line} alt="" />                  
                </div> */}


                <div className='middle_jobicons_1'>              

                  
                  <div className='middle_jobicons_block'>
                    
                    <div className='icon_and_text'>                 
                      <div className='middle_icon'>
                        <img src={warm_img} alt="" />
                      </div>
                      <p className='middle_icontext'>
                        отопления
                      </p>                      
                    </div>                    
                  </div>

                  <div className='middle_jobicons_block'>
                    <div className='icon_and_text'>                 
                      <div className='middle_icon'>
                        <img src={vent_img} alt="" />
                      </div>
                      <p className='middle_icontext'>
                        вентиляции
                      </p>                      
                    </div>                    
                  </div>

                  <div className='middle_jobicons_block'>
                    <div className='icon_and_text'>                 
                      <div className='middle_icon'>
                        <img src={snowflake_img} alt="" />
                      </div>
                      <p className='middle_icontext'>
                        кондиционирования
                      </p>                      
                    </div>                    
                  </div>              
                  
                  
                </div>

                <div className='middle_jobicons_2'> 
                  <div className='middle_jobicons_2_half1'>                  
                
                    <div className='middle_jobicons_block'>
                        
                        <div className='icon_and_text'>                 
                          <div className='middle_icon'>
                            <img src={drops_img} alt="" />
                          </div>
                          <p className='middle_icontext'>
                            водноснабжения
                          </p>                      
                        </div>                    
                    </div>
                  </div>
                  <div className='middle_jobicons_2_half2'> 
                    <div className='middle_jobicons_block'>
                      
                      <div className='icon_and_text'>                 
                        <div className='middle_icon'>
                          <img src={tubes_img} alt="" />
                        </div>
                        <p className='middle_icontext'>
                          канализации
                        </p>                      
                      </div>                    
                    </div>
                    </div>
                </div>

                {/* <AwesomeSlider /> */}
                {/* <AutoplaySlider /> */}
                {/* <img src={carousel_pic}></img> */}
                <div className='carousel_container'>                
                
                  {/* <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="true">
                    <div class="carousel-indicators">
                      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div class="carousel-inner">
                      <div class="carousel-item active">
                        <img src={carousel_pic} class="d-block w-100" alt="..."></img>
                      </div>
                      <div class="carousel-item">
                        <img src="..." class="d-block w-100" alt="..."></img>
                      </div>
                      <div class="carousel-item">
                        <img src="..." class="d-block w-100" alt="..."></img>
                      </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                      <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                      <span class="carousel-control-next-icon" aria-hidden="true"></span>
                      <span class="visually-hidden">Next</span>
                    </button>
                  </div> */}

                  {/* <OwlCarousel></OwlCarousel> */}

                </div>

              </div>
              
            </div>
          
            {/* <header className="App-header"> */}
              {/* <img src={logo} className="App-logo" alt="logo" /> */}
              {/* <p>
                Edit <code>src/App.js</code> and save to reload.
              </p>
              <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn React
              </a> */}
                
            {/* </header> */}
          </div>       
        </div>
      </div> 
    </div>
  );
}

export default App;
