"use client"

import React, { useEffect, useState } from 'react'
import axios from 'axios'
import UserList from "@/components/UserList"

export default function Home() {
  const [listUser, setListUser] = useState([]);
  
  async function getAllUsers() {
    await axios.get('/api/user')
      .then((res) => {
        setListUser(res?.data?.data)
      })
  }
  
  useEffect(() => {
    getAllUsers();
  }, [])

  return (
    <main className="flex min-h-screen flex-col justify-between p-24">
      <div className="flex flex-col">
        <span>Parent</span>
        <br />
        <UserList listUser={listUser}/>
      </div>
    </main>
  );
}
