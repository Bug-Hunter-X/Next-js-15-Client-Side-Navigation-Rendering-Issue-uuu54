```javascript
// pages/index.js
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Welcome to my Next.js app</h1>
      <p>This is a paragraph</p>
      <Link href="/about">
        <a>Go to About</a>
      </Link>
    </div>
  );
}
```