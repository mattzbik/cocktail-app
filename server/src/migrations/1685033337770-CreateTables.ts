import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateTables1685033337770 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      'CREATE TABLE "ingredient" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "description" character varying NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_6f1e945604a0b59f56a57570e98" PRIMARY KEY ("id"))'
    );
    await queryRunner.query(
      'CREATE TABLE "cocktail_ingredient" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "quantity" integer NOT NULL, "measurement" character varying NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "cocktailId" uuid, "ingredientId" uuid, CONSTRAINT "PK_1ef3c4b6d4f38312c7ddcddb1c4" PRIMARY KEY ("id"))'
    );
    await queryRunner.query(
      'CREATE TABLE "equipment" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "description" character varying NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_0722e1b9d6eb19f5874c1678740" PRIMARY KEY ("id"))'
    );
    await queryRunner.query(
      'CREATE TABLE "glass" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_d137f25e726fbac87f476e00289" PRIMARY KEY ("id"))'
    );
    await queryRunner.query(
      'CREATE TABLE "cocktail_library_user" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "username" character varying NOT NULL, "email" character varying NOT NULL, "password" character varying NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "UQ_78a916df40e02a9deb1c4b75edb" UNIQUE ("username"), CONSTRAINT "UQ_e12875dfb3b1d92d7d7c5377e22" UNIQUE ("email"), CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))'
    );
    await queryRunner.query(
      'CREATE TABLE "cocktail" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "description" character varying NOT NULL, "glassId" uuid NOT NULL, "method" character varying NOT NULL, "creatorId" uuid NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_2640ba026b49f47c99d3a3219c2" PRIMARY KEY ("id"))'
    );
    await queryRunner.query(
      'ALTER TABLE "cocktail_ingredient" ADD CONSTRAINT "FK_bec9000eefdab5c8b5a8b9fc8a6" FOREIGN KEY ("cocktailId") REFERENCES "cocktail"("id") ON DELETE NO ACTION ON UPDATE NO ACTION'
    );
    await queryRunner.query(
      'ALTER TABLE "cocktail_ingredient" ADD CONSTRAINT "FK_5d58556001d996d83cde9351b85" FOREIGN KEY ("ingredientId") REFERENCES "ingredient"("id") ON DELETE NO ACTION ON UPDATE NO ACTION'
    );
    await queryRunner.query(
      'ALTER TABLE "cocktail" ADD CONSTRAINT "FK_c14b57cb59995e668325ba4ce2f" FOREIGN KEY ("glassId") REFERENCES "glass"("id") ON DELETE NO ACTION ON UPDATE NO ACTION'
    );
    await queryRunner.query(
      'ALTER TABLE "cocktail" ADD CONSTRAINT "FK_b5b0223bc53e7f6a5274cf1ee7f" FOREIGN KEY ("creatorId") REFERENCES "cocktail_library_user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION'
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      'ALTER TABLE "cocktail" DROP CONSTRAINT "FK_c14b57cb59995e668325ba4ce2f"'
    );
    await queryRunner.query(
      'ALTER TABLE "cocktail" DROP CONSTRAINT "FK_b5b0223bc53e7f6a5274cf1ee7f"'
    );
    await queryRunner.query(
      'ALTER TABLE "cocktail_ingredient" DROP CONSTRAINT "FK_5d58556001d996d83cde9351b85"'
    );
    await queryRunner.query(
      'ALTER TABLE "cocktail_ingredient" DROP CONSTRAINT "FK_bec9000eefdab5c8b5a8b9fc8a6"'
    );
    await queryRunner.query('DROP TABLE "cocktail"');
    await queryRunner.query('DROP TABLE "cocktail_library_user"');
    await queryRunner.query('DROP TABLE "glass"');
    await queryRunner.query('DROP TABLE "equipment"');
    await queryRunner.query('DROP TABLE "cocktail_ingredient"');
    await queryRunner.query('DROP TABLE "ingredient"');
  }
}
