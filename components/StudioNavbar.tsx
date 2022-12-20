import { ArrowUturnLeftIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

export default function StudioNavbar(props: any) {
  return (
    <nav>
      <div className="flex items-center justify-between p-5">
        <Link className="flex items-center space-x-2 text-white hover:underline" href={`/`}>
          <ArrowUturnLeftIcon className="h-6 w-6 mr-4" /> Go to Website
        </Link>
      </div>
      <>{props.renderDefault(props)}</>
    </nav>
  );
}
