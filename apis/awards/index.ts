import axiosClient from "@/utils/axiosClient/index";

export const END_POINT = {
  GET_TOP10_LIKE: "/award/get-top10-like",
<<<<<<< HEAD
  GET_TOP_MODERATOR: "/award/getAwardModerator",

};

=======
};



>>>>>>> 717a6c60757dff2b0b4b03e9557e797562c2d2e2
export const getTop10LikeOfUser = (access_token: string | null) => {
  return axiosClient.get(END_POINT.GET_TOP10_LIKE, {
    headers: { Authorization: `Bearer ${access_token}` },
  });
};
<<<<<<< HEAD
export const getAwardModerator = (access_token: string | null) => {
  return axiosClient.get(END_POINT.GET_TOP_MODERATOR, {
    headers: { Authorization: `Bearer ${access_token}` },
  });
};

=======
>>>>>>> 717a6c60757dff2b0b4b03e9557e797562c2d2e2

