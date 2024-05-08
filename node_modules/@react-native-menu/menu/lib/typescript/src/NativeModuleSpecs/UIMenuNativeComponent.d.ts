import type { DirectEventHandler, Int32 } from 'react-native/Libraries/Types/CodegenTypes';
import type { HostComponent, ViewProps } from 'react-native';
type SubAction = {
    id?: string;
    title: string;
    titleColor?: Int32;
    subtitle?: string;
    state?: string;
    image?: string;
    imageColor?: Int32;
    displayInline?: boolean;
    attributes?: {
        destructive?: boolean;
        disabled?: boolean;
        hidden?: boolean;
    };
};
type MenuAction = {
    id?: string;
    title: string;
    titleColor?: Int32;
    subtitle?: string;
    state?: string;
    image?: string;
    imageColor?: Int32;
    displayInline?: boolean;
    attributes?: {
        destructive?: boolean;
        disabled?: boolean;
        hidden?: boolean;
    };
    subactions?: Array<SubAction>;
};
export interface NativeProps extends ViewProps {
    onPressAction?: DirectEventHandler<{
        event: string;
    }>;
    actions: Array<MenuAction>;
    actionsHash: string;
    title?: string;
}
declare const _default: HostComponent<NativeProps>;
export default _default;
//# sourceMappingURL=UIMenuNativeComponent.d.ts.map