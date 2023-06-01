import 'server-only';
import { db, sql } from '@/db/vercelPg';
import { cache } from 'react';


export const getBlogViews = cache(async () => {
    const data = await db
      .selectFrom('views')
      .select(['count'])
      .execute();
    return data.reduce((acc, curr) => acc + Number(curr.count), 0);
  });