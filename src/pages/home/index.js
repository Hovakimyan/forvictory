import React, { useEffect } from 'react'

import * as Styled from './styled'
import List from './list'
import { useTranslation } from 'react-i18next'
import i18n, { languages } from '../../i18n';
import Helmet from "react-helmet";

const Home = (props) => {
    const { lang }= props.match.params

    useEffect(() => {
        const item = languages.find(item => item.name === lang)
        if (item && lang !== i18n.language) {
            i18n.changeLanguage(lang);
            props.history.replace(lang)
        }
    }, [lang, props.history])

    const { t } = useTranslation();
    return (
        <Styled.Container>
            <Helmet>
                <title>{t("TITLE")}</title>
            </Helmet>
            <Styled.Title>{t("TITLE")}</Styled.Title>
            <List />
            <Styled.Description>
                <p>{t("DESCRIPTION")}</p>
                <p>#ARTSAKHSTRONG</p>
                <p>#NKPEACE</p>
            </Styled.Description>
        </Styled.Container>
    )
}

export default Home
