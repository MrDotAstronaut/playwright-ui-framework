import { FullConfig, FullResult, Reporter, Suite, TestCase, TestError, TestResult, TestStep } from '@playwright/test/reporter'

export default class CustomReporter implements Reporter {

  onBegin(config: FullConfig, suite: Suite): void{
    
  }

  onEnd(result: FullResult): void | Promise<void>{
    
  }

  onError(error: TestError): void{
    
  }

  onStdErr(chunk: string|Buffer, test: void|TestCase, result: void|TestResult): void{
    
  }

  onStdOut(chunk: string|Buffer, test: void|TestCase, result: void|TestResult): void{
  }

  onStepBegin(test: TestCase, result: TestResult, step: TestStep): void{
    
  }

  onStepEnd(test: TestCase, result: TestResult, step: TestStep): void{
    
  }

  onTestBegin(test: TestCase, result: TestResult): void{
    console.log(`${test.titlePath()[3]}`);
  }

  onTestEnd(test: TestCase, result: TestResult): void{
    
  }

//   printsToStdio(): boolean{
    
//   }
}