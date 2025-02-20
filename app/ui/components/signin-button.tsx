import {signIn} from "@/auth/auth"
import {Button} from "@/components/ui/button";
import Form from "next/form";

export function SignIn() {
    return (

        <Form
            action={async () => {
                "use server"
                await signIn("google", {redirectTo: "/blog/admin"})
            }}
            className="block w-1/3"
        >
            <Button className="w-full" type="submit">Se Connecter</Button>
        </Form>
    )
}