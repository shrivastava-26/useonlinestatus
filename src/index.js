import { useEffect,useState } from "react"

let useOnlineStatus = () => {
   
    let [status, setStatus] = useState(true)


    useEffect(()=>{

         let handleOffline = () => {
           setStatus(false);
         };

         let handleOnline = () => {
           setStatus(true);
         };

        window.addEventListener("online", handleOnline)
        window.addEventListener("offline", handleOffline)

       

        return ()=> {
            window.removeEventListener("online", handleOnline);
            window.removeEventListener("offline", handleOffline);
        }

    },[])

    return status

}

export default useOnlineStatus;