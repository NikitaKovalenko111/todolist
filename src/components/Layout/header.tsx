import cn from 'classnames'
import style from './../../sass/header.module.sass'
import logo from './../../images/logo192.png'

type PropsType = {}

const Header: React.FC<PropsType> = (): JSX.Element => {
    return (
        <header data-testid='header' className={cn(style.header)}>
            <div className="container" data-testid='container'>
                <div data-testid='logoWrapper' className={cn(style.logo)}>
                    <a data-testid='logo' href="#"><img width="70px" src={logo} alt="logo" /></a>
                </div>
            </div>
        </header>
    )
}

export default Header