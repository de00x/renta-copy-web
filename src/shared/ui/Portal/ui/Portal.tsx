import { ReactNode, useEffect } from 'react';
import { createPortal } from 'react-dom';

interface PortalProps {
    children: ReactNode;
    getHTMLElementId: string;
}

export const Portal = (props: PortalProps) => {
    const {
        children,
        getHTMLElementId,
    } = props;
    const mount = document.getElementById(getHTMLElementId);
    const el = document.createElement('div');
    useEffect(() => {
        if (mount) mount.appendChild(el);
        return () => {
            if (mount) mount.removeChild(el);
        };
    }, [el, mount, getHTMLElementId]);
    if (!mount) return null;
    return createPortal(children, el);
};
