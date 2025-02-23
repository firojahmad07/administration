import { useViewport } from '@/admin/hooks';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import { SidebarMenuDashboard, SidebarMenuDefault } from '.';
import { useMenus } from '@/admin/providers';

const SidebarSecondary = () => {
  const { pathname } = useLocation();
  const [viewportHeight] = useViewport();
  const offset = 0;
  const [scrollableHeight, setScrollableHeight] = useState<number>(0);
  const { getMenuConfig } = useMenus();
  const menuConfig = getMenuConfig('secondary');
  
  useEffect(() => {
    const availableHeight = viewportHeight - offset;
    setScrollableHeight(availableHeight);
  }, [viewportHeight]);

  return (
    <div className="flex items-stretch grow shrink-0 justify-center ps-1.5 my-5 me-1.5">
      <div
        className="scrollable-y-auto grow"
        style={{
          ...(scrollableHeight > 0 && { height: `${scrollableHeight}px` })
        }}
      >
        {pathname === '/' ? <SidebarMenuDashboard /> : <SidebarMenuDefault />}
      </div>
    </div>
  );
};

export { SidebarSecondary };
