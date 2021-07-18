import firebase from '../firebase/config'
const auth = firebase.auth();

async function fetchFromAPI(url: string,) {

  try {
    const user = auth.currentUser;
    const token = user && (await user.getIdToken());

    const res = await fetch(url, {
      method: "GET",
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });
    return res.json();

  } catch (err) {
    throw new Error(err);
    
  }


}

export default fetchFromAPI