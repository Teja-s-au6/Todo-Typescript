import axios from "axios";
import Reminder from "../models/reminder";

class ReminderService {
    http = axios.create({
        baseURL: "https://jsonplaceholder.typicode.com/",
    })

    async getReminders() {
       const reponse = await this.http.get<Reminder[]>('/todos');
       return reponse.data;
    }

   async addReminder(title:string) {
        const reponse = await this.http.post<Reminder>('/todos', {title});
        return reponse.data; 
   }

   async removeReminder(id:number) {
        const reponse = await this.http.delete('/todos/' + id);
        return reponse.data; 
   }
}

export default new ReminderService();