import { Header } from '..';
import { Footer } from '..';

export function Layout({ children }) {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
}
