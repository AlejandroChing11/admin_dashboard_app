'use client';

import { useEffect, useState } from "react";

import API from "@/services/API";
import useToken from "@/hooks/useToken";

import { UserWidget } from "@/components";

export function UserGrid() {
  const token = useToken();
  const [usersData, setUsersData] = useState<any[]>([]);
  const [isAdmin, setIsAdmin] = useState<boolean>(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchInitialData = async (token: string) => {
      try {
        setLoading(true);
        const userRes = await API.getMe(token);
        setIsAdmin(userRes.roles.includes('admin'));
        const usersRes = await API.getUsers(token);
        setUsersData(usersRes);
      } catch (err) {
        setError("Failed to fetch user data");
      } finally {
        setLoading(false);
      }
    };

    if (token) {
      fetchInitialData(token);
    } else {
      setLoading(false);
    }
  }, [token]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error || !usersData.length) {
    return <p>{error || "User data could not be loaded."}</p>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {
          usersData.map((user: any) => (
            <UserWidget key={user.id} {...user} isAdmin={isAdmin} />
          ))
        }
      </div>
    </div>
  )
}
