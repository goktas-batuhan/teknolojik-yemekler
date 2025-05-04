import { Link } from "react-router-dom";

export default function HomeMainSection() {



    return (
        <div className="main-section">
            <div className="main-icons">
                <div className="icons-cards">
                    <img src="/assets/iteration-2/icons/1.svg" />
                    <p>YENİ! Kore</p>
                </div>
                <div className="icons-cards">
                    <img src="/assets/iteration-2/icons/2.svg" />
                    <p>Pizza</p>
                </div>
                <div className="icons-cards">
                    <img src="/assets/iteration-2/icons/3.svg" />
                    <p>Burger</p>
                </div>
                <div className="icons-cards">
                    <img src="/assets/iteration-2/icons/4.svg" />
                    <p>Kızartmalar</p>
                </div>
                <div className="icons-cards">
                    <img src="/assets/iteration-2/icons/5.svg" />
                    <p>Fast Food</p>
                </div>
                <div className="icons-cards">
                    <img src="/assets/iteration-2/icons/6.svg" />
                    <p>Gazlı İçecek</p>
                </div>
            </div>
            <div className="main-cards">
                <div className="big-card" >
                    <h2>Özel
                        Lezzetus</h2>
                    <p>Position:Absolute Acı Burger</p>
                    <Link to="/order">
                        <button className="big-card-button" type="button">SİPARİŞ VER</button>
                    </Link>


                </div>
                <div className="small-cards">
                    <div className="small-card-1">
                        <p>Hackathlon Burger Menü</p>
                        <Link to="/order">
                            <button className="small-card-buttons" type="button">SİPARİŞ VER</button>
                        </Link>
                    </div>
                    <div className="small-card-2">
                        <p><span style={{ color: "#CE2829" }}>Çoooook</span> hızlı <br />npm gibi kurye</p>
                        <Link to="/order">
                            <button className="small-card-buttons" type="button">SİPARİŞ VER</button>
                        </Link>
                    </div>

                </div>
            </div>
            <div className="main-popular">
                <div className="colored-title">
                    en çook paketlenen menüler
                </div>
                <div className="popular-title">
                    Acıktıran Kodlara Doyuran Lezzetler
                </div>
                <div className="popular-icons">
                    <div className="popular-icons-cards">
                        <img src="/assets/iteration-2/icons/1.svg" alt="icon" /><p>Ramen</p>
                    </div>
                    <div className="popular-icons-cards">
                        <img src="/assets/iteration-2/icons/2.svg" alt="icon" /><p>Pizza</p>
                    </div>
                    <div className="popular-icons-cards">
                        <img src="/assets/iteration-2/icons/3.svg" alt="icon" /><p>Burger</p>
                    </div>
                    <div className="popular-icons-cards">
                        <img src="/assets/iteration-2/icons/4.svg" alt="icon" /><p>French fries</p>
                    </div>
                    <div className="popular-icons-cards">
                        <img src="/assets/iteration-2/icons/5.svg" alt="icon" /><p>Fast food</p>
                    </div>
                    <div className="popular-icons-cards">
                        <img src="/assets/iteration-2/icons/6.svg" alt="icon" /><p>Soft dirnks</p>
                    </div>
                </div>
                <div className="food-cards">
                    <div className="food-cards-content">
                        <img src="/assets/iteration-2/pictures/food-1.png" alt="food" />
                        <h3>
                            Terminal Pizza
                        </h3>
                        <div className="card-content">
                            <p>4.9</p><p>(200)</p><p><b>60₺</b></p>
                        </div>
                    </div>
                    <div className="food-cards-content">
                        <img src="/assets/iteration-2/pictures/food-2.png" alt="food" />
                        <h3>
                            Position Absolute Acı Pizza
                        </h3>
                        <div className="card-content">
                            <p>4.9</p><p>(200)</p><p><b>60₺</b></p>
                        </div>
                    </div>
                    <div className="food-cards-content">
                        <img src="/assets/iteration-2/pictures/food-3.png" alt="food" />
                        <h3>
                            useEffect Tavuklu Burger
                        </h3>
                        <div className="card-content">
                            <p>4.9</p><p>(200)</p><p><b>60₺</b></p>
                        </div>
                    </div>
                </div>
            </div>
        </div >


    )
}