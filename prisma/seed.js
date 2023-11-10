import { PrismaClient } from "@prisma/client";
import parseCSV from "../utils/csvParser.js";

// File paths
const profileFilePath = "data/Clients_Personal.csv";
const financialFilePath = "data/Clients_Financial.csv";

// Instantiate Prisma Client
const prisma = new PrismaClient();

// Seeding function
const main = async () => {
  // Parse csv data
  const profileData = await parseCSV(profileFilePath);
  const financialData = await parseCSV(financialFilePath);

  // Process data for database insertion
  profileData.forEach((element) => element.splice(0, 1));

  // Convert string values to int for database schema
  // Profile data: convert (age, lengthAtResidence, education) to Int
  const profile = profileData.map((el) =>
    el.map((e, index) =>
      (isNaN(e) || e === "") && index !== 5 ? e : parseInt(e) || 0
    )
  );

  // Financial data: convert everything to Int
  const financial = financialData.map((el) => el.map((e) => parseInt(e)));

  const allProfile = profile.map(
    ([name, gender, age, city, lengthAtResidence, education]) => ({
      name,
      gender,
      age,
      city,
      lengthAtResidence,
      education,
    })
  );

  const allFinancial = financial.map(
    ([
      clientId,
      income,
      houseValue,
      employmentYears,
      employmentCategory,
      creditCardDebt,
      charitableDonations,
      goldMembership,
    ]) => ({
      clientId,
      income,
      houseValue,
      employmentYears,
      employmentCategory,
      creditCardDebt,
      charitableDonations,
      goldMembership,
    })
  );

  // console.log(allProfile);
  // await prisma.profile.deleteMany();
  // await prisma.financial.deleteMany();

  await prisma.profile.createMany({
    data: allProfile,
  });

  await prisma.financial.createMany({
    data: allFinancial,
  });

  console.log("Data seeded successfully");
};

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
