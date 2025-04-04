"use client"
import { Casamento01PresenceForm } from "./presence";
import { useEvent } from "@/utils/hooks/useEvent";
import {casamento01Banner} from "@/assets/images";

export const Casamento01Presence = () => {
  const { event } = useEvent();
  const nameFont = event?.fontes?.names ?? "font-poppins";
  const titleFont = event?.fontes?.titles ?? "font-poppins";
  const textFont = event?.fontes?.texts ?? "font-poppins";
 const menuFont = event?.fontes?.menus ?? "font-poppins";
  const mediaType = event?.tipo_capa ?? "Imagem";
  const eventName = event?.nome_evento ?? "-";
  const eventDate = event?.data_evento ?? "-";
  const eventMap = event?.endereco ?? "-";

  const colors = event?.cores ?? {
      main_color: "#434023",
      texts: "#edede3",
      menus: "#edede3",
      names: "#edede3",
      titles: "#434023",
  };

  const mainImage =
      mediaType === "Slideshow"
          ? event?.imagem_principal?.map((img) => img.url)
          : (event?.imagem_principal?.[0]?.url ?? casamento01Banner.src);

  const content = event?.conteudo;


  return (
    <div className="flex flex-col w-full h-full max-w-[1920px]  overflow-x-hidden items-center bg-white">
      <Casamento01PresenceForm />
    </div>
  );
};
