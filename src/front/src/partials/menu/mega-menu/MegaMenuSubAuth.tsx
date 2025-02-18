import { IMenuItemConfig, TMenuConfig, MenuSub } from '@/admin/components/menu';
import { MegaMenuFooter, MegaMenuSubDefault, MegaMenuSubHighlighted } from './components';

const MegaMenuSubAuth = (items: TMenuConfig) => {
  const authItem = items[4];
  const authItemGeneral = authItem.children ? authItem.children[0] : {};
  const authItemOthers = authItem.children ? authItem.children[1] : {};

  return (
    <MenuSub className="flex-col gap-0 w-full lg:max-w-[670px]">
      <div className="flex flex-col lg:flex-row">
        <div className="pt-4 pb-2 lg:p-7.5 lg:pb-5 grow">
          <div className="grid lg:grid-cols-2 gap-5">
            {authItemGeneral.children?.map((item: IMenuItemConfig, index) => {
              return (
                <div key={`item-${index}`} className="flex flex-col gap-5">
                  <h3 className="flex items-center gap-1.5 text-sm text-gray-800 font-semibold leading-none pl-2.5 h-3.5">
                    {item.title}
                    {item.badge && (
                      <span className="left-auto badge badge-xs badge-primary badge-outline">
                        {item.badge}
                      </span>
                    )}
                  </h3>
                  <div className="menu menu-default menu-fit flex-col gap-0.5">
                    {item.children && MegaMenuSubDefault(item.children)}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="lg:w-[250px] mb-4 lg:mb-0 lg:border-l lg:border-l-gray-200 rounded-xl lg:rounded-r-xl lg:rounded-l-none shrink-0 px-3 py-4 lg:p-7.5 bg-light-active dark:bg-coal-500 dark:lg:border-l-coal-100">
          <h3 className="text-sm text-gray-800 font-semibold leading-none pl-2.5 mb-5">
            {authItemOthers.title}
          </h3>
          <div className="menu menu-default menu-fit flex-col gap-0.5">
            {authItemOthers.children && MegaMenuSubHighlighted(authItemOthers.children)}
          </div>
        </div>
      </div>
      <MegaMenuFooter />
    </MenuSub>
  );
};

export { MegaMenuSubAuth };
