import { NotificationType } from "@/interfaces/INotification";
import { store } from '@/store'
import { NOTIFY } from "@/store/mutation-types";

type Notificator = {
    message : {
        success: (text: string) => void
        fail: (text: string) => void
        warning: (text: string) => void
    }
}

export default () : Notificator => {

    const success = (text: string) : void => {
        store.commit(NOTIFY, {
            type : NotificationType.SUCCESS,
            text
        })
    }
    const fail = (text: string) : void => {
        store.commit(NOTIFY, {
            type : NotificationType.FAIL,
            text
        })
    }
    const warning = (text: string) : void => {
        store.commit(NOTIFY, {
            type : NotificationType.WARNING,
            text
        })
    }     

    return {
        message : {
            success,
            fail,
            warning
        }
    }

}