/*
  Warnings:

  - You are about to alter the column `gender` on the `Profile` table. The data in that column could be lost. The data in that column will be cast from `Text` to `Char(6)`.
  - You are about to alter the column `city` on the `Profile` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(50)`.
  - You are about to drop the `Financials` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Financials" DROP CONSTRAINT "Financials_clientId_fkey";

-- AlterTable
ALTER TABLE "Profile" ALTER COLUMN "gender" SET DATA TYPE CHAR(6),
ALTER COLUMN "city" DROP NOT NULL,
ALTER COLUMN "city" SET DATA TYPE VARCHAR(50),
ALTER COLUMN "education" DROP NOT NULL;

-- DropTable
DROP TABLE "Financials";

-- CreateTable
CREATE TABLE "Financial" (
    "id" SERIAL NOT NULL,
    "clientId" INTEGER NOT NULL,
    "income" INTEGER NOT NULL,
    "houseValue" INTEGER NOT NULL,
    "employmentYears" INTEGER NOT NULL,
    "employmentCategory" INTEGER NOT NULL,
    "creditCardDebt" INTEGER NOT NULL,
    "charitableDonations" INTEGER NOT NULL,
    "goldMembership" INTEGER NOT NULL,

    CONSTRAINT "Financial_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Financial_clientId_key" ON "Financial"("clientId");

-- AddForeignKey
ALTER TABLE "Financial" ADD CONSTRAINT "Financial_clientId_fkey" FOREIGN KEY ("clientId") REFERENCES "Profile"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
