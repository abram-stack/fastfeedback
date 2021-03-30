import { getUserSites } from "@/lib/db-admin"
import { auth } from "@/lib/firebase-admin";

export default async (req, res) => {
  try {
    const {uid }= await auth.verifyIdToken(req.headers.token);
    const sites = await getUserSites(uid);

    res.status(200).json(sites );
  } catch (error) {
    res.status(500).json({error})
    // return res.status(500).end();
  }
  
}


// after a successful sign-in, send the user's ID token to your server using HTTPS. Then, on the server, verify the integrity and authenticity of the ID token and retrieve the uid from it. You can use the uid transmitted in this way to securely identify the currently signed-in user on your server.