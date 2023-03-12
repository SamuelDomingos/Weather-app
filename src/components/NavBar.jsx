import style from "./NavBar.module.css"

import {BiCurrentLocation} from "react-icons/bi"
import {MdLocationOn} from "react-icons/md"

// Condições climaticas images
import Clear from "../images/Clear.png";
import LightCloud from "../images/LightCloud.png";
import HeavyCloud from "../images/HeavyCloud.png";
import LightRain from "../images/LightRain.png";
import HeavyRain from "../images/HeavyRain.png";
import Thunderstorm from "../images/Thunderstorm.png";
import Snow from "../images/Snow.png";
import Hail from "../images/Hail.png";
import Sleet from "../images/Sleet.png";

import { useEffect, useState } from "react";
import Search from "./Search";

const NavBar = ({dados, onLocationClick, userLocationClick, temp}) => {

    const [img, setImg] = useState(null);

      useEffect(() => {

        if (dados && dados.current) {
            switch (dados.current.condition.text) {
              case 'Céu limpo':
              case 'Sol':
                setImg(Clear);
                break;
              case 'Parcialmente nublado':
                setImg(LightCloud);
                break;
              case 'Nublado':
              case 'Encoberto':
              case 'Neblina':
              case 'Névoa':
                setImg(HeavyCloud);
                break;
              case 'Chuva fraca':
              case 'Chuvisco':
                setImg(LightRain);
                break;
              case 'Chuva moderada':
                setImg(HeavyRain);
                break;
              case 'Chuva forte':
                setImg(Thunderstorm);
                break;
              case 'Queda de neve fraca':
              case 'Neve moderada':
                setImg(Snow);
                break;
              case 'Neve forte':
              case 'Granizo':
                setImg(Hail);
                break;
              case 'Chuva congelada':
              case 'Chuva fraca e gelada':
                setImg(Sleet);
                break;
              default:
                break;
            }
          }

      }, [dados]);

  return (
    <div className={style.NavBar}>
    {
        dados && (
            <>
                <div className={style.search}>
                <button onClick={onLocationClick} className={style.search_text}>Pesquise sua Cidade</button>

                <button onClick={userLocationClick} className={style.curso_location}>
                    <BiCurrentLocation/>
                </button>
                </div>

            <div className={style.img_weather}>
                <img className={style.img_center} src={img} alt={dados.current.condition.text} />
            </div>

                <div className={style.dados}>

                    <h2>
                      {temp === "celsius" ? dados.current.temp_c : dados.current.temp_f}
                      <span>{temp === "celsius" ? "°C" : "°F"}</span>
                    </h2>

                    <p>{dados.current.condition.text}</p>

                    <div className={style.day}>
                        <p>Hoje</p>
                    </div>

                    <div className={style.location}>
                        <MdLocationOn/>
                        <p>{dados.location.name}</p>
                    </div>

                </div>
            </>
        )
    }
    </div>
  )
}

export default NavBar