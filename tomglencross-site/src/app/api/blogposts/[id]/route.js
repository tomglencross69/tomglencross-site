import db from "@db/PROD-connection.js";

export async function GET(req, {params}) {
    const {id} = await params
  
    try {
      const result = await db.query('SELECT * FROM blogposts WHERE blog_id = $1', [id]);
      const comments = await db.query(
        `SELECT comments.comment_id, comments.user_id, comments.blog_id, comments.comment_text, 
                comments.created_at, comments.isPending, users.username 
         FROM comments
         JOIN users ON comments.user_id = users.user_id 
         WHERE comments.blog_id = $1`, 
        [id]
    );

      return new Response(JSON.stringify({
          ...result.rows[0], 
          comments: comments.rows 
      }), {
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

export async function DELETE(req, { params }) {
  const { id } = params;
  try {
      await db.query('DELETE FROM blogposts WHERE blog_id = $1', [id]);
      return new Response(JSON.stringify({ message: 'Post deleted successfully' }), {
          status: 200,
          headers: { 'Content-Type': 'application/json' }
      });
  } catch (error) {
      console.error('Error deleting blog post:', error);
      return new Response(JSON.stringify({ error: 'Internal Server Error' }), {
          status: 500,
          headers: { 'Content-Type': 'application/json' }
      });
  }
}

