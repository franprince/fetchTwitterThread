import removeDuplicates from "../lib/removeDuplicates";
import { Boton } from "./Boton";
import Image from "next/image";

const Card = ({ userId, text, urls, userData }) => {
  return (
    urls !== undefined && (
      <div className="xl:w-1/3 md:w-1/2 p-4">
        <div className="border border-gray-300 p-6 rounded-lg">
          <div className="flex items-center justify-left">
            {(userData && (
              <Image
                src={userData.profile_image_url}
                width={40}
                height={40}
                alt={`Foto de perfil de ${userData.name}`}
                className="w-10 h-10 rounded-full"
              />
            )) || (
              <div className="w-10 h-10 rounded-full bg-indigo-100 text-indigo-500 "></div>
            )}
            <h2 className="pr-2 text-lg  font-medium title-font mb-2 ml-3">
              {(userData && userData.name) || userId}
            </h2>
          </div>
          <p className="leading-relaxed text-base mt-4">{text}</p>
          <div className="text-center mt-2 leading-none flex justify-left w-full">
            {removeDuplicates(urls, "url").map((url, index) => {
              return (
                <Boton
                  url={url.expanded_url}
                  key={`boton-${userId}-${index}`}
                />
              );
            })}
          </div>
        </div>
      </div>
    )
  );
};

export default Card;
