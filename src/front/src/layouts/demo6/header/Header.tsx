import { KeenIcon } from '@/admin/components';
import { Container } from '@/admin/components/container';
import { toAbsoluteUrl } from '@/admin/utils';
import { Link } from 'react-router-dom';
import { useDemo6Layout } from '..';

const Header = () => {
  const { setMobileSidebarOpen } = useDemo6Layout();

  const handleMobileSidebarOpen = () => {
    setMobileSidebarOpen(true);
  };

  return (
    <header className="flex items-center fixed z-10 top-0 start-0 end-0 shrink-0 bg-[--tw-page-bg] dark:bg-[--tw-page-bg-dark] h-[--tw-header-height]">
      <Container className="flex items-center justify-between flex-wrap gap-3">
        <Link to="/">
          <img
            src={toAbsoluteUrl('/media/app/mini-logo-circle.svg')}
            className="dark:hidden h-[42px]"
          />
          <img
            src={toAbsoluteUrl('/media/app/mini-logo-circle-dark.svg')}
            className="hidden dark:inline-block h-[42px]"
          />
        </Link>

        <button
          onClick={handleMobileSidebarOpen}
          className="btn btn-icon btn-light btn-clear btn-sm -me-2"
        >
          <KeenIcon icon="menu" />
        </button>
      </Container>
    </header>
  );
};

export { Header };
