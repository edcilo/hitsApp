export default function({ store, redirect }) {
  const auth = store.getters['auth/getAuth']

  if (auth) {
    return redirect('/hits')
  }

  return true
}
