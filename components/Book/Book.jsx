import { useQuery } from "@apollo/client";
import { useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { formatNameBook } from "../../format/formatNameBook";
import { getAllBook } from "../../query/query";
import {
	bookListState,
	libraryBook,
} from "../../Recoil/BookListState";
import InforItem from "../InforItem";

const Book = () => {
	const { loading, error, data } = useQuery(getAllBook);
	const [allBook, setAllBook] = useRecoilState(libraryBook);
	const book = useRecoilValue(bookListState);
	const [bookClick, setBookClicked] = useState("");
	if (!error) setAllBook(data?.books);
	return (
		<div className="flex gap-5 pl-2">
			<div className="w-[1280px]">
				<h1 className="font-bold mb-20 mt-10 text-5xl">Book</h1>
				<ul className="flex flex-wrap gap-5">
					{book.map((book) => (
						<li
							className={`list-none cursor-pointer max-w-[50%] ${
								book.id == bookClick.id ? "text-green-600" : ""
							}`}
							key={book.id}
							onClick={() => {
								setBookClicked(book);
							}}
						>
							<InforItem name={formatNameBook(book.name)} />
						</li>
					))}
				</ul>
			</div>

			<div className="mt-60">
				<div>
					<p className="mb-2">{bookClick?.description}</p>
					<div className="w-[80%] h-[2px] bg-indigo-600 ml-[auto]"></div>
				</div>
			</div>
		</div>
	);
};

export default Book;
