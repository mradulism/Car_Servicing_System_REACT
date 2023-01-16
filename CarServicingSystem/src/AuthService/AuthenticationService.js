const AuthenticationService={

    // Authentication service is responsible to set user details to session storage


    login:function(userList,username,password,uid){
        console.log("Auth Called")
        let isSuccess =false;
        userList.forEach((user) => {
            console.log(user.email == username
                && user.password == password,user,username,password)
       
            if(user.email == username
                && user.password == password && user.uid == uid){
                    //alert(user.id,user)
                    console.log("user",user);
                    //console.log('inside if')
                    sessionStorage.setItem("authenticatedUserId",user.id);
                    sessionStorage.setItem("authenticatedUsername",user.email);
                    sessionStorage.setItem("authenticatedFirstName",user.name);
                    //sessionStorage.setItem("userRole",user.role)
                    isSuccess=true;
                    //return true;
            }
        });
        //console.log('outside loop above return false')
        return isSuccess;
        //return false;
    },

    logout:function(){
        sessionStorage.setItem('authenticatedUserId','');
        sessionStorage.setItem('authenticatedUsername','');
        sessionStorage.setItem('authenticatedFirstName','');
        sessionStorage.setItem('userRole','');
    },
    isLoggedIn:function(){
        let user = sessionStorage.getItem('authenticatedUserId');
        //console.log({user},"asdasdasd")
        if(user){
            return true;
        }else{
            return false;
        }
    }
}
export default AuthenticationService;   