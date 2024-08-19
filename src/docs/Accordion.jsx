// accordionContent.js
const accordionItems = [
    {
      title: 'Jadwal Menyusui',
      content: (
        <div>
          <p>Pada bulan-bulan pertama, bayi umumnya menyusui setiap 2 hingga 3 jam. Sebuah rutinitas yang fleksibel sangat membantu bagi ibu dan bayi untuk menyesuaikan diri dengan pola makan yang sehat.</p>
          <ul className="list-disc pl-5">
            <li>Minggu pertama: Setiap 1,5 - 2 jam selama siang dan malam.</li>
            <li>1-2 bulan: Setiap 2-3 jam saat siang hari dan lebih lama saat malam hari.</li>
            <li>3-6 bulan: Frekuensi menyusui mungkin mulai berkurang, sekitar setiap 3-4 jam.</li>
          </ul>
        </div>
      ),
    },
    {
      title: 'Manfaat ASI untuk Bayi',
      content: (
        <div>
          <p>ASI adalah makanan terbaik untuk bayi. Berikut adalah beberapa manfaat utama:</p>
          <ul className="list-disc pl-5">
            <li>Memberikan nutrisi yang lengkap dan seimbang yang diperlukan untuk perkembangan bayi.</li>
            <li>Meningkatkan sistem kekebalan tubuh bayi, melindungi dari infeksi dan penyakit.</li>
            <li>Mengurangi risiko obesitas dan diabetes tipe 2 di kemudian hari.</li>
          </ul>
        </div>
      ),
    },
    {
      title: 'Tips untuk Ibu Baru',
      content: (
        <div>
          <p>Menyusui bisa menjadi tantangan, terutama bagi ibu baru. Berikut adalah beberapa tips yang dapat membantu:</p>
          <ul className="list-disc pl-5">
            <li>Cari posisi menyusui yang nyaman, baik untuk ibu dan bayi.</li>
            <li>Pastikan bayi mendapatkan cukup ASI dengan memperhatikan tanda-tanda seperti penambahan berat badan dan jumlah popok basah.</li>
            <li>Jangan ragu untuk mencari dukungan dari konsultan laktasi atau kelompok pendukung menyusui.</li>
          </ul>
        </div>
      ),
    },
  ];
  
  export default accordionItems;
  