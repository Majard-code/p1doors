export const addComments = store => {
    const newComments = { ...store.state.comments};
    newComments.comment1++;
    if ((newComments.comment1 % 5) === 0) {
        newComments.comment2++;
    }
    store.setState({comments: newComments});
}