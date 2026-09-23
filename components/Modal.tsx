'use client'
import { useEffect, useRef } from "react";

type Props = {
    isVisible: boolean;
    onClose?: () => void;
    children?: React.ReactNode;
}

export default function Modal({ isVisible, onClose, children }: Props) {
    const dialogRef = useRef<HTMLDialogElement>(null);

    useEffect(() => {
        const dialog = dialogRef.current;

        if (!dialog) {
            return;
        }

        if (isVisible) {
            dialog.showModal();
        }

        else {
            dialog.close();
        }
    }, [isVisible]);

    return (

        <dialog
            ref={dialogRef}
            onClose={onClose}
            className="p-6 rounded-lg bg-black/95 backdrop:bg-black/50 w-screen max-w-none min-h-screen"
        >
            <div>
                <div className="flex justify-end">
                    <button
                        onClick={onClose}
                        className='bg-red-500 p-3 rounded-md text-white font-bold mt-2'
                    >
                        Close
                    </button>
                </div>

                {children}
            </div>

        </dialog>

    )
}