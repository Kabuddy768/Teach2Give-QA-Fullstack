var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// Function to fetch books with optional query parameters
export const fetchBooks = (...args_1) => __awaiter(void 0, [...args_1], void 0, function* (queryParams = "") {
    try {
        const response = yield fetch(`http://localhost:3000/api/books${queryParams}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        });
        if (!response.ok) {
            throw new Error("Failed to fetch books");
        }
        return yield response.json(); // Return the books data
    }
    catch (error) {
        console.error("Error fetching books:", error);
        return []; // Return empty array if fetch fails
    }
});
//# sourceMappingURL=events.js.map