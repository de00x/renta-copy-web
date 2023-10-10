import { FC } from 'react';
import { classNames } from 'shared';
import Like from 'assets/icons/like2.svg?react';
import { Button, ThemeButton } from 'shared/ui/Button';
import cls from './Status.module.scss';

interface StatusProps {
    onClick?: (e: any) => void
    activeStatus: boolean;
    className?: string;

}
export const Status: FC<StatusProps> = (props) => {
    const { activeStatus, className, onClick } = props;
    const onChange = (e: any) => {
        onClick(e);
    };
    return (
        <div className={classNames(cls.button, {}, [className])}>
            <Button
                onClick={(e) => onChange(e)}
                theme={ThemeButton.DETAIL}
                className={cls.buttonLike}
            >
                <Like
                    className={
                        classNames(
                            cls.fill,
                            {
                                [cls.fillActive]: activeStatus,
                            },
                            [],
                        )
                    }
                />
            </Button>
        </div>
    );
};
