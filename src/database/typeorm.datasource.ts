import { DataSource, DataSourceOptions, ConnectOptions} from "typeorm";



export const dataSourceOptions: DataSourceOptions = {
    type: "sqlite",
    database: "db.sqlite",
    entities: ["src/**/*.entity.{js,ts}"],
    migrations: ["src/database/migrations/*.{js,ts}"],
    synchronize: false
};

export default new DataSource(dataSourceOptions)