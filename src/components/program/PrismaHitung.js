import "../../styles/Program.css";
import HeaderBanner from "../../utils/HeaderBanner";
import CenterHeader from "../../utils/CenterHeader";

export default function PrismaHitung() {
  return (
    <section className="prisma-hitung-section">
      <HeaderBanner
        img="clap.png"
        header="Prisma Hitung"
        headerClass="about"
        title="Prestasi Sukses"
        sctitle="Mental Aritmatika"
        desc="PRISMA (Prestasi Sukses Mental Arimatika)  Hitung atau PRISMA Kalkulator Tangan adalah Lembaga Bimbingan Belajar yang mengajarkan Metode Kalkulator Tangan yaitu berhitung hanya dengan menggunakan jari tangan tanpa alat dan tanpa rumus serta bisa diaplikasikan untuk penambahan, pengurangan, perkalian, pembagian, dan lain-lain. Penggunaan Metode Kalkulator Tangan membuat anak tidak cepat bosan, mudah dimengerti oleh anak, serta mudah diajarkan kepada anak."
        to="about"
      />
      <header>
        <CenterHeader
          headTitle="Keunggulan"
          headClass="benefit prisma"
          title="Keunggulan Metode"
          scTitle=" Kalkulator Tangan"
        />
      </header>

      <secton className="prisma-hitung-list">
        <section className="prisma-hitung-item">
          <img src="/assets/image/hands.png" alt="prisma-hitung" />
          <div className="desc">
            <h1>Hanya Menggunakan Jari Tangan</h1>
            <p>
              Dalam mengajarkan kalkulator tangan tidak menggunakan alat bantu
              tetapi hanya menggunakan Jari Tangan sehingga bisa digunakan
              kemana saja serta bisa diaplikasikan di pelajaran sekolah.
            </p>
          </div>
        </section>
        <section className="prisma-hitung-item">
          <img src="/assets/image/hand.png" alt="prisma-hitung" />
          <div className="desc">
            <h1>
              Anak Merasa Sedang Bermain yang Menyenangkan dan Tidak Terbebani
              Pikirannya
            </h1>
            <p>
              Setelah mengikuti metode kalkulator Tangan biasanya anak sangat
              menyukai dengan pelajaran berhitung ( Matematika) dan tidak merasa
              terbebani bahkan kalau sudah mahir anak akan suka bermain
              tebak-tebakan dengan teman-temannya dengan angka-angka yang cukup
              sulit tetapi menjawabnya mudah misalnya 17+18+29-16= berapa? Soal
              diatas untuk bermain hanya dengan didikte dan temannyapun akan
              menjawab dengan cepat dan tepat. Anak juga biasanya akan tidak mau
              bila diberi soal yang mudah misalnya hanya 2+5= ........atau
              5+4=......... dll
            </p>
          </div>
        </section>
        <section className="prisma-hitung-item">
          <img src="/assets/image/ok.png" alt="prisma-hitung" />
          <div className="desc">
            <h1>Tidak Menggunakan Rumus-Rumus yang Menyulitkan</h1>
            <p>
              Metode kalkulator Tangan tidak mengenal adanya rumus-rumus tetapi
              langsung penerapan berhitung sehingga untuk anak bisa diterima
              dengan cepat dan mudah.
            </p>
          </div>
        </section>
        <section className="prisma-hitung-item">
          <img src="/assets/image/thumb-up.png" alt="prisma-hitung" />
          <div className="desc">
            <h1>Menggunakan kode Jari Tangan Yang Konsisten</h1>
            <p>
              Metode kalkulator Tangan menggunakan kode Jari Tangan secara
              konsisten tidak berubah-ubah untuk penjumlahan, pengurangan
              ataupun perkalian dan pembagian, sehingga tidak membingungkan
              anak.
            </p>
          </div>
        </section>
        <section className="prisma-hitung-item">
          <img src="/assets/image/fist.png" alt="prisma-hitung" />
          <div className="desc">
            <h1>Sebagai Media Sport Mental dan Sport Otak Anak</h1>
            <p>
              Mungkin tidak hanya jasmani saja yang perlu untuk olahraga mental
              dan otak anakpun perlu olahraga salah satunya melalui belajar
              metode kalkulator Tangan. Soal-soal yang dikerjakan anak sering
              diajarkan dengan cara di dikte ( tidak ditulis) sehingga antar
              anak akan berusaha untuk menjawab secepat-cepatnya, ataupun antar
              anak saling memberi soal dengan di dikte , atau anak minta kepada
              orang tua untuk mendikte soal-soal, hal tersebut akan cepat
              menumbuhkan perkembangan otak anak yang positif.
            </p>
          </div>
        </section>
        <section className="prisma-hitung-item">
          <img src="/assets/image/love.png" alt="prisma-hitung" />
          <div className="desc">
            <h1>
              Anak Tidak Cepat Bosan dan Selalu Ingin Mengikuti Level Diatasnya
            </h1>
            <p>
              Pengalaman PRISMA mengajarkan metode kalkulator tangan anak tidak
              cepat bosan dan selalu ingin mengikuti Level diatasnya, misalnya
              untuk anak usia TK program 1 tahun untuk 2 Level biasanya setelah
              lulus TK maka dia akan melanjutkan lagi di tingkat SD sampai
              selesai level 10 dibutuhkan waktu antara 3-4 tahun, dan jarang
              sekali ada anak keluar ditengah jalan. Rata-rata untuk anak yang
              belajar di PRISMA minimal selama 2 Tahun – 4 Tahun baru dia akan
              lulus dan keluar.
            </p>
          </div>
        </section>
      </secton>
    </section>
  );
}
