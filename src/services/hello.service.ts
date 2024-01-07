import { Service } from "typedi";

@Service()
export class HelloService {
  fetchData(): string {
    return "Hello from Reactive Forge";
  }
}

export default HelloService;
