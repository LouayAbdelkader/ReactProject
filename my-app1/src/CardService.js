import Table from "./Data.js";
const CardService = () => {
    return (
        <div className="services">
            {Table.map((service) => (
                <div className="CardS" key={service.id}>
                    <h1>{service.ServiceName}</h1>
                    <img src={service.Image} />
                    <p>{service.Description}</p>
                </div>


            ))

            }
        </div >
    )
}

export default CardService
