import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
//import NestExpressApplication interface for app method
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  await app.listen(3000);

  //public folder will be used for storing static assets
  app.useStaticAssets(join(__dirname, '..', 'public'));
  //views folder will contain templates
  app.setBaseViewsDir(join(__dirname, '..', 'views'));
  //specify that the hbs template engine will be used to render HTML output
  app.setViewEngine('hbs');
}
bootstrap();
