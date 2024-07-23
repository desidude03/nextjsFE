"use client"
import { useEffect, useState } from 'react';
import axios from 'axios';
import { RecoilRoot, useRecoilState } from 'recoil';
import { userState, User } from '../store/userState'

const Admin = () => {
    const [users, setUsers] = useState<User[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/users')
            .then(response => {
                setUsers(response.data);
                setLoading(false);
            })
            .catch(error => console.error(error));
    }, []);

    if (loading) return <p>Loading...</p>;

    return (
        <RecoilRoot>
        <div>
            <h1>Admin Dashboard</h1>
            <table>
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Telephone</th>
                        <th>Address</th>
                        <th>SSN</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(user => (
                        <tr key={user.id}>
                            <td>{user.first_name}</td>
                            <td>{user.last_name}</td>
                            <td>{user.telephone}</td>
                            <td>{user.address}</td>
                            <td>{user.ssn}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
        </RecoilRoot>
    );
};

export default Admin;
