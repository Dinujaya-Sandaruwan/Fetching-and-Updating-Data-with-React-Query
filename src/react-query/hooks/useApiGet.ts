import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export interface Post {
	id: number;
	title: string;
	body: string;
	userId: number;
}

function useApiGet<T>(endpoint: string, query: Record<string, any> = {}) {
	const fetchData = () =>
		axios
			.get<T[]>(`https://jsonplaceholder.typicode.com/${endpoint}`, {
				params: query,
			})
			.then((res) => res.data);

	return useQuery<T[], Error>({
		queryKey: [endpoint, query.id],
		queryFn: fetchData,
		staleTime: 1 * 60 * 1000,
	});
}

export default useApiGet;
