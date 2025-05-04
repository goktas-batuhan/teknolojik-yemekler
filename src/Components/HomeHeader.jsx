import { Link } from "react-router-dom";

export default function HomeHeader() {



    return (
        <header>
            <div className="header-contents">
                <div className="logo">
                    <img src="/assets/iteration-1/logo.svg" />
                </div>
                <div className="header-renkli">
                    <p>fırsatı kaçırma</p>
                </div>
                <div className="header-slogan">
                    <p>KOD ACIKTIRIR</p>
                    <p>PIZZA, DOYURUR</p>
                </div>
                <div className="header-button">
                    <Link to="/order">
                        <button className="header-button-class" type="button">ACIKTIM</button>
                    </Link>
                </div>
            </div>
        </header>


    )
}