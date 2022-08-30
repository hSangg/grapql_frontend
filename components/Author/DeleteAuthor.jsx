import { useMutation } from "@apollo/client";
import { useRef } from "react";
import { useRecoilValue } from "recoil";
import {
	deleteAuthorById,
	getAllAuthor,
} from "../../query/query";
import { AuthorState } from "../../Recoil/AuthorState";

const DeleteAuthor = () => {
	const [deleteAuthor, { data, error, loading }] =
		useMutation(deleteAuthorById);
	const authorList = useRecoilValue(AuthorState);

	const inputElement = useRef();

	const handleSubmit = (e) => {
		e.preventDefault();
		const authorExpected = authorList.find(
			(author) =>
				author.name.toLowerCase() ===
				e.target[0].value.toLowerCase()
		);

		if (authorExpected) {
			console.log("deleted???");
			deleteAuthor({
				variables: { id: authorExpected.id },
				refetchQueries: [{ query: getAllAuthor }],
			});
			inputElement.current.value = "";
		} else {
			inputElement.current.value =
				"Tác Giả Không Tồn Tại Trong Database";
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
				className="w-[100%] border-none shrink outline-none m-1 text-5xl bg-transparent "
			/>
		</form>
	);
};

export default DeleteAuthor;
