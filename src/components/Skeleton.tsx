export default function Skeleton() {
  return (
    <div className='flex gap-4 overflow-hidden mt-5'>
      {Array.from({ length: 5 }).map((_, index) => (
        <div key={index} className='min-w-[20rem] h-[28rem] bg-slate-100 rounded-md'></div>
      ))}
    </div>
  )
}
