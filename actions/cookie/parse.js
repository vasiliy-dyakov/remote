export default (context, payload, done) => {
    context.dispatch('GET_USER_INFO', { anonymus: false });
    done();
}
