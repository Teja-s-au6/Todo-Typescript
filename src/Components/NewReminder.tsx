import React, { useState } from 'react'


interface FormReminderProps {
    handleAddReminder: (title: string) => void;
  }

function NewReminder({handleAddReminder}: FormReminderProps): JSX.Element {
   const [title, setTitle] = useState('');

    const submitForm = (e: React.FormEvent) => {
        e.preventDefault();
        if(!title) return;
        handleAddReminder(title);
        setTitle('');
    }

  return (
    <form onSubmit={submitForm}>
        <label htmlFor="">Add Reminder</label>
        <input id='title' type="text"  value={title} 
        onChange={(e) => setTitle(e.target.value) } className="form-control" />
        <button type='submit' className="btn btn-primary rounded-pill my-3">Add Reminder</button>
    </form>
  )
}

export default NewReminder;