import { collection, doc, getDocs } from "firebase/firestore";
import { itemsDb } from "../../components/Firebase";
const GetItems=(GiveItems)=>{
return (dispach)=>{
    dispach({
        type:'sendItems',
        payload:GiveItems,
    })
}
}
export default GetItems;