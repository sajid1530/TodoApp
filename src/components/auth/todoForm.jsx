



import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const TodoForm = ({ addTodo, updateTask, currentTask, setCurrentTask, closeTask }) => {
  const today = new Date().toISOString().split('T')[0];

  const initialValues = currentTask || {
    title: '',
    description: '',
    priority: 'low',
    dueDate: today,
  };

  const validationSchema = Yup.object({
    title: Yup.string().required('Title is required'),
    description: Yup.string().required('Description is required'),
    priority: Yup.string().required('Priority is required'),
    dueDate: Yup.date().min(new Date(), 'Due Date must be in the future').required('Due Date is required'),
  });

  const handleSubmit = (values, { setSubmitting }) => {
    if (currentTask) {
      updateTask({ ...values, id: currentTask.id });
    } else {
      addTodo(values);
    }
    setSubmitting(false);
    setCurrentTask(null); 
    closeTask();
  };

  return (
    <div className='w-full'>
  <div>
    <div className="flex justify-between items-center">
      <h2 className='text-[24px]'>{currentTask ? 'Edit Task' : 'Add Task'}</h2>
      <button
        type="button"
        onClick={closeTask}
        className="text-[60px] text-red-500 hover:text-gray-700 focus:outline-none"
      >
        &times;
      </button>
    </div>

    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <Form className="flex flex-col gap-4 p-4 w-full max-w-md mx-auto bg-white shadow-md rounded-lg">
          <div className="flex flex-col gap-2">
            <label htmlFor="title" className="block text-[30px] font-medium text-gray-700">
              Title
            </label>
            <Field
              type="text"
              id="title"
              name="title"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
            <ErrorMessage name="title" component="div" className="text-red-500 text-sm mt-1" />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="description" className="block text-[21px] font-medium text-gray-700">
              Description
            </label>
            <Field
            as="textarea"
              type="text"
              id="description"
              name="description"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
            <ErrorMessage name="description" component="div" className="text-red-500 text-sm mt-1" />
          </div>

          <div className="flex flex-col gap-2 relative">
            <label htmlFor="priority" className="block text-[21px] font-medium text-gray-700">
              Priority
            </label>
            <Field
              as="select"
              id="priority"
              name="priority"
              className="mt-1 block w-40 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            >
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </Field>
            <ErrorMessage name="priority" component="div" className="text-red-500 text-sm mt-1" />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="dueDate" className="block text-[21px] font-medium text-gray-700">
              Due Date
            </label>
            <Field
              type="date"
              id="dueDate"
              name="dueDate"
              min={today}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
            <ErrorMessage name="dueDate" component="div" className="text-red-500 text-sm mt-1" />
          </div>

          <div>
            <button
              type="submit"
              className="w-full bg-green-600 text-white p-2 rounded hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 text-[20px]"
              disabled={isSubmitting}
            >
              {currentTask ? 'Update Task' : 'Add Task'}
            </button>
            <button
              type="button"
              onClick={closeTask}
              className="bg-red-600 w-full mt-3 text-[20px] p-2 rounded hover:bg-red-700 focus:outline-none"
            >
              Close Task
            </button>
          </div>
        </Form>
      )}
    </Formik>
  </div>
</div>

  );
};

export default TodoForm;








