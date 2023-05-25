import { MigrationInterface, QueryRunner } from 'typeorm';

export class MockGlass1685033364313 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`insert into glass (id, name, "createdAt", "updatedAt") values ('34dcdeb1-71b6-4944-95cb-25df6816a2c7', 'Collins', '2022-09-23T07:57:12Z', '2023-04-18T02:41:28Z');
        insert into glass (id, name, "createdAt", "updatedAt") values ('77dbc620-0549-4120-bc11-91a7b35d7c61', 'Flute', '2023-02-17T19:51:02Z', '2022-12-31T09:13:47Z');
        insert into glass (id, name, "createdAt", "updatedAt") values ('3fab3069-5627-4187-b5b1-3d2f0e2b4d08', 'Hurricane', '2023-03-19T08:52:03Z', '2022-09-13T17:03:22Z');
        insert into glass (id, name, "createdAt", "updatedAt") values ('a7ae3e24-7464-4a64-b0ce-dc320a894df7', 'Margarita', '2023-02-13T00:52:13Z', '2022-12-20T16:48:02Z');
        insert into glass (id, name, "createdAt", "updatedAt") values ('eff707b7-fcce-4175-b005-4f05bdb97b85', 'Old Fashioned', '2023-04-18T02:28:37Z', '2022-07-13T14:26:52Z');
        insert into glass (id, name, "createdAt", "updatedAt") values ('9b4b98eb-1df0-4f2d-8fc9-3c2f90725d05', 'Sling', '2023-04-01T07:30:40Z', '2023-03-06T05:17:19Z');
        insert into glass (id, name, "createdAt", "updatedAt") values ('e42347bf-af88-4c36-9067-3e11f003d5ac', 'Martini', '2023-02-24T00:19:41Z', '2022-09-13T11:09:58Z');`);
  }

  public async down(_queryRunner: QueryRunner): Promise<void> {}
}
