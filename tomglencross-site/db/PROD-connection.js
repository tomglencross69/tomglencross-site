import pg from 'pg'
import dotenv from 'dotenv'
dotenv.config()
const {Pool} = pg

const db = new Pool({
    connectionString: process.env.PRODUCTION_DATABASE_URL,
})

export default db

// If psql connects to tomglencross, it’s because that’s your default user.
// To list your databases, run \l.
// To switch to production_website, run \c production_website.
// To connect directly to website_test, use psql -d website_test -U tomglencross.