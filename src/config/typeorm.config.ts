import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { ConfigService } from '@nestjs/config';

const configService = new ConfigService();

console.log(configService);

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres'
};
