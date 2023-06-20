import { MigrationInterface, QueryRunner } from 'typeorm';

export class MockUser1685033364314 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `insert into cocktail_library_user (id, username, email, password, "createdAt", "updatedAt") values ('d8a6d882-6c14-4060-b9f3-d1946c0d62bd', 'Admin', 'admin@admin.com', 'password', '2023-02-24T00:19:41Z', '2023-02-24T00:19:41Z');`
    );
  }

  public async down(_queryRunner: QueryRunner): Promise<void> {}
}
