// awards.ts
import axiosClient from "@/utils/axiosClient/index";

export const END_POINT = {
  GET_ALL_AWARDS: "/awards",
};

// Chú ý thêm tham số vào hàm getAllAwards
export const getAllAwards = async (access_token: string, page: number) => {
  try {
    const response = await axiosClient.get(END_POINT.GET_ALL_AWARDS, {
      headers: { Authorization: `Bearer ${access_token}` },
      params: { page },
    });
    return response.data;
  } catch (error: any) {
    console.error(error);
    return {
      success: false,
      message: "Failed to get awards",
      error: error.message,
    };
  }
};
