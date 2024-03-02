import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import Quote from "../components/Quote.tsx";
import Axios from "npm:axios";

export const handler: Handlers = {
  GET: async (_req: Request, ctx: FreshContext<unknown, Data>) => {
    try {
      const { id } = ctx.params;

      const response = await Axios.get<Data>(`https://filmquotes.deno.dev/${id}`);

      if(response.status !== 200) throw new Error("Ha habido un error en la petición");

      return ctx.render(response.data);
    } 
    catch (error) {
      console.error(error);
      throw new Error("Ha habido un error en el handler");
    }
  },
};

const Page = (props: PageProps<Data>) => {
  try{
    const quote = props.data;
    return (
      <Quote quote={quote} />
    );
  }
  catch(error){
    console.error(error);
    return <div>{error.message}</div>;
  }
};

export default Page;
