export default function ({app, redirect}){
    if (app.$apolloHelper.getToken()) {
        return true;
    } else {
        redirect('/login')
    }
}