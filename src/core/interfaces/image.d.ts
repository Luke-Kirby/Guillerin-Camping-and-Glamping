export interface Image {
  src: string;
}

export interface Data {
  url: string;
  images: Image[];
  pictureLoop: Image[][];
  loading: boolean;
}

export interface CampingData {
    url: string;
    images: Image[];
    pictureLoop: Image[][];
    content:
    {
        section1: {
            subHeading: (() => string) | string,
            paragraph: (() => string) | string
        },
        section2: {
            subHeading: (() => string) | string,
            paragraph: (() => string) | string
        },
        section3: {
            subHeading: (() => string) | string,
            bullet1: (() => string) | string,
            bullet2: (() => string) | string,
            bullet3: (() => string) | string,
            bullet4: (() => string) | string,
            bullet5: (() => string) | string,
            bullet6: (() => string) | string,
        },
        section4: {
            subHeading: (() => string) | string,
            paragraph: (() => string) | string,
            bullet1: (() => string) | string,
            bullet2: (() => string) | string,
            bullet3: (() => string) | string,
            bullet4: (() => string) | string,
            bullet5: (() => string) | string,
            bullet6: (() => string) | string,
        },
        bookBtn: (() => string) | string
    }
    loading: boolean;
  }
