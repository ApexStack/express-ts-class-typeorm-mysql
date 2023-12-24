import { Service } from "typedi";

@Service()
export class HelloService {
  fetchData(): string {
    return "Hello from the service";
  }
}

export default HelloService;
