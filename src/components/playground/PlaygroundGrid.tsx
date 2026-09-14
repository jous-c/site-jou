import { PlaygroundCard } from './PlaygroundCard';
import { playgroundItems } from '@/lib/playground';

export function PlaygroundGrid() {
  return (
    <div className="grid grid-cols-1 items-start gap-x-6 gap-y-20 lg:grid-cols-8">
      {playgroundItems.map((item, index) => (
        <PlaygroundCard key={item.title} item={item} priority={index === 0} />
      ))}
    </div>
  );
}
