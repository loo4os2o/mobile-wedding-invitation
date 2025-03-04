
interface ShapeProps {
  side: number;
  width: number;
  stroke: string;
  strokeWidth: number;
}

const Shape = {
  star: ({ side, width, stroke, strokeWidth }: ShapeProps): JSX.Element => {
    const points = Array.from({ length: side * 2 }).map((_, i) => {
      const angle = (i * Math.PI) / side;
      const radius = i % 2 === 0 ? width : width / 2;
      return `${Math.cos(angle) * radius},${Math.sin(angle) * radius}`;
    }).join(' ');

    return (
      <svg width={width * 2} height={width * 2} viewBox={`-${width} -${width} ${width * 2} ${width * 2}`}>
        <polygon points={points} fill="none" stroke={stroke} strokeWidth={strokeWidth} />
      </svg>
    );
  },
  
  poly: ({ side, width, stroke, strokeWidth }: ShapeProps): JSX.Element => {
    const points = Array.from({ length: side }).map((_, i) => {
      const angle = (i * 2 * Math.PI) / side;
      return `${Math.cos(angle) * width},${Math.sin(angle) * width}`;
    }).join(' ');

    return (
      <svg width={width * 2} height={width * 2} viewBox={`-${width} -${width} ${width * 2} ${width * 2}`}>
        <polygon points={points} fill="none" stroke={stroke} strokeWidth={strokeWidth} />
      </svg>
    );
  },
};

export default Shape;
