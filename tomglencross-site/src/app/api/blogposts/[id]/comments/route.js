import db from "@db/PROD-connection.js";

export async function POST(req, { params }) {
    const { id } = await params;  
    const { username, comment_text } = await req.json(); 

    if (!comment_text || !username) {
        return new Response(JSON.stringify({ error: "username and comment_text are required" }), {
            status: 400,
            headers: { 'Content-Type': 'application/json' }
        });
    }
    try {
        const userResult = await db.query('SELECT * FROM users WHERE username = $1', [username]);

        let user_id;
        
        if (userResult.rowCount === 0) {
            const insertUserResult = await db.query(
                'INSERT INTO users (username) VALUES ($1) RETURNING user_id',
                [username]
            );
            user_id = insertUserResult.rows[0].user_id; 
        } else {
            user_id = userResult.rows[0].user_id;
        }
      
        const result = await db.query(
            'INSERT INTO comments (user_id, blog_id, comment_text, created_at, ispending) VALUES ($1, $2, $3, NOW(), $4) RETURNING *',
            [user_id, id, comment_text, true] 
        );

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