"use client"

import React, { useEffect, useState } from 'react'
import axios from 'axios'
import UserList from "@/components/UserList"
import Link from 'next/link';

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
    <div className="flex flex-col">
      <span>Home Page</span>
      <br />
      <UserList listUser={listUser} />
      <br />
      <Link href={"/about"}>about page</Link>
    </div>
  );
}
