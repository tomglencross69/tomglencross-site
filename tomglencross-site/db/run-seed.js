import seed from './seed.js'
import db from './connection.js'

import fakeBlogData from '../testdata/testBlogData.js'
import fakeCommentsData from '../testdata/testCommentsData.js'
import fakeUsersData from '../testdata/testUserData.js'

const runSeed = async () => {
    try {
      await seed({
      fakeBlogData: fakeBlogData,
      fakeCommentsData: fakeCommentsData,
      fakeUsersData: fakeUsersData,
      })
      console.log('Seeding complete!')
    } catch (err) {
      console.error('Seeding error:', err);
    } finally {
      await db.end()
      console.log('Database connection closed.');
    }
  };
  
  runSeed();