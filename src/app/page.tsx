import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <div className="max-w-4xl w-full space-y-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Zabıta Yönetim Sistemi
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Gelişmiş zabıta yönetim ve denetim sistemi
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Ceza İşlemleri */}
          <Link href="/cezalar" className="block p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">Ceza İşlemleri</h2>
            <p className="text-gray-600">Ceza kayıtları ve takibi</p>
          </Link>

          {/* Denetim İşlemleri */}
          <Link href="/denetimler" className="block p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">Denetim İşlemleri</h2>
            <p className="text-gray-600">Denetim planlaması ve kayıtları</p>
          </Link>

          {/* Ruhsat İşlemleri */}
          <Link href="/ruhsatlar" className="block p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">Ruhsat İşlemleri</h2>
            <p className="text-gray-600">Ruhsat başvuru ve takibi</p>
          </Link>

          {/* İhbar İşlemleri */}
          <Link href="/ihbarlar" className="block p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">İhbar İşlemleri</h2>
            <p className="text-gray-600">İhbar kayıtları ve takibi</p>
          </Link>

          {/* Raporlar */}
          <Link href="/raporlar" className="block p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">Raporlar</h2>
            <p className="text-gray-600">İstatistiksel raporlar ve analizler</p>
          </Link>

          {/* Harita */}
          <Link href="/harita" className="block p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">Harita</h2>
            <p className="text-gray-600">Denetim noktaları ve ekip konumları</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
