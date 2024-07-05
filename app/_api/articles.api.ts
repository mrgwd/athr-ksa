const url = process.env.API_BASE_URL;

export async function getUserIp() {
  const res = await fetch("https://api.ipify.org?format=json");
  const data = await res.json();
  return data.ip;
}

const userIp = await getUserIp();

async function getArticles(endpoint: string) {
  const formData = new FormData();
  formData.append("ip_address", userIp);
  const res = await fetch(`${url}/api/${endpoint}`, {
    method: "POST",
    body: formData,
  });
  const data = await res.json();
  return data.data;
}

export async function getArabicArticles() {
  return await getArticles("all-artical-arabic");
}

export async function getEnglishArticles() {
  return await getArticles("all-artical-english");
}

export async function getArticlesCategories() {
  const res = await fetch(`${url}/api/all-category-english`, {
    method: "GET",
  });
  const data = await res.json();
  return data.data;
}
