import Axios from "npm:axios"; //Semejante a Fetch
import Quote from "../components/Quote.tsx";

export default async function Home() {
  try {
    const response = await Axios.get<Data>(`https://filmquotes.deno.dev/`);
    const quote = await response.data;
    return ( // Utilizo el componente Quote para mostrar la cita
      <Quote quote={quote} /> 
    );
  } 
  catch (error) {
    return <div>{error.message}</div>;
  }
}