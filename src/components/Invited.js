import Heading from "@/components/Heading";
import Wave from "@/components/Wave";

export default function Invited({ data }) {
  const headingAfterClasses = `
    after:absolute
    after:bg-[url('/images/icon-star.svg')]
    after:content-[' ']
    after:h-6
    after:-right-14
    after:top-1
    after:w-6
  `;

  const headingBeforeClasses = `
    before:absolute
    before:bg-[url('/images/icon-star.svg')]
    before:content-[' ']
    before:h-6
    before:-left-14
    before:top-1
    before:w-6
  `;

  return (
    <div className="border-2 border-dashed border-zinc-400 flex flex-col md:flex-row items-center mb-4 p-9 rounded-md md:rounded-full">
      <Wave />
      <div className="max-w-4xl mx-auto md:px-8 text-zinc-900 text-center">
        <Heading
          className={`inline-block relative ${headingAfterClasses} ${headingBeforeClasses}`}
          size="h4"
        >
          You&apos;re invited!
        </Heading>
        <p className="mt-3 text-lg">
          The entire Elastic community is welcome: Developers, Architects, IT
          professionals, DevOps Engineers, and anyone working with or interested
          in the Elasticsearch Platform.
        </p>
      </div>
      <Wave direction="right" />
    </div>
  );
}
