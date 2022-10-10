/*
  Warnings:

  - You are about to drop the column `provider` on the `Account` table. All the data in the column will be lost.
  - You are about to drop the column `providerAccountId` on the `Account` table. All the data in the column will be lost.
  - You are about to drop the column `type` on the `Account` table. All the data in the column will be lost.
  - You are about to drop the column `emailVerified` on the `User` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[userId,role]` on the table `Account` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `role` to the `Account` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "Account_provider_providerAccountId_key";

-- AlterTable
ALTER TABLE "Account" DROP COLUMN "provider",
DROP COLUMN "providerAccountId",
DROP COLUMN "type",
ADD COLUMN     "role" "Role" NOT NULL;

-- AlterTable
ALTER TABLE "User" DROP COLUMN "emailVerified";

-- CreateIndex
CREATE UNIQUE INDEX "Account_userId_role_key" ON "Account"("userId", "role");
