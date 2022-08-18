export enum NotificationType {
    SUCCESS,
    FAIL,
    WARNING
}

export interface INotification {
    id: number,
    text: string
    type: NotificationType
}