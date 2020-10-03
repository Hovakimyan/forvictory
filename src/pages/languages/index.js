import React from 'react'
import i18n, { languages } from '../../i18n';
import { Image } from './styled'

const Languages = () => {
    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    }

    return (
        <div>
            {
                languages.map(item => <Image src={item.flag} alt={item.name} onClick={() => changeLanguage(item.name)}/>)
            }
        </div>
    )
}

export default Languages
