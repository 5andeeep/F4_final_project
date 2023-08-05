import { POST_DATA_SUCCESS } from "./actionTypes";

export const postDataSuccess = (data) => {
  return {
    type: POST_DATA_SUCCESS,
    payload: data,
  };
};

export function fetchPost() {
  return async function (dispatch) {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const data = await response.json();
      const itemsWithImg = data.map((item) => ({
        ...item,
        imgSrc: `https://picsum.photos/200?random=${item.id}`,
      }));
      dispatch(postDataSuccess(itemsWithImg));
    } catch (e) {
      console.log("Error: ", e);
    }
  };
};
