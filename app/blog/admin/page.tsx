import {SignOut} from "../../ui/components/signout-button";

const BlogAdminPage = () => {
  return (
    <div className="flex flex-col gap-10 justify-center h-screen items-center text-5xl text-pink-600">
        <h1>Hola Blogga Administrador.</h1>
        <SignOut />
    </div>
  );
};

export default BlogAdminPage