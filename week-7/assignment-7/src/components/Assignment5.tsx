import { useEffect, useState } from "react"
type GitHubUser = {
  login: string
  name: string
  bio: string
  avatar_url: string
  html_url: string
  repos_url: string
  blog: string,
  followers: number,
  following: number,
}
export default function Assignment5() {
  const [userData, setUserData] = useState<GitHubUser | null>({
    login: "suryanshu-09",
    avatar_url: "https://avatars.githubusercontent.com/u/62937679?v=4",
    html_url: "https://github.com/suryanshu-09",
    name: "suryanshu",
    blog: "https://bento.me/suryanshu",
    bio: "An open-source enthusiast",
    repos_url: "https://api.github.com/users/suryanshu-09/repos",
    followers: 2,
    following: 8,
  })
  useEffect(() => {
    fetch("https://api.github.com/users/suryanshu-09").then(data => data.json()).then(json => setUserData(json)).catch(err => console.error("Failed to fetch:", err))
  }, [])
  return <div className="h-screen flex items-center justify-center bg-[#292929]">
    {userData ?
      <div className="rounded-lg bg-slate-500 p-3">
        <div className="grid grid-flow-col grid-rows-1 gap-4">
          <div className="row-span-3">
            <img src={userData.avatar_url} className="size-20 rounded-full" />
          </div>
          <div className="col-span-2 text-white">
            <div className="row-span-1 text-lg">{(userData.name).charAt(0).toUpperCase() + userData.name.slice(1)}</div>
            <div className="row-span-1">
              <a href={userData.html_url} target="_blank">
                {userData.login}
              </a>
            </div>
            <div className="row-span-1">{userData.bio}</div>
          </div>
        </div>
        <div className="h-0.5 w-full bg-green-300"></div>

        <div className='flex justify-around mt-2 text-white'>
          <div className=' flex flex-col items-center'>
            <div className='text-lg font-bold'>{userData.followers}</div>
            <div className='font-light text-sm'>Followers</div>
          </div>
          <div className="w-0.5 bg-green-300"></div>
          <div className=' flex flex-col items-center'>
            <div className='text-lg font-bold'>{userData.following}</div>
            <div className='font-light text-sm'>Following</div>
          </div>
        </div>
        <div className="text-white flex justify-between mt-3 mb-2">
          <div>
            <a href={userData.blog} target="_blank">{(userData.name).charAt(0).toUpperCase() + userData.name.slice(1)}'s Blog</a>
          </div>
          <div>
            <a href={userData.repos_url} target="_blank">{(userData.name).charAt(0).toUpperCase() + userData.name.slice(1)}'s Repos</a>
          </div>
        </div>
      </div>
      :
      <div>Loading...</div>}
  </div>
}

