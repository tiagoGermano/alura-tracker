import IProject from "./IProject";

export default interface ITask {
    description : string,
    duration: number,
    project: IProject
}