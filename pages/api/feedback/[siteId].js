import { getAllFeedback } from "@/lib/db-admin";

export default async (req, res) => {
  const siteId = req.query.siteId;
  const { feedback, error } = await getAllFeedback(siteId);
  if (error)
    return res.status(500).json({ error: error}).end();
  
  res.status(200).json(feedback);
}
