import { Avatar } from "./BlogCards"

export const Appbar = () => {
    return <div className="borber-b flex justify-between px-10 py-4">
        <div className="flex flex-col justify-center">
            Medium
        </div>
        <div>
            <Avatar name="Adarsh" size={"big"}/>
        </div>
        
    </div>
}