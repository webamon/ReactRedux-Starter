export function selectUser(user){
    console.log('------------')
    console.log('selected aaa :',user)
    console.log('------------')

    return{
        type: USER_SELECTED,
        payload: user
    }
}