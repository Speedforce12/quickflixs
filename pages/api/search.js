import movieDB from "@/lib/axios";

export default async function handler(req, res) {
  const { method } = req;
  if (method === "GET") {
    try {
      const { q: query } = req.query;

      const response = await movieDB.get(
        `search/multi?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US&&query=${query}&include_adult=false`
      );
      const media = await response.data;

      if (media) {
        return res.status(200).json(media);
      }
      return res.status(404).json({ error: "NO Data Found" });
    } catch (error) {
      return res.status(500).json({ error: "Internal Server Error" });
    }
  } else {
    return res.status(400).json({ error: `${method} Method not Allowed` });
  }
}
