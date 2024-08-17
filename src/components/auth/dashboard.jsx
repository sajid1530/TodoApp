
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TodoForm from './todoForm';
import {
  addTodo,
  markAsCompleted,
  markAsCancelled,
  updateTask,
  deleteCompletedTask,
  deleteCancelledTask,
  deleteAllCompletedTask,
  deleteAllCancelledTask,
} from '../../redux/reducers/todoSlice';
import { Button, Dialog, DialogPanel, DialogTitle } from '@headlessui/react';
import { logout } from '../../redux/reducers/authSlice';

function Dashboard() {
  const [currentTask, setCurrentTask] = useState(false);
  const [editableTask, setEditableTask] = useState(null);
  const [currentTime, setCurrentTime] = useState(Date.now());
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todo.todos);
  const completedTasks = useSelector((state) => state.todo.completedTasks);
  const cancelledTasks = useSelector((state) => state.todo.cancelledTasks);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(Date.now());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const updateTaskStatus = () => {
    const now = currentTime;
    todos.forEach((todo) => {
      const createdAt = todo.createdAt;
      const timeDifference = now - createdAt;
      const twoMinutesInMilliseconds = 2 * 60 * 1000;

      if (timeDifference >= twoMinutesInMilliseconds) {
        dispatch(markAsCancelled({ id: todo.id }));
      }
    });
  };

  useEffect(() => {
    updateTaskStatus();
  }, [currentTime, dispatch, todos]);

  const toggleTaskForm = () => {
    setCurrentTask(!currentTask);
    setEditableTask(null);
  };

  const handleAddTask = (task) => {
    if (editableTask) {
      dispatch(updateTask({ ...task, id: editableTask.id }));
      setEditableTask(null);
    } else {
      dispatch(
        addTodo({
          ...task,
          id: Date.now(),
          createdAt: Date.now(),
        })
      );
    }
    setCurrentTask(false);
    setIsOpen(false); 
  };

  const handleMarkAsCompleteTask = (id) => {
    dispatch(markAsCompleted({ id }));
  };

  const handleMarkAsCancelledTask = (id) => {
    dispatch(markAsCancelled({ id }));
  };

  const handleDeleteCompletedTask = (id) => {
    dispatch(deleteCompletedTask({ id }));
  };

  const handleDeleteCancelledTask = (id) => {
    dispatch(deleteCancelledTask({ id }));
  };

  const handleEditTask = (task) => {
    setEditableTask(task);
    setCurrentTask(true);
    setIsOpen(true); // Open the dialog for editing task
  };

  const handleDeleteAllCompletedTask = () => {
    dispatch(deleteAllCompletedTask());
  };

  const handleDeleteAllCancelledTask = () => {
    dispatch(deleteAllCancelledTask());
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'high':
        return 'bg-red-500';
      case 'medium':
        return 'bg-yellow-500';
      case 'low':
        return 'bg-green-500';
      default:
        return 'bg-gray-500';
    }
  };

  const getDayOfWeek = (dueDate) => {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const date = new Date(dueDate);
    const dayOfWeek = days[date.getDay()];
    return dayOfWeek;
  };

  const getRemainingTime = (createdAt) => {
    const now = currentTime;
    const timeDifference = now - createdAt;
    const remainingTime = 2 * 60 * 1000 - timeDifference;
    return Math.max(0, remainingTime);
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60000);
    const seconds = ((time % 60000) / 1000).toFixed(0);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  const formatDate = (date) => {
    const d = new Date(date);
    return d.toLocaleDateString();
  };

  const handleLogout = () => {
    dispatch(logout());
    navigate('/login');
  };

  const handlecloseTask = () => {
    setIsOpen(false)
  }

  return (
    <>
      {/* Logout */}
      <div className='flex justify-end mb-4'>
        <button
          onClick={handleLogout}
          type='button'
          className='rounded-md bg-black mt-4 mr-2 px-3 py-2 text-[22px] font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black'
        >
          Log Out
        </button>
      </div>

          {/* main div */}
      <div className='flex flex-col p-4 space-y-4 h-screen'>
        <div className='flex justify-around items-start space-x-4'>
          <div className='flex-1 min-h-[30vh] bg-green-200 p-4 shadow-lg overflow-y-auto'>
            <h2 className='text-green-800 text-[26px] text-center mt-3 font-extrabold'>Completed Tasks</h2>
            {completedTasks.length > 0 && (
              <button
                onClick={handleDeleteAllCompletedTask}
                className='p-2 bg-red-500 text-white text-[20px] rounded hover:bg-red-700 mb-4'
              >
                Delete All
              </button>
            )}
            <ul className='space-y-4'>
              {completedTasks.map((todo) => (
                <li key={todo.id} className='bg-white text-black p-4 rounded shadow-md space-y-1'>
                  <h3 className='text-[22px] font-semibold'>{todo.title}</h3>
                  <p className='text-[20px]'>{todo.description}</p>
                  <p className='text-[20px]'>
                    Due Date: {formatDate(todo.dueDate)}{' '}
                    <span className={`text-white p-1 rounded ${getPriorityColor(todo.priority)}`}>
                      {getDayOfWeek(todo.dueDate)}
                    </span>
                  </p>
                  <button
                    onClick={() => handleDeleteCompletedTask(todo.id)}
                    className='p-1 text-[17px] bg-red-500 text-white rounded hover:bg-red-700 mt-2'
                  >
                    Delete Task
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className='flex-1 min-h-[30vh] max-h-[90vh] bg-yellow-200 p-4 shadow-lg'>
            <h2 className='text-yellow-800 text-[26px] text-center mt-3 font-extrabold'>To-Do List</h2>
            <Button
              onClick={() => {
                setIsOpen(true);
                toggleTaskForm();
              }}
              className='bg-blue-700 hover:bg-blue-400 text-xl p-3 rounded'
            >
              {currentTask ? 'Close Task' : 'Add Task'}
            </Button>

            <Dialog open={isOpen} as='div' className='relative z-10 focus:outline-none' onClose={() => setIsOpen(false)}>
              <div className='fixed inset-0 z-10 w-screen overflow-y-auto'>
                <div className='flex min-h-full items-center justify-center p-4'>
                  <DialogPanel
                    transition
                    className='w-full max-w-md rounded-xl bg-white border p-6 backdrop-blur-2xl duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0'
                  >
                    <DialogTitle as='h3' className='text-base/7 font-medium text-black'>
                      
                    </DialogTitle>
                    <TodoForm
                      addTodo={handleAddTask}
                      updateTask={handleAddTask}
                      currentTask={editableTask}
                      setCurrentTask={setCurrentTask}
                      closeTask={handlecloseTask}
                    />
                  </DialogPanel>
                </div>
              </div>
            </Dialog>
            
            <ul className='space-y-4 mt-4'>
              {todos.map((todo) => (
                <li key={todo.id} className='bg-white text-black p-4 rounded shadow-md space-y-1'>
                  <h3 className='text-[22px] font-semibold'>{todo.title}</h3>
                  <p className='text-[20px]'>{todo.description}</p>
                  <p className='text-[20px]'>
                    Due Date: {formatDate(todo.dueDate)}{' '}
                    <span className={`text-white p-1 rounded ${getPriorityColor(todo.priority)}`}>
                      {getDayOfWeek(todo.dueDate)}
                    </span>
                  </p>
                  <p className='text-[20px] text-yellow-600'>
                    Time Remaining: {formatTime(getRemainingTime(todo.createdAt))}
                  </p>
                  <button
                    onClick={() => handleMarkAsCompleteTask(todo.id)}
                    className='bg-green-500 text-white p-2 rounded hover:bg-green-700 mr-2'
                  >
                    Mark as Completed
                  </button>
                  <button
                    onClick={() => handleMarkAsCancelledTask(todo.id)}
                    className='bg-red-500 text-white p-2 rounded hover:bg-red-700'
                  >
                    Mark as Cancelled
                  </button>
                  <button
                    onClick={() => handleEditTask(todo)}
                    className='bg-blue-500 text-white p-2 rounded hover:bg-blue-700 mt-2 ml-2'
                  >
                    Edit Task
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className='flex-1 min-h-[30vh] bg-red-200 p-4 shadow-lg overflow-y-auto'>
            <h2 className='text-red-800 text-[26px] text-center mt-3 font-extrabold'>Cancelled Tasks</h2>
            {cancelledTasks.length > 0 && (
              <button
                onClick={handleDeleteAllCancelledTask}
                className='p-2 bg-red-500 text-white text-[20px] rounded hover:bg-red-700 mb-4'
              >
                Delete All
              </button>
            )}
            <ul className='space-y-4'>
              {cancelledTasks.map((todo) => (
                <li key={todo.id} className='bg-white text-black p-4 rounded shadow-md space-y-1'>
                  <h3 className='text-[22px] font-semibold'>{todo.title}</h3>
                  <p className='text-[20px]'>{todo.description}</p>
                  <p className='text-[20px]'>
                    Due Date: {formatDate(todo.dueDate)}{' '}
                    <span className={`text-white p-1 rounded ${getPriorityColor(todo.priority)}`}>
                      {getDayOfWeek(todo.dueDate)}
                    </span>
                  </p>
                  <button
                    onClick={() => handleDeleteCancelledTask(todo.id)}
                    className='p-1 text-[17px] bg-red-500 text-white rounded hover:bg-red-700 mt-2'
                  >
                    Delete Task
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;






















