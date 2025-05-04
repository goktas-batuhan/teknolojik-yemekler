import React from "react";
import { Button } from "reactstrap";
import "./Hesap.css"

export default function Hesap({ ekMalzemeler, adet, setAdet, isFormValid }) {
    const secimTutari = ekMalzemeler.length * 5;
    const toplam = (85.5 + secimTutari) * adet;

    const azalt = () => {
        if (adet > 1) setAdet(adet - 1);
    };

    const artir = () => {
        setAdet(adet + 1);
    };

    return (
        <div className="hesap-container">
            <div className="adet-buttons">
                <Button className="hesap-button" onClick={azalt} >-</Button>
                <p className="adet-gosterge">{adet}</p>
                <Button className="hesap-button" onClick={artir} >+</Button>
            </div>
            <div className="siparis-hesabi">
                <div className="siparis-toplam">
                    <div className="siparis-baslik">
                        <h5> Sipariş Toplamı</h5>
                    </div>
                    <div className="yazi1">
                        <p>Seçimler:</p> <p>{secimTutari.toFixed(2)}₺</p>
                    </div>
                    <div className="yazi2">
                        <p>Toplam: </p> <p>{toplam.toFixed(2)}₺</p>
                    </div>
                </div>

                <div className=" hesap-butonu">
                    <Button className="buton-buton" type="submit" color="warning" disabled={!isFormValid}>SİPARİŞ VER</Button>
                </div>
            </div>
        </div>
    );
}
