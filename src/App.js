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
import dowload_png from './img/download.png'
import lang_switcher_img from './img/lang_switcher.png'
import './App.css';

import Movingimage_component from './components/moving_image'
import CurrentDate_component from './components/current_year';
import LanguageSwitcher from './components/lang_switcher';

import { useTranslation } from 'react-i18next';
import React, { useEffect } from 'react';
import process from "process";

import background_city_pic from './img/city_background.jpg'
import moving_pic_part_1 from './img/image_part_001.jpg'
import moving_pic_part_2 from './img/image_part_002.jpg'
import moving_pic_part_3 from './img/image_part_003.jpg'
import moving_pic_part_4 from './img/image_part_004.jpg'
import about_us_pic from './img/1675837596_foni-club-p-fon-cherno-belii-gradient-vektor-4.png'

import bottom_phone_pic from './img/phone_2.png'
import bottom_email_pic from './img/email2.png'
import bottom_map_pic from './img/map.png'

import InfiniteLooper from './components/infinite_looper.tsx';
import MyDialog from './components/modal_window';

import Carousel from './components/carousel.jsx'
import 'react-responsive-carousel/lib/styles/carousel.min.css';


var examplePdf = ''

if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
  examplePdf = '../src/file1.pdf'
} else {
  examplePdf = 'file1.pdf'
}


