import type { APIRoute } from "astro";
import type { CollectionEntry } from "astro:content";
import { getCollection } from "astro:content";

export const GET: APIRoute = async ({ url }): Promise<Response> => {
  const query: string | null = url.searchParams.get("query");

  // Handle if query is not present
  if (query === null) {
    return new Response(
      JSON.stringify({
        error: "Query param is missing",
      }),
      {
        status: 400, // Bad request
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }

  const allThemes: CollectionEntry<"blog">[] = await getCollection("blog");

  // Filter themes based on query
  const searchResults = allThemes.filter((theme) => {
    const titleMatch: boolean = theme.data.title
      .toLowerCase()
      .includes(query!.toLowerCase());

    const bodyMatch: boolean = theme.body
      .toLowerCase()
      .includes(query!.toLowerCase());

    const summaryMatch: boolean = theme.data.summary
      .toLowerCase()
      .includes(query!.toLowerCase());

    return titleMatch || bodyMatch || summaryMatch;
  });

  return new Response(JSON.stringify(searchResults), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
};
