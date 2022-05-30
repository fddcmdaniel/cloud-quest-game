export const fetchWrapper = async (endpoint: string, options: RequestInit, customErrorMessage?: string) => {
  const requestOptions = {
    ...options,
    headers: {
      ...options.headers,
      'Content-Type': 'application/json'
    }
  };
  const response = await fetch(`http://18.132.17.29:443${endpoint}`, requestOptions);

  const { ok, url, statusText } = response;
  const data = await response.json();

  if (!ok) {
    const errorMessage = customErrorMessage ?? `${JSON.stringify(data.message)}`;

    console.log(errorMessage)
    throw new Error(errorMessage);
  }

  return data;
};