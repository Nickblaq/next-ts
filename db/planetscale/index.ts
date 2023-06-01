import 'server-only';
import { Kysely,Generated } from 'kysely';
import { PlanetScaleDialect, PlanetScaleDialectConfig } from 'kysely-planetscale';



const dbUrl: string = process.env.PLANETSCALE_DATABASE_URL || '';


interface GuestbookTable {
  id: Generated<number>;
  email: string;
  body: string;
  created_by: string;
  updated_at?: string;
}

interface ViewsTable {
  slug: string;
  count: number;
}

interface Database {
  guestbook: GuestbookTable;
  views: ViewsTable;
}

const config: PlanetScaleDialectConfig = {
  useSharedConnection: false
};

const configAuth = {
  ...config,
  url: dbUrl
}
export const queryBuilder = new Kysely<Database>({
  dialect: new PlanetScaleDialect({
    ...configAuth,
  }),
});





