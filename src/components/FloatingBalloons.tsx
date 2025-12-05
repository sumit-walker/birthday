export default function FloatingBalloons() {
  const balloons = [
    { color: 'bg-pink-400', left: '10%', delay: '0s', duration: '6s' },
    { color: 'bg-rose-400', left: '25%', delay: '1s', duration: '7s' },
    { color: 'bg-amber-300', left: '45%', delay: '0.5s', duration: '5.5s' },
    { color: 'bg-pink-300', left: '65%', delay: '1.5s', duration: '6.5s' },
    { color: 'bg-rose-300', left: '80%', delay: '0.8s', duration: '6.2s' },
    { color: 'bg-amber-400', left: '90%', delay: '2s', duration: '7s' },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {balloons.map((balloon, index) => (
        <div
          key={index}
          className="absolute bottom-0 animate-float-up"
          style={{
            left: balloon.left,
            animationDelay: balloon.delay,
            animationDuration: balloon.duration,
          }}
        >
          <div className={`w-16 h-20 ${balloon.color} rounded-full relative shadow-lg`}>
            <div className="absolute bottom-0 left-1/2 w-0.5 h-12 bg-gray-400 transform -translate-x-1/2"></div>
            <div className="absolute top-2 left-3 w-4 h-6 bg-white opacity-40 rounded-full blur-sm"></div>
          </div>
        </div>
      ))}
    </div>
  );
}
