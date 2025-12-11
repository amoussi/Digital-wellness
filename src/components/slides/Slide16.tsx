

export function Slide16() {
  const columns = [
    {
      emoji: '📊',
      title: 'THE REALITY',
      items: [
        '6-7 hours daily',
        '96 phone checks',
        'Most connected = most lonely'
      ],
      color: 'from-blue-600 to-blue-400'
    },
    {
      emoji: '⚠️',
      title: 'THE COST',
      items: [
        'Anxiety +50%',
        'Health declining',
        'Productivity dropping'
      ],
      color: 'from-red-600 to-red-400'
    },
    {
      emoji: '✅',
      title: 'THE SOLUTION',
      items: [
        'Awareness',
        'Boundaries',
        'Replacement'
      ],
      color: 'from-green-600 to-green-400'
    }
  ];

  return (
    <div className="w-full h-full bg-gray-900 p-12">
      <div className="w-full h-full flex flex-col">
        {/* Header */}
        <div className="mb-8">
          <div className="inline-block px-4 py-2 bg-indigo-500/20 rounded-lg border border-indigo-500/40 mb-4">
            <span className="text-indigo-300 uppercase tracking-wider">Conclusion</span>
          </div>
          <h1 className="text-6xl bg-gradient-to-r from-indigo-400 to-pink-400 bg-clip-text text-transparent">
            WHAT WE LEARNED
          </h1>
        </div>

        {/* 3 Columns */}
        <div className="flex-1 grid grid-cols-3 gap-8">
          {columns.map((column, index) => {
            return (
              <div
                key={index}
                className={`bg-gradient-to-br ${column.color} bg-opacity-10 rounded-2xl border-2 border-gray-700/50 p-8 flex flex-col hover:scale-105 transition-transform`}
              >
                <div className="flex items-center gap-3 mb-6">
                  <h3 className="text-2xl text-white font-bold">
                    <span className="text-3xl mr-2">{column.emoji}</span> {column.title}
                  </h3>
                </div>
                <div className="space-y-4 flex-1">
                  {column.items.map((item, idx) => (
                    <div
                      key={idx}
                      className="bg-gray-800/80 rounded-lg p-4 border border-gray-600/50"
                    >
                      <p className="text-xl text-gray-100 font-medium">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
