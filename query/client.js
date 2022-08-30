const {
	ApolloClient,
	InMemoryCache,
} = require("@apollo/client");

export const client = new ApolloClient({
	uri: "https://graphqlserverappp.herokuapp.com/graphql",
	cache: new InMemoryCache(),
});
