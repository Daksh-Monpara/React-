import React, { useState } from 'react';

const CrudApp = () => {
  const [items, setItems] = useState([
    { id: 1, title: 'JavaScript', description: 'JavaScript is among...' },
    { id: 2, title: 'Sass', description: 'Learn from' },
    { id: 3, title: 'React', description: 'Learn from react.js' },
    { id: 4, title: 'Node', description: 'NodeJs documentation' },
    { id: 5, title: 'EcmaScript', description: 'Learn from es6.org' },
    { id: 6, title: 'Angular', description: 'One framework Mobile...' },
  ]);

  const [newItem, setNewItem] = useState({ title: '', description: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewItem(prev => ({ ...prev, [name]: value }));
  };

  const handleAdd = () => {
    if (newItem.title && newItem.description) {
      setItems(prev => [...prev, { ...newItem, id: Date.now() }]);
      setNewItem({ title: '', description: '' });
    }
  };

  const handleEdit = (id) => {
    // Implement edit functionality
    console.log('Edit item with id:', id);
  };

  const handleDelete = (id) => {
    setItems(prev => prev.filter(item => item.id !== id));
  };

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center">
          <div className="bg-gray-800 p-2 rounded-lg mr-2 text-white">
            ✏️
          </div>
          <h1 className="text-2xl font-bold text-blue-600">REACT CRUD</h1>
        </div>
        <button
          onClick={handleAdd}
          className="bg-orange-500 text-white px-4 py-2 rounded-lg flex items-center"
        >
          + Add
        </button>
      </div>
      
      <div className="mb-4 flex space-x-2">
        <input
          type="text"
          name="title"
          value={newItem.title}
          onChange={handleInputChange}
          placeholder="Title"
          className="border p-2 rounded flex-grow"
        />
        <input
          type="text"
          name="description"
          value={newItem.description}
          onChange={handleInputChange}
          placeholder="Description"
          className="border p-2 rounded flex-grow"
        />
      </div>

      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-blue-100">
            <th className="border p-2 text-left">Title</th>
            <th className="border p-2 text-left">Description</th>
            <th className="border p-2 text-left">Action</th>
          </tr>
        </thead>
        <tbody>
          {items.map(item => (
            <tr key={item.id} className="border-b">
              <td className="p-2">{item.title}</td>
              <td className="p-2">{item.description}</td>
              <td className="p-2">
                <button onClick={() => handleEdit(item.id)} className="text-green-600 mr-2">
                  Edit
                </button>
                <button onClick={() => handleDelete(item.id)} className="text-red-600">
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CrudApp;