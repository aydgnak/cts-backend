import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './user/user.module';
import { APP_FILTER } from '@nestjs/core';
import { GlobalExceptionFilter } from './core/filters/global-exception.filter';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://127.0.0.1:27017', {
      user: 'root',
      pass: 'root',
      dbName: 'cts-backend',
    }),
    UserModule,
  ],
  controllers: [AppController],
  providers: [
    {
      provide: APP_FILTER,
      useClass: GlobalExceptionFilter,
    },
    AppService,
  ],
})
export class AppModule {}
