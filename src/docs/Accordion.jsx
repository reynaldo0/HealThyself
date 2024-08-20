// accordionContent.js
const accordionItems = [
    {
      title: 'Jadwal Menyusui',
      content: (
        <div>
  <p>Selama bulan-bulan pertama, bayi biasanya menyusui setiap 2-3 jam. Rutinitas fleksibel membantu menyesuaikan pola makan.</p>
  <ul className="list-disc pl-5">
    <li>Minggu Pertama: Setiap 1,5-2 jam, siang dan malam.</li>
    <li>1-2 Bulan: Setiap 2-3 jam siang hari, 4-5 jam malam hari.</li>
    <li>3 Bulan: Setiap 3 jam siang hari, 4 jam malam hari.</li>
    <li>4-6 Bulan: Setiap 3-4 jam, dengan makanan padat.</li>
    <li>7-9 Bulan: Setiap 4-5 jam, dengan lebih banyak makanan padat.</li>
    <li>10-12 Bulan: Setiap 4-6 jam, dengan makanan padat utama.</li>
  </ul>
</div>

      ),
    },
    {
      title: 'Manfaat ASI untuk Bayi',
      content: (
        <div>
          <p>ASI adalah yang terbaik untuk bayi. Manfaatnya:</p>
          <ul className="list-disc pl-5">
            <li>Nutrisi lengkap</li>
            <li>Perlindungan imun</li>
            <li>Mendukung perkembangan otak</li>
            <li>Menurunkan risiko kesehatan</li>
            <li>Mudah dicerna</li>
            <li>Meningkatkan ikatan emosional</li>
            <li>Memenuhi kebutuhan kalori</li>
          </ul>
        </div>
      ),
    },
    {
      title: 'Tips untuk Ibu Baru',
      content: (
        <div>
          <p>Menyusui bisa jadi tantangan. Berikut tipsnya:</p>
          <ul className="list-disc pl-5">
            <li>Temukan posisi nyaman</li>
            <li>Gunakan bantal menyusui</li>
            <li>Periksa berat badan bayi</li>
            <li>Cek popok basah (6-8/hari)</li>
            <li>Amati tanda lapar</li>
            <li>Coba kompresi payudara</li>
            <li>Jaga hidrasi dan nutrisi</li>
          </ul>
        </div>
      ),
    },
    {
      title: 'Penyimpanan ASI Perah',
      content: (
        <div>
          <p>Simpan dan gunakan ASI perah dengan aman:</p>
          <ul className="list-disc pl-5">
            <li>Gunakan wadah bersih, tertutup</li>
            <li>Labeli dengan tanggal dan waktu</li>
            <li>Simpan di kulkas (4 hari) atau freezer (6-12 bulan)</li>
            <li>Panaskan dengan air hangat, bukan microwave</li>
            <li>Gunakan dalam 24 jam setelah pemanasan</li>
          </ul>
        </div>
      ),
    },
    {
      title: 'Transisi ke Makanan Padat',
      content: (
        <div>
          <p>Transisi ke makanan padat dengan lancar:</p>
          <ul className="list-disc pl-5">
            <li>Mulai dengan puree lembut</li>
            <li>Jaga jadwal menyusui</li>
            <li>Perkenalkan satu jenis makanan pada satu waktu</li>
            <li>Varasikan menu setelah terbiasa</li>
            <li>Konsultasi dengan dokter</li>
          </ul>
        </div>
      ),
    },
];    
  
  export default accordionItems;
  