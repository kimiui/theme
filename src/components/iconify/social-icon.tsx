import type { Theme, SxProps } from '@mui/material/styles';

import { forwardRef } from 'react';
import SvgIcon from '@mui/material/SvgIcon';

// ----------------------------------------------------------------------

export type SocialIconProps = {
  icon?: string;
  width?: number;
  sx?: SxProps<Theme>;
};

export const SocialIcon = forwardRef<SVGSVGElement, SocialIconProps>(
  ({ icon, width = 20, sx, ...other }, ref) => {
    const socialName = icon?.trim().toLowerCase();

    return (
      <SvgIcon
        ref={ref}
        sx={{
          width,
          height: width,
          flexShrink: 0,
          ...(['twitter', 'github'].includes(`${socialName}`) && {
            color: 'text.primary',
          }),
          ...sx,
        }}
        {...other}
      >
        {socialName === 'google' && googleSVG}
        {socialName === 'facebook' && facebookSVG}
        {socialName === 'linkedin' && linkedinSVG}
        {socialName === 'twitter' && twitterSVG}
        {socialName === 'instagram' && instagramSVG}
        {socialName === 'github' && githubSVG}
      </SvgIcon>
    );
  }
);

// ----------------------------------------------------------------------

const githubSVG = (
  <path d="M12.001 2c-5.525 0-10 4.475-10 10a9.994 9.994 0 0 0 6.837 9.488c.5.087.688-.213.688-.476c0-.237-.013-1.024-.013-1.862c-2.512.463-3.162-.612-3.362-1.175c-.113-.288-.6-1.175-1.025-1.413c-.35-.187-.85-.65-.013-.662c.788-.013 1.35.725 1.538 1.025c.9 1.512 2.337 1.087 2.912.825c.088-.65.35-1.087.638-1.337c-2.225-.25-4.55-1.113-4.55-4.938c0-1.088.387-1.987 1.025-2.687c-.1-.25-.45-1.275.1-2.65c0 0 .837-.263 2.75 1.024a9.28 9.28 0 0 1 2.5-.337c.85 0 1.7.112 2.5.337c1.913-1.3 2.75-1.024 2.75-1.024c.55 1.375.2 2.4.1 2.65c.637.7 1.025 1.587 1.025 2.687c0 3.838-2.337 4.688-4.562 4.938c.362.312.675.912.675 1.85c0 1.337-.013 2.412-.013 2.75c0 .262.188.574.688.474A10.016 10.016 0 0 0 22 12c0-5.525-4.475-10-10-10" />
);

const googleSVG = (
  <>
    <path
      d="M21.8055 10.0415H21V10H12V14H17.6515C16.827 16.3285 14.6115 18 12 18C8.6865 18 6 15.3135 6 12C6 8.6865 8.6865 6 12 6C13.5295 6 14.921 6.577 15.9805 7.5195L18.809 4.691C17.023 3.0265 14.634 2 12 2C6.4775 2 2 6.4775 2 12C2 17.5225 6.4775 22 12 22C17.5225 22 22 17.5225 22 12C22 11.3295 21.931 10.675 21.8055 10.0415Z"
      fill="#FFC107"
    />
    <path
      d="M3.15332 7.3455L6.43882 9.755C7.32782 7.554 9.48082 6 12.0003 6C13.5298 6 14.9213 6.577 15.9808 7.5195L18.8093 4.691C17.0233 3.0265 14.6343 2 12.0003 2C8.15932 2 4.82832 4.1685 3.15332 7.3455Z"
      fill="#FF3D00"
    />
    <path
      d="M12.0002 22C14.5832 22 16.9302 21.0115 18.7047 19.404L15.6097 16.785C14.5719 17.5742 13.3039 18.0011 12.0002 18C9.39916 18 7.19066 16.3415 6.35866 14.027L3.09766 16.5395C4.75266 19.778 8.11366 22 12.0002 22Z"
      fill="#4CAF50"
    />
    <path
      d="M21.8055 10.0415H21V10H12V14H17.6515C17.2571 15.1082 16.5467 16.0766 15.608 16.7855L15.6095 16.7845L18.7045 19.4035C18.4855 19.6025 22 17 22 12C22 11.3295 21.931 10.675 21.8055 10.0415Z"
      fill="#1976D2"
    />
  </>
);

