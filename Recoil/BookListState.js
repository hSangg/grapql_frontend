import { atom } from "recoil";

export const bookListState = atom({
	key: "BookList",
	default: ["choose the author"],
});

export const libraryBook = atom({
	key: "libraryBook",
	default: [],
});
