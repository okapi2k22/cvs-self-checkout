import {ReactElement, FC, Children } from 'react';
import './Splitshow.scss';

type SplitshowProps = {
    children: Array<ReactElement>
}

type SplitshowSlotProps = {
    name: "left" | "right",
    children: ReactElement
}

const SplitshowSlot: FC<SplitshowSlotProps> = () => null;

const Splitshow = ({children}: SplitshowProps) => {
    const childrenArray = Children.toArray(children) as unknown as ReactElement[];
    const leftSlot = childrenArray.find(child=> child?.props?.name === "left");
    const rightSlot = childrenArray.find(child=> child?.props?.name === "right");
    return (
        <section className="Splitshow">
            <div className="Splitshow__content">
                <div className="Splitshow__container">
                    <div className="Splitshow__items">
                        <div className="Splitshow__columns">
                            <div className="Splitshow__item">
                                {leftSlot?.props?.children}
                            </div>
                        </div>
                        
                        <div className="Splitshow__columns">
                            <div className="Splitshow__item">
                                {rightSlot?.props.children}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

Splitshow.Slot = SplitshowSlot;

export default Splitshow;