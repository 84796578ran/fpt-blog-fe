import axiosClient from "@/utils/axiosClient/index";

export const END_POINT = {
  GET_TOP10_LIKE: "/award/get-top10-like",
};



export const getTop10LikeOfUser = (access_token: string | null) => {
  return axiosClient.get(END_POINT.GET_TOP10_LIKE, {
    headers: { Authorization: `Bearer ${access_token}` },
  });
};

