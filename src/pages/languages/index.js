import React from 'react'
import i18n, { languages } from '../../i18n';
import { Image } from './styled'
import { withRouter } from 'react-router-dom'

const Languages = ({ history }) => {
    const changeLanguage = (lang) => {
        i18n.changeLanguage(lang);
        history.replace(lang)
    }

    return (
        <div>
            {
                languages.map(item => <Image key={item.name} src={item.flag} alt={item.name} onClick={() => changeLanguage(item.name)}/>)
            }
        </div>
    )
}

export default withRouter(Languages)
