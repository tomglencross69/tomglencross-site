import db from './connection.js'
import format from 'pg-format'

const seed = async (fakeBlogData, fakeCommentsData, fakeUsersData) => {
    try {
      console.log('Dropping existing tables...');
  
      await db.query(`DROP TABLE IF EXISTS comments;`);
      await db.query(`DROP TABLE IF EXISTS blogposts;`);
      await db.query(`DROP TABLE IF EXISTS users;`);
  
      console.log('🛠 Creating new tables...');
  
      // Creating users table
      await db.query(`
        CREATE TABLE users (
          user_id INTEGER PRIMARY KEY,
          username VARCHAR UNIQUE NOT NULL,
          email VARCHAR UNIQUE NOT NULL,
          created_at TIMESTAMP DEFAULT NOW()
        );
      `);
  
      // Creating blogposts table
      await db.query(`
        CREATE TABLE blogposts (
          blog_id INTEGER PRIMARY KEY,
          title TEXT NOT NULL,
          author TEXT NOT NULL,
          subtitle TEXT NOT NULL,
          excerpt TEXT NOT NULL,
          body TEXT NOT NULL,
          image_src TEXT NOT NULL,
          image_alt_text TEXT NOT NULL,
          date_added TIMESTAMP DEFAULT NOW(),
          tags TEXT[]
        );
      `);
  
      // Creating comments table
      await db.query(`
        CREATE TABLE comments (
          comment_id INTEGER PRIMARY KEY,
          user_id INT REFERENCES users(user_id) ON DELETE CASCADE,
          blog_id INT REFERENCES blogposts(blog_id) ON DELETE CASCADE,
          comment_text TEXT NOT NULL,
          created_at TIMESTAMP DEFAULT NOW()
        );
      `);
  
      console.log('🌱 Inserting test data...');
  
      // Insert users data
      const insertUsersQuery = format(
        `INSERT INTO users (username, email) VALUES %L RETURNING *;`,
        fakeUsersData.map(({ username, email }) => [username, email])
      );
      const { rows: insertedUsers } = await db.query(insertUsersQuery);
  
      // Insert blogposts with correct author mapping (assuming author is a string here)
      const insertPostsQuery = format(
        `INSERT INTO blogposts (title, author, subtitle, excerpt, body, image_src, image_alt_text, tags) 
         VALUES %L RETURNING *;`,
        fakeBlogData.map(({ title, author, subtitle, excerpt, body, image_src, image_alt_text, tags }) => [
          title, author, subtitle, excerpt, body, image_src, image_alt_text, tags
        ])
      );
      const { rows: insertedPosts } = await db.query(insertPostsQuery);
  
      // Insert comments with correct blog_id and user_id mapping
      const insertCommentsQuery = format(
        `INSERT INTO comments (user_id, blog_id, comment_text) VALUES %L;`,
        fakeCommentsData.map(({ user_id, blog_id, comment_text }) => [
          user_id, blog_id, comment_text
        ])
      );
      await db.query(insertCommentsQuery);
  
      console.log('✅ Seeding complete!');
    } catch (err) {
      console.error('❌ Seeding error:', err);
    }
  };
  
  export default seed;