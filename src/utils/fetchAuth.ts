import firebase from '../firebase/config'
const auth = firebase.auth();

async function fetchFromAPI(url: string) {

  const user = auth.currentUser;
  const token = user && (await user.getIdToken());

  const res = await fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  });

  return res.json();
}

export default fetchFromAPI