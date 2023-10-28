-- CreateTable
CREATE TABLE "Profile" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "gender" TEXT NOT NULL,
    "age" INTEGER NOT NULL,
    "city" TEXT NOT NULL,
    "lengthAtResidence" INTEGER NOT NULL,
    "education" INTEGER NOT NULL,

    CONSTRAINT "Profile_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Financials" (
    "id" SERIAL NOT NULL,
    "clientId" INTEGER NOT NULL,
    "income" INTEGER NOT NULL,
    "houseValue" INTEGER NOT NULL,
    "employmentYears" INTEGER NOT NULL,
    "employmentCategory" INTEGER NOT NULL,
    "creditCardDebt" INTEGER NOT NULL,
    "charitableDonations" INTEGER NOT NULL,
    "goldMembership" INTEGER NOT NULL,

    CONSTRAINT "Financials_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Financials_clientId_key" ON "Financials"("clientId");

-- AddForeignKey
ALTER TABLE "Financials" ADD CONSTRAINT "Financials_clientId_fkey" FOREIGN KEY ("clientId") REFERENCES "Profile"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
