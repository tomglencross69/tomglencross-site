import db from "@db/connection.js";

export async function GET(req, {params}) {
    const {id} = await params
  
    try {
    const result = await db.query('SELECT * FROM blogposts WHERE blog_id = $1', [id]);
    return new Response(JSON.stringify(result.rows[0]), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (error) {
    console.error('Error fetching individual blog post:', error);
    return new Response(JSON.stringify({ error: 'Internal Server Error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}