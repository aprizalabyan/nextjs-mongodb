"use client"

interface User {
  _id: string,
  name: string,
  email: string,
}

interface Props {
  listUser: User[]
}

const UserList: React.FC<Props> = ({ listUser }) => {
  return (
    <div>
      <span>User List</span>
      <div>
        <table className="table">
          <thead>
            <tr>
              <th className="border-2 border-gray-400 min-w-40">Name</th>
              <th className="border-2 border-gray-400 min-w-60">Email</th>
            </tr>
          </thead>
          <tbody>
            {listUser.map((item) => (
              <tr key={item._id}>
                <td className="px-2 border-2 border-gray-400">{item.name}</td>
                <td className="px-2 border-2 border-gray-400">{item.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default UserList