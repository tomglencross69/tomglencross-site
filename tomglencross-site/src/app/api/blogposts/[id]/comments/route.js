import db from "@db/connection.js";

export async function POST(req, { params }) {
    const { id } = await params;  // Extract the blog ID from the URL
    const { comment_id, user_id, username, email, comment_text } = await req.json();  // Get the comment details from the request body

    // Ensure comment_text and user_id are provided
    if (!comment_text || !user_id) {
        return new Response(JSON.stringify({ error: "user_id and comment_text are required" }), {
            status: 400,
            headers: { 'Content-Type': 'application/json' }
        });
    }
    try {
        // Insert the new comment into the comments table
        const result = await db.query(
            'INSERT INTO comments (comment_id, user_id, blog_id, comment_text, created_at, ispending) VALUES ($1, $2, $3, $4, NOW(), $5) RETURNING *',
            [comment_id, user_id, id, comment_text, true]  // Assuming 'false' means the comment is not pending
        );

        // Return the newly created comment
        return new Response(JSON.stringify({ message: "Comment added successfully", comment: result.rows[0] }), {
            status: 201,
            headers: { 'Content-Type': 'application/json' }
        });
    } catch (error) {
        console.error('Error adding comment:', error);
        return new Response(JSON.stringify({ error: 'Internal Server Error' }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' }
        });
    }
}