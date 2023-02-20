import { NextApiRequest, NextApiResponse } from 'next';
import client from '../../../../lib/db'

const endpoint = async function(request: NextApiRequest, result: NextApiResponse) {
  try {
    if (request.method !== 'POST') {
      result.status(405).send("ACCESS_DENIED");
      return
    }

    const queryResult = await client.query('SELECT id, username FROM users WHERE username = $1 AND password = crypt($2, password);', [request.body.username, request.body.password]);

    result.status(200).send(queryResult.rows);

    // TODO: Implement JWT
  } catch ( error ) {
    console.log(error)
    console.debug(error)
    result.status(500).send(error);
  }
};

export default endpoint;