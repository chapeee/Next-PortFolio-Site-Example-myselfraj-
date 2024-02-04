import React from "react";
import Image from "next/image";

export default function About() {
  return (
    <div className="w-full bg-gray-100 text-black pt-[50px] md:pt-[100px] pb-[100px]">
      <div className="container p-5 m-auto text-left max-w-[800px]">
        <h2 className="text-4xl md:text-4xl lg:text-5xl font-medium  leading-[110%] md:leading-[140%]">
          About Me
        </h2>
        <div className="mt-14">
          <Image
            id="leftImage"
            src="https://ik.imagekit.io/mq90sdk8y/myselfraj/tr:q:80,w-700/coding.avif?updatedAt=1707034111341"
            alt="Writings"
            width={0}
            sizes="100vw"
            height={300}
            style={{
              width: "100%",
              height: "350px",
              objectFit: "cover",
              borderRadius: "10px",
            }}
            loading="lazy"
          />
        </div>
        <div className="mt-10">
          <p className="text-[20px]">
            My "About Me" has <b>three cool chapters!</b> First, I'll spill the
            beans on how I got my hands on my very first computer. Then, I'll
            dive into the story of how I caught the computer bug and got all
            excited about them. Lastly, you'll get the lowdown on how I kicked
            off my coding journey and set sail on the path to becoming a
            developer.
          </p>
        </div>
        <div className="mt-10">
          <h2 className="text-[24px] font-bold text-left mb-3">My First Computer</h2>
          <p className="text-[20px]">
            Back in fourth grade, the magic happened—I got my hands on my first
            computer! Oh, the excitement! The whole neighborhood buzzed with
            curiosity as the computer engineer was setting up the PC right at my
            home. Those were the days! Although now my PC in the backyard
            doesn't hum with life anymore, yet I've kept it as a treasured
            memory. Picture this: a Pentium 4 3.5GHZ Dual inside the CPU, 512MB
            RAM, integrated GPU, XP Pack 3, that iconic green wallpaper, and the
            welcome sound that made my day. Ah, and let's not forget the classic
            Samsung monitor. The first thing I did when I powered it on?
            Embarked on wild adventures in GTA Vice City. As a kid, navigating
            the map was a challenge, but my sister became my guide—turn she used
            to help me turn right, turn left. Oh, what lovely days those were!
          </p>
        </div>
        <div className="mt-10">
          <h2 className="text-[24px] font-bold text-left mb-3">How i Became Computer Bug</h2>
          <p className="text-[20px]">
          Back in 5th grade, one day, my dad, who was in the army, walked in with a mysterious book titled something like "Learn Command Prompt." He unfolded the secrets of the terminal—opening it, creating directories, diving into them, making files, typing away in them, saving changes, and doing all sorts of cool stuff. I was utterly fascinated! Excitedly, I went to school the next day, showing off my newfound skills to friends by typing commands on a black screen. They were like, "Whoa, how do you know all this?"
<div className="mt-5">
Then, in 6th grade, I crossed paths with a senior from 12th grade who handed me his HTML notes. I got my hands on it, dabbled with the codes, and voila! I crafted my very first HTML, a simple college website page. And that, my friend, is how I got hooked on coding and turned into a computer bug!
</div>

          </p>
          </div>
          <div className="mt-10">
          <h2 className="text-[24px] font-bold text-left mb-3">Path to becoming a developer</h2>
          <p className="text-[20px]">
          The journey hasn't been a walk in the park, and even today, it throws new challenges my way. But let's rewind to how my coding adventure kicked off. I studied BCA and MCA in Computer Science and worked as a full-stack and front-end developer. I've put my skills to the test on over a hundred projects, juggling both freelancing gigs and company projects. And hey, now I'm steering my own ship at <a href="https://grapdevs.com" className="text-[blue]">Grapdevs.com</a>.
          <div className="mt-5">
          My official coding voyage began in 2014. PHP was the first language I tackled, along with a side of HTML and CSS. My debut project? Exploring locations! From there, I crafted a task scheduler and even ventured into building a DNS automation tool using Python. Fast forward to today, I've got my hands on more than 15 technologies, and I'm on a daily quest to learn even more to stay ahead.
            </div>

            </p>
            </div>
            <h2 className="text-[24px] font-bold text-left mb-3 mt-8">That's All, Thank you!</h2>
      </div>
    </div>
  );
}
