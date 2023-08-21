import ModList from './mod';
import MapList from './map';

export default function Details({ id }: { id: string }) {
  return (
    <div>
      <MapList />
      <div style={{ marginTop: '1.5rem' }} />
      <ModList />
    </div>
  );
}
