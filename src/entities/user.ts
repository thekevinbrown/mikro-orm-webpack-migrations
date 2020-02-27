import { PrimaryKey, Property, IdEntity, Entity } from "mikro-orm";

@Entity()
export class User implements IdEntity<User> {
  @PrimaryKey({ type: "number" })
  id!: number;

  @Property({ type: "string", nullable: true })
  username?: string;
}
