import IProject from "@/interfaces/IProject";
import { createStore, Store, useStore as vueUseStore } from "vuex";
import { InjectionKey } from 'vue'
import { ADD_PROJECT, DELETE_PROJECT, NOTIFY, UPDATE_PROJECT } from "./mutation-types";
import { INotification, NotificationType } from "@/interfaces/INotification";

interface State {
    projects : IProject[],
    notifications : INotification[],
}

export const key: InjectionKey<Store<State>> = Symbol();

export const store = createStore<State>({
    state: {
        projects: [],
        notifications: [],
    },
    mutations: {
        [ADD_PROJECT](state, projectName: string) {
            const project = {
                //id: new Date().toISOString(),
                id: generateID(),
                name: projectName
            } as IProject
            state.projects.push(project)
        },
        [UPDATE_PROJECT](state, updated: IProject) {
            const index = state.projects.findIndex(proj => proj.id == updated.id)
            state.projects[index] = updated
        },
        [DELETE_PROJECT](state, id: string) {
            state.projects = state.projects.filter(proj => proj.id != id)
        },
        [NOTIFY](state, notification: INotification) {
            notification.id = new Date().getTime()
            state.notifications.push(notification)

            setTimeout(() => {
                state.notifications = state.notifications.filter(n => n.id != notification.id)
            }, 3000)            
        },
    }
})

let countId = 0;

function generateID(): string {
    countId++
    return countId.toString()
}

export function useStore(): Store<State> {
    return vueUseStore(key);
}