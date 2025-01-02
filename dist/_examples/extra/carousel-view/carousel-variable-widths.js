import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import Box from '@mui/material/Box';
import { Image } from '../../../components/image';
import { Carousel, useCarousel, CarouselDotButtons, CarouselArrowBasicButtons, } from '../../../components/carousel';
import { IndexLabel } from './elements';
export function CarouselVariableWidths({ data }) {
    const carousel = useCarousel({
        slidesToShow: 'auto',
        slideSpacing: '20px',
    });
    return (_jsxs(_Fragment, { children: [_jsx(Carousel, { carousel: carousel, children: data.map((item, index) => (_jsx(CarouselItem, { index: index, item: item }, item.id))) }), _jsxs(Box, { display: "flex", alignItems: "center", justifyContent: "space-between", sx: { mt: 3 }, children: [_jsx(CarouselArrowBasicButtons, { ...carousel.arrows, options: carousel.options }), _jsx(CarouselDotButtons, { scrollSnaps: carousel.dots.scrollSnaps, selectedIndex: carousel.dots.selectedIndex, onClickDot: carousel.dots.onClickDot })] })] }));
}
function CarouselItem({ item, index }) {
    const width = (index + 2) * 140;
    return (_jsxs(Box, { sx: { position: 'relative' }, children: [_jsx(IndexLabel, { index: index + 1 }), _jsx(Image, { alt: item.title, src: item.coverUrl, sx: {
                    borderRadius: 2,
                    width: { xs: width / 3, md: width },
                    height: { xs: 160, sm: 240, md: 320 },
                } })] }));
}
