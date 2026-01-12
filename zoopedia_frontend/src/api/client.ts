// API client setup
const API_BASE_URL = 'http://localhost:3000/api';

export const apiClient = {
  get: (endpoint: string) => fetch(`${API_BASE_URL}${endpoint}`).then(res => res.json()),
  post: (endpoint: string, data: any) => fetch(`${API_BASE_URL}${endpoint}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  }).then(res => res.json()),
  // Add more methods as needed
};