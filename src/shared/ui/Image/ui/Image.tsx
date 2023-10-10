import React, { useState } from 'react';
import Delete from 'assets/icons/delete.svg?react';
import cls from './Image.module.scss';

interface ImageProps {
    idPhoto?: string
    src: string
    deleteImg?: (idPhoto: string) => void
}

export const Image = (props: ImageProps) => {
    const { idPhoto, src, deleteImg } = props;
    const [toggel, setToggel] = useState(false);
    return (
        <div
            key={idPhoto}
            className={cls.image}
            onMouseEnter={() => setToggel(true)}
            onMouseLeave={() => setToggel(false)}
        >
            <img
                className={cls.item}
                src={src}
                alt="img"
            />
            {toggel
            && (
                <div className={cls.delete}>
                    <Delete
                        onClick={() => deleteImg(idPhoto)}
                        onMouseOver={() => setToggel(true)}
                        onMouseOut={() => setToggel(false)}
                    />
                </div>
            )}
        </div>
    );
};
