'use client'
import {useRouter} from 'next/navigation';
import {signIn} from 'next-auth/react';
import type { FormEventHandler } from 'react';

const SignInForm = () => {
    const router = useRouter();
    const handleSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const res = await signIn('credentials', {
            email: formData.get('email'),
            password: formData.get('password'),
            redirect: false
        });

        if (res && !res.error){
            router.push('/profile');
        } else {
            console.log(res);
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="email" name="email" required className="input" />
            <input type="password" name="password" required className="input" />
            <button type="submit" className="google-button">Sign In</button>
        </form>
    );
}

export default SignInForm;