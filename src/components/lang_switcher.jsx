import React from "react";
import { useTranslation } from 'react-i18next';
import lang_switcher_img from '../img/lang_switcher.png'    

var langState = 'ru'

export default function LanguageSwitcher() {
    
    const { t, i18n } = useTranslation()  

    function languageSwitch(){
        
    if (langState == 'ru') {
        i18n.changeLanguage('en')
        langState = 'en'        
      } else {
        i18n.changeLanguage('ru')
        langState = 'ru'        
      }
        
    }
    return(        
            <div className='button_div language_switcher' onClick={languageSwitch}>
                <p>Ru</p><img src={lang_switcher_img} alt="" /><p>Eng</p>
            </div>
        )
    }
