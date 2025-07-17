import {DynamicString} from "../../../core/interfaces";

export interface HeaderProps {
    logo: HeaderLogo
    navItems: HeaderNavItem[]
    classes?: HeaderClasses
    isWide?: boolean
    isFixed?: boolean
}

export interface HeaderClasses {
    container?: string
}

export interface HeaderNavItem {
    id: number
    redirect: string | DynamicString
    isExternal: boolean
    label: DynamicString
    classes?: {
        container?: string
        item?: string
    }
}

export interface HeaderLogo {
    imagePath?: string
    label?: DynamicString
    redirect: string
    classes?: {
        container?: string
    }
}
