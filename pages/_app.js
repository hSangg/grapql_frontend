import { ApolloProvider } from "@apollo/client";
import { RecoilRoot } from "recoil";
import { client } from "../query/client";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
	return (
		<RecoilRoot>
			<ApolloProvider client={client}>
				<Component {...pageProps} />
			</ApolloProvider>
		</RecoilRoot>
	);
}

export default MyApp;
