import { Fragment } from 'react';

import { toAbsoluteUrl } from '@/admin/utils/Assets';
import { Container } from '@/admin/components/container';
import { KeenIcon } from '@/admin/components';

import { UserProfileHero } from '@/admin/partials/heros';
import { Navbar, NavbarActions, NavbarDropdown } from '@/admin/partials/navbar';
import { PageMenu } from '@/admin/pages/public-profile';

import { Network } from './blocks';

const ProfileNetworkPage = () => {
  const image = (
    <img
      src={toAbsoluteUrl('/media/avatars/300-1.png')}
      className="rounded-full border-3 border-success max-h-[100px] max-w-full"
    />
  );

  return (
    <Fragment>
      <UserProfileHero
        name="Jenny Klabber"
        image={image}
        info={[
          { label: 'KeenThemes', icon: 'abstract' },
          { label: 'SF, Bay Area', icon: 'geolocation' },
          { email: 'jenny@kteam.com', icon: 'sms' }
        ]}
      />

      <Container>
        <Navbar>
          <PageMenu />

          <NavbarActions>
            <button type="button" className="btn btn-sm btn-primary">
              <KeenIcon icon="users" /> Connect
            </button>
            <button className="btn btn-sm btn-icon btn-light">
              <KeenIcon icon="messages" />
            </button>
            <NavbarDropdown />
          </NavbarActions>
        </Navbar>
      </Container>

      <Container>
        <Network />
      </Container>
    </Fragment>
  );
};

export { ProfileNetworkPage };
