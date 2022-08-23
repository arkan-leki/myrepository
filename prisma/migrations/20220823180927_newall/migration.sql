/*
  Warnings:

  - You are about to drop the column `code` on the `Brand` table. All the data in the column will be lost.
  - Added the required column `name` to the `Brand` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Brand" DROP COLUMN "code",
ADD COLUMN     "name" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Order" ALTER COLUMN "total" SET DEFAULT '0',
ALTER COLUMN "total" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "Product" ALTER COLUMN "price" SET DATA TYPE TEXT,
ALTER COLUMN "quantity" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "ProductOnPosts" ALTER COLUMN "price" SET DATA TYPE TEXT,
ALTER COLUMN "quantity" SET DATA TYPE TEXT,
ALTER COLUMN "total" SET DEFAULT '0',
ALTER COLUMN "total" SET DATA TYPE TEXT;
