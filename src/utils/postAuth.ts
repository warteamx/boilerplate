import firebase from '../firebase/config'
const auth = firebase.auth();

async function postAPI(url: string, body?: string) {

  try {
    const user = auth.currentUser;
    const token = user && (await user.getIdToken());

    const res = await fetch(url, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({id: body})
    });
    return res.json();

  } catch (err) {
    throw new Error(err);
    
  }


}

export default postAPI