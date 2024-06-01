import db from "../db/db";
import { user } from "../db/schema";

export default async function Home() {
  const data = await db.select().from(user);
  return (
    <div>
      <h1>Users</h1>
      <ul>
        {data.map((row) => (
          <li key={row.id}>
            <p>{row.name}</p>
            <p>{row.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
