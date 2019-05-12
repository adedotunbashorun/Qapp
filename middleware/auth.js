export default function ({ store, redirect }) {
    if (store.state.auth.token == '' || typeof store.state.auth.token == 'undefined') {
        return redirect('/')
    }
}