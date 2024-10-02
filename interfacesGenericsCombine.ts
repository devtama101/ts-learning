interface User {
  name: string;
  // Add other properties as needed
}

interface ApiResponse<T> {
  data: T;
  status: number;
}

function fetchData<T>(url: string): Promise<ApiResponse<T>> {
  return fetch(url)
    .then((response) => response.json())
    .then((data) => ({ data, status: 200 }));
}

fetchData<User>("https://jsonplaceholder.typicode.com/users/1").then(
  (userResponse) => console.log(userResponse.data)
);
