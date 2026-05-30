/*
  Warnings:

  - You are about to drop the `account` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `categories` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `meals` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `order_items` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `orders` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `provider_profiles` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `reviews` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `session` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `user` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `verification` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "account" DROP CONSTRAINT "account_userId_fkey";

-- DropForeignKey
ALTER TABLE "meals" DROP CONSTRAINT "meals_categoryId_fkey";

-- DropForeignKey
ALTER TABLE "meals" DROP CONSTRAINT "meals_providerId_fkey";

-- DropForeignKey
ALTER TABLE "order_items" DROP CONSTRAINT "order_items_mealId_fkey";

-- DropForeignKey
ALTER TABLE "order_items" DROP CONSTRAINT "order_items_orderId_fkey";

-- DropForeignKey
ALTER TABLE "orders" DROP CONSTRAINT "orders_customerId_fkey";

-- DropForeignKey
ALTER TABLE "provider_profiles" DROP CONSTRAINT "provider_profiles_userId_fkey";

-- DropForeignKey
ALTER TABLE "reviews" DROP CONSTRAINT "reviews_mealId_fkey";

-- DropForeignKey
ALTER TABLE "reviews" DROP CONSTRAINT "reviews_userId_fkey";

-- DropForeignKey
ALTER TABLE "session" DROP CONSTRAINT "session_userId_fkey";

-- DropTable
DROP TABLE "account";

-- DropTable
DROP TABLE "categories";

-- DropTable
DROP TABLE "meals";

-- DropTable
DROP TABLE "order_items";

-- DropTable
DROP TABLE "orders";

-- DropTable
DROP TABLE "provider_profiles";

-- DropTable
DROP TABLE "reviews";

-- DropTable
DROP TABLE "session";

-- DropTable
DROP TABLE "user";

-- DropTable
DROP TABLE "verification";

-- DropEnum
DROP TYPE "OrderStatus";
