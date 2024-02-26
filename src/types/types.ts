export interface Book {
  id: string;
  volumeInfo?: {
    title?: string;
    subtitle?: string;
    description?: string;
    previewLink?: string;
    authors?: string[];
    publishedDate?: string;
    pageCount?: number;
    printType?: string;
    maturityRating?: string;
    imageLinks?: {
      smallThumbnail?: string;
      thumbnail?: string;
    };
  };
}

export interface FetchBookDetailsParams {
  id: string;
}

export interface BookDetailsState {
  isLoading: boolean;
  data: Book | null;
  isError: boolean;
}

export interface BooksResponse {
  kind: string;
  totalItems: number;
  items: Book[];
}

export interface FetchBooksParams {
  startIndex: number;
  maxResults: number;
}

export interface BooksState {
  isLoading: boolean;
  data: BooksResponse | null;
  isError: boolean;
}

export interface FetchMonthBooksParams {
  startIndex: number;
  maxResults: number;
}

export interface MonthState {
  isLoading: boolean;
  data: Book[] | null;
  isError: boolean;
}

export interface SearchBooksParams {
  query: string;
  startIndex: number;
  maxResults: number;
}

export interface BooksResponse {
  kind: string;
  totalItems: number;
  items: Book[];
}

export interface SearchState {
  isLoading: boolean;
  data: BooksResponse | null;
  isError: boolean;
}
