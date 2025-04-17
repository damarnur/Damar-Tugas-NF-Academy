import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import BookHero from "../components/books/BookHero";
import BookList from "../components/books/BookList";
import BookFilter from "../components/books/BookFilter";
import BookSearch from "../components/books/BookSearch";
// import { booksData } from "../data/books";
import books from "../Utils/books.js";

export default function BookPage() {
  const [filteredBooks, setFilteredBooks] = useState(books);
  const [categories, setCategories] = useState([]);
  const [activeCategory, setActiveCategory] = useState("All");
  const [viewMode, setViewMode] = useState("grid");
  const [searchParams, setSearchParams] = useSearchParams();
  const [currentPage, setCurrentPage] = useState(1);
  const booksPerPage = 9;

  // Extract unique categories from books
  useEffect(() => {
    const allCategories = [
      "All",
      ...new Set(books.map((book) => book.year.toString())),
    ];
    setCategories(allCategories);

    // Check URL params for initial state
    const categoryParam = searchParams.get("category");
    const searchParam = searchParams.get("search");
    const pageParam = searchParams.get("page");
    const viewParam = searchParams.get("view");

    if (categoryParam) setActiveCategory(categoryParam);
    if (pageParam) setCurrentPage(parseInt(pageParam));
    if (viewParam) setViewMode(viewParam);

    // Apply initial filters if present in URL
    applyFilters(categoryParam || "All", searchParam || "");
  }, []);

  // Apply filters based on category and search
  const applyFilters = (category, searchQuery = "") => {
    let filtered = [...books];

    // Filter by category (using year as category)
    if (category && category !== "All") {
      filtered = filtered.filter((book) => book.year.toString() === category);
    }

    // Filter by search term
    if (searchQuery.trim() !== "") {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(
        (book) =>
          book.title.toLowerCase().includes(query) ||
          book.author.toLowerCase().includes(query) ||
          book.description.toLowerCase().includes(query)
      );
    }

    setFilteredBooks(filtered);
  };

  // Handle category change
  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    setCurrentPage(1);
    applyFilters(category, searchParams.get("search") || "");

    // Update URL params
    const params = new URLSearchParams(searchParams);
    params.set("category", category);
    params.set("page", "1");
    setSearchParams(params);
  };

  // Handle search
  const handleSearch = (query) => {
    setCurrentPage(1);
    applyFilters(activeCategory, query);

    // Update URL params
    const params = new URLSearchParams(searchParams);
    if (query) params.set("search", query);
    else params.delete("search");
    params.set("page", "1");
    setSearchParams(params);
  };

  // Handle view mode change
  const handleViewModeChange = (mode) => {
    setViewMode(mode);

    // Update URL params
    const params = new URLSearchParams(searchParams);
    params.set("view", mode);
    setSearchParams(params);
  };

  // Handle pagination
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);

    // Update URL params
    const params = new URLSearchParams(searchParams);
    params.set("page", pageNumber.toString());
    setSearchParams(params);

    // Scroll to top
    window.scrollTo(0, 0);
  };

  // Calculate pagination
  const indexOfLastBook = currentPage * booksPerPage;
  const indexOfFirstBook = indexOfLastBook - booksPerPage;
  const currentBooks = filteredBooks.slice(indexOfFirstBook, indexOfLastBook);
  const totalPages = Math.ceil(filteredBooks.length / booksPerPage);

  return (
    <div>
      <BookHero />

      <section className="py-5">
        <div className="container">
          <div className="row mb-5">
            <div className="col-lg-3 col-md-4 mb-4 mb-md-0">
              <BookFilter
                categories={categories}
                activeCategory={activeCategory}
                onCategoryChange={handleCategoryChange}
              />
            </div>

            <div className="col-lg-9 col-md-8">
              <BookSearch
                onSearch={handleSearch}
                viewMode={viewMode}
                onViewModeChange={handleViewModeChange}
                totalBooks={filteredBooks.length}
              />

              <BookList
                books={currentBooks}
                viewMode={viewMode}
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={handlePageChange}
                totalBooks={filteredBooks.length}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
