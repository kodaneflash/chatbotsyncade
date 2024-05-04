import logo from "@/assets/logo.png";
import { Button } from "@/components/ui/button";
import { auth } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";

export default function Home() {
  const { userId } = auth();

  if (userId) redirect("/notes");

  return (
<Link href="/notes" legacyBehavior>Open</Link>
        <span className="text-4xl font-extrabold tracking-tight lg:text-5xl">
          Syncade
        </span>
      </div>
      <p className="max-w-prose text-center">
        An intelligent note-taking app with AI integration, built with OpenAI,
        Pinecone, Next.js, Shadcn UI, Clerk, and more.
      </p>
      <Button size="lg">
      <Link href="/notes" legacyBehavior>Open</Link>
      </Button>

    </main>
  );
}
