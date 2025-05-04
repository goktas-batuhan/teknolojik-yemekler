import "./Informations.css"

export default function Informations() {



    return (
        <div className="bilgiler-background">
            <div className="bilgiler">
                <div className="yarim-pizza">
                    <img className="bilgiler-yarim-pizza" src="../../images/iteration-2-images/pictures/form-banner.png" alt="yarim-pizza" />
                </div>
                <div className="bilgiler-yazi">
                    <p className="bilgiler-sayfa">
                        Anasayfa - Seçenekler - <span style={{ color: "#CE2829" }}>Sipariş Oluştur</span>
                    </p>
                </div>
                <div className="bilgiler-pizza-aciklama">
                    <div className="bilgiler-pizza-baslik">
                        <h4 className="bilgiler-pizza-baslik">Position Absolute Acı Pizza</h4>
                    </div>
                    <div className="bilgiler-pizza-degerlendirme">
                        <p className="bilgiler-pizza-degerlendirme-fiyat">85.50₺</p> <p className="bilgiler-pizza-degerlendirme-yorum">4.9</p><p className="bilgiler-pizza-degerlendirme-yorum">(200)</p>
                    </div>
                    <div className="bilgiler-pizza-aciklama">
                        <p className="bilgiler-pizza-aciklama-p">
                            Frontend Dev olarak hala position:absolute kullanıyorsan bu çok acı pizza tam sana göre.
                            Pizza, domates, peynir ve genellikle çeşitli diğer malzemelerle kaplanmış,
                            daha sonra geleneksel olarak odun ateşinde bir fırında yüksek sıcaklıkta pişirilen,
                            genellikle yuvarlak, düzleştirilmiş mayalı buğday bazlı hamurdan oluşan İtalyan kökenli lezzetli bir yemektir.
                            Küçük bir pizzaya bazen pizzetta denir.
                        </p>
                    </div>
                </div>
            </div>

        </div>



    )
}