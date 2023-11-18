import { MOVIES_API_URL } from 'utils/constants';

// Refactored makeRequest function with async/await
async function makeRequest(url, method) {
  try {
    const options = {
      method,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    };

    const response = await fetch(`${MOVIES_API_URL}/${url}`, options);

    if (!response.ok) {
      throw new Error(`Ошибка: ${response.status}`);
    }

    return response.json();
  } catch (error) {
    throw error;
  }
}

// Function to get all movies using makeRequest
export async function getAllMovies() {
  try {
    return await makeRequest('beatfilm-movies', 'GET');
  } catch (error) {
    throw error;
  }
}
