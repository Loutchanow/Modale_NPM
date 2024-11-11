interface ModaleProps {
    open: boolean;
    actionButtonOne: () => void;
    actionButtonTwo: () => void;
    message: string;
    labelButtonOne: string;
    labelButtonTwo: string;
    title: string;
    backgroundcolor?: string;
    textcolor?: string;
    bordercolor?: string;
}
declare const Modale: React.FC<ModaleProps>;

export { Modale };
