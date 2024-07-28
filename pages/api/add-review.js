import { sql } from "@vercel/postgres";

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const data = req.body;
      const rating = parseInt(data.rating, 10);
      if (!data.name || !data.review) {
        res.status(400).json({ error: "Name and comment are required" });
        return;
      }

      await sql`INSERT INTO review (name, review, rating) VALUES (${data.name}, ${data.review}, ${rating})`;

      res.status(200).json({ message: "Review added successfully" });
    } catch (error) {
      res.status(500).json({ error: "Internal server error" });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
