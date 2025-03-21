import db from './PROD-connection.js'
import format from 'pg-format'

const productionSeed = async ({seedBlogData, seedCommentsData, seedUserData}) => {

    try {
        console.log(seedBlogData, seedCommentsData, seedUserData, "<")
      console.log('Dropping existing tables...');
  
      await db.query(`DROP TABLE IF EXISTS comments;`);
      await db.query(`DROP TABLE IF EXISTS blogposts;`);
      await db.query(`DROP TABLE IF EXISTS users;`);
  
      console.log('🛠 Creating new tables...');
  
      // Creating users table
      await db.query(`
        CREATE TABLE users (
          user_id SERIAL PRIMARY KEY,
          username VARCHAR UNIQUE NOT NULL
        );
      `);
  
      // Creating blogposts table
      await db.query(`
        CREATE TABLE blogposts (
          blog_id SERIAL PRIMARY KEY,
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
          comment_id SERIAL PRIMARY KEY,
          user_id INT REFERENCES users(user_id) ON DELETE CASCADE,
          blog_id INT REFERENCES blogposts(blog_id) ON DELETE CASCADE,
          comment_text TEXT NOT NULL,
          created_at TIMESTAMP DEFAULT NOW(),
          isPending BOOLEAN
        );
      `);
  
      console.log('🌱 Inserting test data...');
      // Insert users data
      const insertUsersQuery = format(
        `INSERT INTO users (username) VALUES %L RETURNING *;`,
        seedUserData.map(({username}) => [username])
      );
      const { rows: insertedUsers } = await db.query(insertUsersQuery);
  
      // Insert blogposts -removed blog_id from query and map whilst debugging
      const insertBlogPostsQuery = format(
        `INSERT INTO blogposts (title, author, subtitle, excerpt, body, image_src, image_alt_text, tags) 
         VALUES %L RETURNING *;`,
        seedBlogData.map(({ title, author, subtitle, excerpt, body, image_src, image_alt_text, tags }) => [
          title, author, subtitle, excerpt, body, image_src, image_alt_text, tags ? `{${tags.join(',')}}` : null,
        ])
      );
      const { rows: insertedPosts } = await db.query(insertBlogPostsQuery);
  
      // Insert comments with correct blog_id and user_id mapping removed comment_id from query and map whilst debugging
      const insertCommentsQuery = format(
        `INSERT INTO comments (user_id, blog_id, comment_text, isPending) VALUES %L;`,
        seedCommentsData.map(({user_id, blog_id, comment_text, isPending }) => [
          user_id, blog_id, comment_text, isPending
        ])
      );
      await db.query(insertCommentsQuery);
  
      console.log('✅ Seeding complete!');
    } catch (err) {
      console.error('❌ Seeding error:', err);
    }
  };
  
  export default productionSeed;