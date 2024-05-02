import type { ImageItemConfig } from "react-native-ios-utilities";
import type { IconConfig } from "./MenuIconConfig";
/** Maps to `UIMenu.Options` */
export type UIMenuOptions = 'destructive' | 'displayInline';
/** Maps to `UIMenuElement.State` */
export type MenuState = 'on' | 'off' | 'mixed';
/** Maps to `UIMenuElement.Attributes` */
export type MenuAttributes = 'hidden' | 'disabled' | 'destructive' | 'keepsMenuPresented';
/** Maps to `UIMenuElement.Attributes` */
export type MenuElementSize = 'small' | 'medium' | 'large';
export type DeferredMenuElementConfig = {
    type: 'deferred';
    deferredID: string;
    shouldCache?: boolean;
};
export type MenuActionConfig = {
    type?: 'action';
    actionKey: string;
    actionTitle: string;
    /**
     * Requires iOS 15 or later.
     * Text that appears below the menu action title.
     *
     * Previously, on iOS 13 and 14, the menu action's subtitle was set via
     * `MenuActionConfig.discoverabilityTitle`.
     * */
    actionSubtitle?: string;
    menuState?: MenuState;
    menuAttributes?: Array<MenuAttributes>;
    discoverabilityTitle?: string;
    /**
     * `IconConfig` is deprecated, use `ImageItemConfig` instead.
     * Used to configure what icon or image to show in the menu action.
     */
    icon?: IconConfig | ImageItemConfig;
};
export type MenuElementConfig = MenuConfig | MenuActionConfig | DeferredMenuElementConfig;
export type MenuConfig = {
    type?: 'menu';
    menuTitle: string;
    menuSubtitle?: string;
    menuOptions?: Array<UIMenuOptions>;
    menuItems?: Array<MenuElementConfig>;
    menuPreferredElementSize?: MenuElementSize;
    /**
     * `IconConfig` is deprecated, use `ImageItemConfig` instead.
     * Used to configure what icon or image to show in the submenu.
     *
     * Note: The icon is only shown if the menu is a submenu. If the menu
     * is the root menu, the icon will not be visible.
     */
    icon?: IconConfig | ImageItemConfig;
};
//# sourceMappingURL=MenuConfig.d.ts.map