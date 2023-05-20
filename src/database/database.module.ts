import { Module } from '@nestjs/common';
import {TypeOrmModule, TypeOrmModuleOptions} from '@nestjs/typeorm';


@Module({
    imports: [TypeOrmModule.forRoot({
        type: "sqlite",
        database: "db.sqlite",
        entities: ["dist/**/*.entity.{js,ts}"],
        synchronize: false
    })]
})
export class DatabaseModule {}
