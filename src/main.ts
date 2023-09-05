import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
//import NestExpressApplication interface for app method
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';
//import the hbs library as a hbs object
import * as hbs from 'hbs';
//hbs-utils library as a hbsUtils object
import * as hbsUtils from 'hbs-utils';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  await app.listen(3000);

  app.useStaticAssets(join(__dirname, '..', 'public')); //public folder will be used for storing static assets

  app.setBaseViewsDir(join(__dirname, '..', 'views')); //views folder will contain templates

  hbs.registerPartials(join(__dirname, '..', 'views/layouts')); // instruct hbs that the views/layouts folder will be used for storing Handlebars Partials

  hbsUtils(hbs).registerWatchedPartials(join(__dirname, '..', 'views/layouts')); //tell hbsUtils to watch the views/layouts folder for changes

  app.setViewEngine('hbs'); //specify that the hbs template engine will be used to render HTML output
}
bootstrap();
