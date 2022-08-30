const { gql } = require("@apollo/client");

export const getAllBook = gql`
	query get_all_book {
		books {
			id
			name
			description
		}
	}
`;

export const getAllAuthor = gql`
	query get_all_author {
		authors {
			id
			name
			books {
				id
				name
				description
			}
		}
	}
`;

export const createAuthor = gql`
	mutation create_author($name: String!) {
		create_author(name: $name) {
			id
			name
			__typename
		}
	}
`;

export const deleteAuthorById = gql`
	mutation delete($id: String!) {
		delete_author_by_id(id: $id) {
			id
			name
			__typename
		}
	}
`;

export const createBook = gql`
	mutation create_book($name: String!, $authorId: ID!) {
		create_book(name: $name, authorId: $authorId) {
			id
			name
			description
		}
	}
`;
