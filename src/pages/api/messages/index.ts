import client from '../../../../lib/db'

const endpoint = async function(request, result) {
  try {
    const queryResult = await client.query('SELECT * FROM messages LIMIT 20');
    result.status(200).send(queryResult.rows)
  } catch ( error ) {
    result.status(500).send(error);
  }
};

export default endpoint;