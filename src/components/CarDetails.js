import styles from './CarDetails.module.css'

const CarDetails = ({car}) => {
    return (
        <div className={styles.card}>
            <ul>
                <li>Número de série: {car.id}</li>
                <li>Marca: {car.brand}</li>
            </ul>
        </div>
    )
}

export default CarDetails;