import productionSeed from './PROD-seed.js'
import db from './PROD-connection.js'

import seedBlogData from '../src/seeddata/seedBlogData.js'
import seedCommentsData from '../src/seeddata/seedCommentsData.js'
import seedUserData from '../src/seeddata/seedUserData.js'

const runProductionSeed = async () => {
    try {
      await productionSeed({
      seedBlogData: seedBlogData,
      seedCommentsData: seedCommentsData,
      seedUserData: seedUserData
      })
      console.log('Production Seeding complete!')
    } catch (err) {
      console.error('Production Seeding error:', err);
    } finally {
      await db.end()
      console.log('Production Database connection closed.');
    }
  };
  
  runProductionSeed();