export default function Home() {
  return (
<div className="bg-white">
      <div className="grid grid-rows-[100px_200px_200px_100px] grid-cols-4 gap-2 text-black text-center  md:text-left p-2">
     <div className="col-span-4 row-span-1 md:col-span-1 md:row-span-4 bg-yellow-500 p-4 text-xl font-bold">Nav</div>
     <div className="col-span-4 md:col-span-3 bg-yellow-500 p-4 text-xl font-bold">Header</div>
     <div className="col-span-4 row-span-4 md:col-span-2 md:row-span-2 bg-yellow-500 p-4 text-xl font-bold">Article</div>
     <div className="col-span-4 md:col-span-1 row-span-3 bg-yellow-500 p-4 text-xl font-bold">Ads</div>
     <div className="col-span-4 md:col-span-2 bg-yellow-500 p-4 text-xl font-bold">Footer</div>
     </div>
    </div>



  );
}
