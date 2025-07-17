import {ImageSectionProps} from "../../components/non-contextual/image-section/image-section.interfaces";

export const homeCoverConfig: ImageSectionProps = {
    isFullPage: true,
    imagePath: "images/home/cover.jpeg",
    title: {
        en: 'Welcome to Nature Camping Guillerin',
        fr: 'Bienvenue au Camping Nature Guillerin'
    },
    subTitle: {
        en: 'Discover Our Remote Glamp And Caravan Experience',
        fr: 'Découvrez notre expérience de glamping et de caravane à distance'
    },
    action: {
        label: {
            en: 'Book Now',
            fr: 'Reserve maintenant'
        },
        press: () => window.open("https://guillerin-caravan-and-glamping.amenitiz.io/en/booking/room", '_blank')
    },
}