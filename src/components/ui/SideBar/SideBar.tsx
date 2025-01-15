'use client';
import React, { useState, useEffect } from 'react';

import Image from 'next/image';
import { useRouter } from 'next/navigation';

import API from '@/services/API';
import useToken from '@/hooks/useToken';

import { SideBarMenuItems } from '../SideBarMenuItems';
import { FaHouseUser, FaSignOutAlt } from 'react-icons/fa';
import { IoBrowsersOutline, IoLogoReact } from 'react-icons/io5';

const menuItems = [
  {
    path: '/Perfil',
    icon: <IoBrowsersOutline size={40} />,
    title: 'Perfil',
    subtitle: 'Visual Data Overview'
  },
];

const Skeleton = () => (
  <div id="skeleton" className="px-6 py-10 animate-pulse">
    <div className="flex space-x-2 items-center">
      <div className="rounded-full bg-gray-300 w-8 h-8" />
      <div className="w-1/2 bg-gray-300 h-4 rounded" />
    </div>
    <div className="mt-4 space-y-2">
      <div className="bg-gray-300 h-4 rounded" />
      <div className="bg-gray-300 h-4 rounded" />
      <div className="bg-gray-300 h-4 rounded" />
      <div className="bg-gray-300 h-4 rounded" />
    </div>
  </div>
);

export function SideBar() {
  const token = useToken();
  const [userData, setUserData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    const fetchUserData = async (token: string) => {
      try {
        setLoading(true);
        const data = await API.getMe(token);
        setUserData(data);
      } catch (err) {
        setError('Failed to fetch user data');
      } finally {
        setLoading(false);
      }
    };

    if (token) {
      fetchUserData(token);
    } else {
      setLoading(false);
    }
  }, [token]);

  const handleLogOut = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('userData');
    router.push('/login');
  };

  return (
    <div id="menu"
      style={{ width: '400px' }}
      className="bg-gray-900 min-h-screen z-10 text-slate-300 w-64 flex flex-col justify-between overflow-y-scroll">

      <div>
        <div id="logo" className="my-4 px-6">
          <h1 className="flex items-center text-lg md:text-2xl font-bold text-white">
            <IoLogoReact className="mr-2 text-blue-500" />
            <span>Dash</span>
          </h1>
          <p className="text-slate-500 text-sm">Manage your actions and activities</p>
        </div>
        {loading ? (
          <Skeleton />
        ) : error ? (
          <p className="px-6 py-10">{error}</p>
        ) : (
          <div id="profile" className="px-6 py-10">
            <p className="text-slate-500">Welcome back,</p>
            <a href="#" className="inline-flex space-x-2 items-center">
              <span>
                {userData?.imagePath ? (
                  <Image
                    className="rounded-full w-8 h-8"
                    src={userData.imagePath}
                    alt="User avatar"
                    width={70}
                    height={70}
                  />
                ) : (
                  <div className="rounded-full w-8 h-8 bg-gray-300"></div>
                )}
              </span>
              <span className="text-sm md:text-base font-bold">
                {userData?.nombre} {userData?.apellido}
              </span>
            </a>
            <p className="text-sm text-slate-400">{userData?.email || 'N/A'}</p>
          </div>
        )}
        <div id="nav" className="w-full px-6">
          {menuItems.map((menuItem, index) => (
            <SideBarMenuItems
              key={index}
              {...menuItem}
            />
          ))}
          {
            userData?.roles.includes('admin') && (
              <SideBarMenuItems
                path="/Usuarios"
                icon={<FaHouseUser size={40} />}
                title="Usuarios"
                subtitle="User Data overview"
              />
            )
          }
        </div>
      </div>

      <div className="px-6 pb-4 flex justify-center">
        <button
          className="flex items-center text-slate-300 hover:text-white transition-colors duration-200"
          onClick={handleLogOut}
          title="Log Out"
        >
          <FaSignOutAlt className="mr-2" />
          Salir
        </button>
      </div>
    </div>
  );
}
