import "bootstrap/dist/css/bootstrap.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import App from "./App";
import "./index.css";

const queryClient = new QueryClient({
	// Remote this if it's not needed
	defaultOptions: {
		queries: {
			retry: 3,
			cacheTime: 300_000, // 5m
			staleTime: 0, //Data Valide Time
			keepPreviousData: true,

			// refetchOnWindowFocus: false,
			// refetchOnReconnect: false,
			// refetchOnMount: false,
		},
	},
});

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<QueryClientProvider client={queryClient}>
			<App />
			<ReactQueryDevtools />
		</QueryClientProvider>
	</React.StrictMode>
);
