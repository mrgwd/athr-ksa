const url = process.env.API_BASE_URL;

export async function getJobsList() {
  try {
    const res = await fetch(`https://new.athr-ksa.com/api/all-careers`, {
      method: "GET",
    });
    if (!res.ok) {
      throw new Error(`Server responded with status ${res.status}`);
    }
    const contentType = res.headers.get("content-type");
    if (!contentType || !contentType.includes("application/json")) {
      throw new TypeError("Oops, we haven't got JSON!");
    }
    const data = await res.json();
    return data.data;
  } catch (error) {
    console.error("Error fetching jobs list:", error);
    return [];
  }
}
