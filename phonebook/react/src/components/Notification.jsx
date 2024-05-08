import '../styles.css'

const Notification = ({message}) => {
    return (
        <div className='success'>
            {message}
        </div>
    )
}

export default Notification;