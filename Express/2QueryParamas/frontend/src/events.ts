// front-end/src/events.ts
export const fetchBooks = async (queryParams: string = "") => {
  try {
    // Ensure queryParams starts with "?" if not empty
    const url = queryParams.startsWith('?') 
      ? `http://localhost:3000/api/books${queryParams}` 
      : `http://localhost:3000/api/books`;

    console.log("Fetching from URL:", url); // Add logging for debugging

    const response = await fetch(`http://localhost:3000/api/books${queryParams}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    });

    console.log("Response status:", response.status); // Add logging

    if (!response.ok) {
      const errorText = await response.text();
      console.error("Error response:", errorText);
      throw new Error("Failed to fetch books");
    }

    const books = await response.json();
    console.log("Fetched books:", books); // Add logging
    return books;
  } catch (error) {
    console.error("Error fetching books:", error);
    return []; // Return empty array if fetch fails
  }
};