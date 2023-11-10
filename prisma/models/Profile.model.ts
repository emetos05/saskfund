import { Prisma } from "@prisma/client";

export const Profile = {
  name: true,
  gender: true,
  age: true,
  city: true,
  lengthAtResidence: true,
  education: true,
} satisfies Prisma.ProfileSelect;

export type Profile = Prisma.ProfileGetPayload<{ select: typeof Profile }>;
