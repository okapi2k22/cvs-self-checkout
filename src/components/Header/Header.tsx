import './Header.scss';


type HeaderProps = {
    title: string,
    subtitle: string
}
const Header = ({title, subtitle}: HeaderProps) => {
    return (
        <header className="Header">
            <div className="Header__content">
                <div className="Header__container">
                    <h1 className="Header__title">{title}</h1>
                    <h2 className="Header__subtitle">{subtitle}</h2>
                </div>
            </div>
        </header>
    )
}

export default Header;