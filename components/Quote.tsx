import { FunctionComponent } from "preact";

// Definimos la interfaz de las propiedades que recibe el componente
type QuoteProps = {
    quote: string;
};

const Quote: FunctionComponent<QuoteProps> = (props) => {
    const {quote} = props;
    return (
        <>
            <div class = "Quote">
                <h1 class="Quote">{quote}</h1>
            </div>

            <div class = "windows">
                <img id = "error" src="/sources/error.gif" alt="Ventanas error windows"></img>
                <img id = "downloading" src="/sources/downloading.webp" alt="Ventana descargando virus"></img>
                <img id = "complete" src="/sources/complete.gif" alt="Virus descargando"></img>
                <img id = "virus_detected" src="/sources/virus_detected.gif" alt="Virus detectado"></img>
            </div>
        </>
    );
}

export default Quote;