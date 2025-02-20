'use client';

import Link from '@mui/material/Link';
import Tooltip from '@mui/material/Tooltip';

import { paths } from 'lib/routes/paths';
import { countries } from 'lib/assets/data';
import { SvgColor } from 'lib/components/svg-color';
import { CustomBreadcrumbs } from 'lib/components/custom-breadcrumbs';
import { Iconify, FlagIcon, SocialIcon } from 'lib/components/iconify';

import { ComponentHero } from '../../component-hero';
import { ComponentBlock, ComponentContainer } from '../../component-block';

// ----------------------------------------------------------------------

export function IconsView() {
  return (
    <>
      <ComponentHero>
        <CustomBreadcrumbs
          heading="Icons"
          links={[{ name: 'Components', href: paths.docs.components.root }, { name: 'Icons' }]}
          moreLink={[
            'https://mui.com/components/material-icons',
            'https://iconify.design/icon-sets',
          ]}
        />
      </ComponentHero>

      <ComponentContainer>
        <ComponentBlock title="Material">
          <Link
            href="https://mui.com/components/icons/#main-content"
            target="_blank"
            rel="noopener"
          >
            https://mui.com/components/icons/#main-content
          </Link>
        </ComponentBlock>

        <ComponentBlock title="Iconify">
          <Tooltip title="Iconify">
            <Iconify icon="eva:color-palette-fill" width={32} />
          </Tooltip>
          <Iconify icon="eva:color-palette-fill" width={32} sx={{ color: 'action.active' }} />
          <Iconify icon="eva:color-palette-fill" width={32} sx={{ color: 'action.disabled' }} />
          <Iconify icon="eva:color-palette-fill" width={32} sx={{ color: 'primary.main' }} />
          <Iconify icon="eva:color-palette-fill" width={32} sx={{ color: 'secondary.main' }} />
          <Iconify icon="eva:color-palette-fill" width={32} sx={{ color: 'info.main' }} />
          <Iconify icon="eva:color-palette-fill" width={32} sx={{ color: 'success.main' }} />
          <Iconify icon="eva:color-palette-fill" width={32} sx={{ color: 'warning.main' }} />
          <Iconify icon="eva:color-palette-fill" width={32} sx={{ color: 'error.main' }} />
        </ComponentBlock>

        <ComponentBlock title="Local icon">
          <Tooltip title="SvgColor">
            <SvgColor src="/logo/logo-single.svg" sx={{ width: 32, height: 32 }} />
          </Tooltip>
          <SvgColor
            src="/logo/logo-single.svg"
            sx={{ color: 'action.active', width: 32, height: 32 }}
          />
          <SvgColor
            src="/logo/logo-single.svg"
            sx={{ color: 'action.disabled', width: 32, height: 32 }}
          />
          <SvgColor
            src="/logo/logo-single.svg"
            sx={{ color: 'primary.main', width: 32, height: 32 }}
          />
          <SvgColor
            src="/logo/logo-single.svg"
            sx={{ color: 'secondary.main', width: 32, height: 32 }}
          />
          <SvgColor
            src="/logo/logo-single.svg"
            sx={{ color: 'info.main', width: 32, height: 32 }}
          />
          <SvgColor
            src="/assets/icons/navbar/ic-dashboard.svg"
            sx={{ color: 'success.main', width: 32, height: 32 }}
          />
          <SvgColor
            src="/logo/logo-single.svg"
            sx={{ color: 'warning.main', width: 32, height: 32 }}
          />
          <SvgColor
            src="/logo/logo-single.svg"
            sx={{ color: 'error.main', width: 32, height: 32 }}
          />
        </ComponentBlock>

        <ComponentBlock title="Social icon">
          <Tooltip title="Google">
            <SocialIcon width={32} icon="google" />
          </Tooltip>

          <SocialIcon width={32} icon="facebook" />
          <SocialIcon width={32} icon="linkedin" />
          <SocialIcon width={32} icon="twitter" />
          <SocialIcon width={32} icon="instagram" />
          <SocialIcon width={32} icon="github" />
        </ComponentBlock>

        <ComponentBlock title="Flag icon">
          {countries.map((country) =>
            country.label ? (
              <Tooltip key={country.code} title={`${country.label} - ${country.code}`}>
                <FlagIcon code={country.code} />
              </Tooltip>
            ) : null
          )}
        </ComponentBlock>
      </ComponentContainer>
    </>
  );
}
