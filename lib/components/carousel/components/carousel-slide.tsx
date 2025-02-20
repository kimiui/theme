'use client';

import { styled } from '@mui/material/styles';
import type { BoxProps } from '@mui/material/Box';

import { carouselClasses } from '../classes';

import type { CarouselOptions, CarouselSlideProps } from '../types';

// ----------------------------------------------------------------------

type StyledProps = Pick<CarouselOptions, 'axis' | 'slideSpacing'>;

const StyledRoot = styled('li', {
  shouldForwardProp: (prop) => prop !== 'axis' && prop !== 'slideSpacing',
})<StyledProps>(({ slideSpacing }) => ({
  display: 'block',
  position: 'relative',
  variants: [
    {
      props: {
        axis: 'x',
      },
      style: {
        minWidth: 0,
        paddingLeft: slideSpacing,
      },
    },
    {
      props: {
        axis: 'y',
      },
      style: {
        minHeight: 0,
        paddingTop: slideSpacing,
      },
    },
  ],
}));

const StyledContent = styled('div')({
  overflow: 'hidden',
  position: 'relative',
  borderRadius: 'inherit',
});

// ----------------------------------------------------------------------

export function CarouselSlide({ sx, options, children }: BoxProps & CarouselSlideProps) {
  const slideSize = getSize(options?.slidesToShow);

  return (
    <StyledRoot
      axis={options?.axis ?? 'x'}
      slideSpacing={options?.slideSpacing}
      className={carouselClasses.slide}
      sx={{
        flex: slideSize,
        ...sx,
      }}
    >
      {options?.parallax ? (
        <StyledContent className={carouselClasses.slideContent}>
          <div className="slide__parallax__layer">{children}</div>
        </StyledContent>
      ) : (
        children
      )}
    </StyledRoot>
  );
}

// ----------------------------------------------------------------------

type ObjectValue = {
  [key: string]: string | number;
};

type InputValue = CarouselOptions['slidesToShow'] | string | number;

function getSize(slidesToShow: InputValue): InputValue {
  if (slidesToShow && typeof slidesToShow === 'object') {
    return Object.keys(slidesToShow).reduce<ObjectValue>((acc, key) => {
      const sizeByKey = slidesToShow[key];
      acc[key] = getValue(sizeByKey);
      return acc;
    }, {});
  }

  return getValue(slidesToShow as string | number);
}

function getValue(value: string | number = 1): string {
  if (typeof value === 'string') {
    const isSupported = value === 'auto' || value.endsWith('%') || value.endsWith('px');
    if (!isSupported) {
      throw new Error(`Only accepts values: auto, px, %, or number.`);
    }
    // value is either 'auto', ends with '%', or ends with 'px'
    return `0 0 ${value}`;
  }

  if (typeof value === 'number') {
    return `0 0 ${100 / value}%`;
  }

  // Default case should not be reached due to the type signature, but we include it for safety
  throw new Error(`Invalid value type. Only accepts values: auto, px, %, or number.`);
}
