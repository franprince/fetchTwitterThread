var myHeaders = new Headers();
myHeaders.append("Authorization", `Bearer ${process.env.BEARER_TOKEN}`);
myHeaders.append(
  "Cookie",
  'personalization_id="v1_tQGLS4PizJijEEVjHy5yeA=="; guest_id=v1%3A160667036443436691'
);

var requestOptions = {
  method: "GET",
  headers: myHeaders,
  redirect: "follow",
};

export const getUserInfo = async (userId) => {
  const res = await fetch(
    `https://api.twitter.com/2/users?ids=${userId}&user.fields=profile_image_url`,
    requestOptions
  );
  const data = await res.json();
  try {
    return data;
  } catch (err) {
    console.error("error", err);
  }
};

export const getTweets = async () => {
  const res = await fetch(
    "https://api.twitter.com/2/tweets/search/recent?tweet.fields=author_id,created_at,conversation_id,entities&query=conversation_id:1333077387114897410&expansions=attachments.media_keys&media.fields=duration_ms,height,media_key,preview_image_url,public_metrics,type,url,width&max_results=100",
    requestOptions
  );
  const data = await res.json();
  try {
    return data;
  } catch (err) {
    console.error("error", error);
  }
};

export const getData = async () => {
  const tweetData = await getTweets();
  const userId = tweetData.data.map((a) => Number(a.author_id));
  const userData = await getUserInfo(userId);
  try {
    return { tweetData, userData };
  } catch (err) {
    console.error("error", err);
  }
};
