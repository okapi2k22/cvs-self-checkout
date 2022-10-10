import './Screenshot.scss';

type ScreenshotProps = {
    img: string,
    alt: string,
    description: string,
    source?: string,
    isCreditable: boolean
}

const Screenshot = ({img, alt, description, source="", isCreditable=false}: ScreenshotProps) => {
    return (
        <section className="Screenshot">
            <figure>
                <img src={img} alt={alt} loading="lazy" />
                {isCreditable ?<figcaption>{description} - {source}, all rights reserved.</figcaption>: <figcaption>{description}</figcaption>}
            </figure>
        </section>
    )
}

export default Screenshot;