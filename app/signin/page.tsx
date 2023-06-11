import GoogleButton from "@/components/GoogleButton";
import SignInForm from "@/components/SignInForm";

export default async function Signin(){
    return (
        <>
            <h1>Sign in</h1>
            <GoogleButton />
            <div>or</div>
            <SignInForm />
        </>
    );
}