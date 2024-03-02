class fetchData {
  url: string;
  baseUrl: string;

  constructor(url: string) {
    this.baseUrl = process.env.NEXT_PUBLIC_BASE_URL as string;
    this.url = this.baseUrl + url;
  }

  get = async () => {
    const response = await fetch(this.url);
    const data = await response.json();
    return data;
  };
}

export default function fetchApi(url: string, method: string) {
  const data = new fetchData(url);

  if (method.toLowerCase() === "get") {
    return data.get();
  }
}
