import { useState } from "react";
import Header from "../Components/Header";
import Informations from "../Components/Informations";
import FormContainer from "../Components/FormContainer";
import Footer from "../Components/Footer";


export default function Order(){
    



    const [ekMalzemeler, setEkMalzemeler] = useState([]);
    return (
      <>
        <Header></Header>
        <Informations></Informations>
        <FormContainer
          ekMalzemeler={ekMalzemeler}
          setEkMalzemeler={setEkMalzemeler}
        />
        <Footer> </Footer>
    
      </>
    )
}