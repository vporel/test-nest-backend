import { Controller, Get, Render } from '@nestjs/common';

@Controller()
export class AppController {

  @Get()
  @Render('index')
  getHello(){}

  @Get('/docs') 
  @Render('docs/index')
  docs(){}
}
