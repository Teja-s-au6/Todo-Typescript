import { useEffect, useState } from 'react';
import './App.css';
import NewReminder from './Components/NewReminder';
import ReminderList from './Components/ReminderList';
import Reminder from './models/reminder';
import reminderService from './services/reminder';

 function App() {

  const [reminders, setReminders] = useState<Reminder[]>([]);

  useEffect(() => {
    loadReminders();
  }, []);

  const loadReminders = async () => {
    const reminders = await reminderService.getReminders();
    setReminders(reminders)
  }

  const handleDelete = (id: number) => {
    setReminders(reminders.filter(reminder => reminder.id !== id))
  }

  const handleAddReminder = async (title: string) => {
    const newReminders = await reminderService.addReminder(title);
    setReminders([newReminders, ...reminders])
  }
 
  return (
    <div className="App">
      <NewReminder handleAddReminder={handleAddReminder} />
      <ReminderList items={reminders} handleDelete={handleDelete} />
    </div>
  );
}

export default App;
