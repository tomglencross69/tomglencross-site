// The Response class:
// The Response constructor creates an HTTP response object. It can be used to define:

// The status code (status: 200),
// The response body (body: JSON.stringify(result.rows)),
// The headers ({ 'Content-Type': 'application/json' }).

  import db from '../../../../db/connection.js'

export async function GET() {
  try {
    const result = await db.query('SELECT * FROM blogposts');
    return new Response(JSON.stringify(result.rows), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    return new Response(JSON.stringify({ error: 'Internal Server Error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}