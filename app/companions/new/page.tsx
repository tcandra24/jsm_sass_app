import CompanionForm from "@/components/CompanionForm";

const NewCompanion = () => {
  return (
    <main className="min-lg:w-1/3 min-md:w-2/3 items-center justify-center">
      <section className="w-full gap-4 flex flex-col">
        <h1>Companion Builder</h1>

        <CompanionForm />
      </section>
    </main>
  );
};

export default NewCompanion;
