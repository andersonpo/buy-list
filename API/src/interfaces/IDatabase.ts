import { ISqlite } from 'sqlite';

interface IDatabae {
  execute(query: string, params: unknown): Promise<ISqlite.RunResult>;
  executeOne(query: string, params: unknown): Promise<any>;
  executeMany(query: string, params: unknown): Promise<any>;
  execMigrations(pathMigrations: string): Promise<void>;
}

export default IDatabae;
