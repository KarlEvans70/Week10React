export const signUp = async (signObj, setter) => {
  try {
    const res = await fetch(`${process.env.REACT_APP_REST_API} + user`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(signObj),
    });
    const data = await res.json();
    setter(data.user.username);
  } catch (error) {
    console.log(error);
  }
};

export const fetchPhotos = async (setter) => {
  try {
    const res = await fetch(process.env.REACT_APP_LOREM_PICSUM);
    const data = await res.json();
    setter(data);
  } catch (error) {
    console.log(error);
  }
};