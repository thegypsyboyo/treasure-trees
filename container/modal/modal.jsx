import ReactModal from "react-modal";
import { useEffect } from "react";
import {GrClose} from "react-icons/gr"


const customStyles = {
    overlay: {
        // backGroundColor: "rgba(0,0,0)",
        // zIndex:100,
    },
    content: {
        border: 0,
        padding: 0,
        top: "50%",
        left: "50%",
        right: "auto",
        bottom: "auto",
        overflow: "hidden",
        marginRight: "-50%",
        transform: "translate(-50%, -50%)",
        width: "60%",
        height: "60%"
    },
};


const Modal = ({isOPen, closeModal, children, ...props}) => {
    useEffect(() =>{
        if(isOPen) {
            document.body.style.overflow="hidden";
        }
        return () => (document.body.style.overflow="unset");
    });


    return (
        <ReactModal
        isOpen={isOPen}
        ariaHideApp={false}
        style={customStyles}
        closeTimeoutMS={2000}
        onRequestClose={closeModal}
        {...props}
        >
            {children}

        </ReactModal>
    )
}

export default  Modal


export const CloseButton = ({onClick, size, color, ...props}) => {
    return (
        <div
        onClick={onClick} {...props}
        className="outline-none border-0 bg-transparent text-teal-500 fill-current cursor-pointer bg-white"


        >
            <div className="bg-white w-[24px] h-[24px] absolute right-0 top-[-40px] rounded-full">
                <GrClose size={size ?? "24px"} className="absolute right-0  top-5"/>
            </div>

        </div>
    )
}