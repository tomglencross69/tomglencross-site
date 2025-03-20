import db from "@db/PROD-connection.js";

export async function POST(req, { params }) {
    const { id } = await params;  // Extract the blog ID from the URL
    const { user_id, username, comment_text } = await req.json();  // Get the comment details from the request body

    // Ensure comment_text and user_id are provided
    if (!comment_text || !user_id) {
        return new Response(JSON.stringify({ error: "user_id and comment_text are required" }), {
            status: 400,
            headers: { 'Content-Type': 'application/json' }
        });
    }
    try {
        //check username exists
        const userResult = await db.query('SELECT * FROM users WHERE username = $1', [username]);

        let user_id;
        
        if (userResult.rowCount === 0) {
            // if user doesn't exist, create the user
            const insertUserResult = await db.query(
                'INSERT INTO users (username) VALUES ($1) RETURNING user_id',
                [username]
            );
            user_id = insertUserResult.rows[0].user_id;  // Get the newly created user_id
        } else {
            user_id = userResult.rows[0].user_id;  // Use the existing user_id if user is found
        }
        // Insert the new comment into the comments table
        const result = await db.query(
            'INSERT INTO comments (user_id, blog_id, comment_text, created_at, ispending) VALUES ($1, $2, $3, NOW(), $4) RETURNING *',
            [user_id, id, comment_text, true]  // Assuming 'false' means the comment is not pending
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