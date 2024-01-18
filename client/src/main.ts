import { argv } from "process";
import { APIService } from "./APIService";
import { FileService } from "./FileService";
import { FlagRetriever } from "./FlagRetriever";
import axios from "axios";

let fetch: (type: string) => Promise<string>;

switch (argv[2]) {
  case "api":
    APIService.getInstance().init("1234");
    fetch = APIService.getInstance().fetch;
    break;
  case "file":
    fetch = FileService.getInstance().fetch;
    break;
  default:
    console.error("Wrong argument. Expected : 'api' or 'file'");
    process.exit(1);
}

const retriever = new FlagRetriever(fetch);

(async () => {
  try {
    const flag = await retriever.fetchFlag();
    console.log(flag);
  } catch (err) {
    if (axios.isAxiosError(err)) {
      console.error(err.toJSON());
    }
  }
})();
