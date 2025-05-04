import { useLocation } from "react-router-dom"
import "./Succes.css"



export default function Success() {
    const location = useLocation()
    const { boyut, hamur, ekMalzemeler, adet } = location.state || { boyut: "", hamur: "", ekMalzemeler: [], adet: 1 }
    console.log(boyut, hamur, ekMalzemeler)
    const secimTutari = ekMalzemeler.length * 5;
    const toplam = (85.5 + secimTutari) * adet;

    return (
        <>
            <div className="all-succes">
                <div className="succes-main-div">
                    <img src="../../images/iteration-1-images/logo.svg" alt="logo" />
                    <p className="succes-sekilli-yazi">lezzetin yolda</p>
                    <h2 className="succes-siparis-alindi">SİPARİŞ ALINDI</h2>
                    <p className="succes-pizza-adi">Position Absolute Acı Pizza</p>
                    <div className="pizza-infos">
                        <p className="pizza-infos-p">Boyut: <span>{boyut}</span></p>
                        <p className="pizza-infos-p">Hamur: <span>{hamur}</span></p>
                        <p className="pizza-infos-p">EkMalzemeler: <span>{ekMalzemeler.join(", ")} </span></p>
                    </div>
                    <div className="succes-hesap">
                        <div className="succes-hesap-inner">
                            <h4 className="hesap-baslik">
                                Sipariş Toplamı
                            </h4>
                            <div className="succes-sipasi-inner">
                                <p className="hesap-yazi">Seçimler:</p><p>{secimTutari.toFixed(2)}₺</p></div>
                            <div className="succes-sipasi-inner">
                                <p className="hesap-yazi">Toplam:</p><p>{toplam.toFixed(2)}₺</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>

    )
}