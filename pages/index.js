import Author from "../components/Author/Author";
import CreateAuthor from "../components/Author/CreateAuthor";
import DeleteAuthor from "../components/Author/DeleteAuthor";
import AddBook from "../components/Book/AddBook";
import Book from "../components/Book/Book";

export default function Home() {
	return (
		<div>
			<div className="flex py-2 px-2 bg-black text-white ">
				<div className="min-w-[250px] border-r-2 border-gray-900">
					<Author />
				</div>

				<Book />
			</div>

			<div className="bg-green-600 flex items-center	 ">
				<h1 className="text-6xl px-1 py-2 w-[1000px]">
					ADD MORE AUTHOR:{" "}
				</h1>
				<CreateAuthor />
			</div>

			<div className="bg-green-600 flex items-center	 ">
				<h1 className="text-6xl py-2 w-[1000px]">
					DELETE AUTHOR:{" "}
				</h1>
				<DeleteAuthor />
			</div>

			<div className="bg-green-600 flex items-center	 ">
				<h1 className="text-6xl py-2 w-[1000px]">
					ADD MORE BOOK:{" "}
				</h1>
				<AddBook />
			</div>

			<figure className=" fixed right-10 top-10">
				<img className="w-[450px] bg-cover" src="./star.png" />
			</figure>
		</div>
	);
}
