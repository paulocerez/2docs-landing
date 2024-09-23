interface ContentProps {
  setInterested: (value: boolean) => void;
  interested: boolean;
}

export default function Content({ setInterested, interested }: ContentProps) {
  return (
    <div className="flex flex-col space-y-12 items-center text-left sm:text-center animate-slide-in-bottom max-w-3xl py-8">
      <div className="flex flex-col space-y-4">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold">
          Two API&apos;s. <br></br>
          One work
          <span className="float-text">f</span>
          <span className="float-text">l</span>
          <span className="float-text">o</span>
          <span className="float-text">w</span>.
        </h1>
        <p className="text-md sm:text-lg md:text-xl text-gray-500 max-w-2xl">
          You give us the docs, we generate the workflow - from document
          generation to flashcard creation.
        </p>
      </div>
      {!interested && (
        <button
          onClick={() => setInterested(true)}
          className="signup-button text-white rounded-lg transition duration-500 w-full sm:w-fit sm:px-12 shadow-xl"
        >
          I&apos;m interested
        </button>
      )}
    </div>
  );
}
