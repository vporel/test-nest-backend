import { MigrationInterface, QueryRunner } from "typeorm";

export class First1684585134389 implements MigrationInterface {
    name = 'First1684585134389'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "article" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "name" varchar NOT NULL, "quantity" integer NOT NULL, "price" integer NOT NULL, "description" varchar NOT NULL)`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "article"`);
    }

}
