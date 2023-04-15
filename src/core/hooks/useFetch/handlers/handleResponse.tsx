export default function handleResponse(response: Response) {
  return response.text().then((text: string) => {
    const data = parseJson(text);

    if (!response.ok) {
      // if ([401].includes(response.status)) destroySession()
      const error = (data && data.message) || response.statusText;
      return { error };
    }

    return { success: data };
  });
}

function parseJson(data: string) {
  try {
    return data && JSON.parse(data);
  } catch (error) {
    return false;
  }
}
