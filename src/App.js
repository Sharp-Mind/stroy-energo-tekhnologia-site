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
import fileDownload from './components/download_presentation';

import Carousel from './components/carousel.jsx'
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import ExamplePdf from '../src/file1.pdf'



// import { addLocale, useLocale } from 'ttag';
// const locale = getLocale(); // fetch locale code from cookies, url, localStorage e.t.c

// if (locale !== 'ru') {
//     // load json file with translations
//     const translationsObj = require(`../i18n/${locale}.po.json`);
//     addLocale(locale, translationsObj);
//     useLocale(locale);
// } 


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
                      
                      <p><a href="mailto:setinform@bk.ru">setinform@bk.ru</a></p>
                    </div>
                  </div>
                  
                </div>
              
              </div>
              <div className='under_header'>

                <div className='under_header_div'>
                
                  <div className='button_div mainpage' onClick="alert('Кнопка нажата')"><p><a href='#main'>{ t('Главная') }</a></p></div>
                  <div className='button_div aboutcompany' onClick="alert('Кнопка нажата')"><p><a href='#about_us'>{ t('О компании') }</a></p></div>
                  <div className='button_div ourjobs' onClick="alert('Кнопка нажата')"><p><a href='#our_jobs'>{ t('Наши работы') }</a></p></div>
                  <div className='button_div contacts' onClick="alert('Кнопка нажата')"><p><a href='#contacts'>{ t('Контакты') }</a></p></div>                 
               
                </div>
                

                <div className='moving_image_div'>
                  {/* <Movingimage_component />                   */}
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

                
                <div className='carousel_container'>              

                  <Carousel />
                 

                </div>

                <div>                 

                  <div>                          
                    <div className='button_div file_download' onClick="alert('Кнопка нажата')">
                        <p>
                          <a 
                            href={ExamplePdf}
                            download="Референт-лист СЭТ"
                            target="_blank"
                            rel="noreferrer"
                          >{ t('Скачать презентацию') }</a></p></div>                    
                    </div>
                  
                </div>

              </div>
              
            </div>
          
            
          </div>       
        </div>
      </div> 
    </div>
  );
}

export default App;
