const backend = process.env.NEXT_PUBLIC_BACKEND_SERVER

export async function fetchHeadlineData(index, language) {
    const response = await fetch(`${backend}getSplash`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ language, k: index }),
    });
    if (response.ok) {
      return response.json();
    } else {
      throw new Error('Failed to fetch headline data');
    }
}
export async function fetchParams() {
  const response = await fetch(`${backend}getParams`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  if (response.ok) {
    return response.json();
  } else {
    throw new Error('Failed to fetch headline data');
  }
}