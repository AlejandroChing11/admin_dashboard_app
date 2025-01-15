"use client";

import React, { useState, useEffect } from "react";

import useToken from "@/hooks/useToken";
import API from "@/services/API";

import { FaMusic, FaPalette, FaUtensils, FaMapMarkerAlt } from "react-icons/fa";
import { User } from "@/interfaces";

const Skeleton = () => (
  <div className="max-w-2xl mx-auto p-4">
    <h2 className="text-2xl font-bold mb-4 text-center">Cargando...</h2>
    <div className="flex justify-between gap-x-4">
      {Array(4)
        .fill("")
        .map((_, index) => (
          <div
            key={index}
            className="bg-gray-200 rounded-lg p-4 flex flex-col items-center animate-pulse w-1/4 h-32"
          >
            <div className="flex-shrink-0 bg-gray-300 rounded-full w-12 h-12 mb-2" />
            <div className="w-full">
              <div className="h-4 bg-gray-300 rounded w-3/4 mb-1" />
              <div className="h-4 bg-gray-300 rounded w-1/2" />
            </div>
          </div>
        ))}
    </div>
  </div>
);

export function CustomWidget() {
  const token = useToken();
  const [userData, setUserData] = useState<User>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUserData = async (token: string) => {
      try {
        setLoading(true);
        const data = await API.getMe(token);
        setUserData(data);
      } catch (err) {
        setError("Failed to fetch user data");
        console.error(err);
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

  if (loading) {
    return <Skeleton />;
  }

  if (error || !userData) {
    return <p>{error || "User data could not be loaded."}</p>;
  }

  const favorites = [
    {
      type: "Artista",
      value: userData.artistaFavorito || "N/A",
      icon: FaMusic,
    },
    { type: "Color", value: userData.colorFavorito || "N/A", icon: FaPalette },
    {
      type: "Comida",
      value: userData.comidaFavorita || "N/A",
      icon: FaUtensils,
    },
    {
      type: "Lugar",
      value: userData.lugarFavorito || "N/A",
      icon: FaMapMarkerAlt,
    },
  ];

  return (
    <div className="max-w-3xl mx-auto p-6 bg-gray-100 rounded-xl shadow-lg mt-6">
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-700">
        ¡Hola {userData?.nombre}! Gracias por registrarte
      </h2>
      <div className="flex justify-between gap-x-4">
        {favorites.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center transition-transform transform hover:scale-105 w-1/4"
          >
            <div className="flex-shrink-0">
              <item.icon className="text-4xl text-blue-500 mb-4" />
            </div>
            <div className="text-center">
              <h3 className="text-lg font-semibold text-gray-800">
                {item.type}
              </h3>
              <p className="text-gray-600">{item.value}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
