import { useMutation } from "@apollo/client";
import {
	createAuthor,
	getAllAuthor,
} from "../../query/query";
import { useRecoilState } from "recoil";
import { AuthorState } from "../../Recoil/AuthorState";
import { useRef, useState } from "react";
import { formatNameBook } from "../../format/formatNameBook";

const CreateAuthor = () => {
	const [addAuthor, { data, error, loading }] =
		useMutation(createAuthor);
	const [authors, setAuthors] = useRecoilState(AuthorState);

	const inputElement = useRef();

	const handleSubmit = (e) => {
		e.preventDefault();

		const isExit = authors.some(
			(author) =>
				author.name.toLowerCase() ===
					e.target[0].value.toLowerCase() ||
				e.target[0].value === "Tác Giả Đã Tồn Tại"
		);

		if (isExit)
			inputElement.current.value = "Tác Giả Đã Tồn Tại";
		else {
			addAuthor({
				variables: { name: formatNameBook(e.target[0].value) },
				refetchQueries: [{ query: getAllAuthor }],
			});
			inputElement.current.value = "";
		}
	};

	return (
		<form
			className="w-[100%]"
			onSubmit={(e) => handleSubmit(e)}
		>
			<input
				placeholder="AUTHOR'S NAME"
				ref={inputElement}
				className="w-[600px] border-none outline-none m-1 text-5xl bg-transparent "
			/>
		</form>
	);
};

export default CreateAuthor;
