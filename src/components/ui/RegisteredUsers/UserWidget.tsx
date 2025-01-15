"use client";

import { useState } from "react";

import Image from "next/image";

import { EditData, RegisteredUser } from "@/interfaces";

import { EditForm, Modal } from "@/components";

interface UserWidgetProps extends RegisteredUser {
  isAdmin: boolean;
}

export function UserWidget({ isAdmin, ...props }: UserWidgetProps) {
  const [showModal, setShowModal] = useState(false);
  const [showEditForm, setShowEditForm] = useState(false);
  const [userData, setUserData] = useState(props);

  const handleEdit = (updatedUser: any) => {
    setUserData(updatedUser);
    setShowEditForm(false);
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-4 w-full max-w-xs">
      <div className="flex flex-col items-center">
        <Image
          src={userData?.imagePath}
          alt={`${userData.nombre} ${userData.apellido}`}
          width={80}
          height={80}
          className="rounded-full mb-2"
        />
        <h2 className="text-lg font-semibold text-center">{`${userData.nombre} ${userData.apellido}`}</h2>
        <p className="text-sm text-gray-600 mb-2">{userData.email}</p>
        <p className="text-sm text-gray-600 mb-2">{userData.telefono}</p>
        <p className="text-sm text-gray-600 mb-2">
          Fecha registro: {new Date(userData.createdAt).toLocaleDateString()}
        </p>
        <div className="flex space-x-2">
          <button
            onClick={() => setShowModal(true)}
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-1 px-2 rounded text-sm"
          >
            Ver más
          </button>
          {isAdmin && (
            <button
              onClick={() => setShowEditForm(true)}
              className="bg-green-500 hover:bg-green-600 text-white font-bold py-1 px-2 rounded text-sm"
            >
              Editar
            </button>
          )}
        </div>
      </div>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <h3 className="text-lg font-semibold mb-2">Información adicional</h3>
          <p>
            <strong>Comida Favorita:</strong> {userData.comidaFavorita}
          </p>
          <p>
            <strong>Artista Favorito:</strong> {userData.artistaFavorito}
          </p>
          <p>
            <strong>Lugar Favorito:</strong> {userData.lugarFavorito}
          </p>
          <p>
            <strong>Color Favorito:</strong> {userData.colorFavorito}
          </p>
        </Modal>
      )}
      {showEditForm && (
        <Modal onClose={() => setShowEditForm(false)}>
          <EditForm user={userData} onSave={handleEdit} />
        </Modal>
      )}
    </div>
  );
}
