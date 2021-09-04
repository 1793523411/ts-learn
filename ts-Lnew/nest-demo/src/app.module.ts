import { Module, MiddlewareConsumer, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
// import { CatsController } from './cats/cats.controller';
import { AdminController } from './admin/admin.controller';
// import { CatsService } from './cats/cats.service';
import { CatsModule } from './cats/cats.module';

import {
  LoggerMiddleware,
  logger,
} from './common/middleware/logger.middleware';
// import { CatsController } from './cats/cats.controller';
@Module({
  imports: [CatsModule],
  controllers: [AppController, AdminController],
  providers: [AppService],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(logger)
      //   .forRoutes({ path: 'cats', method: RequestMethod.GET });
      .forRoutes(AppController);
  }
}
