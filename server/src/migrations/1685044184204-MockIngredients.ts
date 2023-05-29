import { MigrationInterface, QueryRunner } from 'typeorm';

export class MockIngredients1685044184204 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`insert into ingredient (id, name, description, "createdAt", "updatedAt") values ('bcf69be8-3197-4ad8-aa33-1f538dc4176f', 'Bourbon', 'Bourbon description', '2023-03-15T22:54:07Z', '2022-09-16T06:57:22Z');
    insert into ingredient (id, name, description, "createdAt", "updatedAt") values ('e53f6939-7805-472e-b6a6-679d9da190f3', 'Powdered Sugar', 'Sugar description', '2022-10-05T12:37:22Z', '2023-02-21T02:54:25Z');
    insert into ingredient (id, name, description, "createdAt", "updatedAt") values ('b2fe60df-79ed-42f2-9bec-39f11d9ec107', 'Mint', 'Mint description', '2023-01-05T04:30:09Z', '2022-12-11T01:58:40Z');
    insert into ingredient (id, name, description, "createdAt", "updatedAt") values ('792d4039-4852-438d-81b2-ffec74cbdb80', 'Water', 'Water description', '2022-06-12T23:25:24Z', '2022-08-01T00:12:24Z');
    insert into ingredient (id, name, description, "createdAt", "updatedAt") values ('fe98ddd5-f93c-4843-9f86-7f04a4a40670', 'White Rum', 'White Rum description', '2023-04-29T07:49:50Z', '2023-01-09T23:18:41Z');
    insert into ingredient (id, name, description, "createdAt", "updatedAt") values ('93df6a00-7f0c-44a0-abb5-9d27d70d7f1f', 'Lime Juice', 'Lime juice description', '2023-04-29T08:26:56Z', '2023-01-09T05:10:04Z');
    insert into ingredient (id, name, description, "createdAt", "updatedAt") values ('722b6d36-7bc2-40e8-b0c5-9eb4c57b0fb9', 'Soda Water', 'Soda Water description', '2022-10-31T21:19:56Z', '2022-09-04T11:52:10Z');
    insert into ingredient (id, name, description, "createdAt", "updatedAt") values ('5d5d2e70-204c-4482-a8d9-6a129f227533', 'Gin', 'Gin description', '2023-02-08T02:34:04Z', '2023-04-19T11:38:27Z');
    insert into ingredient (id, name, description, "createdAt", "updatedAt") values ('01c58416-cbb8-4816-a9f2-0fd5cc8d8e88', 'Lemon Juice', 'Lemon juice description', '2023-05-01T18:10:05Z', '2022-12-28T02:30:47Z');
    insert into ingredient (id, name, description, "createdAt", "updatedAt") values ('c9244129-a376-440b-bd26-88f3f6eb1872', 'Champagne', 'Champagne', '2022-09-01T10:01:38Z', '2023-03-09T08:12:38Z');
    insert into ingredient (id, name, description, "createdAt", "updatedAt") values ('3d552f33-7b02-48ea-8e3a-df9bbf418627', 'Pineapple Juice', 'Pineapple juice description', '2022-10-28T23:46:36Z', '2022-12-10T14:59:55Z');
    insert into ingredient (id, name, description, "createdAt", "updatedAt") values ('2cd8b9b0-b2c9-4d22-9725-71725b30b46f', 'Coconut Cream', 'Coconut Cream description', '2022-11-15T07:00:06Z', '2023-05-05T19:21:50Z');
    insert into ingredient (id, name, description, "createdAt", "updatedAt") values ('5038f6ae-3781-4528-9094-f3deded8acc2', 'Vodka', 'Vodka description', '2022-11-11T00:40:51Z', '2022-08-17T06:16:09Z');
    insert into ingredient (id, name, description, "createdAt", "updatedAt") values ('7161499c-5310-4085-b9ad-03d009bdc7f9', 'Kahlúa', 'Kahlúa coffee liqueur description', '2023-05-09T02:31:55Z', '2023-03-19T11:07:48Z');
    insert into ingredient (id, name, description, "createdAt", "updatedAt") values ('9d9bc86d-999c-41e7-8f35-1cb3c6aa584e', 'Espresso', 'Espresso, coffee description', '2022-08-27T18:05:45Z', '2022-07-03T06:40:27Z');
    insert into ingredient (id, name, description, "createdAt", "updatedAt") values ('118e3276-43c5-4df0-aabb-8f1a1621ba5a', 'White Sugar', 'White sugar description', '2023-01-12T10:04:26Z', '2022-10-24T05:48:22Z');
    insert into ingredient (id, name, description, "createdAt", "updatedAt") values ('b6643171-1dd8-4ab2-a83f-2de39d1e7312', 'Sugar Syrup', 'Sugar Syrup (simple syrup) description', '2022-10-22T16:16:58Z', '2022-08-25T17:15:13Z');
    insert into ingredient (id, name, description, "createdAt", "updatedAt") values ('47dcba4a-4dbc-4994-8189-0692a8a7aea9', 'Tequila', 'Tequila description', '2023-02-08T19:51:39Z', '2023-03-21T03:03:46Z');
    insert into ingredient (id, name, description, "createdAt", "updatedAt") values ('6d1a1f0b-623e-4373-8d59-0541d732780e', 'Triple Sec', 'Triple Sec description', '2022-06-14T15:33:59Z', '2022-07-31T21:18:37Z');
    insert into ingredient (id, name, description, "createdAt", "updatedAt") values ('c2ddc38c-8bef-4801-b244-3b86fe8278c9', 'Angostura Bitters', 'Angostura Bitters description', '2022-12-18T20:23:46Z', '2022-08-18T17:24:54Z');
    insert into ingredient (id, name, description, "createdAt", "updatedAt") values ('7c831b5f-7c88-414c-b6fa-d70cc2a4c253', 'Sugar Cube', 'Sugar Cube description', '2023-02-02T02:15:43Z', '2022-07-08T15:59:26Z');
    insert into ingredient (id, name, description, "createdAt", "updatedAt") values ('9b6ed958-e8e4-4356-aeb8-7d4a59e113eb', 'Sweet Vermouth', 'Sweet Vermouth description', '2022-08-29T00:09:11Z', '2023-01-17T10:35:49Z');
    insert into ingredient (id, name, description, "createdAt", "updatedAt") values ('7b4dc676-3404-4d6e-85ba-904a1d6e0ee1', 'Campari', 'Campari description', '2023-04-24T20:10:59Z', '2023-02-25T01:30:56Z');
    insert into ingredient (id, name, description, "createdAt", "updatedAt") values ('a069d1df-0396-4db1-8e8d-4d6f441ba9a1', 'Peach Puree', 'Peach Puree description', '2022-08-15T03:26:11Z', '2023-04-09T11:48:41Z');
    insert into ingredient (id, name, description, "createdAt", "updatedAt") values ('1d59c460-20dc-4204-99c6-7c5c34c6d6c3', 'Prosecco', 'Prosecco description', '2022-06-18T19:32:24Z', '2022-11-06T06:55:40Z');
    insert into ingredient (id, name, description, "createdAt", "updatedAt") values ('f4daf165-77d5-481c-bbb2-635710be1843', 'Orange Juice', 'Orange Juice description', '2022-11-23T05:00:26Z', '2023-02-17T21:42:33Z');
    insert into ingredient (id, name, description, "createdAt", "updatedAt") values ('03bc7708-796f-447e-95fd-9ae345ef6e31', 'Grenadine', 'Grenadine syrup description', '2023-03-20T14:06:37Z', '2023-02-21T04:00:22Z');
    insert into ingredient (id, name, description, "createdAt", "updatedAt") values ('4e0b0b07-8271-4371-8e34-b1b7d0f6d12e', 'Aperol', 'Aperol description', '2022-12-13T03:40:56Z', '2023-02-18T14:58:35Z');`);
  }

  public async down(_queryRunner: QueryRunner): Promise<void> {}
}
