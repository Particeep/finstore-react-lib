import { MouseEventHandler } from "react";
interface DialogTitleProps {
    onClose: MouseEventHandler<any>;
    fullScreen: boolean;
    title: string;
    description: string;
}
declare const ParticeepDialogTitle: (props: DialogTitleProps) => JSX.Element;
export default ParticeepDialogTitle;
