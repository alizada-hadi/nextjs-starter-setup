import { userInsertSchema, usersTable } from "../schema/user";
import { z } from "zod";
import { db } from "..";
async function main() {
  const user: z.infer<typeof userInsertSchema> = {
    email: "test@gmail.com",
    name: "test@22",
    role: "superadmin",
    password: "$2a$12$XxjqfAfECJXtNIlK0/6ajefIoDwiKu6RsI4jay2PdKnqrS6yqYp6W",
  };

  await db.insert(usersTable).values(user);
}

main();
