import { signOut } from "@/auth/auth"
import Form from "next/form";
import {Button} from "@/components/ui/button";

export function SignOut() {
  return (
    <Form
      action={async () => {
        "use server"
        await signOut()
      }}
      className="block w-1/3"
    >
      <Button className='w-full' type="submit">Se Déconnecter</Button>
    </Form>
  )
}