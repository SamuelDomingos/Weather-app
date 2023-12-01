import style from "./Search.module.css"

import {GrFormClose} from "react-icons/gr"
import {AiOutlineSearch} from "react-icons/ai"
import { useEffect, useState } from "react"
import { useFetch } from "../hook/useFetch"

const API_URL = import.meta.env.VITE_URL;
const API_KEY = import.meta.env.VITE_URL_KEY;

const Search = ({onClose, onLocationClick}) => {

    const [searchTerm, setSearchTerm] = useState("");

    const NameApi = `${API_URL}/search.json?${API_KEY}&q=${searchTerm}&lang=pt`;

    const {data, loading} = useFetch(NameApi);
      
      const handleSubmit = (e) => {
        e.preventDefault();

      }

  return (
    <div className={style.Search}>
        <button onClick={onClose} className={style.close}><GrFormClose/></button>

        <form onSubmit={handleSubmit}>
            <label>
                <AiOutlineSearch/>
                <input 
                type="text" 
                placeholder="pesquisar localização"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)} />
            </label>

            <input type="submit" value="pesquisar" />
        </form>

        <div className={style.list}>
            {data && data.length > 0 ? (
                data.map((item) => (
                    <button onClick={() => onLocationClick(item.name)} className={style.nameLocation}>{item.name} - {item.region}</button>
                ))
            ) : (
                <p>Sem localização</p>
            )}
        </div>

    </div>
  )
}

export default Search
