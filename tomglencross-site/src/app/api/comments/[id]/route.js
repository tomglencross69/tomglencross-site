import db from "@db/PROD-connection.js";

export async function DELETE(req, { params }) {
    const { id } = await params;
    try {
        const result = await db.query('DELETE FROM comments WHERE comment_id = $1', [id]);
  
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

  export async function PATCH(req, { params }) {
    const { id } = await params;
    try {
        const result = await db.query(
            'UPDATE comments SET ispending = $1 WHERE comment_id = $2 RETURNING *',
            [false, id] 
        );
        if (result.rowCount === 0) {
            return new Response(JSON.stringify({ error: 'Comment not found' }), {
                status: 404,
                headers: { 'Content-Type': 'application/json' }
            });
        }
        const updatedComment = result.rows[0];
        return new Response(
            JSON.stringify({ message: 'Comment updated successfully', comment: updatedComment }),
            { status: 200, headers: { 'Content-Type': 'application/json' } }
        );
    } catch (error) {
        console.error('Error updating comment status:', error);
        return new Response(JSON.stringify({ error: 'Internal Server Error' }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' }
        });
    }
}