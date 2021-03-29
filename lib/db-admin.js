// helper function that we can call from the api
import firebase from './firebase-admin'


// get all feedback from specific site
export async function getAllFeedback(siteId) {
  try {
    const snapshot = await firebase
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
    const snapshot = await firebase.collection('sites').get();
    const sites = [];

    snapshot.forEach((doc) => {
      sites.push({ id: doc.id, ...doc.data() });
    })

    return { sites };
    
  } catch (error) {
    return {error}
  }
  
}


