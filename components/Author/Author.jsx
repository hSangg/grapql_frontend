import { useQuery } from "@apollo/client";
import { useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { getAllAuthor } from "../../query/query";
import { AuthorState } from "../../Recoil/AuthorState";
import {
	bookListState,
	libraryBook,
} from "../../Recoil/BookListState";
import InforItem from "../InforItem";

const Author = () => {
	const { loading, error, data } = useQuery(getAllAuthor);

	const [authors, setAuthors] = useRecoilState(AuthorState);
	if (!loading) setAuthors(data?.authors);

	const allBook = useRecoilValue(libraryBook);
	const [authorId, setAuthorId] = useState();

	const [bookList, setBookList] =
		useRecoilState(bookListState);

	return (
		<div className=" ml-10">
			<h1 className="text-5xl mt-10">Author</h1>
			<ul className="mt-20">
				{authors.map((author) => (
					<li
						key={author.id}
						className={`${
							author.id === authorId ? "text-green-600" : "text-white"
						} cursor-pointer transition-all`}
						onClick={() => {
							setBookList(author.books);
							setAuthorId(author.id);
						}}
					>
						<InforItem name={author.name} />
					</li>
				))}
			</ul>
			<button
				onClick={() => {
					setBookList(allBook);
					setAuthorId("");
				}}
				className="font-bold mt-2 pt-2 border-t-2 border-indigo-500"
			>
				Tất Cả Sách
			</button>
		</div>
	);
};

export default Author;
