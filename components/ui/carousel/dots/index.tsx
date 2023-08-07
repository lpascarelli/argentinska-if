interface DotsProps {
  itemsLength: number;
  selectedIndex: number;
}

export default function Dots({ itemsLength, selectedIndex }: DotsProps) {
  const itemsArray = new Array(itemsLength).fill(0);
  const dots = itemsArray.map((_, index) => {
    const classes = `h-2.5 w-2.5 rounded-full transition-all duration-300 bg-white ${
      index === selectedIndex ? 'opacity-50' : ''
    }`;

    return <div className={classes} key={index} />;
  });

  return <div className='flex gap-1 justify-center -translate-y-5'>{dots}</div>;
}
