import { getAllSites } from "@/lib/db-admin"

export default async (req, res) => {
  const { sites, error } = await getAllSites();
  
  if (error)
    return res.status(500).end();
  
  res.status(200).json({ sites });
}
