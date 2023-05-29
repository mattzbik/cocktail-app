import { MigrationInterface, QueryRunner } from 'typeorm';

export class MockCocktail1685034253036 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`insert into cocktail (id, name, description, "glassId", method, "createdAt", "updatedAt") values ('5e9f84c0-0103-4a38-811e-43a3e3e0af55', 'Mint Julep', 'Julep description.', '34dcdeb1-71b6-4944-95cb-25df6816a2c7', 'Shake all ingredients with ice and fine strain into collins half filled with crushed ice. Stir the drink with the crushed ice usingin a bar spoon. Top up the cup with more crushed ice and stir again. Repeat this process until the drink fills the cup and serve.', '2022-05-08T11:59:48Z', '2022-06-10T11:34:36Z');
            insert into cocktail (id, name, description, "glassId", method, "createdAt", "updatedAt") values ('77a6dffd-b297-4148-8b10-4bfcef3b3076', 'Mojito', 'Mojito description.', '34dcdeb1-71b6-4944-95cb-25df6816a2c7', 'Lightly muddle mint in base of glass. Add rum, lime jice and sugar. Half fill glass with crushed ice and stir with bar spoon. Fill glass with more crushed ice and stir some more. Top with soda, stir and serve with straws.', '2022-10-18T05:13:43Z', '2023-02-10T15:11:44Z');
            insert into cocktail (id, name, description, "glassId", method, "createdAt", "updatedAt") values ('38394034-7046-4be9-851b-fd2007d72eef', 'French 75', 'French 75 description.', '77dbc620-0549-4120-bc11-91a7b35d7c61', 'Shake first three ingredients with ice and strain into chilled glass. Top with champagne.', '2022-11-10T08:13:03Z', '2023-03-27T11:34:33Z');
            insert into cocktail (id, name, description, "glassId", method, "createdAt", "updatedAt") values ('a037df55-d535-4b95-b53b-48bc1a23a840', 'Piña Colada', 'Piña Colada description.', '3fab3069-5627-4187-b5b1-3d2f0e2b4d08', 'Blend all ingredients with one 12oz scoop crushed ice & serve with straws.', '2022-10-16T22:58:45Z', '2022-06-12T16:23:26Z');
            insert into cocktail (id, name, description, "glassId", method, "createdAt", "updatedAt") values ('8ffc086c-a710-43ee-bea5-853529793109', 'Espresso Martini', 'Espresso Martini description.', 'e42347bf-af88-4c36-9067-3e11f003d5ac', 'Shake all ingredients with ice and fine strain into chilled glass.', '2022-07-27T03:36:21Z', '2022-12-31T19:46:37Z');
            insert into cocktail (id, name, description, "glassId", method, "createdAt", "updatedAt") values ('aed0f996-541f-47e7-b5b2-4d9fc7f95ead', 'Margarita', 'Margarita description.', 'a7ae3e24-7464-4a64-b0ce-dc320a894df7', 'Shake all ingredients with ice and fine strain into chilled glass.', '2023-01-19T07:30:31Z', '2022-06-11T18:56:24Z');
            insert into cocktail (id, name, description, "glassId", method, "createdAt", "updatedAt") values ('8360b17e-cad5-4606-9b8d-c0dc7db3fc83', 'Old Fashioned', 'Created at the Pendennis Club in Louisville, Kentucky, USA between 1889 and 1895.', 'eff707b7-fcce-4175-b005-4f05bdb97b85', 'Stir one shot of bourbon with two ice cubes in a glass. Add sugar syrup and Angostura and two more ice cubes. Stir some more and add another two ice cubes. Stir some more and add another two ice cubes and the rest of the bourbon. Stir lots more and add more ice.', '2023-03-20T06:49:25Z', '2023-03-07T16:36:05Z');
            insert into cocktail (id, name, description, "glassId", method, "createdAt", "updatedAt") values ('a6d903fa-12aa-49ad-845a-5625c77ab96a', 'Negroni', 'Created sometime between 1919 and 1921 in Florence, Italy.', 'eff707b7-fcce-4175-b005-4f05bdb97b85', 'Pour all into ice-filled glass and stir', '2023-02-07T13:45:24Z', '2023-01-10T02:21:22Z');
            insert into cocktail (id, name, description, "glassId", method, "createdAt", "updatedAt") values ('d188c1ec-1668-4bbb-b79c-dbbe21a5b65b', 'Bellini', 'Bellini description', '77dbc620-0549-4120-bc11-91a7b35d7c61', 'Shake first three ingredients with ice and fine strain into chilled glass. Add prosecco and gently stir.', '2023-01-14T21:57:31Z', '2022-12-21T09:44:34Z');
            insert into cocktail (id, name, description, "glassId", method, "createdAt", "updatedAt") values ('daeaf2cd-f4ba-4d35-866d-3b92384cb598', 'Tequila Sunrise', 'Tequila Sunrise description', '34dcdeb1-71b6-4944-95cb-25df6816a2c7', 'Stir honey with tequila in base of shaker until honey dissolves. Add other ingredients, shake with ice and strain into ice-filled glass. Top with soda.', '2023-04-01T09:58:11Z', '2023-01-21T01:23:43Z');
            insert into cocktail (id, name, description, "glassId", method, "createdAt", "updatedAt") values ('52bf7b3a-02cc-4bff-b268-deead02803c2', 'Aperol Spritz', 'Aperol Spritz description', 'd057b531-fa55-4fc3-ae7e-fd1c27b99bc1', 'Stir honey with tequila in base of shaker until honey dissolves. Add other ingredients, shake with ice and strain into ice-filled glass. Top with soda.', '2023-04-01T09:58:11Z', '2023-01-21T01:23:43Z');`);
  }

  public async down(_queryRunner: QueryRunner): Promise<void> {}
}
