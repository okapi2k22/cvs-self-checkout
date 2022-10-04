import { ReactNode } from 'react';
import './Description.scss';

type DescriptionProps = {
    header: string,
    children: ReactNode
}

const Description = ({header, children }: DescriptionProps) => {
    return (
        <section className="Description">
            <div className="Description__content">
                <h2>{header}</h2>
                {children}
            </div>
        </section>
    )
}

export default Description;