import { Controller, Get, Render } from '@nestjs/common';

@Controller()
export class AppController {
  @Get('/')
  //Render decorator used to render Handlebars views
  @Render('index')
  //index method will render the index view
  index() {}
}
