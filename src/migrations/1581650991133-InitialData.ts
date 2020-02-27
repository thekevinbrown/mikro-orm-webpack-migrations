import { Migration } from "mikro-orm";

export class InitialData1581650991133 extends Migration {
  public async up(): Promise<any> {
    await this.addSql(
      `CREATE TABLE "user" ("id" SERIAL NOT NULL, "username" VARCHAR, CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`
    );
  }

  public async down(): Promise<any> {
    await this.addSql(`DROP TABLE "user"`);
  }
}
