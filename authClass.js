import { app } from "./firebase";
import { 
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import QueryingClass from "./queryingclass";
const auth = getAuth(app);

class Auth {
  register(form){
    return new Promise(async(resolve, reject) => {
      try {
        
        
        const user = await createUserWithEmailAndPassword(
          auth,
          form.email,
          form.password
        )
        
        await QueryingClass.addData("client", {
          id:user.user.uid,
          email: form.email,
          name: form.name,
        })

        await this.login({email: form.email, password: form.password});
        resolve();
      } catch (e) {
        console.log(e)
        reject("Su solicitud no puede ser realizada en este momento, intentelo mas tarde")
      }
    });
  }

  login(credentials){
    return new Promise(async (resolve, reject) => {
      try {
        await signInWithEmailAndPassword(auth, credentials.email, credentials.password);
        resolve();
      } catch (e) {
        reject(e.code)
      }
    })
  }

  getCurrentUser(){
    return auth.currentUser;
  }
}

const AuthClass = new Auth()

export default AuthClass;
