
import elementPlusComponents from "./elementPlusComponents";
import elementPlusIcon from "./elementPlusIcon";
import {type App} from "vue";
 
export default{
    install:(app:App) => {
       app.use(elementPlusComponents)
       app.use(elementPlusIcon)
    }
}