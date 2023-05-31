import { useQuery } from "@tanstack/react-query";
import axios from "axios";

interface Post {
	id: number;
	title: string;
	body: string;
	userId: number;
}

function usePosts() {
	const fetchPosts = () =>
		axios
			.get<Post[]>("https://jsonplaceholder.typicode.com/posts")
			.then((res) => res.data);

	return useQuery<Post[], Error>({
		queryKey: ["post"],
		queryFn: fetchPosts,
		staleTime: 1 * 60 * 1000,
	});
}

export default usePosts;