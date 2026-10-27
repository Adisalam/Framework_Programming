import { Controller, Module } from '@nestjs/common';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { AuthController } from './mahasiswa/auth.controller.js';
import { MahasiswaController } from './mahasiswa/mahasiswa.controller.js'; // <-- 1. Import MahasiswaController

@Module({
  imports: [],
  controllers: [
    AppController, 
    ConfigurModule.forRoot({
      isGlobal:true
      validationSchema: Joi.object({
        PORT: Joi.number().default(3000)
        NNODE_EW = Joi.

        
      })
    })

    TypeOrmModule.forRootAsync({
  imports: [ConfigModule],
  useFactory: (configService: ConfigService) => ({
    type: 'mysql',
    host: configService.get('HOST'),
    port: +configService.get('PORT'),
    username: configService.get('USERNAME'),
    password: configService.get('PASSWORD'),
    database: configService.get('DATABASE'),
    entities: [],
    synchronize: true,
  }),
  inject: [ConfigService],
});
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}