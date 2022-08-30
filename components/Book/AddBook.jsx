import { useMutation } from "@apollo/client";
import { useRef } from "react";
import { useRecoilValue } from "recoil";
import { formatNameBook } from "../../format/formatNameBook";
import {
	createBook,
	getAllAuthor,
	getAllBook,
} from "../../query/query";
import { AuthorState } from "../../Recoil/AuthorState";

const AddBook = () => {
	// const inputElement = useRef();
	const [addBook, { data, loading, error }] =
		useMutation(createBook);
	const inputElement_1 = useRef();

	const authorList = useRecoilValue(AuthorState);
	const handleSubmit = (e) => {
		e.preventDefault();

		let authorName = e.target[0].value;
		let bookName = e.target[1].value;

		const authorExpected = authorList.find(
			(author) =>
				author.name.toLowerCase() === authorName.toLowerCase()
		);

		const isExitBook = authorExpected?.books?.some(
			(book) => book.name.toLowerCase() === bookName.toLowerCase()
		);
		console.log("authorExpected: ", authorExpected);
		console.log("isExitBook: ", isExitBook);

		if (authorExpected && !isExitBook) {
			addBook({
				variables: {
					name: formatNameBook(bookName),
					authorId: authorExpected.id,
				},
				refetchQueries: [
					{ query: getAllBook },
					{ query: getAllAuthor },
				],
			});
			e.target[0].value = "";
			e.target[1].value = "";
		} else {
			inputElement_1.current.value =
				"Tên nhà văn không có trong database vui lòng thêm vào";
		}
	};

	return (
		<form
			className="w-[100%] flex"
			onSubmit={(e) => handleSubmit(e)}
		>
			<input
				placeholder="AUTHOR'S NAME"
				className="w-[100%] border-none shrink outline-none m-1 text-5xl bg-transparent"
				ref={inputElement_1}
			/>

			<input
				placeholder="BOOK'S NAME"
				className="w-[100%] border-none shrink outline-none m-1 text-5xl bg-transparent "
			/>
			<button className="hidden">submit</button>
		</form>
	);
};

export default AddBook;
