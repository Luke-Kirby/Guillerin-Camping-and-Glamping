import {HeaderProps} from "../components/non-contextual/header/header.interfaces";

export const shellHeaderConfig: HeaderProps = {
    // classes: {
    //  container: 'navbar navbar-expand-md navbar-dark'
    // },
    logo: {
        label: 'GUILLERIN',
        redirect: '/'
    },
    navItems: [
        {
            id: 0,
            redirect: '/',
            label: {
                en: 'Home',
                fr: 'Domicile'
            },
            isExternal: false,
        },
        {
            id: 1,
            redirect: '/accommodation',
            label: {
                en: 'Accommodation',
                fr: 'Logement'
            },
            isExternal: false
        },
        {
            id: 2,
            redirect: '/camping',
            label: {
                en: 'Camping',
                fr: 'Camping'
            },
            isExternal: false
        },
        {
            id: 3,
            redirect: '/gallery',
            label: {
                en: 'Gallery',
                fr: 'Galerie'
            },
            isExternal: false
        },
        {
            id: 4,
            redirect: {
                en: 'https://guillerin-caravan-and-glamping.amenitiz.io/fr/booking/room',//'Book Now',
                fr: 'https://guillerin-caravan-and-glamping.amenitiz.io/fr/booking/room',//'Vour la Galerie'
            },
            label: {
                en: 'Book Now',
                fr: 'Vour la Galerie'
            },
            classes: {
                container: 'nav-item cta'
            },
            isExternal: true
        },
    ],
    isFixed: true
}