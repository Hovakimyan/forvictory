import Tank from '../assests/tank.svg'
import Helicopter from '../assests/helicopter.svg'
import Solider from '../assests/solider.svg'
import Jet from '../assests/plain.svg'
import Smerch from '../assests/smerch.svg'
import ATS from '../assests/ats.png'

const losses = [
    {
        name: 'UAV',
        count: 195,
        img: ATS,
    },
    {
        name: 'ARMOR',
        count: 566,
        img: Tank,
    },
    {
        name: 'HELICOPTER',
        count: 16,
        img: Helicopter,
    },
    {
        name: 'PLANE',
        count: 22,
        img: Jet,
    },
    {
        name: 'SMERCH',
        count: 4,
        img: Smerch,
    },
    {
        name: 'DEAD',
        count: 6259,
        img: Solider,
    },
]

const size = {
    mobileS: '320px',
    mobileM: '375px',
    mobileL: '425px',
    tablet: '768px',
    laptop: '1024px',
    laptopL: '1440px',
    desktop: '2560px'
}

const device = {
    mobileS: `(min-width: ${size.mobileS})`,
    mobileM: `(min-width: ${size.mobileM})`,
    mobileL: `(min-width: ${size.mobileL})`,
    tablet: `(min-width: ${size.tablet})`,
    laptop: `(min-width: ${size.laptop})`,
    laptopL: `(min-width: ${size.laptopL})`,
    desktop: `(min-width: ${size.desktop})`,
    desktopL: `(min-width: ${size.desktop})`
};

export { losses, device }