function App() {

  const { t, i18n } = useTranslation()
  
  useEffect(() => {
    document.title = t('Page_Title')
  }, []);
  

  return (  
    
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
                  <div className='upper_div_contacts'>                
                    <div className='ud_contacts_row'>

                      <div className='ud_contact_type'>
                        <div className='ud_contact_type_pic'>
                          <img src={phone_png} alt="" />
                        </div>
                      </div>                      

                      <div className='ud_contact_data'>
                        <p>7 909 906-88-97</p>
                      </div>              
                      
                    </div>
                    <div className='ud_contacts_row'>
                      <div className='ud_contact_type'>
                        <div className='ud_contact_type_pic'>
                          <img src={email_png} alt="" />
                        </div>
                      </div>
                    
                      <div className='ud_contact_data'>
                        <p><a href="mailto:sliva73@bk.ru">sliva73@bk.ru</a></p>
                      </div>
                      
                      
                      
                      
                    </div>
                  </div>
                  
                </div>
              
              </div>
              <div className='under_header'>

                <div className='under_header_div'>
                  <div className='under_header_buttons_div'>                   
                    <div className='button_div mainpage' onClick="alert('Кнопка нажата')"><p><a href='#main'>{ t('Home') }</a></p></div>
                    <div className='button_div aboutcompany' onClick="alert('Кнопка нажата')"><p><a href='#about_us'>{ t('About us') }</a></p></div>
                    <div className='button_div ourjobs' onClick="alert('Кнопка нажата')"><p><a href='#our_jobs'>{ t('Our works') }</a></p></div>
                    <div className='button_div contacts' onClick="alert('Кнопка нажата')"><p><a href='#contacts'>{ t('Contacts') }</a></p></div>
                  </div> 
                              
                  <LanguageSwitcher />

                </div>
                

                <div className='moving_image_div'>
                  <Movingimage_component />                  
                  {/* <InfiniteLooper speed='20'direction='left'>
                  <div className="contentBlock contentBlock--one">
                    <div></div>
                    <img src={moving_pic_part_1} /> 

                    <img src={moving_pic_part_2} />
                    <img src={moving_pic_part_3} />
                    <img src={moving_pic_part_4} />
                  </div>
                  </InfiniteLooper> */}
                </div>
                
                <div className='middle_line'>
                  <img className='middle_line_img' src={pixel_line} alt="" />                  
                </div>
                <a name="about_us"></a>
                <div className='middle_strings'>
                    
                  <p className='present_text'>{t('Present_text_row_1')}</p>            
                  <p className='company_name'>{t('Present_text_row_2')}</p>
                  <p className='present_text_2'>{t('Present_text_row_3')}</p>
                    
                </div>
               
              </div>

                <div className='middle_jobicons_1'> 
                  <div className='middle_jobicons_block'>
                    
                    <div className='icon_and_text'>                 
                      <div className='middle_icon'>
                        <img src={warm_img} alt="" />
                      </div>
                      <p className='middle_icontext'>
                        {t('heating')}
                      </p>                      
                    </div>                    
                  </div>

                  <div className='middle_jobicons_block'>
                    <div className='icon_and_text'>                 
                      <div className='middle_icon'>
                        <img src={vent_img} alt="" />
                      </div>
                      <p className='middle_icontext'>
                      {t('ventilation')}
                      </p>                      
                    </div>                    
                  </div>

                  <div className='middle_jobicons_block'>
                    <div className='icon_and_text'>                 
                      <div className='middle_icon'>
                        <img src={snowflake_img} alt="" />
                      </div>
                      <p className='middle_icontext'>
                      {t('conditioning')}
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
                            {t('water supply')}                            
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
                          {t('sewerage')}                           
                        </p>                      
                      </div>                    
                    </div>
                    </div>
                </div>
                
                <div className='carousel_container'>
                  <a name="our_jobs"></a>            
                  <Carousel />                 
                </div>                           

                <div className='middle_div'>

                  <div className='about_us_field'>
                    <p>{t('About us 2')} </p>
                  </div> 

                  <div className='button_div file_download' onClick="alert('Кнопка нажата')">
                    <div>
                      <img src={dowload_png} alt="" />
                    </div>
                    <div className='download_button_p_div'>
                    <p className='download_button_p'>                            
                        <a 
                          href={examplePdf}
                          download={t('Download_file_name')}
                          target="_blank"
                          rel="noreferrer"
                        >{ t('Download presentation PDF') }</a></p>
                    </div>                        
                  </div>                    
                    
                  <div className='about_us_text'>
                    <p className='about_us_p1'>
                      {t('About us text')}                    
                    </p>

                    <div className='about_us_pic'>                      
                      <img className='bottom_line_img' src={pixel_line} alt="" />
                    </div>

                    <p className='about_us_p2'>
                      {t('About us text 2')}  
                    </p>
                  </div>

                  <div className='city_background_pic_container'>
                    <a name="contacts"></a>                    
                    <img src={background_city_pic} alt="" />
                  </div>
                  
                </div>
              <div className='bottom_div'>
                
                <div className='bottom_div_contacts'>
                   
                    <div className='bd_contacts_row'>
                    <div className='bd_contact_type'>
                          <div className='bd_contact_type_pic'>
                            <img src={bottom_email_pic} alt="" />
                          </div>
                          <div className='bd_contact_type_label'>
                            <p>E-mail</p>
                          </div>
                        </div>
                        <div className='bd_contact_data'>
                          <p><a href="mailto:sliva73@bk.ru">sliva73@bk.ru</a></p>
                        </div>
                    </div>

                    <div className='bd_contacts_row'>
                        <div className='bd_contact_type'>
                          <div className='bd_contact_type_pic'>
                            <img src={bottom_phone_pic} alt="" />
                          </div>
                          <div className='bd_contact_type_label'>
                            <p>{t('Phone_num')}</p>
                          </div>
                        </div>
                        <div className='bd_contact_data'>
                          <p className='phone_num'>+7 909 906-88-97</p>
                        </div>
                    </div>

                    <div className='bd_contacts_row'>
                        <div className='bd_contact_type'>
                        <div className='bd_contact_type_pic'>
                            <img src={bottom_map_pic} alt="" />
                          </div>
                          <div className='bd_contact_type_label'>
                            <p>{t('Address')}</p>
                          </div>
                        </div>
                        <div className='bd_contact_data'>
                        <p className='bd_contact_data_addr_p'>
                          {t('Address_data')}
                          <br></br>
                          {t('Address_data_bank_creds')}
                        </p>
                        </div>
                    </div> 

                         
                                    
                </div>

              </div>

            

                  {/* <MyDialog /> */}
                
               

              
              
            </div>
          
            
          </div>       
        </div>

        <div className='footer'>
          {/* <p>2023</p>    */}
          <CurrentDate_component />
          <div className='developer_info'>
            <div className='developer_info_row'>
              <p className='developer_info_row_developed_by'>
                {t('Developed by')}
              </p>
              <a href='https://career.habr.com/redlance'>
                {t('Developer_name')}
              </a>
            </div>
            
          </div>
        </div>
        
      </div> 
    </div>
  );
}

export default App;
