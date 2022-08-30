export const formatNameBook = (name) => {
	return name
		?.split(" ")
		?.map((x) => {
			return `${x[0].toUpperCase()}${x.slice(1).toLowerCase()}`;
		})
		?.join(" ");
};