const facebookSVG = (
  <path
    d="M14 13.5H16.5L17.5 9.5H14V7.5C14 6.47062 14 5.5 16 5.5H17.5V2.1401C17.1743 2.09685 15.943 2 14.6429 2C11.9284 2 10 3.65686 10 6.69971V9.5H7V13.5H10V22H14V13.5Z"
    fill="#1877F2"
  />
);

const linkedinSVG = (
  <path
    d="M5.14678 2.52608C5.85835 2.65326 6.45746 3.09997 6.77593 3.74217C6.88945 3.97025 6.95882 4.20149 6.99245 4.46426C7.01558 4.64609 7.00822 4.94775 6.97669 5.12433C6.82323 5.99567 6.18418 6.68832 5.33071 6.9122C5.1699 6.95424 5.03326 6.97316 4.84722 6.98157C3.96327 7.01731 3.14449 6.52856 2.75034 5.72869C2.44342 5.10646 2.44342 4.37597 2.74928 3.75268C3.08983 3.06003 3.73729 2.60281 4.51613 2.50822C4.64962 2.4914 5.00909 2.50191 5.14678 2.52608ZM17.2025 8.64541C17.768 8.70007 18.324 8.84932 18.7844 9.0711C19.1407 9.24242 19.5464 9.50414 19.9154 9.80264C20.3274 10.1358 20.6175 10.5436 20.9549 11.2626C21.2281 11.8449 21.3784 12.341 21.4562 12.9128C21.473 13.0347 21.4741 13.3626 21.4772 17.2715L21.4804 21.5H19.5622H17.644V17.9442C17.644 15.5436 17.6408 14.3538 17.6335 14.2791C17.5452 13.3899 17.1374 12.753 16.4437 12.4188C16.2797 12.3399 16.1704 12.3 15.998 12.2558C15.3159 12.0803 14.5097 12.1791 13.9095 12.5102C13.3514 12.8182 12.931 13.4499 12.7733 14.2161C12.7113 14.5188 12.7145 14.3096 12.7145 18.0598V21.5H10.8015H8.88858V15.1778V8.85563H10.6912H12.4938V9.76585V10.675L12.5715 10.571C12.7344 10.3513 13.0351 10.037 13.2579 9.85204C14.1187 9.13626 15.2244 8.69271 16.2944 8.6349C16.4952 8.62439 17.0491 8.6307 17.2025 8.64541ZM6.72338 15.1778V21.5H4.76313H2.80289V15.1778V8.85563H4.76313H6.72338V15.1778Z"
    fill="#0A66C2"
  />
);

const twitterSVG = (
  <path d="M17.7242 3H20.779L14.1069 10.624L21.956 21H15.8117L10.9959 14.7087L5.49201 21H2.43288L9.56798 12.8438L2.04346 3H8.34346L12.692 8.75048L17.7242 3ZM16.6511 19.174H18.343L7.42182 4.73077H5.60451L16.6511 19.174Z" />
);

