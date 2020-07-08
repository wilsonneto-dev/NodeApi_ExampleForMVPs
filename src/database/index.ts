import { createConnection, Connection, getConnectionOptions } from "typeorm";

export default async function connection(
  name = "default"
): Promise<Connection> {
  const defaultOptions = await getConnectionOptions();

  const options = Object.assign(defaultOptions, { name });

  return createConnection(options);
}
