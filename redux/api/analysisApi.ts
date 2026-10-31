import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API_ROUTES } from "../routes/apiRoutes";
import _ from "lodash";
import baseQuery from "../baseQuery/baseQuery";
import inititBaseQuery from "../baseQuery/baseQuery";

interface QuestionsResponse {
  data: any[];
  message: string;
  status: string;
  statusCode: number;
  totalCount: number;
  // Auto-generated default answers for the questions hidden from the UI, so
  // the backend still receives valid onBoardingQuestions for recommendations.
  hiddenDefaults?: { questionId: string; responseId: string[] }[];
}

export const analysisApi = createApi({
  reducerPath: "analysisApi",
  //baseQuery: fetchBaseQuery({ baseUrl: process.env.NEXT_PUBLIC_API_URL }),
  baseQuery: inititBaseQuery({}),
  tagTypes: ["analysisApi"],
  endpoints: (builder) => ({
    getQuestions: builder.query<QuestionsResponse, {}>({
      query: () => `${API_ROUTES.ONBOARDING_QUESTIONS}`,
      transformResponse: (response: QuestionsResponse) => {
        // The entire onboarding questionnaire is intentionally hidden from the
        // UI. Product recommendations are driven by the selfie image and the
        // selected skin type, not by these answers, so we skip straight to the
        // Basic Details (REGISTER) step.
        return {
          ...response,
          data: [{ responseType: "REGISTER", value: "Basic Details" }],
        };
      },
    }),
    getSignedUploadUrl: builder.mutation<
      any,
      { fileName: string; contentType: string; userId: string }
    >({
      query: (body) => {
        return {
          url: API_ROUTES.GET_S3_SIGNED_UPLOAD_URL,
          method: "POST",
          body,
        };
      },
    }),
    getUploadImageInfo: builder.mutation<
      any,
      { fileName: string; userId: string }
    >({
      query: (body) => {
        return {
          url: API_ROUTES.GET_VIEW_IMAGE,
          method: "POST",
          body,
        };
      },
    }),

    getRecommnedSkinAttributes: builder.mutation<
      any,
      {
        userId: string;
        fileName: string;
        skinType: string;
      }
    >({
      query: ({ userId, fileName, skinType }) => {
        return {
          url: API_ROUTES.RECOMMEND_SKIN_CARE,
          method: "POST",
          body: {
            userId,
            skinType,
            images: [
              {
                fileName: fileName,
                url: `https://skin-care-recommendation.s3.eu-north-1.amazonaws.com/${userId}/${fileName}`,
              },
            ],
          },
        };
      },
    }),
    fetchRecommnedSkinAttributes: builder.query<
      any,
      {
        userId: string;
      }
    >({
      query: ({ userId }) => {
        return {
          url: API_ROUTES.FETCH_SKIN_CARE_RECOMMENDATIONS,
          method: "GET",
          params: {
            userId,
          },
        };
      },
    }),
    fetchRecommnedSkinAttributesById: builder.query<
      any,
      {
        userId: string;
        productRecommendationId: string;
      }
    >({
      query: ({ userId, productRecommendationId }) =>
        `${API_ROUTES.FETCH_SKIN_CARE_RECOMMENDATIONS_BY_ID}?userId=${userId}&productRecommendationId=${productRecommendationId}`,
    }),
    fetchUserQuestionsResponse: builder.query<any, { userId: string }>({
      query: ({ userId }) =>
        `${API_ROUTES.FETCH_USER_QUESTION_RESPONSE}?userId=${userId}`,
      transformResponse: (response: any) => {
        let findAgeGroup;
        let findGender;
        if (response?.data?.length > 0) {
          findAgeGroup = _.find(
            response?.data,
            (item: any) => item?._id === "questions/69881"
          );
          findGender = _.find(
            response?.data,
            (item: any) => item?._id === "questions/69882"
          );
        }
        return {
          age: findAgeGroup?.responses?.[0]?.value || null,
          gender: findGender?.responses?.[0]?.value || null,
        };
      },
    }),
    fetchLatestRecommendationsByFilter: builder.mutation<
      any,
      { input: string }
    >({
      query: ({ input }) => {
        return {
          url: API_ROUTES.FETCH_LATEST_RECOMMENDATION_BY_FILTER,
          method: "POST",
          body: {
            input,
          },
        };
      },
    }),
    fetchAdminRecommendationsById: builder.query<any, { userId: string }>({
      query: ({ userId }) =>
        `${API_ROUTES.FETCH_ADMIN_RECOMMENDATION_BY_ID}?userId=${userId}`,
    }),
  }),
});

export const { 
  useGetQuestionsQuery,
  useLazyGetQuestionsQuery,
  useGetSignedUploadUrlMutation,
  useGetRecommnedSkinAttributesMutation,
  useGetUploadImageInfoMutation,
  useLazyFetchRecommnedSkinAttributesQuery,
  useLazyFetchUserQuestionsResponseQuery,
  useLazyFetchRecommnedSkinAttributesByIdQuery,
  useFetchLatestRecommendationsByFilterMutation,
  useLazyFetchAdminRecommendationsByIdQuery,
  useFetchAdminRecommendationsByIdQuery,
} = analysisApi;
