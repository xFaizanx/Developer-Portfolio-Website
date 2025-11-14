interface PlaceholderSectionProps {
  id: string;
  title: string;
  description: string;
}

export function PlaceholderSection({ id, title, description }: PlaceholderSectionProps) {
  return (
    <section
      id={id}
      className="min-h-screen flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-500/20 to-cyan-400/20 rounded-2xl mb-6">
          <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-lg"></div>
        </div>
        <h2 className="text-gray-900 dark:text-white mb-4">{title}</h2>
        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          {description}
        </p>
      </div>
    </section>
  );
}
