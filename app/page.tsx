import {SignIn} from "./ui/components/signin-button";
import {SignOut} from "./ui/components/signout-button";

const HomePage = () => {
    return (
        <div className="flex justify-center h-screen items-center text-5xl">
            <SignIn />
        </div>
    );
};

export default HomePage;
