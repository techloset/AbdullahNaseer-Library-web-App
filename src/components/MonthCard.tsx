import React from "react";
import { Book } from "../types/types";

interface CardProps {
  book: Book;
}

const defaultBook: Book = {
  id: "",
  volumeInfo: {
    title: "Title Not Available",
    authors: ["Authors Not Available"],
    publishedDate: "Published Date Not Available",
    pageCount: 0,
    printType: "Print Type Not Available",
    maturityRating: "Maturity Rating Not Available",
    imageLinks: {
      smallThumbnail: "fallback-image-url",
      thumbnail: "fallback-image-url",
    },
  },
};
const trimText = (text: string, wordCount: number): string => {
  const words = text.split(" ");
  if (words.length > wordCount) {
    return words.slice(0, wordCount).join(" ") + "...";
  }
  return text;
};

const MonthCard: React.FC<CardProps> = ({ book }) => {
  const mergedBook = { ...defaultBook, ...book };
  const { title, maturityRating, imageLinks } = mergedBook.volumeInfo!;
  const trimmedTitle = trimText(title || "", 2);

  return (
    <div className="flex justify-between">
      <div className="w-[95px] h-[141px] md:w-[119px] md:h-[177px] bg-slate-200 border-1 rounded-sm relative">
        <img
          className="absolute inset-0 w-full h-full object-cover"
          src={imageLinks?.thumbnail}
          alt="picture"
        />
      </div>
      <div className="text-start w-[103px] h-[48px] md:w-[165px] md:h-[64px] ml-6">
        <p className="text-lg md:text-2xl font-bold italic text-customTextColour md:mb-2">
          {trimmedTitle}
        </p>
        <p className="text-linkColour italic text-sm md:text-lg mt-3 md:mt-6 font-bold">{`$${
          maturityRating ? "Not For Sale" : "Price Not Available"
        }`}</p>
        <button className="bg-customTextColour text-white text-sm px-4 py-2 mt-5 md:mt-10 w-[101px] h-9 rounded-full">
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default MonthCard;