const instagramSVG = (
  <>
    <path
      d="M22.437 7.67096C22.3859 6.55328 22.2084 5.78997 21.9488 5.12223C21.6852 4.42158 21.2719 3.78688 20.7377 3.26241C20.2132 2.72817 19.5785 2.31476 18.8779 2.05101C18.2099 1.79158 17.4468 1.61423 16.3292 1.56345C15.2094 1.51218 14.8516 1.5 12.0001 1.5C9.14852 1.5 8.79073 1.51218 7.67096 1.56316C6.55328 1.61423 5.79018 1.79175 5.12223 2.05129C4.42156 2.31493 3.78685 2.72826 3.26237 3.26245C2.72813 3.78686 2.31472 4.4215 2.05097 5.12211C1.79154 5.79005 1.61419 6.55332 1.56341 7.67084C1.51218 8.79073 1.5 9.14835 1.5 11.9999C1.5 14.8516 1.51218 15.2094 1.56345 16.3291C1.61439 17.4467 1.79191 18.2099 2.05146 18.8779C2.31509 19.5785 2.7284 20.2132 3.26257 20.7376C3.78701 21.2718 4.4217 21.6851 5.12236 21.9487C5.79018 22.2084 6.55344 22.3857 7.67112 22.4368C8.79106 22.4879 9.14864 22.5 12.0002 22.5C14.8518 22.5 15.2096 22.4879 16.3293 22.4368C17.447 22.3857 18.2101 22.2084 18.8781 21.9487C19.5756 21.6789 20.209 21.2665 20.7378 20.7377C21.2666 20.2089 21.6791 19.5754 21.9488 18.8779C22.2085 18.2099 22.3859 17.4467 22.437 16.3292C22.4879 15.2092 22.5001 14.8516 22.5001 12.0001C22.5001 9.14835 22.4879 8.79073 22.437 7.67096ZM20.5469 16.2432C20.5003 17.2669 20.3292 17.8229 20.1855 18.1928C20.0108 18.6457 19.7432 19.057 19.4 19.4002C19.0568 19.7434 18.6455 20.011 18.1927 20.1856C17.8227 20.3294 17.2668 20.5005 16.243 20.5471C15.1361 20.5977 14.8039 20.6083 12.0001 20.6083C9.19614 20.6083 8.86415 20.5977 7.75701 20.5471C6.73342 20.5005 6.17749 20.3294 5.80736 20.1856C5.35132 20.0173 4.93879 19.7488 4.6001 19.4001C4.25133 19.0614 3.98291 18.6489 3.81457 18.1928C3.67085 17.8229 3.49973 17.2669 3.45309 16.2432C3.40264 15.1361 3.3919 14.8039 3.3919 12.0003C3.3919 9.19642 3.40264 8.86448 3.45309 7.75717C3.49985 6.73342 3.67085 6.17745 3.81457 5.80753C3.98296 5.35144 4.25138 4.93887 4.6001 4.6001C4.93879 4.25132 5.35139 3.98295 5.80753 3.81473C6.17749 3.67085 6.73342 3.49989 7.75722 3.45309C8.86432 3.40264 9.19646 3.3919 12.0001 3.3919C14.8038 3.3919 15.1357 3.40264 16.243 3.45326C17.2668 3.49989 17.8226 3.67101 18.1927 3.81473C18.6487 3.98311 19.0612 4.25147 19.3999 4.6001C19.7487 4.93879 20.0171 5.35139 20.1854 5.80753C20.3292 6.17749 20.5004 6.73342 20.5469 7.75722C20.5974 8.86432 20.6081 9.19646 20.6081 12.0001C20.6081 14.8039 20.5976 15.1358 20.5469 16.2432Z"
      fill="url(#paint0_linear_0_8736)"
    />
    <path
      d="M11.9999 6.60812C9.02211 6.60812 6.60808 9.02223 6.60808 12.0001C6.60808 14.9779 9.02211 17.3919 11.9999 17.3919C14.9779 17.3919 17.3919 14.9779 17.3919 12.0001C17.3919 9.02223 14.9779 6.60812 11.9999 6.60812ZM11.9999 15.5C10.067 15.4999 8.49993 13.9329 8.5001 11.9999C8.5001 10.067 10.067 8.49993 12.0001 8.49993C13.9331 8.5001 15.5 10.067 15.5 11.9999C15.5 13.9329 13.9329 15.5 11.9999 15.5Z"
      fill="url(#paint1_linear_0_8736)"
    />
    <path
      d="M18.8649 6.39516C18.8649 7.091 18.3008 7.65509 17.605 7.65509C16.909 7.65509 16.3449 7.09095 16.3449 6.39516C16.3449 5.69912 16.909 5.13503 17.605 5.13503C18.3008 5.13503 18.8649 5.69916 18.8649 6.39516Z"
      fill="url(#paint2_linear_0_8736)"
    />
    <defs>
      <linearGradient
        id="paint0_linear_0_8736"
        x1="3.26229"
        y1="20.7377"
        x2="20.7378"
        y2="3.26212"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FFD600" />
        <stop offset="0.5" stopColor="#FF0100" />
        <stop offset="1" stopColor="#D800B9" />
      </linearGradient>
      <linearGradient
        id="paint1_linear_0_8736"
        x1="4.57544"
        y1="19.4246"
        x2="19.4247"
        y2="4.57532"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FF6400" />
        <stop offset="0.5" stopColor="#FF0100" />
        <stop offset="1" stopColor="#FD0056" />
      </linearGradient>
      <linearGradient
        id="paint2_linear_0_8736"
        x1="16.7139"
        y1="7.28603"
        x2="18.4957"
        y2="5.50413"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#F30072" />
        <stop offset="1" stopColor="#E50097" />
      </linearGradient>
    </defs>
  </>
);
