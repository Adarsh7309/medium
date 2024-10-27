import { Appbar } from "../components/Appbar"
import { BlogCards } from "../components/BlogCards"
import { useBlogs } from "../hooks"

export const Blogs = () => {
    const {loading, blogs} = useBlogs();

    if(loading){
        return <div>loading ...</div>
    }
    return <div>
        <Appbar/>
        <div className="flex justify-center">
        <div className="max-w-xl">
        <BlogCards
          authorName={"Adarsh Singh"}
          title={"Owner's blog"}
          content={"This is owner's blog"}
          publishedDate={"25 Oct 2024"}
          id={100}
        />
        <BlogCards
          authorName={"Itish Singh"}
          title={"First blog"}
          content={"This is my first blog"}
          publishedDate={"26 Oct 2024"}
          id={100}
        />
        <BlogCards
          authorName={"Davi Jones"}
          title={"Feedback about this app"}
          content={"This app is fantastic, and the user experience is superb"}
          publishedDate={"28 Oct 2024"}
          id={100}
        />
        <BlogCards
          authorName={"Jack Spparow"}
          title={"Captain Jack Sparrow"}
          content={"User experience of this app can definately vanish the curse of Black Pearl Ship"}
          publishedDate={"25 Oct 2024"}
          id={100}
        />
    </div>
    </div>
    </div>
}