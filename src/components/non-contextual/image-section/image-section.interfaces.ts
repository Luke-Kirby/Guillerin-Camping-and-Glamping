import {DynamicString} from "../../../core/interfaces";

export interface ImageSectionProps {
    imagePath: (() => string) | string
    title?: DynamicString
    subTitle?: DynamicString
    isFullPage?: boolean
    action: {
        label: DynamicString
        press: () => void;
    }
}