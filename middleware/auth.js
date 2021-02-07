export default function({ store, redirect }) {
  const auth = store.getters['auth/getAuth']

  if (auth) {
    return true
  }

  return redirect('/login')
}
