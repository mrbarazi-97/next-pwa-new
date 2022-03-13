export function DarkBackground({ children, height }) {
  return (
    <div
      style={{ background: 'reapet top center'}}
      className="max-w-full h-auto bg-darkBlue bg-[url('/assets/images/hero__background.png')]"
    >
      <div
        style={{ background: 'reapet top center', height: `${height}rem` }}
        className="animate-[movingStars_200s_linear_infinite] max-w-ful bg-transparent bg-[url('/assets/images/dots.png')]"
      >
        {children}
      </div>
    </div>
  );
}
