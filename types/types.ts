export interface Settings {
    className: string,
    centerMode?: boolean,
    infinite?: boolean,
    centerPadding?: string,
    slidesToShow?: number,
    slidesToScroll?: number,
    speed: number,
    autoplay: boolean,
    autoplaySpeed: number,
    dots: boolean,
    arrows?: boolean;
    nextArrow?: React.JSX.Element;
    prevArrow?: React.JSX.Element;
    responsive?: Array<any>;
  };