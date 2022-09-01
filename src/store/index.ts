import IProject from "@/interfaces/IProject";
import { createStore, Store, useStore as vueUseStore } from "vuex";
import { InjectionKey } from 'vue'
import { ADD_PROJECT, DEFINE_PROJECTS, DELETE_PROJECT, NOTIFY, UPDATE_PROJECT } from "./mutation-types";
import { INotification } from "@/interfaces/INotification";
import { GET_ALL_PROJECTS, SAVE_PROJECT } from "./actions-types";
import http from "@/http"

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
        [DEFINE_PROJECTS](state, projects: IProject[]) {
            state.projects = projects;
        },
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
    },
    actions: {
        [GET_ALL_PROJECTS] ({ commit }) {
            http.get('projects')
                .then(response => commit(DEFINE_PROJECTS, response.data));
        },
        [SAVE_PROJECT] (context, projectName: string) {
            return http.post('/projects', {
                name: projectName
            })
        },
        [UPDATE_PROJECT] (context, project :IProject) {
            return http.put(`/projects/${project.id}`, project)
        },
        [DELETE_PROJECT] ({commit}, id :string) {
            http.delete(`/projects/${id}`)
                .then(() => commit(DELETE_PROJECT, id))
        }        
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