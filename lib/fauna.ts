import { Client, query } from 'faunadb';
import { nanoid } from 'nanoid';

const client = new Client({
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    secret: process.env.FAUNADB_SECRET!,
    domain: 'db.us.fauna.com',
});

const q = query;
interface data {
    data: {
        LURL: string;
        TURL: string;
    };
}

const getLURL = async (TURL): Promise<data> => {
    return await client.query(q.Get(q.Match(q.Index('LURL_Return'), TURL)));
};

const createURL = async (LURL: string): Promise<data> => {
    const TURL = nanoid(6);
    return await client.query(
        q.Create(q.Collection('URLS'), {
            data: { LURL, TURL },
        })
    );
};

const checkLURL = async (LURL): Promise<data> => {
    return await client.query(q.Get(q.Match(q.Index('LURL_Check'), LURL)));
};

export default client;
export { getLURL, createURL, checkLURL };
