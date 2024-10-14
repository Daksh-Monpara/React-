import React, { useState } from 'react';
import { Card, CardHeader, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Pencil, Trash2 } from 'lucide-react';

const TodoApp = () => {
  const [tasks, setTasks] = useState([
    { id: 1, title: 'study', date: '2022-04-20', description: 'Learn JavaScript' },
    { id: 2, title: 'workout', date: '2022-04-28', description: 'Go to gym' }
  ]);
  const [newTask, setNewTask] = useState({ title: '', date: '', description: '' });

  const addTask = () => {
    if (newTask.title && newTask.date) {
      setTasks([...tasks, { ...newTask, id: Date.now() }]);
      setNewTask({ title: '', date: '', description: '' });
    }
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <h2 className="text-2xl font-bold">TODO App</h2>
      </CardHeader>
      <CardContent>
        <div className="space-y-2 mb-4">
          <Input
            placeholder="Add New Task"
            value={newTask.title}
            onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
          />
          <Input
            type="date"
            value={newTask.date}
            onChange={(e) => setNewTask({ ...newTask, date: e.target.value })}
          />
          <Input
            placeholder="Description"
            value={newTask.description}
            onChange={(e) => setNewTask({ ...newTask, description: e.target.value })}
          />
          <Button className="w-full" onClick={addTask}>Add New Task</Button>
        </div>
        <h3 className="text-xl font-semibold mb-2">Tasks</h3>
        <div className="space-y-2">
          {tasks.map(task => (
            <Card key={task.id} className="bg-green-50">
              <CardContent className="p-4">
                <h4 className="font-bold">{task.title}</h4>
                <p className="text-sm text-gray-500">{task.date}</p>
                <p>{task.description}</p>
                <div className="flex justify-end mt-2">
                  <Button variant="ghost" size="icon">
                    <Pencil className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="icon" onClick={() => deleteTask(task.id)}>
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default TodoApp;import React, { useState } from 'react';
import { Card, CardHeader, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Pencil, Trash2 } from 'lucide-react';

const TodoApp = () => {
  const [tasks, setTasks] = useState([
    { id: 1, title: 'study', date: '2022-04-20', description: 'Learn JavaScript' },
    { id: 2, title: 'workout', date: '2022-04-28', description: 'Go to gym' }
  ]);
  const [newTask, setNewTask] = useState({ title: '', date: '', description: '' });

  const addTask = () => {
    if (newTask.title && newTask.date) {
      setTasks([...tasks, { ...newTask, id: Date.now() }]);
      setNewTask({ title: '', date: '', description: '' });
    }
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <h2 className="text-2xl font-bold">TODO App</h2>
      </CardHeader>
      <CardContent>
        <div className="space-y-2 mb-4">
          <Input
            placeholder="Add New Task"
            value={newTask.title}
            onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
          />
          <Input
            type="date"
            value={newTask.date}
            onChange={(e) => setNewTask({ ...newTask, date: e.target.value })}
          />
          <Input
            placeholder="Description"
            value={newTask.description}
            onChange={(e) => setNewTask({ ...newTask, description: e.target.value })}
          />
          <Button className="w-full" onClick={addTask}>Add New Task</Button>
        </div>
        <h3 className="text-xl font-semibold mb-2">Tasks</h3>
        <div className="space-y-2">
          {tasks.map(task => (
            <Card key={task.id} className="bg-green-50">
              <CardContent className="p-4">
                <h4 className="font-bold">{task.title}</h4>
                <p className="text-sm text-gray-500">{task.date}</p>
                <p>{task.description}</p>
                <div className="flex justify-end mt-2">
                  <Button variant="ghost" size="icon">
                    <Pencil className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="icon" onClick={() => deleteTask(task.id)}>
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default TodoApp;import React, { useState } from 'react';
import { Card, CardHeader, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Pencil, Trash2 } from 'lucide-react';

const TodoApp = () => {
  const [tasks, setTasks] = useState([
    { id: 1, title: 'study', date: '2022-04-20', description: 'Learn JavaScript' },
    { id: 2, title: 'workout', date: '2022-04-28', description: 'Go to gym' }
  ]);
  const [newTask, setNewTask] = useState({ title: '', date: '', description: '' });

  const addTask = () => {
    if (newTask.title && newTask.date) {
      setTasks([...tasks, { ...newTask, id: Date.now() }]);
      setNewTask({ title: '', date: '', description: '' });
    }
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <h2 className="text-2xl font-bold">TODO App</h2>
      </CardHeader>
      <CardContent>
        <div className="space-y-2 mb-4">
          <Input
            placeholder="Add New Task"
            value={newTask.title}
            onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
          />
          <Input
            type="date"
            value={newTask.date}
            onChange={(e) => setNewTask({ ...newTask, date: e.target.value })}
          />
          <Input
            placeholder="Description"
            value={newTask.description}
            onChange={(e) => setNewTask({ ...newTask, description: e.target.value })}
          />
          <Button className="w-full" onClick={addTask}>Add New Task</Button>
        </div>
        <h3 className="text-xl font-semibold mb-2">Tasks</h3>
        <div className="space-y-2">
          {tasks.map(task => (
            <Card key={task.id} className="bg-green-50">
              <CardContent className="p-4">
                <h4 className="font-bold">{task.title}</h4>
                <p className="text-sm text-gray-500">{task.date}</p>
                <p>{task.description}</p>
                <div className="flex justify-end mt-2">
                  <Button variant="ghost" size="icon">
                    <Pencil className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="icon" onClick={() => deleteTask(task.id)}>
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default TodoApp;