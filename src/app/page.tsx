import { auth } from "~/server/auth";
import { api, HydrateClient } from "~/trpc/server";
import Image from "next/image";
import { MarqueeDemo } from "./_components/marquee-home";

export default async function Home() {
  const hello = await api.post.hello({ text: "from tRPC" });
  const session = await auth();

  return (
    <HydrateClient>
     <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-blue-900 via-purple-900 to-pink-800">
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-16">
          <div className="space-y-6 text-center md:text-left">
            <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
              <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                India&apos;s Got
              </span>
              <br />
              <span className="bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 bg-clip-text text-transparent">
                Latent
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300">
              Discover the hidden talents of India
            </p>
            <button  className="bg-pink-600 hover:bg-pink-700 text-white px-2 py-4 rounded-lg">
              Explore Talents
            </button>
          </div>
          <div className="relative">
            <Image
              className="rounded-lg shadow-2xl shadow-pink-500/20 transition-transform duration-300 hover:scale-105"
              src="https://images.plex.tv/photo?size=large-1280&url=https%3A%2F%2Fimage.tmdb.org%2Ft%2Fp%2Foriginal%2FvwF92OSwsNqb2DaccHpbV7Ak4Er.jpg"
              alt="Samay Photo"
              height={300}
              width={400}
              objectFit="cover"
            />
            <div className="absolute -bottom-4 -right-4 text-7xl">🎤</div>
          </div>
        </div>
      </div>
      
      <div className="w-full overflow-hidden py-8 bg-black/30">
        {/* <ParallaxText baseVelocity={-2}>Singers • Dancers • Comedians • Musicians • Magicians</ParallaxText> */}
      </div>

      <MarqueeDemo />
    </main>
    </HydrateClient>
  );
}
