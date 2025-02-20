import db from '../../../../db/connection.js'

export async function GET(request) {
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