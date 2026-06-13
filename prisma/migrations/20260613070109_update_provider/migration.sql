/*
  Warnings:

  - The `cuisineType` column on the `provider_profiles` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "provider_profiles" ADD COLUMN     "isOpen" BOOLEAN NOT NULL DEFAULT true,
ADD COLUMN     "minOrder" INTEGER,
ADD COLUMN     "rating" DOUBLE PRECISION,
ADD COLUMN     "tags" TEXT[],
DROP COLUMN "cuisineType",
ADD COLUMN     "cuisineType" TEXT[];
