// The Response class:
// The Response constructor creates an HTTP response object. It can be used to define:

// The status code (status: 200),
// The response body (body: JSON.stringify(result.rows)),
// The headers ({ 'Content-Type': 'application/json' }).

import db from "@db/connection.js";

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

//blog_id is added here as insert value temporarily whilst testing, it will be a serial generated in production database - 0t needs to be removed and $VALUES decreased by one accordingly
export async function POST(request) {
  try {
    const postData = await request.json();
    const { blog_id, title, author, subtitle, excerpt, body, image_src, image_alt_text, tags } = postData;

    const result = await db.query(`
      INSERT INTO blogposts (blog_id, title, author, subtitle, excerpt, body, image_src, image_alt_text, tags)
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)
      RETURNING blog_id, title, author, date_added, tags
    `, [blog_id, title, author, subtitle, excerpt, body, image_src, image_alt_text, tags]);
    return new Response(JSON.stringify(result.rows[0]), {
      status: 201, 
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (error) {
    console.error('Error inserting new blog post:', error);
    return new Response(JSON.stringify({ error: 'Internal Server Error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}