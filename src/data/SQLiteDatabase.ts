/* eslint-disable no-console */
import { Database, ISqlite, open } from 'sqlite';
import sqlite3 from 'sqlite3';
import environment from '../environment';
import IDatabase from '../interfaces/IDatabase';

class SQLiteDatabase implements IDatabase {
  private database: Database;

  private connect = async () => {
    this.database = await open({
      driver: sqlite3.Database,
      filename: environment.DATABASE_PATH,
    });

    this.database.on('trace', (data) => {
      // eslint-disable-next-line no-console
      console.log('[SQLiteDatabase Trace]', data);
    });
  };

  private disconnect = async () => {
    if (this.database != null) {
      await this.database.close();
    }
  };

  execute = async (
    query: string,
    params: unknown
  ): Promise<ISqlite.RunResult> => {
    console.log('[SQLiteDatabase - execute]\n', query, '\n', params);

    await this.connect();
    return this.database
      .run(query, params)
      .then((result) => {
        return Promise.resolve(result);
      })
      .catch((error) => {
        console.error('[SQLiteDatabase - ERROR execute]', error.message);
        return Promise.reject(error.message);
      })
      .finally(async () => {
        await this.disconnect();
      });
  };

  executeOne = async (query: string, params: unknown): Promise<any> => {
    await this.connect();
    return this.database
      .get(query, params)
      .then((result) => {
        return Promise.resolve(result);
      })
      .catch((error) => {
        console.error('[SQLiteDatabase - ERROR executeOne]', error.message);
        return Promise.reject(error.message);
      })
      .finally(async () => {
        await this.disconnect();
      });
  };

  executeMany = async (query: string, params: unknown): Promise<any> => {
    await this.connect();
    return this.database
      .all(query, params)
      .then((result) => {
        return Promise.resolve(result);
      })
      .catch((error) => {
        console.error('[SQLiteDatabase - ERROR executeMany]', error.message);
        return Promise.reject(error.message);
      })
      .finally(async () => {
        await this.disconnect();
      });
  };

  execMigrations = async (pathMigrations: string): Promise<void> => {
    const separator = '#'.repeat(80);
    console.log(separator + '\n\t\t\tRUN MIGRATIONS\n' + separator);
    await this.connect();
    await this.database.migrate({
      migrationsPath: pathMigrations,
    }).catch((error) => {
      console.error('\n[MIGRATIONS ERROR]', error.message);
    });
    console.log(separator + '\n\t\t\tEND MIGRATIONS\n' + separator);
  };
}

export default SQLiteDatabase;
