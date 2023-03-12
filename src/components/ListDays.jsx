import style from "./ListDays.module.css";

const ListDays = ({dados, temp}) => {
    
  return (
    <div className="flex flex-wrap">
        {dados && (
            <>
                { dados.forecast.forecastday.map((day) => {

                    const date = new Date(day.date);
                    const dayOfWeek = date.toLocaleDateString('pt-BR', { weekday: 'long' });

                    return (
                        <div className={style.days_card} key={day.date}>
                            <p>{dayOfWeek}</p>

                            <img src={day.day.condition.icon} alt={day.name} /> 

                            <div className={style.temp}>
                                <p>{temp === 'celsius' ? day.day.maxtemp_c : day.day.maxtemp_f}</p>
                                <p>{temp === 'celsius' ? day.day.mintemp_c : day.day.mintemp_f}</p>
                            </div>

                        </div>
                    )

                })}
            </>
        )}
    </div>
  )
}

export default ListDays