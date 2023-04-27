export interface Category {
  id: number;
  name: string;
}

export interface TriviaCategoryResponse {
  trivia_categories: Category[];
}