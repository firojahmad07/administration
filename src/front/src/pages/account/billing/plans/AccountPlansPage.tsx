import { Fragment } from 'react';
import { Container } from '@/admin/components/container';
import { Toolbar, ToolbarActions, ToolbarHeading } from '@/admin/layouts/demo1/toolbar';
import { Link } from 'react-router-dom';
import { PageNavbar } from '@/admin/pages/account';
import { AccountPlansContent } from '.';
import { useLayout } from '@/admin/providers';

const AccountPlansPage = () => {
  const { currentLayout } = useLayout();

  return (
    <Fragment>
      <PageNavbar />

      {currentLayout?.name === 'demo1-layout' && (
        <Container>
          <Toolbar>
            <ToolbarHeading title="Plans" description="Central Hub for Personal Customization" />
            <ToolbarActions>
              <Link to="#" className="btn btn-sm btn-light">
                View Billing
              </Link>
            </ToolbarActions>
          </Toolbar>
        </Container>
      )}
      
      <Container>
        <AccountPlansContent />
      </Container>
    </Fragment>
  );
};

export { AccountPlansPage };
