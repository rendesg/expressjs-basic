import { Request, Response } from "express";
import processService from "../service/process-service";

class ProcessController {

  async doProcess(_: Request, res: Response) {
    processService.doProcess();
    console.log('ProcessController - processed');
    return res.send('Hello World!');
  }
}

let processController = new ProcessController();
export default processController;
  