import { prisma } from "./prisma";
import { auth } from "./auth"; // your Better Auth instance

export async function createAdminIfNotExists() {
  const adminName = process.env.ADMIN_NAME;
  const adminEmail = process.env.ADMIN_EMAIL;
  const adminPassword = process.env.ADMIN_PASSWORD;

  if (!adminEmail || !adminPassword || !adminName) {
    console.log("Missing admin env variables");
    return;
  }

  const admin = await prisma.user.findUnique({
    where: { email: adminEmail },
  });

  if (admin) {
    console.log("Admin already exists");
    return;
  }

  // create user via Better Auth
  await auth.api.signUpEmail({
    body: {
      name: adminName,
      email: adminEmail,
      password: adminPassword,
    },
  });

  // update role via Prisma
  await prisma.user.update({
    where: { email: adminEmail },
    data: {
      role: "ADMIN",
      emailVerified: true, 
    },
  });

  console.log("Admin created successfully");
}
