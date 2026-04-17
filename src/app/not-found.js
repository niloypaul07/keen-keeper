import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center bg-base-100 py-10 px-4 text-center">
 
      <h1 className="text-4xl font-black ">
        404
      </h1>

      <div className="mt-4">
        <h2 className="text-3xl font-bold text-gray-800 sm:text-4xl">
          Your Page is Not Found
        </h2>
       
      </div>

      <Link
        href="/"
        className="mt-8 px-8 py-3   font-bold   shadow-lg  btn"
      >
        Home Page
      </Link>
    </div>
  );
}
