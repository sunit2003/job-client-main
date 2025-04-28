// import React from "react";

// export default function Cards({ Company }) {
//   return (
//     <div className="flex flex-col gap-8 justify-center items-center relative z-[5] px-4">
//       <h1 className="text-center text-3xl sm:text-4xl font-bold text-white mt-10 mb-4">
//         Remote Developer Jobs (via RemoteOK)
//       </h1>

//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl mb-10">
//         {Company?.map((item, index) => (
//           <div
//             key={index}
//             className="flex flex-col bg-white/5 backdrop-blur-sm border border-white/10 text-white p-6 rounded-xl shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-xl"
//           >
//             {/* Job Info */}
//             <h2 className="font-semibold text-lg mb-1">{item?.title}</h2>
//             <p className="text-sm text-gray-300 line-clamp-3 mb-2">
//               {item?.description.replace(/<[^>]+>/g, "")}
//             </p>
//             <p className="text-sm text-gray-400">{new Date(item?.pubDate).toLocaleDateString()}</p>
//             <a
//               href={item?.link}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="mt-3 text-sm text-blue-400 hover:underline"
//             >
//               Apply Now →
//             </a>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }
import React from "react";

export default function Cards({ Company }) {
  return (
    <div className="flex flex-col gap-8 justify-center items-center relative z-[5] px-4">
      <h1 className="text-center text-3xl sm:text-4xl font-bold text-white mt-10 mb-4">
        Remote Developer Jobs
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl mb-10">
        {Company && Company.length > 0 ? (
          Company.map((item, index) => (
            <div
              key={index}
              className="flex flex-col bg-white/5 backdrop-blur-sm border border-white/10 text-white p-6 rounded-xl shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-xl"
            >
              {/* Job Info */}
              <h2 className="font-semibold text-lg mb-1">
                {item?.job_title || "No Title"}
              </h2>
              <p className="text-sm text-gray-300 line-clamp-3 mb-2">
                {(item?.job_description || "No description available").replace(/<[^>]+>/g, "")}
              </p>
              <p className="text-sm text-gray-400">
                {item?.job_posted_at_datetime_utc
                  ? new Date(item?.job_posted_at_datetime_utc).toLocaleDateString()
                  : "No date available"}
              </p>
              <a
                href={item?.job_apply_link || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 text-sm text-blue-400 hover:underline"
              >
                Apply Now →
              </a>
            </div>
          ))
        ) : (
          <p className="text-gray-400 text-lg">No jobs found. Try searching!</p>
        )}
      </div>
    </div>
  );
}
