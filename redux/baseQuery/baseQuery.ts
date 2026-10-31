import { subDomain } from "@/utils/constants";
import { FetchBaseQueryArgs } from "@reduxjs/toolkit/dist/query/fetchBaseQuery";
import { fetchBaseQuery } from "@reduxjs/toolkit/query";


interface BaseQueryProps {
  fetchBaseQueryArgs?: FetchBaseQueryArgs | undefined;
}

const addTokenToRequest = async (headers: any, { getState }: any) => {
//   const session: any = await getSession();
//   console.log(session);
//   if (session?.user?.token) {
//     console.log(session?.user?.token);
//     headers.set("Authorization", `Bearer ${session.user.token}`);
//   }
 // headers.set("x-db-token",subDomain._id)
  return headers;
};

const inititBaseQuery = ({ fetchBaseQueryArgs }: BaseQueryProps) => {
  return fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_API_URL,
    // prepareHeaders: (headers, { getState }: any) => {
    //   return addTokenToRequest(headers, { getState });
    // },
    ...fetchBaseQueryArgs,
  });
};

export default inititBaseQuery;
