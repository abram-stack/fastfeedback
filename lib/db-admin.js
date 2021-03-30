// helper function that we can call from the api
import {db} from './firebase-admin'


// get all feedback from specific site
export async function getAllFeedback(siteId) {
  try {
    const snapshot = await db
      .collection("feedback")
      .where('siteId', '==', siteId)
      .orderBy("createdAt", "desc")
      .get();

  const feedback = [];
    
  snapshot.forEach((doc) => {
    feedback.push({ id: doc.id, ...doc.data() })
  })
    
    return { feedback };
  } catch (error) {
    return {error}
  }  
}


export async function getAllSites() {
  try {
    const snapshot = await db.collection('sites').get();
    const sites = [];

    snapshot.forEach((doc) => {
      sites.push({ id: doc.id, ...doc.data() });
    })

    return { sites };
    
  } catch (error) {
    return {error}
  }
  
}

export async function getUserSites(userId) {
    const snapshot = await db
      .collection('sites')
      .where('authorId', '==', userId)
      .get();
    
    const sites = [];

    snapshot.forEach((doc) => {
      sites.push({ id: doc.id, ...doc.data() });
    })

    return { sites };
  
}

