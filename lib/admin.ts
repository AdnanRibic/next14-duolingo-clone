import { auth } from "@clerk/nextjs"

const adminIds = [
  "user_2dp87IlJ8LyVcRfnx8tarkNJPAt",
];

export const isAdmin = () => {
  const { userId } = auth();

  if (!userId) {
    return false;
  }

  return adminIds.indexOf(userId) !== -1;
};
