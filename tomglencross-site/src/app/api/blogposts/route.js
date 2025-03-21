import db from "@db/PROD-connection.js";

export async function GET() {
  try {
    const result = await db.query(`SELECT blogposts.*, COUNT(comments.comment_id) AS comment_count
       FROM blogposts
       LEFT JOIN comments ON blogposts.blog_id = comments.blog_id
       GROUP BY blogposts.blog_id
       ORDER BY blogposts.blog_id DESC`);
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

export async function POST(request) {
  try {
    const postData = await request.json();
    const { title, author, subtitle, excerpt, body, image_src, image_alt_text, tags } = postData;

    const result = await db.query(`
      INSERT INTO blogposts (title, author, subtitle, excerpt, body, image_src, image_alt_text, tags)
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
      RETURNING blog_id, title, author, date_added, tags
    `, [title, author, subtitle, excerpt, body, image_src, image_alt_text, tags]);
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