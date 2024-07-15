import { AuthModule } from './modules/auth/auth.module';
import { FoldersModule } from './modules/folders/folders.module';
import { INestApplication, Module } from '@nestjs/common';
import { AppService } from './app.service';
import { AppController } from './app.controller';
import { TodosModule } from './modules/todos/todos.module';
import { MongooseModule } from '@nestjs/mongoose/dist/mongoose.module';
import { MemberModule } from './modules/members/members.module';
import { HashService } from './common/auth.common.service';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    AuthModule,
    FoldersModule,
    MongooseModule.forRoot('mongodb://127.0.0.1:27017/amcef'),
    TodosModule,
    MemberModule,
    FoldersModule,
    ConfigModule.forRoot({
      envFilePath: '.env.local',
      isGlobal: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService, HashService],
})
export class AppModule {}
