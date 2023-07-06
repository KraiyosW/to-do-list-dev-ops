import * as pg from "pg";
const { Pool } = pg.default;

const pool = new Pool({
  connectionString: "postgresql://postgres:toey2539@localhost:5432/posts",
});

export { pool };