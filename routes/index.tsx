import Axios from "npm:axios"; //Semejante a Fetch
import { Data } from "../types.ts";


export default async function Home() {
  try {
    const Citas = await Axios.get<Data>(`https://filmquotes.deno.dev/`);
    return (
      <div>
        <h1>{Citas.data}</h1>
        <img id="error" src="https://i.gifer.com/origin/91/91ecd2311e7def6121a9d55fcca1c29f.gif" alt="Ventanas error windows"></img>
      </div>
    );
  } catch (err) {
    return <div>Ha habido un error</div>;
  }
}