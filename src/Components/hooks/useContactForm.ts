'use client';

import { useState } from "react";
import toast from "react-hot-toast";


export function useContactForm() {
    const [loading, setLoading] = useState(false);


    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true)
        try {
            const form = e.currentTarget;
            const formData = new FormData(form);

            const res = await fetch(form.action, {
                method: form.method,
                body: formData
            })

            if (res.ok) {
                toast.success('Message sent successfully!')
                form.reset()
            } else {
                toast.error('Something went wrong, try again.')
            }

        } catch (err) {
            toast.error('Network error, please retry.')
        } finally {
            setLoading(false)
        }
    }
    return { loading, handleSubmit }
}