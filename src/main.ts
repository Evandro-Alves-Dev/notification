import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.connectMicroservice({
    transport: Transport.RMQ,
    options: {
      urls: ['amqp://admin:123456@localhost'],
      queue: 'notification',
      noAck: false,
      queueOptions: {
        durable: true
      },
    }
  });
 
  await app.listen(4000);
  await app.startAllMicroservices();
}
bootstrap();
