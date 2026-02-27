interface BookingTableProps {
  number: number;
  capacity?: string;
}

const BookingTable = ({ number, capacity = '2–4 os.' }: BookingTableProps) => {
  return (
    <div className='group relative aspect-square min-h-[80px] rounded-2xl bg-linear-to-br from-stone-50 to-stone-100 border border-stone-200 flex flex-col items-center justify-center gap-2 hover:border-amber-400 hover:shadow-md hover:shadow-amber-100/50 hover:-translate-y-0.5 transition-all duration-200 cursor-pointer'>
      <div className='w-12 h-8 rounded-md bg-stone-300/70 group-hover:bg-amber-200/80 border border-stone-200/50' />
      <span className='text-sm font-semibold text-stone-700 group-hover:text-amber-700'>Stolik {number}</span>
      <span className='text-xs text-stone-400'>{capacity}</span>
    </div>
  );
};

export default BookingTable;
