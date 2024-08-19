// accordionContent.js
const accordionItems = [
    {
      title: 'Jadwal Menyusui',
      content: (
        <div>
          <p>Pada bulan-bulan pertama, bayi umumnya menyusui setiap 2 hingga 3 jam. Sebuah rutinitas yang fleksibel sangat membantu bagi ibu dan bayi untuk menyesuaikan diri dengan pola makan yang sehat.</p>
          <ul className="list-disc pl-5">
            <li>Minggu Pertama: Menyusui setiap 1,5 hingga 2 jam, siang dan malam, untuk memastikan cukup nutrisi dan meningkatkan produksi ASI ibu..</li>
            <li>Usia 1-2 Bulan: Menyusui setiap 2 hingga 3 jam pada siang hari; di malam hari, setiap 4 hingga 5 jam. Bayi mulai menyesuaikan pola makan dan tidur lebih lama.</li>
            <li>Usia 3-6 Bulan: Menyusui sekitar setiap 3 hingga 4 jam. Frekuensi mungkin berkurang seiring pengenalan makanan padat dan waktu tidur malam yang lebih lama.</li>
            <li>Usia 6-12 Bulan: Frekuensi menyusui bisa bervariasi lebih jauh, biasanya setiap 4 hingga 6 jam, karena bayi mulai mengonsumsi lebih banyak makanan padat.</li>
          </ul>
        </div>
      ),
    },
    {
      title: 'Manfaat ASI untuk Bayi',
      content: (
        <div>
          <p>ASI adalah pilihan terbaik untuk bayi. Temukan manfaat luar biasa dari ASI berikut:</p>
          <ul className="list-disc pl-5">
            <li>Nutrisi Optimal: Menyediakan semua vitamin dan mineral penting.</li>
            <li>Perlindungan Imun: Mengandung antibodi yang melawan infeksi.</li>
            <li>Pengembangan Otak: Mendukung perkembangan kognitif.</li>
            <li>Risiko Kesehatan Lebih Rendah: Mengurangi risiko obesitas dan diabetes.</li>
            <li>Pencernaan Lebih Baik: Lebih mudah dicerna dibandingkan susu formula.</li>
            <li>Ikatan Emosional: Memperkuat hubungan antara ibu dan bayi.</li>
            <li>Dukungan Pertumbuhan: Menyediakan kalori yang sesuai dengan kebutuhan bayi.</li>
            
          </ul>
        </div>
      ),
    },
    {
      title: 'Tips untuk Ibu Baru',
      content: (
        <div>
          <p>Menyusui bisa menjadi perjalanan yang menantang bagi ibu baru. Simak tips-tips berikut untuk membuat proses ini lebih mudah dan nyaman:</p>
          <ul className="list-disc pl-5">
            <li>Temukan Posisi Menyusui Nyaman: Coba beberapa posisi hingga menemukan yang terbaik untuk Anda dan bayi.</li>
            <li>Gunakan Bantal Menyusui: Bantal dapat membantu mendukung posisi menyusui dan mengurangi ketidaknyamanan.</li>
            <li>Periksa Berat Badan Bayi: Pastikan bayi mengalami pertambahan berat badan yang sehat.</li>
            <li>Cek Popok Basah: Bayi harus memiliki 6-8 popok basah setiap hari.</li>
            <li>Perhatikan Tanda-tanda Lapar: Bayi sering mengisap jari atau mencari payudara saat lapar.</li>
            <li>Cobalah Teknik Kompresi Payudara: Membantu bayi mendapatkan lebih banyak ASI.</li>
            <li>Jaga Hidrasi dan Nutrisi: Pastikan Anda mendapatkan cukup cairan dan makan makanan bergizi.</li>
          </ul>
        </div>
      ),
    },
    {
      title: ' Penyimpanan dan Penggunaan ASI Perah',
      content: (
        <div>
          <p>MPenyimpanan dan penggunaan ASI perah dapat menjadi tantangan bagi ibu baru. Simak tips-tips berikut untuk menyimpan ASI dengan aman dan menggunakan ASI perah secara efisien:</p>
          <ul className="list-disc pl-5">
            <li>Gunakan Wadah yang Tepat: Simpan ASI perah dalam wadah bersih dan tertutup, seperti botol kaca atau kantong ASI khusus.</li>
            <li>Label dan Tanggal: Beri label dengan tanggal dan waktu perah untuk memudahkan penggunaan dan memastikan kesegaran.</li>
            <li>Penyimpanan di Kulkas: ASI perah dapat disimpan di kulkas selama 4 hari atau di freezer selama 6-12 bulan.</li>
            <li>Pemanasan yang Aman: Panaskan ASI perah dengan merendam wadah dalam air hangat atau menggunakan pemanas ASI; jangan gunakan microwave.</li>
            <li>Gunakan dengan Bijak: Gunakan ASI perah dalam waktu 24 jam setelah pemanasan untuk menghindari pemborosan.</li>
          </ul>
        </div>
      ),
    },
    {
      title: 'Rencana Transisi ke Makanan Padat',
      content: (
        <div>
          <p>Transisi dari ASI ke makanan padat bisa menjadi langkah besar bagi ibu dan bayi. Simak strategi berikut untuk membuat proses pengenalan makanan padat menjadi lebih mudah dan lancar:</p>
          <ul className="list-disc pl-5">
            <li>Mulai Perlahan: Kenalkan makanan padat secara bertahap, mulai dengan puree atau makanan lembut dan mudah dicerna.</li>
            <li>Terapkan Jadwal: Pertahankan jadwal menyusui dan tambahkan makanan padat secara bertahap untuk menjaga keseimbangan nutrisi.</li>
            <li>Perhatikan Tanda-tanda: Amati reaksi bayi terhadap makanan baru dan perkenalan satu jenis makanan pada satu waktu untuk mendeteksi alergi.</li>
            <li>Diversifikasi Menu: Setelah bayi terbiasa, variasikan jenis makanan padat untuk memastikan asupan gizi yang lengkap.</li>
            <li>Konsultasi Dokter: Diskusikan rencana transisi dengan dokter atau ahli gizi untuk mendapatkan panduan yang sesuai dengan kebutuhan bayi.</li>
          </ul>
        </div>
      ),
    },
  ];
  
  export default accordionItems;
  