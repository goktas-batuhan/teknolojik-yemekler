import React from "react"
import { useState } from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, FormGroup, Input, Label, Button, FormText } from "reactstrap";
import Hesap from "./Hesap";
import axios from "axios";
import { useHistory } from "react-router-dom";
import "./FormContainer.css"




export default function FormContainer({ ekMalzemeler, setEkMalzemeler }) {
    const malzemeler = [
        "Pepperoni",
        "Sosis",
        "Kanada Jambonu",
        "Tavuk Izgara",
        "Soğan",
        "Domates",
        "Mısır",
        "Sucuk",
        "Jalepeno",
        "Sarımsak",
        "Biber",
        "Ananas",
        "Kabak"
    ];

    const [boyut, setBoyut] = useState("");
    const [hamur, setHamur] = useState("");
    const [adet, setAdet] = useState(1);

    const [siparisNotu, setSiparisNotu] = useState("");
    const isFormValid = boyut && hamur && ekMalzemeler.length >= 4;

    let history = useHistory()

    function navigasyon(data) {
        history.push({ pathname: "/success", state: data })
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const siparisVerisi = {
            boyut,
            hamur,
            ekMalzemeler,
            siparisNotu,
            adet,
        };

        axios.post("https://reqres.in/api/pizza", siparisVerisi, {
            headers: { "x-api-key": "reqres-free-v1" }
        })
            .then((res) => {
                console.log("Sipariş başarıyla gönderildi!", res.data);
                navigasyon(siparisVerisi)
                setBoyut("");
                setHamur("");
                setEkMalzemeler([]);
                setSiparisNotu("");
                setAdet(1);
            })
            .catch((err) => {
                console.error("Sipariş gönderilirken hata oluştu!", err);
            });
    };


    const handleBoyutChange = (event) => {
        setBoyut(event.target.value);
    };

    const handleHamurChange = (event) => {
        setHamur(event.target.value);
    };


    const handleMalzemeChange = (event) => {
        const { value, checked } = event.target;
        if (checked) {
            setEkMalzemeler([...ekMalzemeler, value]);
        } else {
            setEkMalzemeler(ekMalzemeler.filter((m) => m !== value));
        }


    };





    return (
        <Form onSubmit={handleSubmit}>
            <FormGroup className="order-all">
                <FormGroup className="hamur-boyut">
                    <FormGroup tag="fieldset" className="boyut">
                        <legend><h4>Boyut Seç*</h4></legend>

                        <FormGroup className="boyut-inner" check>
                            <Input
                                type="radio"
                                id="boyutS"
                                name="pizzaSize"
                                value="S"
                                checked={boyut === "S"}
                                onChange={handleBoyutChange}
                            />
                            <Label htmlFor="boyutS">S</Label>
                        </FormGroup>
                        <FormGroup className="boyut-inner" check>
                            <Input
                                type="radio"
                                id="boyutM"
                                name="pizzaSize"
                                value="M"
                                checked={boyut === "M"}
                                onChange={handleBoyutChange}
                            />
                            <Label htmlFor="boyutM">M</Label>
                        </FormGroup>


                        <FormGroup className="boyut-inner" check>
                            <Input
                                type="radio"
                                id="boyutL"
                                name="pizzaSize"
                                value="L"
                                checked={boyut === "L"}
                                onChange={handleBoyutChange}
                            />
                            <Label htmlFor="boyutL">L</Label>
                        </FormGroup>
                    </FormGroup>
                    <FormGroup className="pizza-hamur">
                        <Label for="hamur">
                            <h4>Hamur Seç</h4>
                        </Label>
                        <Input
                            defaultValue=""
                            id="hamur"
                            name="hamur"
                            type="select"
                            value={hamur}
                            onChange={handleHamurChange}
                        >
                            <option value="" disabled hidden>
                                -Hamur boyutunu seçiniz-
                            </option>
                            <option>
                                İnce
                            </option>
                            <option>
                                Normal
                            </option>
                            <option>
                                Kalın
                            </option>
                        </Input>
                    </FormGroup>
                </FormGroup>
                <FormGroup className="ek-malzeme-checkbox">
                    <legend>Ek Malzemeler</legend>
                    <p className="ek-malzeme-aciklama">En fazla 10 malzeme seçebilirsiniz. 5₺</p>
                    <FormGroup className="ek-malzeme-div">
                        {malzemeler.map((malzeme, index) => (
                            <FormGroup className="ekmalzeme-inner-formgroup" check key={index}>
                                <Input className="inner-checkbox"
                                    type="checkbox"
                                    id={index}
                                    name="malzeme"
                                    value={malzeme}
                                    onChange={handleMalzemeChange}
                                    checked={ekMalzemeler.includes(malzeme)}
                                    disabled={
                                        !ekMalzemeler.includes(malzeme) && ekMalzemeler.length >= 10
                                    }
                                />
                                <Label htmlFor={index} check className="malzeme-label">

                                    {malzeme}
                                </Label>
                            </FormGroup>

                        ))}
                    </FormGroup>
                </FormGroup>

                <FormGroup className="siparis">
                    <Label for="siparisNotu">Sipariş Notu</Label>
                    <Input className="siparis-notu"
                        id="siparisNotu"
                        name="siparisNotu"
                        type="textarea"
                        placeholder="Siparişine eklemek istediğin bir not var mı?"
                        value={siparisNotu}
                        onChange={(e) => setSiparisNotu(e.target.value)}
                    />
                </FormGroup>
                <hr/>
                <Hesap
                    ekMalzemeler={ekMalzemeler}
                    adet={adet}
                    setAdet={setAdet}
                    isFormValid={isFormValid}
                />
            </FormGroup>
        </Form >
    )


}
