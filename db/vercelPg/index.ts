import { Generated } from 'kysely';
import { createKysely } from '@vercel/postgres-kysely'
import { OutputData } from '@editorjs/editorjs';
// import { UserTable as User,
//   VerificationTokenTable as VerificationToken,
//   AccountTable as Account,
//   SessionTable as Session,
//   AccountTable,
//   SessionTable
//   } from '../types';

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

export interface PostTable {
  id: string;
  title: string;
  slug: string;
  tags: string[] | null;
  content: OutputData;
  published: boolean;
  created_at: string | Date;
  updated_at?: string | Date;
}


interface Database {
  guestbook: GuestbookTable;
  views: ViewsTable;
  posts: PostTable;
}


export const db = createKysely<Database>()
export { sql } from 'kysely'
