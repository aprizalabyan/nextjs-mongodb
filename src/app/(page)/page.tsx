"use client"

import React, { useEffect, useState } from 'react'
import axios from 'axios'
import UserList from "@/components/UserList"
import ButtonDefault from "@/components/ButtonDefault"
import InputTextDefault from '@/components/InputTextDefault'
import { UserIcon, EnvelopeIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';
import { IF_User } from '@/interfaces/common'

export default function Home() {
  const [listUser, setListUser] = useState([]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [id, setId] = useState('');
  const [showForm, setShowForm] = useState(false)
  const [formType, setFromType] = useState('add')

  async function getAllUsers() {
    await axios.get('/api/user')
      .then((res) => {
        setListUser(res?.data?.data)
      })
  }

  async function addUser(e: React.FormEvent) {
    e.preventDefault();
    const payload = { name, email }

    if (formType == "add") {
      await axios.post('/api/user', payload)
    } else {
      await axios.put(`/api/user/${id}`, payload)
    }

    setName('')
    setEmail('')
    getAllUsers();
  };

  async function onClickEdit(data: IF_User) {
    setId(data._id)
    setName(data.name)
    setEmail(data.email)
  }

  useEffect(() => {
    getAllUsers();
  }, [])

  useEffect(() => {
    if (!showForm) {
      setName('')
      setEmail('')
    }
  }, [showForm])

  return (
    <div className="flex flex-col">
      <span>Home Page</span>
      <br />
      <div className="flex gap-6">
        <UserList listUser={listUser} formType={(e) => setFromType(e)} onClickAdd={(e) => setShowForm(e)} onClickEdit={onClickEdit} />
        {showForm &&
          <form onSubmit={addUser} className="space-y-2">
            <span>{formType == 'add' ? 'Add New' : 'Edit'} User</span>
            <InputTextDefault
              label='Name'
              value={name}
              onChange={(e) => setName(e.target.value)}
              prevendIcon={UserIcon}
              required
            />
            <InputTextDefault
              label='Email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              prevendIcon={EnvelopeIcon}
              required
            />
            <ButtonDefault
              type='submit'
              onClick={() => addUser}
              className='bg-gray-600 text-gray-100 min-w-20 text-sm'
            >
              {formType == 'add' ? 'Add' : 'Save'}
            </ButtonDefault>
          </form>
        }
      </div>
      <br />
      <Link className='w-fit underline' href={"/about"}>about page</Link>
    </div>
  );
}
