import "reflect-metadata";
import { MikroORM, ReflectMetadataProvider } from "mikro-orm";
import * as Entities from "./entities";

const go = async () => {
  console.log("init");
  const orm = await MikroORM.init({
    type: "postgresql",
    entities: Object.values(Entities),
    dbName: "mikro-orm-test",
    host: "localhost",
    port: 5432,

    metadataProvider: ReflectMetadataProvider,
    discovery: { disableDynamicFileAccess: true }
  });

  console.log("getMigrator");
  const migrator = orm.getMigrator();

  console.log("up");
  await migrator.up();
};

go()
  .then(() => console.log("Done!"))
  .catch(err => {
    throw err;
  });
