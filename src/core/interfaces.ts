export interface DynamicComponent {
    component: string
}

export interface ImageSectionProps {
    imagePath: string,
    title: (() => string) | string,
    subTitle: (() => string) | string,
    isFullPage: boolean,
    action?: {
        label: (() => string) | string;
        press: () => void;
    }
}

export interface ImageSectionProps {
    imagePath: string,
    title: (() => string) | string,
    subTitle: (() => string) | string,
    isFullPage: boolean,
    content:  (() => string[]) | string[],
    action?: {
        label: (() => string) | string;
        press: () => void;
    }
}

export type ComponentPropsType = string | (() => string) | (() => void) | boolean | (() => string[]) | string[]

export type DynamicComponentTypes = DynamicComponent & ImageSectionProps

export type DynamicString = string | (() => string) | Translations

export interface Translations {
    en: string
    fr: string
}

export interface TranslationsArray {
    en: string[]
    fr: string[]
}

export interface PageData {
    page: string
    components: ImageSectionApi[]
    componentsRaw: string
}

export interface StaticProps {
    title?: Translations
    subTitle?: Translations
    isFullPage?: boolean
    imagePath?: string
    content?: TranslationsArray
}

export interface ImageSectionApi {
    id: string
    component: "ImageSection" | "TextImage"
    props: {
        static: StaticProps,
        actions : {
            action: {
                label: Translations,
                press: {
                    actionType: "router-redirect"
                    isExternal: boolean
                    source: Translations
                }
            }
        }
    }
}