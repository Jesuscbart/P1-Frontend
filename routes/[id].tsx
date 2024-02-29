import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import { Data } from "../types.ts";
import Axios from "npm:axios";

export const handler: Handlers = {
  GET: async (_req: Request, ctx: FreshContext<unknown, Data>) => {
    try {
      const { id } = ctx.params;
      const response = await Axios.get<Data>(`https://filmquotes.deno.dev/${id}`);
      //console.log(response)

      //console.log(response.data.path)
      return ctx.render(response.data);
    } catch (_error) {
      throw new Error("Ha habido un error en el handler");
    }
  },
};

const Page = (props: PageProps<Data>) => {
  const data = props.data;
  return (
    <div>
        <h1>{data}</h1>
        <img id="error" src="https://i.gifer.com/origin/91/91ecd2311e7def6121a9d55fcca1c29f.gif" alt="Ventanas error windows"></img>
    </div>
  );
};
export default Page;
