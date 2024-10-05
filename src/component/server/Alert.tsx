export interface AlertProps {
    label: string
}

function Alert(props: AlertProps) {
    return (
        <div className="w-full px-8 py-3 flex justify-center bg-gradient-to-r from-rose-500 via-purple-500 to-pink-500">
            <span className='select-none text-gray-200 text-md md:text-md font-bold'>{props.label}</span>
        </div>
    );
}

export default Alert;