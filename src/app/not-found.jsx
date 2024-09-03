"use client";
import { useRouter } from "next/navigation.js";

function NotFound() {
  const router = useRouter();
  return (
    <>
      <h1 className="text-3xl font-bold text-center">
        404 Pagina no encontrada
      </h1>
      <button onClick={() => router.back()} className="p-3">
        Volver atras
      </button>
    </>
  );
}

export default NotFound;
