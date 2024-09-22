import { Typography } from "@material-tailwind/react";

 
export function ImgWithBlurredCaption({isEmpty}) {
  return (
    <figure className="relative h-full w-full">
      <img
        className="h-full w-full rounded-xl object-contain "
        src={isEmpty.src}
        alt="nature image"
      />
      <figcaption className="absolute bottom-1 left-2/4 flex w-[calc(100%-4rem)] -translate-x-2/4 justify-between rounded-xl border border-white bg-white/75 py-4 px-6 shadow-lg shadow-black/5 saturate-200 backdrop-blur-sm">
        <div>
          <Typography variant="h4" color="blue-gray" >
          {isEmpty.msg1}
          </Typography>
          <Typography color="gray" className="mt-2 font-normal">
          {isEmpty.msg2}
          </Typography>
        </div>
      
      </figcaption>
    </figure>
  );
}