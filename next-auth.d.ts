import NextAuth, { DefaultUser } from "next-auth";
import { DefaultJWT } from "next-auth/jwt";

declare module "next-auth" {
  interface User extends DefaultUser {
    firstName?: string;
    role?: string;
    skinType?:string;
    selfyImage?: string;
    selfyImagePath?: string;
    lastName?: string;
    mobileNumber?: string;
    gender?: string;
    address?: string;
    isEmailVerified?: boolean;
    token?: string;
    isProfileCompleted?: boolean;
    dateOfBirth?: string;
    onBoardingQuestions: any[];
    isOtpVerified?:boolean;
  }

  interface Session {
    user: {
      id?: string;
      skinType?:string;
      name?: string;
      firstName?: string;
      lastName?: string;
      mobileNumber?: string;
      email: ?string;
      selfyImage?: string;
      selfyImagePath?: string;
      gender?: string;
      address?: string;
      isEmailVerified?: boolean;
      token?: string;
      isProfileCompleted?: boolean;
      dateOfBirth?: string;
      role?: string;
      onBoardingQuestions: any[];
      isOtpVerified?:boolean;
    };
  }
}
