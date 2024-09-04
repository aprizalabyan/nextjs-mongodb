"use client"

import React, { useEffect, useState } from 'react';
import ButtonDefault from './ButtonDefault';
import { PencilIcon, TrashIcon, PlusIcon, XMarkIcon } from '@heroicons/react/24/solid';
import { IF_User } from '@/interfaces/common'

interface Props {
  listUser: IF_User[];
  formType: (data: string) => void;
  onClickAdd: (data: boolean) => void;
  onClickEdit: (data: IF_User) => void;
  onClickDelete: (data: IF_User) => void;
}

const UserList: React.FC<Props> = ({ listUser, formType, onClickAdd, onClickEdit, onClickDelete }) => {
  const [isShowForm, setIsShowForm] = useState(false)

  const handleEdit = (data: IF_User) => {
    onClickEdit(data)
    formType('edit')
    setIsShowForm(true);
  };

  const handleDelete = (data: IF_User) => {
    onClickDelete(data)
  };

  const f_onClickAdd = () => {
    formType('add')
    setIsShowForm(!isShowForm);
  }

  useEffect(() => {
    onClickAdd(isShowForm);
  }, [isShowForm])

  return (
    <div>
      <div className='flex justify-between mb-2'>
        <span>User List</span>
        <ButtonDefault
          onClick={f_onClickAdd}
          icon={isShowForm ? XMarkIcon : PlusIcon}
          className={`${isShowForm ? 'bg-gray-300 text-gray-500' : 'bg-gray-600 text-gray-100'}  text-sm`}
        >
          {isShowForm ? 'Cancel' : 'Add New'}
        </ButtonDefault>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th className="border-2 border-gray-400 min-w-40">Name</th>
            <th className="border-2 border-gray-400 min-w-60">Email</th>
            <th className="border-2 border-gray-400 min-w-32">Action</th>
          </tr>
        </thead>
        <tbody>
          {listUser.map((item) => (
            <tr key={item._id}>
              <td className="px-2 border-2 border-gray-400">{item.name}</td>
              <td className="px-2 border-2 border-gray-400">{item.email}</td>
              <td className="px-2 border-2 border-gray-400">
                <div className='flex justify-center gap-2 py-1'>
                  <ButtonDefault onClick={() => handleEdit(item)} icon={PencilIcon} className='bg-gray-300 text-gray-500' />
                  <ButtonDefault onClick={() => handleDelete(item)} icon={TrashIcon} className='bg-gray-300 text-gray-500' />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default UserList