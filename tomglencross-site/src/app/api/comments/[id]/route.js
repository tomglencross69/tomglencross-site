import db from "@db/connection.js";

export async function DELETE_COMMENT(req, { params }) {
    const { commentId } = params;
    try {
        await db.query('DELETE FROM comments WHERE comment_id = $1', [commentId]);
  
        return new Response(JSON.stringify({ message: 'Comment deleted successfully' }), {
            status: 200,
            headers: { 'Content-Type': 'application/json' }
        });
    } catch (error) {
        console.error('Error deleting comment:', error);
        return new Response(JSON.stringify({ error: 'Internal Server Error' }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' }
        });
    }
  }