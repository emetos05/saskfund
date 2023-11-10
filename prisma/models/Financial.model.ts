import { Prisma } from "@prisma/client";

export const Financial = {
  clientId: true,
  income: true,
  houseValue: true,
  employmentYears: true,
  employmentCategory: true,
  creditCardDebt: true,
  charitableDonations: true,
  goldMembership: true,
} satisfies Prisma.FinancialSelect;

export type Financial = Prisma.FinancialGetPayload<{
  select: typeof Financial;
}>;
