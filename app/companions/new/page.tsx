import CompanionForm from "@/components/CompanionForm";
import { newCompanionPermissions } from "@/lib/actions/companion.actions";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

const NewCompanion = async () => {
  const { userId } = await auth();
  if (!userId) redirect("/sign-in");

  const canCreatedCompanion = await newCompanionPermissions();

  return (
    <main className="min-lg:w-1/3 min-md:w-2/3 item-center justify-center">
      {canCreatedCompanion ? (
        <article className="w-full gap-4 flex flex-col">
          <h1>Companion Builder</h1>

          <CompanionForm />
        </article>
      ) : (
        <article className="companion-limit">
          <Image src="/images/limit.svg" alt="Companion limit reached" width={360} height={260} />
          <div className="cta-badge">Upgrade your plan</div>
          <h1>You&apos;ve Reached Your Limit</h1>
          <p>You&apos;ve reached companion limit. Upgrade to create more companion and premium features.</p>
          <Link href={"/subscription"} className="btn-primary w-full justify-center">
            Upgrade My Plan
          </Link>
        </article>
      )}
    </main>
  );
};

export default NewCompanion;
