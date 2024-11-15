interface ModaleProps {
    open: boolean;
    actionButtonOne: () => void;
    actionButtonTwo: () => void;
    labelButtonOne: string;
    labelButtonTwo: string;
    message: string;
    title: string;
    backgroundcolor?: string;
    textcolor?: string;
    bordercolor?: string;
    onClose: () => void;
}
declare const Modale: React.FC<ModaleProps>;

export { Modale };
