import React from "react";
import Video from "../../Video";
import SectionTitle from "@/app/Components/SectionTitle";

export default function SectionMultiSelect() {
  return (
    <section className="lg:max-w-[64rem] md:max-w-[48rem] md:px-8 mt-16 mx-auto pt-16 pb-8 px-6 relative sm:max-w-[40rem] w-full xl:max-w-[80rem]">
      <SectionTitle
        title="3. Users often wanted to copy existing elements, Move multiple of them at once"
        sectionID="multi-select"
        subtitle="How might we help users reuse an existing Group or Single Elements"
        customCode={
          <>
            <span className=" text-3xl tracking-[-0.015em] text-transparent bg-gradient-to-r from-amber-500 to-gray-50 bg-clip-text">
              &#8220;But our software lacked this ability&#8221;{" "}
            </span>
            <p className="max-w-md mt-4 text-gray-500 text-base/6">
              This was The biggest challenge of this task.
            </p>
            <p className="max-w-md mt-4 text-gray-500 text-base/6">
              Enabling users to select multiple elements at once opens up
              numerous new possibilities.
            </p>
            <p className="max-w-md mt-4 text-gray-500 text-base/6">
              Bulk action like copy and paste would become much easier, deleting
              multiple elements would also be possible. Moving multiple elements
              to new locations would be so simpler.
            </p>
          </>
        }
      />

      <div className="grid gap-4 pb-4 mx-auto mt-8 max-w-screen-2xl md:grid-cols-6 ">
        <div className="col-span-3">
          <div className="col-span-3 bg-gray-600 rounded-lg video-container fit-content overflow-clip">
            <Video
              src="../insider/videos/PrototypePreviewOld.webm"
              height={1080}
              width={1920}
            />
          </div>
          <p className="mt-4 mb-4">
            <strong className="text-orange-500">
              Old Navigation Interaction,
            </strong>{" "}
            , which
          </p>
          <ol className="list-decimal list-inside">
            <li className="mb-2 text-gray-400">
              Canvas always zoomed from the center
            </li>
            <li className="mb-2 text-gray-400 ">
              This behavious of zoom, conficted with users mental model.
            </li>
          </ol>
        </div>
        <div className="col-span-3">
          <div className="col-span-3 bg-gray-600 rounded-lg video-container fit-content overflow-clip">
            <Video
              src="../insider/videos/PrototypePreviewNew.webm"
              height={1080}
              width={1920}
            />
          </div>
          <p className="mt-4 mb-4">
            <strong className="text-sky-500">
              New Navigation Interaction with Minimap,{" "}
            </strong>{" "}
          </p>
          <ol className="list-decimal list-inside">
            <li className="mb-2 text-gray-400">
              Now users can Pinch to zoom, Supports native trackpad
              functionalities
            </li>
            <li className="mb-2 text-gray-400 ">
              The can use the mini map to quikly move position
            </li>
            <li className="mb-2 text-gray-400 ">
              Zoom function uses, mouse location to zoom from that point.
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
}
