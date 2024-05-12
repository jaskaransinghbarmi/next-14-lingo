import { auth } from "@clerk/nextjs";

const adminIds = [
    "user_2eKWk4G2MjgJCfe2GZpytQqUn1d",
];
export const getIsAdmin = () => {
  const { userId } = auth();
 // stored in .env.local file as string separated by comma(,) and space( )

 if (!userId) return false;

 return adminIds.indexOf(userId) !== -1;
  
};